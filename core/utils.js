function randomInt(low, high) {
    return Math.floor(Math.random() * high) + low;
}

function randomIp() {
    return `${randomInt(0, 250)}.${randomInt(0, 250)}.${randomInt(0, 250)}.${randomInt(0, 50)}`;
}

module.exports = {
    randomInt,
    randomIp
}