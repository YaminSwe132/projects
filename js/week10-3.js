var usd = document.getElementById('usd');
var mmk =document.getElementById('mmk');

usd.addEventListener('keyup',ExchangeMMK);
function ExchangeMMK(){
    var usdvalue = usd.value; 
    var mmkvalue = usdvalue*1850;
    mmk.value = mmkvalue;
}

mmk.addEventListener('keyup',ExchangeUSD);
function ExchangeUSD(){
    var mmkvalue = mmk.value;
    var usdvalue = mmkvalue/1850;
    usd.value = usdvalue;
}

var description = document.getElementById('description');

description.addEventListener('keyup',countChar);
description.value="";

function countChar(){
    var message = document.getElementById('message');
    message.innerHTML = description.value.length;
    
    if(description.value.length>=20){
        description.disabled=true;
    }

    
}


//keydown can catch the backspace->can't show th the length as it exists and show the length after one character
//keypress can't catch the backspace ->can't show th the length as it exists and show the length after one character
//keyup -> show the length as it exists


var username= document.getElementById('username');
var password= document.getElementById('password');

username.addEventListener('focus',displayMessage);
username.addEventListener('blur',displayTip);


password.addEventListener('focus',displayMessage1);
password.addEventListener('blur',displayTip1);

var msg1 = document.getElementById('msg1');
var msg2 = document.getElementById('msg2');
function displayMessage(){
    
    msg1.innerHTML = "Please Enter Name";
}

function displayTip(){
    msg1.innerHTML = "You must add name";
}

function displayMessage1(){
    
    msg2.innerHTML = "Please Enter Password";
}

function displayTip1(){
    msg2.innerHTML = "You must add password";
}


var login = document.getElementById('login');
login.addEventListener('submit',check);

function check(event){
    event.preventDefault();
    var terms = document.getElementById('terms')
    if(!terms.checked){
        alert("Aggree to terms and conditions");
    }
}