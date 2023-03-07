import { Animal } from '../class/Animal';

export class Lion extends Animal {
  shout(): string {
    return '('+this._name+')' + ' Rooooaarrr';
  }
}
