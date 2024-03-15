import main from '@main/';
import * as fs from 'fs';
const path = require('path');
const md5 = require('md5');
const content = JSON.stringify({
  target: 'lacOpera',
  out: main.exportData({}, md5),
});
const root = process.cwd();
fs.writeFileSync(
  path.resolve(root, 'dist', 'temp.t'),
  content,
  {
    encoding: 'utf-8'
  }
);

