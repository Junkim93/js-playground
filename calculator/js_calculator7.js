var input = {};
input.getValue = function () {
    var input = document.getElementById('input');
    var value = input.value.split(" ");
    return value;
};

input.pushArray = function (value) {
    for (var i = 0; i < value.length; i++) {
        if (value[i] === "+" || value[i] === "-" || value[i] === "*" || value[i] === "/") {
            array.operator.push(value[i]);
        } else {
            array.number.push(Number(value[i]));
        }
    };
};

var calculator = {};
calculator.calculate = function (first, n) {
    var ret;
    switch (array.operator[n]) {
        case "+":
            ret = first + array.number[n + 1];
            break;
        case "-":
            ret = first - array.number[n + 1];
            break;
        case "*":
            ret = first * array.number[n + 1];
            break;
        case "/":
            ret = first / array.number[n + 1];
            break;
    };
    return ret;
};

var output = {};
output.print = function (value) {
    var out = document.getElementById('output');
    out.innerHTML = "결과 값: " + value;
};

var array = {};
array.number = [];
array.operator = [];

function main() {
    var value = input.getValue();
    input.pushArray(value);
    var result = array.number[0];
    for (var i = 0; i < array.operator.length; i++) {
        result = calculator.calculate(result, i);
    };
    output.print(result);
};