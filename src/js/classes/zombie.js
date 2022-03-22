import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
  }

  attack = 40;

  defence = 10;
}
