//import {Animal} from './class/Animal'
import { Lion } from './class/Lion';
import { Chien } from './class/Chien';
import { SuperHero } from './class/SuperHero';
import { IEmployee } from './interfaces/IEmployee';
import { IHello } from './interfaces/IHello';

var narnia = new Lion('Narnia', 0);
var leika = new Chien('Leika', 1);

console.log(leika.sex);
console.log(leika.shout());

console.log(narnia.shout());

var nora = new SuperHero('Nora', 'fly', 'Blue', true);

console.log(nora.name);
console.log(nora.power);

console.warn(nora.shout());

console.log(nora.hp);
console.log(nora.attack(leika));
console.log(leika.hp);

leika.vaccination = true;

console.log(leika.vaccination + leika._name + ' est vacciné(e)');

const employee: IEmployee = {
  name: 'John Doe',
  age: 21,
  job: 'Police',
  isAdmin: true,
};

const employee2: IEmployee = {
  name: 'James Doeteux',
  job: 'Eboueur',
  isAdmin: false,
};

console.log(employee);
console.log(employee2);

function accessAdmin(): any {
  if (employee.isAdmin == true) {
    console.log('accès admin autorisé');
  } else {
    console.log('accès admin interdit');
  }
}

accessAdmin();

function askAdminAccess(): any {
  if (employee.isAdmin == true) {
    console.log('accès déjà autorisé');
  } else {
    let ask = confirm('souhaite-tu avoir accès au panel admin ?');
    if (ask == true) {
      console.log('vous avez désormais accès au panel admin');
      employee.isAdmin = true;
    } else {
      console.error("vous avez refusé l'accès au panel admin");
    }
  }
}

askAdminAccess();

console.log(employee);

const sayHello = (name: string, age?: number) => {
  if(name && age) {
    console.log(`Hello, ${name}. Tu as ${age} et ça c'est super !`);
  } else if (name) {
    console.log(`Hello, ${name}.`);
  } 
};

sayHello("Andy", 28);