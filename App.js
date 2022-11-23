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
  createCanvas(windowWidth, 1080);
}

function draw() {
  background("200");
  FrontEnd();
}

function moveButtons() {
  //Flyt 100 til transportSaldo
  button = createButton('Flyt 100 DKK til Transport');
  button.position(715, 405);
  button.size(175, 20);
  button.mousePressed(transportPost);

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Husleje');
  button.position(715, 425);
  button.size(175, 20);
  button.mousePressed();

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Forsikring');
  button.position(715, 445);
  button.size(175, 20);
  button.mousePressed();

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Internet');
  button.position(715, 465);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Streaming');
  button.position(715, 485);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Sjov');
  button.position(715, 505);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Tøj');
  button.position(715, 525);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til El');
  button.position(715, 545);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Mobil');
  button.position(715, 565);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Varme');
  button.position(715, 585);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Mad');
  button.position(715, 605);
  button.size(175, 20);
  button.mousePressed(madPost)

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Cafe');
  button.position(715, 625);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til A-Kasse');
  button.position(715, 645);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Faste');
  button.position(715, 665);
  button.size(175, 20);
  button.mousePressed()

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Gæld');
  button.position(715, 685);
  button.size(175, 20);
  button.mousePressed(loanPost)

  //Flyt 100 til X
  button = createButton('Flyt 100 DKK til Diverse');
  button.position(715, 705);
  button.size(175, 20);
  button.mousePressed(diversePost)
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
  huslejeSaldo = 0
  forsikringSaldo = 0
  internetSaldo = 0
  streamingSaldo = 0
  sjovSaldo = 0
  tøjSaldo = 0
  elSaldo = 0
  mobilSaldo = 0
  cafeSaldo = 0
  akasseSaldo = 0
  andrefasteSaldo = 0
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
  image(img, 0.5*width, 0.36*720, scale*width, scale*img.height*width/img.width);
}

function displayText() {
  //Viser Konto Saldo
  text("Konto: " + Saldo + " DKK", 5, 47);
  textSize(16);
  //Forskellige Poster
  text("Transport: " + transportSaldo + " DKK", 390, 420);
  text("Husleje: " + huslejeSaldo + " DKK", 390, 440);
  text("Forsikring: " + forsikringSaldo + " DKK",390 ,460);
  text("Internet: " + internetSaldo + " DKK", 390, 480);
  text("Streaming: " + streamingSaldo + " DKK", 390, 500);
  text("Sjov: " + sjovSaldo + " DKK", 390, 520);
  text("Tøj: " + tøjSaldo + " DKK", 390, 540);
  text("El: " + elSaldo + " DKK", 390, 560);
  text("Mobil Abonnement: " + mobilSaldo + " DKK", 390, 580);
  text("Varme: " + " DKK", 390, 600)
  text("Mad: " + madSaldo + " DKK", 390, 620);
  text("Cafe: " + cafeSaldo + " DKK", 390, 640);
  text("Fagforening/A-Kasse: " + akasseSaldo + " DKK", 390, 660)
  text("Andre Fasteudgifter: " + andrefasteSaldo + " DKK", 390, 680);
  text("Afbetaling af gæld: " + loanSaldo + " DKK", 390, 700);
  text("Diverse: " + diverseSaldo + " DKK", 390, 720);
  textSize(12);
}

function TopBar() {
  fill ("#41C0f2");
  rect(0, 0, width, 30);
  fill("black");
  textSize(20);
  text("Lukato Budget | Lukato Group", 5, 22);
  text("❌",windowWidth - 50, 22);
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