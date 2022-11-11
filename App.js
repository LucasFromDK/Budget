let input;
let Saldo = ""

function preload() {}

function setup() {
  Buttons();
  startSaldo();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("200");
  FrontEnd();
}

function Buttons() {
  button = createButton('Test - 1 DKK');
  button.position(400, 50);
  button.mousePressed(Brug1);
}

function Brug1(){
  Saldo = Saldo -1
}

function startSaldo(){
  //Input Feldt
  input = createInput("Indtast Indkomst Her, Tryk derefter Submit.");
  input.position(5, 50);
  input.size(255, 20);

  //Submit Knap
  button = createButton('Submit');
  button.size(75, 25);
  button.position(input.width + 5, 50);
  button.mousePressed(inputSaldo);
}

function inputSaldo() {
  //Tager og sætter input til Saldo
  Saldo = input.value();
}

function FrontEnd() {
  displayText();
  TopBar();
  dividerBar();
  fill("Black");
}

function displayText() {
  text("Konto: " + Saldo + " DKK", 5, 45);
  textSize(16);
  text("Placeholder 1: ", 5, 125);
  text("Placeholder 2: ", 5, 145);
  text("Placeholder 3: ", 5, 165);
  textSize(12);
}

function TopBar() {
  fill ("#41C0f2");
  rect(0, 0, width, 30);
  fill("black");
  textSize(20);
  text("Lukato Budget | Lukato Group", 5, 22);
  text("❌",windowWidth - 30, 22);
  //Default Text Size
  textSize(12);
}

function dividerBar() {
  rect(0, 90, width, 20);
  fill("white");
  textAlign(CENTER);
  textSize(20);
  text("Budget Poster", windowWidth/2, 107);
  textAlign(LEFT);
  textSize(12);
}

function post1() {

}