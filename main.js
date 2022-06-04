$('.circle').circleProgress({
    value: 0.90,
    size: 170,
    fill: {
        gradient: ["#30BAE7", "#30BAE7"]
    }
});
$('.circle1').circleProgress({
    value: 0.75,
    size: 170,
    fill: {
        gradient: ["#D74680", "#D74680"]
    }
});
$('.circle2').circleProgress({
    value: 0.70,
    size: 170,
    fill: {
        gradient: ["#15C7A8", "#15C7A8"]
    }
});
$('.circle3').circleProgress({
    value: 0.85,
    size: 170,
    fill: {
        gradient: ["#EB7D4B", "#EB7D4B"]
    }
});
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var number3 = document.getElementById('number3');
var number4 = document.getElementById('number4');




let counter = 0
let counter1 = 0
let counter2 = 0
let counter3 = 0;

// FRIST PROGESSBAR
setInterval(() => {
    if (counter == 90) {
        clearInterval();
    } else {
        counter += 1;
        number1.innerHTML = counter + "%"
    }

}, .0);


// SECOUND PROGESSBAR
setInterval(() => {
    if (counter1 == 75) {
        clearInterval();
    } else {
        counter1 += 1;
        number2.innerHTML = counter1 + "%"
    }

}, .0);

// THIRD PROGESSBAR
setInterval(() => {
    if (counter2 == 70) {
        clearInterval();
    } else {
        counter2 += 1;
        number3.innerHTML = counter2 + "%"
    }

}, .0);

// FOURTH PROGESSBAR

setInterval(() => {
    if (counter3 == 85) {
        clearInterval();
    } else {
        counter3 += 1;
        number4.innerHTML = counter3 + "%"
    }

}, .000);

// mixitup jquery plagin

$(document).ready(function(){
    var mixer=mixitup('.demo');
});
   
setInterval(()=>{
    
})
