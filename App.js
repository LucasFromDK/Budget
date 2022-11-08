let input;
let Saldo = ""

function preload() {

}

function setup() {
  StartSaldo()
  Buttons()
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("200");
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

function StartSaldo(){
  //Input Feldt
  input = createInput("Indtast Indkomst Her, Tryk derefter Submit.")
  input.position(5, 50)
  input.size(255, 20)

  //Submit Knap
  button = createButton('Submit');
  button.size(75, 25)
  button.position(input.width + 5, 50);
  button.mousePressed(setSaldo);
}

function setSaldo() {
  //Tager og sætter input til Saldo
  Saldo = input.value()
}

function FrontEnd() {
  TopBar()
  fill("Black")
}

function TopBar() {
  fill ("#41C0f2");
  rect(0, 0, width, 30);
  fill("black")
  textSize(20)
  text("Lukato Budget | Lukato Group", 5, 22)
  text("❌",windowWidth - 30, 22)
  //Default Text Size
  textSize(12)
}