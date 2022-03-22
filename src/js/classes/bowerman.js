import Character from './character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
  }

  attack = 25;

  defence = 25;
}
