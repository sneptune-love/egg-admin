// 默认公用配置配置

exports.keys = 'xixi';

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  }
};

exports.news = {
  // serverUrl: 'https://hacker-news.firebaseio.com/v0',
  serverUrl: 'http://127.0.0.1:7001/public/mock',
  // serverUrl: 'http://127.0.0.1:9000/mock',
}

exports.middleware = [
  'robot'
];
// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
};

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: 'hj19931009',
    // 数据库名
    database: 'test',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};