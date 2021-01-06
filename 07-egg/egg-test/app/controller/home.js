'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      console.log(ctx.request.body)
      ctx.validate({userName:{type:'userName'}}, ctx.request.body);
    } catch (error) {
      console.log(error)
      return ctx.body = error
    }
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
