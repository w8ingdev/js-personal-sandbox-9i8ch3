export class Animal {
  public _name: string;
  public _sex: number; // 0=male, 1=female
  public _hp: number;
  public _degats: number;
  protected _vaccination: boolean;

  constructor(name: string, sex: number) {
    this._name = name;
    this._sex = sex;
    this._hp = 100;
    this._degats = 15;
  }

  shout(): string {
    return '...';
  }

  get hp() {
    return this._name + ' a ' + this._hp + ' points de vie.';
  }

  public get sex(): string {
    if (this._sex == 0) {
      return 'Male';
    } else if (this._sex == 1) {
      return 'Female';
    } else {
      throw new Error('Invalid sex format');
    }
  }
}
