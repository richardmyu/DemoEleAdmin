const Mock = require('mock');
const NameList = [];
const COUNT_NUM = 100;

for (let i = 0; i < COUNT_NUM; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}

NameList.push({ name: 'mock-Pan' });

module.exports = [
  // username search
  {
    url: '/dea/search/user',
    type: 'get',
    response: config => {
      const { name } = config.query;
      const mockNameList = NameList.filter(item => {
        const lowerCaseName = item.name.toLowerCase();
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0);
      });

      if (!name) {
        return {
          code: 40001,
          data: null,
          message: 'Missing search param '
        };
      }

      return {
        code: 20000,
        data: { items: mockNameList },
        message: 'success'
      };
    }
  },

  // transaction list
  {
    url: '/dea/transaction/list',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: {
          total: 20,
          'items|20': [{
            order_no: '@guid()',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: '@float(1000,15000,0,2)',
            'status|1': ['success', 'pending']
          }]
        }
      };
    }
  }
]
