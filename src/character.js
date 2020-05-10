/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего');
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }
}


class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defense = 10;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name);
    this.health = 0;
    this.attack = 10;
    this.defense = 40;
  }
}

export {
  Character, Zombie, Undead,
};
