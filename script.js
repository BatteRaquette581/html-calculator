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
function Pow() {
  calculator = calculator + "^";
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
function P1() {
  calculator = calculator + "(";
  console.log(calculator);
  update()
}
function P2() {
  calculator = calculator + ")";
  console.log(calculator);
  update()
}
function Remove() {
  calculator = calculator.slice(0,-1);
  console.log(calculator);
  update()
}
function Pi() {
  calculator = calculator + "π";
  console.log(calculator);
  update()
}
function E() {
  calculator = calculator + "e";
  console.log(calculator);
  update()
}
function Equals() {
  var r1, constants;
  constants = ["π","e"];
  for (let i = 0; i < calculator.length; i++) {
    if (constants.includes(String(calculator[i]))) {
      if (calculator[i] == "π") {
        r1 += "3.141592653";
      } else {
        r1 += "2.718281828";
      }
    } else if (calculator[i] == "^") {
      r1 += "**";
    } else {
      r1 += String(calculator[i]);
    }
  }
  r1 = r1.slice(9);
  result = eval(r1);
  display_result(result)
}
function display_result(r) {
  document.getElementById("result").innerHTML = r;
  calculator += "=";
  console.log(calculator);
  console.log(r);
  update()
}
function update() {
  document.getElementById("calculator").innerHTML = calculator;
}