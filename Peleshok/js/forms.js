
function submitform ( )
{
	var names=["name","surname","phone","login","password"];
	var valid = true;
	for(var i=0; i<names.length;i++){
        if ( document.getElementById(names[i]).value == "" )
        {
                alert ( "Please, fill your "+names[i] );
                
        }
        }
        	if ( document.form.checkbox.checked == false )
        {
                alert ( "Please, fill the checkbox " );
                valid = false;
        }

var namef=document.getElementById("name").value;

for(var i=0;i<namef.length;i++){
	if((namef[i]<'97')&&(namef[i]>'122')){
		valid = false;
	}
	else{
		valid = true;
	}
}
if(valid ==false){
alert("Name must contain letters");

}
var surf=document.getElementById("surname").value;
for(var i=0;i<surf.length;i++){
	if((surf[i]<'97')&&(surf[i]>'122')){
			valid = false;
	}
	else{
		valid = true;
	}
}
if(valid ==false){
alert("Surname must contain letters");

}
var phonef=document.getElementById("phone").value;
for(var i=0;i<phonef.length;i++){
	if((surf[i]<'48')&&(surf[i]>'57')){
            valid = false;
    }
    else{
        valid = true;
    }
}
if(valid ==false){
alert("Phone must contain numbers");

}
var logf=document.getElementById("login").value;
if((logf.indexOf('@')==-1)||(logf.indexOf('.')==-1)){
	alert("Login isn't right");
}
var passf=document.getElementById("password").value;
if(passf.length>0&&passf.length<=5){
	alert("So short password");}}
    

















        
     // 	var namv = document.getElementById('name').value;

    	// var valid = nam.test(namv);
    	// if (!valid){
     // 	alert ("Name is invalid!");
    	// }
    	// var surnam = /^[A-Za-z]{2,}$/i;
     // 	var surnamv = document.getElementById('surname').value;
    	// var valid = nam.test(surnamv);
    	// if (!valid){
     // 	alert ("Surname is invalid!");
    	// }
    	// var tel = /^\d[\d\(\)\ -]{4,14}\d$/;
     //    var telephone = document.getElementById('phone').value;
     //    var valid = tel.test(telephone);
     //    if (!valid){
     //    alert("Phone is invalid!");
     //    }
     //    var log = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
     // 	var loginv = document.getElementById('login').value;
    	// var valid = log.test(loginv);
    	// if (!valid){
     // 	alert ("Login is invalid!");
    	// }
    	




       

