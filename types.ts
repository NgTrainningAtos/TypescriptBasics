// type
var a: string = "bonjour";
var nombre: number;
var bool: boolean;
var table: Array<string>;
var table: string[];
enum Role {
  Employe,
  Manager,
  Admin
}

var role: Role = Role.Admin;
Role[0];
var anything: any;
function hello(message: string): void {
  console.log("Hello" + message);
}
hello(a);

//Class

class Vehicle {
  couleur: string;
  speed: number;
  marque: string;

  getSpeed(): number {
    return this.speed;
  }
}
class Renault extends Vehicle {}
//Arrow function
var data: string[] = ["Lundi", "mardi", "Mercredi"];
data.forEach(line => line + " matin");
function(line){
    return line + "Matin "
}
//Expression string
var firstname = "Atos";
var lastname = "Senegal";
// var greetings = "Hello " + firstname + " " + lastname;
var greetings = `Hello ${firstname} ${lastname}`;
console.log(greetings);
var template = `
    <div>
        <h1>titre</h1>
        
    </div>
`;
var auto = new Vehicle();
auto.couleur = "jaune";
