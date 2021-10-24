var calculator = "";
function One() {
  calculator = calculator + "1";
  console.log(calculator);
  update()
}
function Two() {
  calculator = calculator + "2";
  console.log(calculator);
  update()
}
function Three() {
  calculator = calculator + "3";
  console.log(calculator);
  update()
}
function Plus() {
  calculator = calculator + "+";
  console.log(calculator);
  update()
}
function Minus() {
  calculator = calculator + "-";
  console.log(calculator);
  update()
}
function Four() {
  calculator = calculator + "4";
  console.log(calculator);
  update()
}
function Five() {
  calculator = calculator + "5";
  console.log(calculator);
  update()
}
function Six() {
  calculator = calculator + "6";
  console.log(calculator);
  update()
}
function Times() {
  calculator = calculator + "*";
  console.log(calculator);
  update()
}
function Division() {
  calculator = calculator + "/";
  console.log(calculator);
  update()
}
function Seven() {
  calculator = calculator + "7";
  console.log(calculator);
  update()
}
function Eight() {
  calculator = calculator + "8";
  console.log(calculator);
  update()
}
function Nine() {
  calculator = calculator + "9";
  console.log(calculator);
  update()
}
function Exponentation() {
  calculator = calculator + "**";
  console.log(calculator);
  update()
}
function Modulus() {
  calculator = calculator + "%";
  console.log(calculator);
  update()
}
function Zero() {
  calculator = calculator + "0";
  console.log(calculator);
  update()
}
function Point() {
  calculator = calculator + ".";
  console.log(calculator);
  update()
}
function Remove() {
  calculator = calculator.slice(0,-1);
  console.log(calculator);
  update()
}
function Equals() {
  result = eval(calculator);
  calculator = calculator + "=";
  document.getElementById("result").innerHTML = result;
  update()
}
function update() {
  document.getElementById("calculator").innerHTML = calculator;
}