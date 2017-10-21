const Terminal = require('xterm');
const Chalk = require('chalk');

const chalk = new Chalk.constructor({ level: 1, enabled: true });

module.exports = function (commandCallback) {
    Terminal.loadAddon('fullscreen');

    const terminal = new Terminal({
        cursorBlink: false
    });

    terminal.open(document.getElementsByClassName('container')[0], true);
    terminal.toggleFullscreen(true);
    terminal.focus();
    
    let writeBuffer = '';
    let readBuffer = '';
    let acceptingInput = false;

    terminal.on('key', (key, e) => {
        if (!acceptingInput) {
            return;
        }

        if (e.key === 'Backspace') {
            if (!readBuffer) {
                return;
            }

            terminal.write('\b \b');

            readBuffer = readBuffer.substring(0, readBuffer.length - 1);
        } else if(e.key === 'Enter') {
            writeLine();
            commandCallback(readBuffer);

            readBuffer = '';
            acceptingInput = false;
            terminal.setOption('cursorBlink', false);
        } else {
            readBuffer += key;
            writeBuffer += key;
        }
    });

    terminal.on('paste', (value) => {
        if (!acceptingInput) {
            return;
        }

        write(value);
    });

    function write(text) {
        writeBuffer += text;
    }

    function writeLine(text) {
        write((text || '') + '\r\n');
    }

    function writeLines(lines) {
        lines.forEach(writeLine);
    }

    setInterval(function () {
        if (!writeBuffer) {
            terminal.setOption('cursorBlink', true);
            acceptingInput = true;
            return;
        }

        terminal.write(chalk.green(writeBuffer[0]));

        writeBuffer = writeBuffer.slice(1);
    }, 5);

    return {
        write,
        writeLine,
        writeLines
    };
};