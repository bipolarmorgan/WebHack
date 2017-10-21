const utils = require('../utils');

module.exports = (function () {
    const server = {
        ip: randomIp(),
        sshText: 'Welcome to Hello World Inc.'
    }

    function getServers() {
        return [server]
    }

    function getIntro () {
        return [
            '',
            'Initialize kernel...',
            'Linuz /init.rd-2.4.3',
            '',
            '**************************',
            '* Welcome to Hello World *',
            '**************************',
            '',
            'For your first mission, navigate to your home directory and upload your public',
            'key to the compromised server.',
            ''
        ];
    };

    function getDirectoryStructure() {
        return {
            'var': {},
            'home': {
                alias: '~',
                files: [
                    { name: 'servers.txt', contents: `compromised:\n\t- ${server.ip}` }
                ]
            }
        }
    }

    return {
        getDirectoryStructure,
        getIntro
    }
})();