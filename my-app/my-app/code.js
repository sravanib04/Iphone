penRGB(240, 50, 10, 0.8);
dot(300);
penUp();
for (var i = 0; i < 15; i++) {
  penDown();
  drawBubblesA();
  penUp();
}
penUp();
penColor("black");
//moveTo(47, 100);
rowA(47, 100);
penUp();
penUp();
rowA(47, 180);
penUp();
moveTo(50, 135);
penUp();
drawClock();
penUp();
moveTo(160, 140);
penDown();
turnLeft(130);
drawSettings();
penUp();
moveTo(217, 185);
fillAppA("white");
penUp();
penColor("yellow");
moveTo(180, 152);
moveForward(10);
penDown();
turnRight(90);
moveForward(35);
penUp();
moveTo(170, 160);
penColor("gray");
penWidth(1);
penDown();
moveForward(55);
penUp();
moveTo(170, 175);
penDown();
moveForward(55);
function drawSettings() {
 fillAppA("gray");
moveTo(135, 160);
penColor("black");
dot(25);
penColor("gray");
dot(20);
penColor("black");
dot(15);
penColor("gray");
dot(10);
penColor("black");
dot(5);
penColor("gray");
penWidth(5);
turnLeft(120);
moveForward(17);
moveTo(135, 160);
turnLeft(120);
moveForward(17);
moveTo(135, 160);
turnLeft(120);
moveForward(17);
}

function drawClock() {
  fillAppA("black");
moveTo(70, 160);
penColor("white");
dot(23);
penColor("black");
penWidth(2);
turnRight(200);
moveForward(20);
moveTo(70, 160);
turnLeft(70);
moveForward(15);
}
function fillAppA(color) {
 penColor(color);
penWidth(5);
penDown();
moveForward(40);
arcRight(90, 5);
moveForward(40);
arcRight(90, 5);
moveForward(40);
arcRight(90, 5);
moveForward(40);
arcRight(90, 5);
penUp();
moveForward(5);
turnRight(90);
moveForward(8);
penDown();
penWidth(20);
moveForward(35);
turnLeft(90);
moveForward(30);
turnLeft(90);
moveForward(35);
turnLeft(90);
moveForward(15);
turnLeft(90);
moveForward(25);
}

