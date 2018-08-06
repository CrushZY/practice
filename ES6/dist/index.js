'use strict';

console.log('1==' + a);
var a = 5;
function a() {
    console, log('2==' + a);
}
a();
console.log('3==' + a);

function fn1() {
    return function fn2() {
        var a = 5;
        return a;
    };
}
console.log(fn1()());

var aLi = document.querySelectorAll('#nav li');
for (var i = 0; i < aLi.length; i++) {
    (function (idx) {
        aLi[idx].onclick = function () {
            console.log(idx);
        };
    })(i);
}

var h = 'hello';
var str = 'cfaec' + h + 'ewdrv\n        cgers';
console.log(str);