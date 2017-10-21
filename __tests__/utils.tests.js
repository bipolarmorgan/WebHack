const utils = require('../utils');

test('randomInt returns a number', () => {
    const number = utils.randomInt(0, 100);

    expect(number).not.toBeNaN();
});

test('randomIP looks like an IP', () => {
    const ip = utils.randomIp();

    expect(ip).toMatch(/\d+.\d+.\d+.\d+/);
});