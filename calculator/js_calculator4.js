var arrayInp = [];
var arrayNum = [];
var arrayOpe = [];
var arrayOut = [];

var input = function () {
    while (true) {
        var input = prompt("숫자를 입력해주세요. (종료를 원하시면 q를 입력해주세요)");
        console.log(input);
        arrayInp.push(input);

        if (input === "q") {
            break;
        };
    };
    for (var i = 0; i < arrayInp.length; i++) {
        switch (arrayInp[i]) {
            case "+":
                arrayOpe.push(arrayInp[i]);
                break;
            case "-":
                arrayOpe.push(arrayInp[i]);
                break;
            case "*":
                arrayOpe.push(arrayInp[i]);
                break;
            case "/":
                arrayOpe.push(arrayInp[i]);
                break;
            default:
                arrayNum.push(Number(arrayInp[i]));
        };
    };
};

var calc1 = function () {
    switch (arrayOpe[0]) {
        case "+":
            arrayOut.push(arrayNum[0] + arrayNum[1]);
            break;
        case "-":
            arrayOut.push(arrayNum[0] - arrayNum[1]);
            break;
        case "*":
            arrayOut.push(arrayNum[0] * arrayNum[1]);
            break;
        case "/":
            arrayOut.push(arrayNum[0] / arrayNum[1]);
            break;
    };
};

var calc2 = function () {
    var count = 0;
    var n = 2;
    for (var i = 1; i < arrayOpe.length; i++) {
        switch (arrayOpe[i]) {
            case "+":
                arrayOut.push(arrayOut[count] + arrayNum[n]);
                break;
            case "-":
                arrayOut.push(arrayOut[count] - arrayNum[n]);
                break;
            case "*":
                arrayOut.push(arrayOut[count] * arrayNum[n]);
                break;
            case "/":
                arrayOut.push(arrayOut[count] / arrayNum[n]);
                break;
        };
        count++;
        n++;
    };
};

var printResults = function () {
    var results = document.getElementById('output');
    results.innerHTML = "<h3>" + arrayOut[(arrayOut.length - 1)] + "</h3>";
    
    if (arrayOut[(arrayOut.length - 1)] === undefined) {
        results.innerHTML = "<h3>" + "입력된 값이 존재하지 않습니다." + "</h3>";
    };
};

function main() {
    input();
    calc1();
    calc2();
    printResults();
};

main();