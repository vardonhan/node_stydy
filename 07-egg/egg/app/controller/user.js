'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserInfo() {
    const { ctx } = this;
    ctx.body = {
      name: 'abc',
    };
  }
}

module.exports = UserController;
