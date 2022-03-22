import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }

  attack = 25;

  defence = 25;
}
