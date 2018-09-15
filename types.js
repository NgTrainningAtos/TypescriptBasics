var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// type
var a = "bonjour";
var nombre;
var bool;
var table;
var table;
var Role;
(function (Role) {
    Role[Role["Employe"] = 0] = "Employe";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
var role = Role.Admin;
Role[0];
var anything;
function hello(message) {
    console.log("Hello" + message);
}
hello(a);
//Class
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.getSpeed = function () {
        return this.speed;
    };
    return Vehicle;
}());
var Renault = /** @class */ (function (_super) {
    __extends(Renault, _super);
    function Renault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Renault;
}(Vehicle));
//Arrow function
var data = ["Lundi", "mardi", "Mercredi"];
data.forEach(function (line) { return line + " matin"; });
//Expression string
var firstname = "Atos";
var lastname = "Senegal";
// var greetings = "Hello " + firstname + " " + lastname;
var greetings = "Hello " + firstname + " " + lastname;
console.log(greetings);
var template = "\n    <div>\n        <h1>titre</h1>\n        \n    </div>\n";
var auto = new Vehicle();
auto.couleur = "jaune";
