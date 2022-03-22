import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
  }

  attack = 10;

  defence = 40;
}
