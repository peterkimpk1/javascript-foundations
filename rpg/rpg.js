function createMage(health, magic) {
  mage = {
    health: health,
    magic: magic
  }
  return mage;
}

function createEnemy(name, health) {
  enemy = {
    name: name,
    health: health,
    alive: true
  }
  return enemy;
}

function castSpell(mage, enemy) {
  if (enemy === undefined) {
    mage.magic = mage.magic - 5;
    return `That spell cost 5 points. I have ${mage.magic} magic points left!`
  }
  if (mage.magic >= 5) {
    enemy.health = enemy.health - 20;
    mage.magic = mage.magic - 5;
    return `That spell cost 5 points. I have ${mage.magic} magic points left!`
  }
  else if (mage.magic === 0) {
    return `I can\'t do that. I don\'t have any magic points left!`
  }
}

function castUltimate(enemies) {
  var remainingEnemies = [];
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].health -= 20;
    if (enemies[i].health !== 0) {
      remainingEnemies.push(enemies[i])
    }
  }
  return remainingEnemies;
}

module.exports = {
  createMage,
  createEnemy,
  castSpell,
  castUltimate
}