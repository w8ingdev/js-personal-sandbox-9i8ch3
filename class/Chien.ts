import { Animal } from '../class/Animal';

export class Chien extends Animal {

  set vaccination(value: boolean) {
    if (value) {
      this._vaccination = value;
    } else {
      throw new Error('manque la valeur boolean dans le setter vaccination')
    }
  }

  get vaccination() {
    return this._vaccination;
  }

  shout(): string {
    return '(' + this._name + ')' + ' Wouaf';
  }
}
