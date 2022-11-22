let input;
let Saldo = ""

//Forskellige Poster
let transportSaldo = 0
let madSaldo = 0
let loanSaldo = 0
let diverseSaldo = 0
let huslejeSaldo = 0
let forsikringSaldo = 0
let internetSaldo = 0
let streamingSaldo = 0
let sjovSaldo = 0
let tøjSaldo = 0
let elSaldo = 0
let mobilSaldo = 0
let cafeSaldo = 0
let akasseSaldo = 0
let andrefasteSaldo = 0

function preload() {
  img = loadImage("images/Background/Logo.png");
}

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
  OriginalSaldo = input.value()
  transportSaldo = 0
  madSaldo = 0
  loanSaldo = 0
  diverseSaldo = 0
}

function FrontEnd() {
  backgroundLogo()
  displayText();
  TopBar();
  dividerBar();
  fill("Black");
}

function backgroundLogo() {
  let scale = 0.4;
  imageMode(CENTER);
  image(img, 0.5*width, 0.5*height, scale*width, scale*img.height*width/img.width);
}

function displayText() {
  //Viser Konto Saldo
  text("Konto: " + Saldo + " DKK", 5, 47);
  textSize(16);
  //Forskellige Poster
  text("Transport: " + transportSaldo + " DKK", 5, 127);
  text("Husleje: " + huslejeSaldo + " DKK", 5, 147);
  text("Forsikring: " + forsikringSaldo + " DKK",5 ,167);
  text("Internet: " + internetSaldo + " DKK", 5, 187);
  text("Streaming: " + streamingSaldo + " DKK", 5, 207);
  text("Sjov: " + sjovSaldo + " DKK", 5, 227);
  text("Tøj: " + tøjSaldo + " DKK", 5, 247);
  text("El: " + elSaldo + " DKK", 5, 267);
  text("Mobil Abonnement: " + mobilSaldo + " DKK", 5, 287);
  text("Varme: " + " DKK", 5, 307)
  text("Mad: " + madSaldo + " DKK", 5, 327);
  text("Cafe: " + cafeSaldo + " DKK", 5, 347);
  text("Fagforening/A-Kasse: " + akasseSaldo + " DKK", 5, 367)
  text("Andre Fasteudgifter: " + andrefasteSaldo + " DKK", 5, 387);
  text("Afbetaling af gæld: " + loanSaldo + " DKK", 5, 407);
  text("Diverse: " + diverseSaldo + " DKK", 5, 427);
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
  fill("#41C0f2")
  rect(0, 92, width, 20);
  fill("white");
  textAlign(CENTER);
  textSize(20);
  text("Budget Poster", windowWidth/2, 108);
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