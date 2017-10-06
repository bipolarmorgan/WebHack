const Terminal = require('xterm');

require('xterm/dist/xterm.css');
require('normalize.css');
require('./site.css');

Terminal.loadAddon('fit');

const terminal = new Terminal({
    cursorBlink: true
});

terminal.open(document.getElementsByClassName('container')[0], true);
terminal.fit();

terminal.on('key', (key, e) => {

});

terminal.write('# root> ');