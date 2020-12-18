const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
};

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
};

module.exports = [
  // login
  {
    url: '/dea/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body;
      const token = tokens[username];

      if (!token) {
        return {
          code: 60204,
          data: null,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token,
        message: 'success'
      };
    }
  },

  // get user info
  {
    url: '/dea/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query;
      const info = users[token]

      if (!info) {
        return {
          code: 50008,
          data: null,
          message: 'Login failed,unable to get user details.'
        };
      }

      return {
        code: 20000,
        data: info,
        message: 'success'
      };
    }
  },

  // logout
  {
    url: '/dea/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 20000,
        data: null,
        message: 'success',

      };
    }
  }
]
