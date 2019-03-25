var input = {'array': []};
//사용자 입력값 하나로 합침
input.getInput = function() {
    return this.array.join("");
};

//수식이 비어있는지 확인
input.isEmpty = function() {
    return this.array.length === 0;
};

//수식에서 값 획득
input.getValue = function() {
    var num = Number(this.array.shift());
    return num;
};

//수식에서 연산자 획득
input.getOperator = function() {
    var op = this.array.shift();
    if (op === "+" || op === "-" || op === "*" || op === "/") {
        return op;
    } else {
        return "중간 오류";
    }
};

//입력 배열 초기화
input.removeAll = function(result) {
    this.array = [];
    this.array.push(result);
};

//계산 전 필수 수행단계
//getValue 호출 전에 수행되어야함
input.prepareCalculate = function() {
    return this.array = input.getInput().split(" ");
};

//output 객체
//출력 담당
var output = {};
output.text = document.getElementById('output');

output.display = function() {
    this.text.innerHTML = input.getInput();
};

//계산 결과 출력
output.print = function(result) {
    this.text.innerHTML = result;
};

//계산 담당
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
            return NaN;
    }
    return ret;
};

//숫자 버튼의 핸들러 함수
var clickNumbers = function(event) {
    var str = event.target.innerHTML;
    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(" " + str + " ");
    } else {
        input.array.push(str);
    };

    if (input.isEmpty()) {
        output.text.innerHTML = "Empty";
    } else {
        output.display();
    };
};

// '=' 버튼의 핸들러 함수
var showResult = function(event) {
    return calc();
};

function calc() {
    input.prepareCalculate();

    var result = input.getValue();
    while (!input.isEmpty()) {
        var op = input.getOperator();
        var num = input.getValue();
        result = calculate(result, num, op);
    }
    output.print(result);
    input.removeAll(result);
};