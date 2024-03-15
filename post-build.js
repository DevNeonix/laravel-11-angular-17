const fs = require('fs-extra');
fs.remove('dist/frontend/browser/index.html', (err) => { if(err) { return console.error(err); } });
fs.copy('dist/frontend/browser', 'public', (err) => { if(err) { return console.error(err); } });
