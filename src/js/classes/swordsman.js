import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }

  attack = 40;

  defence = 10;
}
