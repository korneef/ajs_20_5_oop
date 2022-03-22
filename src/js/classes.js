export class Character {
  constructor (name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть длиной от 2 до 10 символов');
    }
    
    let types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (types.indexOf(type) === -1) {
      throw new Error('Неизвестный тип персонажа')
    }

    this.name = name;
    this.type = type;
  }
  health = 100;
  level = 1;
  attack;
  defence;

  levelUp() {
    if (this.health != 0) {
      this.level++;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    };
  };
  damage(points) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
  }
}

export class Bowerman extends Character {
  constructor(name,) {
    super(name, 'Bowerman')
  }
  attack = 25;
  defence = 25;
}

export class Swordsman extends Character {
  constructor(name,) {
    super(name, 'Swordsman')
  }
  attack = 40;
  defence = 10;
}

export class Magician extends Character {
  constructor(name,) {
    super(name, 'Magician')
  }
  attack = 10;
  defence = 40;
}

export class Daemon extends Character {
  constructor(name,) {
    super(name, 'Daemon')
  }
  attack = 10;
  defence = 40;
}

export class Undead extends Character {
  constructor(name,) {
    super(name, 'Undead')
  }
  attack = 25;
  defence = 25;
};

export class Zombie extends Character {
  constructor(name,) {
    super(name, 'Zombie')
  }
  attack = 40;
  defence = 10;
};
