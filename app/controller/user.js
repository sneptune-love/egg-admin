const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const user = await this.ctx.service.user.find(1);
    ctx.body = user;
  }
}

module.exports = NewsController;