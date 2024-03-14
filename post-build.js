const fs = require('fs-extra');
fs.remove('public/frontend');
fs.move('dist/frontend/browser', 'public/frontend', (err) => { if(err) { return console.error(err); } });
