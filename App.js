let Saldo = 10000

function setup() {
  Buttons()
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("255");
  FrontEnd()
  text("Konto: " + Saldo + " DKK", 5, 45)
}

function Buttons() {
  button = createButton('Test - 1 DKK');
  button.position(5, 100);
  button.mousePressed(Brug1);
}

function Brug1(){
  Saldo = Saldo -1
}

function FrontEnd() {
  TopBar()
  fill("Black")
}

function TopBar() {
  fill ("#41C0f2");
  noStroke()
  rect(0, 0, width, 30);
  fill("black")
  textSize(20)
  text("Lukato Budget | Lukato Group", 5, 22)
  text("❌",windowWidth - 30, 22)
  //Default Text Size
  textSize(12)
}