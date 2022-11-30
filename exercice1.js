let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

let position = monTexte.indexOf('i');
console.log(position);

alert(monTexte.length);

document.getElementById('position').innerHTML = position;

let stock = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
let upper = stock.toUpperCase();

console.log(upper);
document.getElementById('chaineMaj').innerHTML = upper;

for (i = 0; i < stock.indexOf('a'); i++) {
    alert("lettre a trouvé");
}



