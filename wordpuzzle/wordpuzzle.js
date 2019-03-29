var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');

var game = {};
game.word = str.split('');

var addButton = function() {
    word2.innerHTML = '';
    for (var i = 0; i < str.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = game.word[i];
        word2.appendChild(btn);
    };
};

var swap = function(event) {
    for (var i = (str.length - 1); i >= 0; i--) {
        game.word.push(game.word[i]);
    };
    game.word.splice(0, str.length)
    addButton();
    checkResult();
};

var rshift = function(event) {
    game.word.unshift(game.word[game.word.length - 1]);
    game.word.splice(str.length);
    addButton();
    checkResult();
};

var lshift = function(event) {
    game.word.push(game.word[0]);
    game.word.splice(0, 1);
    addButton();
    checkResult();
};


var checkResult = function () {
    if (str !== word2.innerText) {
        document.getElementById('check').innerHTML = "일치하지 않습니다.";
    } else {
        document.getElementById('check').innerHTML = "일치합니다.";
    };
};

function main() {
    addButton();
};

main();