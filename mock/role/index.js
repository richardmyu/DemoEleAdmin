const Mock = require('mock');
const cloneDeep = require('lodash/cloneDeep');
const { asyncRoutes, constantRoutes } = require('./routes');
const routes = cloneDeep([...constantRoutes, ...asyncRoutes]);

const roles = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.',
    routes: routes
  },
  {
    key: 'editor',
    name: 'editor',
    description: 'Normal Editor. Can see all pages except permission page.',
    routes: routes.filter(i => i.path !== '/permission')
  },
  {
    key: 'visitor',
    name: 'visitor',
    description: 'Just a visitor. Can only see the home page and the document page',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]


module.exports = [
  // mock get all routes form server
  {
    url: '/dea/routes',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: routes
      };
    }
  },

  // get all roles form server
  {
    url: '/dea/roles',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: roles
      };
    }
  },

  // add role
  {
    url: '/dea/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@interger(300,500)')
      }
    }
  },

  // update role
  {
    url: '/dea/role/[0-9a-zA-Z]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: '/dea/role/[0-9a-zA-Z]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
