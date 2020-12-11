'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      new Promise((resolve, reject) => {
        if (Math.random() > 0.7) {
          resolve();
        } else {
          reject(new Error('something wrong'));
        }
      });
    } catch (error) {
      throw new Error(error);
    }
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
