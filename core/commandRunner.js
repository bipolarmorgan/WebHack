const commands = require('../commands');

module.exports = (input) => {
    if (input === '') {
        return;
    }

    const inputParts = input.split(' ');
    const commandName = inputParts[0];

    const command = commands[commandName];

    command(input);
}