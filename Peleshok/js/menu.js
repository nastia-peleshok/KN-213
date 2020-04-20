var nav=document.getElementById('nav');
window.onscroll=function(){
	if(window.pageYOffset>300){
		nav.style.position="fixed";
		nav.style.top=0+"px";
	}
	else{
		nav.style.position="absolute";
		nav.style.top=300+"px";
	}
}
