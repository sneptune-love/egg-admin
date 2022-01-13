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