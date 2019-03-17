function main() {
    var str1 = document.getElementById('input1').value;
    var str2 = document.getElementById('input2').value;

    var num1 = Number(str1);
    var num2 = Number(str2);

    var str = "";
    str += "더하기: " + (num1 + num2) + "<br>";
    str += "빼기: " + (num1 - num2) + "<br>";
    str += "곱하기: " + (num1 * num2) + "<br>";
    str += "나누기: " + (num1 / num2) + "<br>";

    var out = document.getElementById('output');
    out.innerHTML = str;
};




// 이전 코드
// calculator = {};

// var conversionInput = ""; 
// var calResults = [];

// calculator.readInput = function() {
//     var input = document.getElementById('input1');
//     conversionInput = (String(input.value));
// };

// calculator.split = function() {
//     conversionInput = conversionInput.split(",");
// };

// calculator.cal = function(num1, num2) {
//     var plus = (num1 + num2);
//     var minus = (num1 - num2);
//     var multiple = (num1 * num2);
//     var division = (num1 / num2);
//     calResults.push(plus);
//     calResults.push(minus);
//     calResults.push(multiple);
//     calResults.push(division);
// };

// calculator.printResults = function() {
//     var results = document.getElementById('results1');
//     var str = "";
//     str += "덧셈 결과: " + calResults[0] + "<br>";
//     str += "뺄셈 결과: " + calResults[1] + "<br>";
//     str += "곱셈 결과: " + calResults[2] + "<br>";
//     str += "나눗셈 결과: " + calResults[3] + "<br>";
//     results.innerHTML = str;
// };

// function main () {
//     calculator.readInput();
//     calculator.split();
//     var num1 = Number(conversionInput[0]);
//     var num2 = Number(conversionInput[1]);
//     calculator.cal(num1, num2);
//     calculator.printResults();
// };

