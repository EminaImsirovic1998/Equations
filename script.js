let a11 = (document.getElementById("a1"));
let b11 = (document.getElementById("b1"));
let c11 = (document.getElementById("c1"));
let d11 = (document.getElementById("d1"));

let a22 = (document.getElementById("a2"));
let b22 = (document.getElementById("b2"));
let c22 = (document.getElementById("c2"));
let d22 = (document.getElementById("d2"));

let a33 = (document.getElementById("a3"));
let b33 = (document.getElementById("b3"));
let c33 = (document.getElementById("c3"));
let d33 = (document.getElementById("d3"));

let x = document.getElementById("x")
let y = document.getElementById("y");
let z = document.getElementById("z");

let zRes = 0;
let yRes = 0;
let xRes = 0;

var arr = ['a', 'b', 'c', 'd'];

function calculate() {
  clear();

  
  
  var a1 = parseInt(a11.value);
  var b1 = parseInt(b11.value);
  var c1 = parseInt(c11.value);
  var d1 = parseInt(d11.value);

  var a2 = parseInt(a22.value);
  var b2 = parseInt(b22.value);
  var c2 = parseInt(c22.value);
  var d2 = parseInt(d22.value);

  var a3 = parseInt(a33.value);
  var b3 = parseInt(b33.value);
  var c3 = parseInt(c33.value);
  var d3 = parseInt(d33.value);

  

  zRes = (((a1*a1*b2*d3)-(a1*a2*b1*d3)-(a1*a3*b2*d1)+(a2*a3*b1*d1)+(a1*a3*b1*d2)-(a2*a3*b1*d1)-(a1*a1*b3*d2)+(a1*a2*b3*d1))/((a1*a3*b1*c2)-(a2*a3*b1*c1)-(a1*a3*b2*c1)+(a2*a3*b1*c1)-(a1*a1*b3*c2)+(a1*a2*b3*c1)+(a1*a1*b2*c3)-(a1*a2*b1*c3)));
  yRes = (((a1*d2)-(a2*d1)-(zRes*a1*c2)+(zRes*a2*c1))/((a1*b2)-(a2*b1)));
  xRes =((d1-(b1*yRes)-(c1*zRes))/a1);

  
  x.textContent += xRes;
  y.textContent += yRes;
  z.textContent += zRes;
  
  
}

function clear() {
  x.textContent = 'x = ';
  y.textContent = 'y = ';
  z.textContent = 'z = ';
}


