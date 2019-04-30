// html elements
var word1 = document.getElementById('word1'); // answer
var word2 = document.getElementById('word2'); // buttons
var check = document.getElementById('check'); // word1 === word2  --> check
var progress = document.getElementById('progress'); // progress check
var time = document.getElementById('time'); // time status

//game objects
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0
};

game.startTime = Date.now();

game.words = 'cherry,javascript,toeicspeaking,algorithms,structure,database,network,apple,microsoft,python'.split(',');

//choose 1 word from words;
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function () {
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    };
};

game.removeButtons = function () {
    for (var i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i]);
    };
    this.btns = [];
};

game.meetCondition = function () {
    return this.answer === this.letters.join('');
};

game.isFinished = function () {
    return this.current === this.maxPlay;
};

game.updateDisplay = function () {
    if (this.meetCondition()) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    };
};

game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};
game.init();

game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};

//event handler for swap button
// ** 기존에 새 배열 변수 할당해서 역순으로 만들어 줬던걸
// ** reverse라는 배열 조작 메서드를 사용하여 손쉽게 바꿨습니다.
game.swap = function () {
    // var temp = [];
    // while (game.letters.length !== 0) {
    //     var s = game.letters.pop();
    //     temp.push(s);
    // }
    // game.letters = temp;
    game.letters.reverse();
    game.copyBtnText();
    game.updateDisplay();
};

game.rshift = function () {
    var s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
}

game.lshift = function () {
    var s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.updateDisplay();
};

//progress check
game.progress = function () {
    if (this.meetCondition()) {
        this.removeButtons();
        this.init();
        this.shuffle();
        progress.innerHTML += 'O';
        this.current++;
    };
    if (this.isFinished()) {
        var nowTime = Date.now();
        var time = this.timeResult(nowTime, this.startTime);
        alert('Good! ' + 'Your record: ' + time + 'sec');
        clearInterval(x);
    };
};

//event handler for swap button
var swap = function () {
    game.swap();
    game.progress();
};

var rshift = function () {
    game.rshift();
    game.progress();
};

var lshift = function () {
    game.lshift();
    game.progress();
};

//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        this.swap();
    };

    var rmax = Math.max(game.answer.length - 2, 1);
    var n = Math.floor(Math.random() * rmax) + 1;
    for (var i = 0; i < n; i++) {
        this.rshift();
    };

    if (this.meetCondition()) {
        this.shuffle();
    };
};
game.shuffle();

game.timeResult = function (time2, time1) {
    var rawTime = time2 - time1;
    var calTime = rawTime - (rawTime % 1000);
    var time = calTime / 1000;
    return time;
};

var updateTime = function () {
    var now = Date.now() - game.startTime;
    time.innerHTML = now / 1000 + " s";
};

var x = setInterval(updateTime, 50)