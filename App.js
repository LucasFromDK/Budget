let input;
let Saldo = ""

//Forskellige Poster
let transportSaldo = 0
let madSaldo = 0
let loanSaldo = 0
let diverseSaldo = 0

function preload() {}

function setup() {
  moveButtons();
  startSaldo();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("200");
  FrontEnd();
}

function moveButtons() {

  //Flyt 100 til transportSaldo
  button = createButton('Flyt 100 DKK til Transport');
  button.position(350, 50);
  button.mousePressed(transportPost);

  //Flyt 100 til madSaldo
  button = createButton('Flyt 100 DKK til Mad');
  button.position(520, 50);
  button.mousePressed(madPost);

  //Flyt 100 til diverseSaldo
  button = createButton('Flyt 100 DKK til Diverse');
  button.position(660, 50);
  button.mousePressed(diversePost);

  //Flyt 100 til diverseSaldo
  button = createButton('Flyt 100 DKK til Afbetaling');
  button.position(820, 50);
  button.mousePressed(diversePost);
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
  transportSaldo = 0
  madSaldo = 0
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
  text("Transport: " + transportSaldo + " DKK", 5, 125);
  text("Mad: " + madSaldo + " DKK", 5, 145);
  text("Placeholder: " + " DKK", 5, 165);
  text("Afbetaling af gæld: " + loanSaldo + " DKK", 5, 185);
  text("Diverse: " + diverseSaldo + " DKK", 5, 205);
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

//Budget Poster
function transportPost() {
  if (Saldo > 0) {
  Saldo = Saldo - 100
  transportSaldo = transportSaldo + 100
  } else {
    window.alert("Du har ikke flere penge til rådighed.")
  }
}

function madPost() {
  if (Saldo > 0) {
  Saldo = Saldo - 100
  madSaldo = madSaldo + 100
  } else {
    window.alert("Du har ikke flere penge til rådighed.")
  }
}

function diversePost() {
  if (Saldo > 0) {
  Saldo = Saldo - 100
  diverseSaldo = diverseSaldo + 100
  } else {
    window.alert("Du har ikke flere penge til rådighed.")
  }
}

function loanPost() {
  if (Saldo > 0) {
  Saldo = Saldo - 100
  loanSaldo = loanSaldo + 100
  } else {
    window.alert("Du har ikke flere penge til rådighed.")
  }
}