function drawBubblesA() {
  penRGB(255, 255, 255, randomNumber(0, 3)/10);
  penUp();
  moveTo(randomNumber(0, 318), randomNumber(0, 450));
  penUp();
  penDown();
  dot(randomNumber(20, 60));
  penUp();
}
function appOutlineA() {
  penUp();
  turnTo(0);
  penDown();
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  turnTo(90);
  penUp();
}
function rowA(x, y) {
  penUp();
  moveTo(x, y);
  for (var i = 0; i < 4; i++) {
    appOutlineA();
    moveForward(62);
    penUp();
  }
}
penUp();
moveTo(170, 170);
turnLeft(90);
penDown();
function appOutline(r, g, b) {
  penRGB(r, g, b, 1);
  turnTo(0);
  penDown();
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  turnTo(90);
  penUp();
}
function row() {
  for (var i = 0; i < 4; i++) {
    appOutline(0, 0, 0);
    moveForward(62);
  }
}
function calendar() {
  moveTo(72, 80);
  color(255, 255, 255);
  moveTo(47, 100);
  penWidth(3.4);
  appOutline(255, 255, 255);
  penUp();
  penWidth(2.5);
  penColor("black");
  moveTo(62, 78);
  turnTo(180);
  penDown();
  moveForward(20);
  penUp();
  moveTo(71, 80);
  turnTo(40);
  penDown();
  arcRight(190, 7);
  moveForward(12);
  turnTo(89);
  moveForward(14);
  penUp();
  words();
}
function words() {
  moveTo(56, 71);
  penRGB(255, 0, 0, 1);
  turnTo(0);
  penDown();
  moveForward(8);
  turnTo(140);
  moveForward(8);
  turnTo(40);
  moveForward(8);
  turnTo(180);
  moveForward(8);
  penUp();
  moveTo(77, 68);
  penDown();
  arcRight(360, 3);
  penUp();
  moveTo(82, 65);
  turnTo(180);
  penDown();
  moveForward(6);
  turnTo(0);
  moveForward(1);
  turnTo(-15);
  arcRight(220, 4);
  penUp();
}
function pOvals() {
  penDown();
  penWidth(4);
  arcRight(360, 10);
  penUp();
  turnRight(45);
}
function photos() {
  penUp();
  moveTo(134, 81);
  penDown();
  color(255, 255, 255);
  moveTo(109, 100);
  penWidth(3.4);
  appOutline(255, 255, 255);
  penRGB(255, 0, 0, 0.5);
  moveTo(134, 80);
  turnTo(210);
  pOvals();
  penRGB(255, 128, 0, 0.5);
  pOvals();
  penRGB(255, 255, 0, 0.5);
  pOvals();
  penRGB(102, 204, 0, 0.5);
  pOvals();
  penRGB(0, 153, 153, 0.5);
  pOvals();
  penRGB(0, 0, 255, 0.5);
  pOvals();
  penRGB(127, 0, 255, 0.5);
  pOvals();
  penRGB(153, 0, 76, 0.5);
  pOvals();
  hide();
  penUp();
}
function color(r, g, b) {
  show();
  penRGB(r, g, b, 1);
  dot(25);
  turnTo(45);
  moveForward(20);
  dot(11);
  moveBackward(20);
  turnTo(135);
  moveForward(20);
  dot(11);
  moveBackward(20);
  turnTo(225);
  moveForward(20);
  dot(11);
  moveBackward(20);
  turnTo(315);
  moveForward(20);
  dot(11);
  turnTo(0);
}
function camera() {
  penUp();
  moveTo(196, 80);
  color(192, 192, 192);
  moveTo(171, 100);
  penWidth(3.4);
  appOutline(192, 192, 192);
  turnTo(0);
  moveTo(182.5, 88);
  penRGB(32, 32, 32, 1);
  penDown();
  penWidth(13);
  moveForward(9);
  turnRight(90);
  moveForward(9);
  turnLeft(90);
  moveForward(7);
  turnRight(90);
  moveForward(9);
  turnRight(90);
  moveForward(7);
  turnLeft(90);
  moveForward(9);
  turnRight(90);
  moveForward(9);
  turnRight(90);
  moveForward(27);
  moveTo(196, 87);
  penWidth(2);
  penRGB(192, 192, 192, 1);
  arcRight(360, 5);
  penUp();
  moveTo(205, 77);
  penColor("yellow");
  penDown();
  dot(1.5);
  penUp();
}
function appStore() {
  penWidth(3.4);
  moveTo(258, 80);
  color(0, 128, 255);
  moveTo(233, 100);
  appOutline(0, 128, 255);
  moveTo(258, 72);
  turnTo(145);
  penWidth(5.5);
  penColor("white");
  penDown();
  moveForward(25);
  moveBackward(33);
  moveForward(8);
  turnTo(215);
  moveForward(25);
  moveBackward(33);
  penUp();
  moveTo(241, 86);
  turnTo(90);
  penDown();
  moveForward(33);
}
function dockLines() {
  penUp();
  penColor("black");
  moveTo(140, 280);
  penDown();
  for (var i = 0; i < 4; i++) {
    dots();
  }
}
function dots() {
  dot(4);
  penUp();
  moveForward(15);
}
penUp();
moveTo(165, 290);
moveTo(47, 100);
row();
calendar();
photos();
camera();
appStore();
dockLines();
penUp();
moveTo(170, 170);
turnLeft(90);
penDown();
function iphoneOutlineS() {
  penUp();
  moveTo(160, 6);
  turnRight(90);
  penDown();
  moveTo(299, 6);
  arcRight(90, 10);
  moveTo(308, 420);
  arcRight(90, 10);
  moveTo(19, 430);
  arcRight(90, 10);
  moveTo(11, 16);
  arcRight(90, 10);
  moveTo(160, 6);
  penUp();
  //inner borders
  moveTo(25, 55);
  penDown();
  moveTo(295, 55);
  moveTo(295, 381);
  turnRight(180);
  moveTo(26, 381);
  turnRight(90);
  moveTo(25, 55);
  penUp();
  speakerS();
  iphoneButtonS();
  cameraS();
  dockS();
  appOutlineS();
}
iphoneOutlineS();
function appOutlineS() {
  phoneOutlineS();
  appsS();
}
function appsS() {
  fillAppS("chartreuse");
  phoneLogoS();
}
function speakerS() {
  moveTo(150, 33);
  turnRight(90);
  penDown();
  penWidth(4);
  moveForward(30);
  turnLeft(180);
  moveForward(30);
  moveForward(15);
  moveBackward(15);
}
function cameraS() {
  moveTo(120, 33);
  penDown();
  penColor("black");
  dot(8);
  penUp();
}
function iphoneButtonS() {
  penUp();
  moveTo(155, 388);
  penDown();
  penWidth(2);
  arcLeft(360, 17);
  penUp();
}
function dockS() {
  penUp();
  moveTo(26, 290);
  penDown();
  moveTo(295, 290);
}
function phoneOutlineS() {
  penUp();
  moveTo(135, 360);
  penDown();
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  moveForward(40);
  arcRight(90, 5);
  turnTo(270);
  moveForward(40);
  penUp();
}
function phoneLogoS() {
  penUp();
  moveTo(200, 335);
  moveTo(70, 355);
  turnTo(270);
  penDown();
  penWidth(5);
  penRGB(255, 255, 255, 1);
  penUp();
  moveTo(168, 350);
  penDown();
  penWidth(10);
  arcRight(90, 25);
}
function fillAppS(color) {
 moveTo(176, 360);
 penColor(color);
penWidth(5);
penDown();
moveForward(40);
arcRight(90, 5);
moveForward(40);
arcRight(90, 5);
moveForward(40);
arcRight(90, 5);
moveForward(40);
arcRight(90, 5);
penUp();
moveForward(5);
turnRight(90);
moveForward(8);
penDown();
penWidth(20);
moveForward(35);
turnLeft(90);
moveForward(30);
turnLeft(90);
moveForward(35);
turnLeft(90);
moveForward(15);
turnLeft(90);
moveForward(25);
}



