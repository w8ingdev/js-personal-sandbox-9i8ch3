export class SuperHero {
  _name: string;
  _power: string;
  _outFit: string;
  _mask: boolean;
  _hp: number;
  _degats: number;

  constructor(name: string, power: string, outfit: string, mask: boolean) {
    this._name = name;
    this._power = power;
    this._outFit = outfit;
    this._mask = mask;
    this._hp = 100;
    this._degats = 15;
  }

  shout(): string {
    if(this._name = "Nora") {
      return 'huuuu';
    } else {
      return 'I am the kinggg !!'
    }
  }

  attack(target): any {
    target._hp -= this._degats;
    return (this._name + ' attaque ' + target._name + '. ' + this._degats + ' dégats infligés.');
  }

  get hp() {
    return this._name + ' a ' + this._hp + ' points de vie.';
  }

  get name() {
    return this._name;
  }

  get power() {
    if ((this._power = 'fly')) {
      return "Je m'envole !";
    } else {
      return 'Pouvoir non défini';
    }
  }
}
