var hrs = 00
var mins = 00
var sec = 00
var milisec = 00

var gethrs = document.getElementById("hrs")
var getmins = document.getElementById("mins")
var getsec = document.getElementById("sec")
var getmsec = document.getElementById("milisec")

var interval;

function timer(){
    milisec++
    getmsec.innerHTML = milisec;
    if ( milisec >= 100){
        sec++
        getsec.innerHTML = sec
        milisec = 00
    }
    else if ( sec >= 60){
        mins++
        getmins.innerHTML = mins
        milisec = 00
        sec = 00
    }
    else if ( mins >= 60){
        hrs++
        gethrs.innerHTML = hrs
        milisec = 00
        sec = 00
        mins = 00
    }
}

function  start (){
interval = setInterval(timer , 10)
var btn = document.getElementById("start")
btn.disabled = true
}

function pasue(){
    clearInterval(interval)
    var btn = document.getElementById("start")
btn.disabled = 0
}

function reset(){
    milisec = 00
    sec = 00
    mins = 00
    hrs = 00
    getmsec.innerHTML = milisec
    getsec.innerHTML = sec
    getmins.innerHTML = mins
    gethrs.innerHTML= hrs
    clearInterval(interval)
    var btn = document.getElementById("start")
btn.disabled = 0
}

