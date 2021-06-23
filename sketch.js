var n1, n2

function setup() {
  createCanvas(400, 400);
  num1 = createInput();
  num1.position(5, 60);
  num2 = createInput();
  num2.position(200, 60);
  b1 = createButton("ADD");
  b2 = createButton("SUBTRACT")
  b3 = createButton("DIVISION")
  b4 = createButton("MULTIPLY")
  b1.position(10, 200)
  b2.position(100, 200)
  b3.position(200, 200)
  b4.position(300, 200)
  b1.mousePressed(add);
  b2.mousePressed(subtract);
  b3.mousePressed(division)
  b4.mousePressed(multiply)
}

function draw() {
  background(220);
  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())
}

function add() {
  console.log(n1 + n2)
}
function subtract() {
  console.log(n1 - n2)
}
function division() {
  console.log(n1 / n2)
}
function multiply() {
  console.log(n1 * n2)
}