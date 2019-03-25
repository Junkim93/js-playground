var clickNumbers = function(event) {
    var str = event.target.innerHTML;
    if (str === 'BS') {
        input.array.pop();
    } else {
        input.array.push(str);
    };
    return output.text.innerHTML = input.getInput();
};

var showResult = function(event) {
    var end = event.target.innerHTML;
    input.array.push(end);
    return output.text.innerHTML = calc();
};

var output = {};
output.text = document.getElementById('output');

var input = {'array': []};
input.getInput = function() {
    return this.array.join("");
};

input.empty = function() {
    return this.array.length === 1;
};

input.seperateNumbers = function() {
    for (var i = 0; !this.empty(); i++) {
        if(this.array[i] === "+" || this.array[i] === "-" || this.array[i] === "*" || this.array[i] === "/" || this.array[i] === "=") {
            var num = this.array.splice(0, i);
            num = Number(num.join(""));
            break;
        }
    }
    return num;
};

input.seperateOperator = function() {
    var op = this.array.shift();
    return op;
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
        default:
            ret = "중간 오류";
    }
    console.log(ret);
    return ret;
};

function calc() {
    var result = input.seperateNumbers();
    while (!input.empty()) {
        var op = input.seperateOperator();
        var num = input.seperateNumbers();
        result = calculate(result, num, op);
    }
    return result;
};