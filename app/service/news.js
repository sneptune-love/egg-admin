const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    // read config
    const { serverUrl } = this.config.news;
    let url = `${serverUrl}/topstories.json`;
    // use build-in http client to GET hacker-news api
    this.ctx.logger.info('json file request Url', url);
    const { data: idList } = await this.ctx.curl(url, {dataType: 'json'});
    this.ctx.logger.info('json file request Data', JSON.stringify(idList));
    // parallel GET detail
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/${idList[key]}.json`;
        return this.ctx.curl(url, { dataType: 'json' });
      })
    );
    return newsList.map(res => res.data);
  }
}

module.exports = NewsService;