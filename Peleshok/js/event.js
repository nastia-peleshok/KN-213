var title_name = document.getElementById("logo");
function MOUSEOVER(){
    title_name.style.color = "#D5B45B";
}
function MOUSEOUT(){
    title_name.style.color = "";
}
title_name.addEventListener("mouseover", MOUSEOVER);
title_name.addEventListener("mouseout", MOUSEOUT);


var regist = document.getElementById("regist");
var text_submit = document.getElementById("text_submit");

function SHOW(){
    alert("You should to resistrate")
}

regist.addEventListener("click", SHOW);


var name1 = document.getElementById("name");
var surnamename1 = document.getElementById("surname");
var phone1 = document.getElementById("phone");
var login1 = document.getElementById("login");
var password1 = document.getElementById("password");
function NAME1(){
	this.style.backgroundColor="#b9bdf9";
}
function NAME2(){
	this.style.backgroundColor="#9acae0";
}

name1.addEventListener("focus", NAME1);
name1.addEventListener("blur", NAME2);
surnamename1.addEventListener("focus", NAME1);
surnamename1.addEventListener("blur", NAME2);
phone1.addEventListener("focus", NAME1);
phone1.addEventListener("blur", NAME2);
login1.addEventListener("focus", NAME1);
login1.addEventListener("blur", NAME2);
password1.addEventListener("focus", NAME1);
password1.addEventListener("blur", NAME2);


