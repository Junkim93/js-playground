// 강사님 코드 방식, 라이브코딩 영상 반까지만 보고 혼자 짐작해서 해보기
var word2 = document.getElementById('word2');

var input = {};
input.words = ['HELLO', 'GIANT', 'NETWORK', 'SYSTEM', 'OPERATION', 'TOGETHER', 'MAJOR', 'MUNGHWA', 'DATA', 'STRUCTURE'];

input.addWord = function () {
    var str = document.getElementById('word1');
    str.innerHTML = input.words[Math.floor(Math.random() * ((input.words.length - 1) - 0 + 1) + 0)];
    return str.innerHTML;
};

input.addButton = function () {
    for (var i = 0; i < game.list.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = game.list[i];
        word2.appendChild(btn);

        game.btns.push(btn);
    };
};

var game = { 'list': [] };
game.btns = [];

game.word = function (str) {
    this.list = str.split('');
};

game.init = function () {
    var status = document.getElementById('status');
    status.innerHTML = "";
};

game.deleteOverlap = function () {
    var str = document.getElementById('word1');
    input.words.splice(input.words.indexOf(str.innerText), 1);
};

game.reset = function () {
    game.btns = [];
    word2.innerHTML = "";
};

var btn = {};
btn.swap = function () {
    for (var i = game.list.length; i > 0; i--) {
        game.btns.push(game.btns[i - 1]);
    };
    game.btns.splice(0, game.list.length);

    result.show();
    result.check();
    result.status();
};

btn.lshift = function () {
    var l = game.btns.shift();
    game.btns.push(l);

    result.show();
    result.check();
    result.status();
};

btn.rshift = function () {
    var r = game.btns.pop();
    game.btns.unshift(r);

    result.show();
    result.check();
    result.status();
};

btn.mix = function () {
    for (var i = 0; i < game.list.length; i++) {
        var randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0:
                for (var i = game.list.length; i > 0; i--) {
                    game.btns.push(game.btns[i - 1]);
                };
                game.btns.splice(0, game.list.length);
                result.show();
                result.check();
                break;
            case 1:
                var l = game.btns.shift();
                game.btns.push(l);
                result.show();
                result.check();
                break;
            case 2:
                var r = game.btns.pop();
                game.btns.unshift(r);
                result.show();
                result.check();
                break;
        };
    };
    if (game.list.join('') === word2.innerText) {
        btn.mix();
    };
};

var result = {};

result.show = function () {
    for (var i = 0; i < game.list.length; i++) {
        word2.appendChild(game.btns[i]);
    };
};

result.check = function () {
    var check = document.getElementById('check');
    if (game.list.join('') === word2.innerText) {
        check.innerHTML = "<strong>" + "일치합니다." + "</strong>";
        check.style.color = 'blue';
    } else {
        check.innerHTML = "일치하지 않습니다!!! 어서 단어를 올바르게 맞춰주세요.";
        check.style.color = 'red';
    };
};

result.status = function () {
    var status = document.getElementById('status');
    if (game.list.join('') === word2.innerText) {
        var oSign = document.createElement('span')
        oSign.innerHTML = "<strong>" + "O" + "</strong>";
        status.appendChild(oSign);
        progress();
    } else {
        return;
    };
    if (status.innerText === "OOO") {
        status.innerHTML = "Thank you for playing";
        status.style.fontSize = "40px";
        var str = document.getElementById('contents');
        str.innerHTML = "";
    };
};

result.getStatus = function () {
    var status = document.getElementById('status');
    return status.innerText;
}

function main() {
    var str = input.addWord();
    game.word(str);
    input.addButton();
    btn.mix();
};

function progress() {
    game.reset();
    game.deleteOverlap();
    main();
};

main();