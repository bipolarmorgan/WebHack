module.exports = (function () {
    function getIntro () {
        return [
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
                    { name: 'servers.txt', contents: 'compromised: 194.314.24.1' }
                ]
            }
        }
    }

    return {
        getDirectoryStructure,
        getIntro
    }
})();