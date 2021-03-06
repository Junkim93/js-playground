var inputOp = {};
inputOp.plus = function (event) {
    var plus = document.getElementById('input').value + "+";
    document.getElementById('input').value = plus;
};
inputOp.minus = function () {
    var minus = document.getElementById('input').value + "-";
    document.getElementById('input').value = minus;
};
inputOp.multiple = function () {
    var multiple = document.getElementById('input').value + "x";
    document.getElementById('input').value = multiple;
};
inputOp.division = function () {
    var division = document.getElementById('input').value + "÷";
    document.getElementById('input').value = division;
};

var inputNum = {};
inputNum.one = function () {
    var one = document.getElementById('input').value + "1";
    document.getElementById('input').value = one;
};
inputNum.two = function () {
    var two = document.getElementById('input').value + "2";
    document.getElementById('input').value = two;
};
inputNum.thr = function () {
    var thr = document.getElementById('input').value + "3";
    document.getElementById('input').value = thr;
};
inputNum.four = function () {
    var four = document.getElementById('input').value + "4";
    document.getElementById('input').value = four;
};
inputNum.five = function () {
    var five = document.getElementById('input').value + "5";
    document.getElementById('input').value = five;
};
inputNum.six = function () {
    var six = document.getElementById('input').value + "6";
    document.getElementById('input').value = six;
};
inputNum.sev = function () {
    var sev = document.getElementById('input').value + "7";
    document.getElementById('input').value = sev;
};
inputNum.eig = function () {
    var eig = document.getElementById('input').value + "8";
    document.getElementById('input').value = eig;
};
inputNum.nine = function () {
    var nine = document.getElementById('input').value + "9";
    document.getElementById('input').value = nine;
};
inputNum.zero = function () {
    var zero = document.getElementById('input').value + "0";
    document.getElementById('input').value = zero;
};

var inputCE = {};
inputCE.cancle = function () {
    document.getElementById('input').value = null;
};

var input = {};
input.makeList = function (str) {
    this.list = str.split("");
};

input.empty = function () {
    return this.list.length === 0;
};

input.getValue = function () {
    for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] === "+" || this.list[i] === "-" || this.list[i] === "x" || this.list[i] === "÷") {
            var n = this.list.splice(0, i);
            var value = Number(n.join(""));
            break;
        } else if (this.list.indexOf("+") === -1 && this.list.indexOf("-") === -1 && this.list.indexOf("x") === -1 && this.list.indexOf("÷") === -1) {
            var n = this.list.splice(0, this.list.length);
            var value = Number(n.join(""));
            break;
        };
    };
    return value;
};

input.getOperator = function () {
    var op = this.list.shift();
    if (op === "+" || op === "-" || op === "x" || op === "÷") {
        return op;
    } else {
        return "바보야!"
    };
};

var calculator = {};
calculator.calculate = function (result, second, op) {
    var ret;
    switch (op) {
        case "+":
            ret = result + second;
            break;
        case "-":
            ret = result - second;
            break;
        case "x":
            ret = result * second;
            break;
        case "÷":
            ret = result / second;
            break;
        default:
            return NaN;
    };
    return ret;
};

var output = {};
output.print = function (result) {
    document.getElementById('input').value = result;
};

function calc() {
    var str = document.getElementById('input').value;
    input.makeList(str);
    var result = input.getValue();

    while (!input.empty()) {
        var op = input.getOperator();
        var num = input.getValue();
        result = calculator.calculate(result, num, op);
    };
    output.print(result);
};