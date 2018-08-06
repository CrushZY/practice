console.log('1=='+a);
var a=5;
function a() {
    console,log('2=='+a);
}
a();
console.log('3=='+a);

function fn1() {
    return function fn2() {
        var a=5;
        return a;
    }
}
console.log(fn1()());

var aLi=document.querySelectorAll('#nav li');
for (var i=0;i<aLi.length;i++){
    (function (idx) {
        aLi[idx].onclick=function () {
            console.log(idx);
        };
    })(i);


}

let h='hello';
let str=`cfaec${h}ewdrv
        cgers`;
console.log(str);
console.log('1=='+a);
var a=5;
function a() {
    console.log('2=='+a);
}
a();
console.log('3=='+a);