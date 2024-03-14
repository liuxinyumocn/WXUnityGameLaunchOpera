import main from '@main/';
const md5 = require('md5');
console.log(JSON.stringify({
  target: 'lacOpera',
  out: main.exportData({}, md5),
}));