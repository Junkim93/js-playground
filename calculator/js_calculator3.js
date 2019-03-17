function main() {  
    var str1 = document.getElementById('input1').value;
    var str2 = document.getElementById('input2').value;
    var str3 = document.getElementById('input3').value;

    var num1 = Number(str1);
    var num2 = Number(str2);

    var out = document.getElementById('output');
    var str = "";

    switch (str3) {
        case "+":
        str += "더하기 결과는 " + (num1 + num2) + "<br>";
        break;
        case "-":
        str += "빼기 결과는 " + (num1 - num2) + "<br>";
        break;
        case "*":
        str += "곱하기 결과는 " + (num1 * num2) + "<br>";
        break;
        case "/":
        str += "나누기 결과는 " + (num1 / num2) + "<br>";
        break;
        default:
        str += "연산자에는 사칙연산자만 입력해주세요.";
        break;
    };

    out.innerHTML = str;
};
    // var str = "";
    // str += "더하기: " + (num1 + num2) + "<br>";
    // str += "빼기: " + (num1 - num2) + "<br>";
    // str += "곱하기: " + (num1 * num2) + "<br>";
    // str += "나누기: " + (num1 / num2) + "<br>";

    // var out = document.getElementById('output');
    // out.innerHTML = str;
