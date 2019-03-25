var clickNumbers = function(event) {
    var str = event.target.innerHTML;
    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(" " + str + " ");
    } else {
        input.array.push(str);
    };

    if (input.array.length === 0) {
        output.text.innerHTML = "Empty";
    } else {
        output.text.innerHTML = input.getInput();
    };
};

var showResult = function(event) {
    return output.text.innerHTML = calc();
};

var input = {'array': []};
input.getInput = function() {
    return this.array.join("");
};

input.empty = function(value) {
    return value.length === 0;
};

input.getValue = function(value) {
    var num = Number(value.shift());
    return num;
};

input.getOperator = function(value) {
    var op = value.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        return op;
    } else {
        return "중간 오류";
    }
};

var output = {};
output.text = document.getElementById('output');

var splitNum = function() {
    var value = input.getInput();
    return value.split(" ");
};

var calculate = function(first, second, op) {
    var ret;
    switch(op) {
        case "+":
            ret = first + second;
            break;
        case "-":
            ret = first - second;
            break;
        case "*":
            ret = first * second;
            break;
        case "/":
            ret = first / second;
            break;
    }
    return ret;
};

function calc() {
    var splitValue = splitNum();
    var result = input.getValue(splitValue);
    while (!input.empty(splitValue)) {
        var op = input.getOperator(splitValue);
        var num = input.getValue(splitValue);
        result = calculate(result, num, op);
    }
    return result;
};