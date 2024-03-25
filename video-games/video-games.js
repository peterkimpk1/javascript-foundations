function createPlayer(name, age, moveset) {
    player = {};
    player.name = name;
    player.age = age;
    player.moveset = moveset;
    return player;
}

function createLevel(name, player) {
    level = {};
    level.name = name;
    if (player !== undefined) {
        level.players = [];
        for (i = 0; i < player.length; i++) {
            level.players.push(player[i]);
        }
        level.coins = 0;
        level.lives = 3;
    }
    return level;
}

function findCoins(level, coins) {
    level['coins'] += coins;
    if (level['coins'] === 100) {
        level.lives += 1;
    }
    return level;
}

function defeatPlayer(level) {
    level.lives -= 1;
    if (level.lives === 0) {
        return `GAME OVER`
    }
    return level;
}

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
 };