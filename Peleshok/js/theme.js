let button1 = document.getElementById("theme1");
let button2 = document.getElementById("theme2");
let light = true;

let dark = {
	picture: "url('night12.png') no-repeat center bottom / cover",
	sidebar: "#6c556d",
	content: "#15183b",
	logocolor: "#d48fb0",
	textcolor: "#ffffff",
	sidebar3:"#8d3036",
	footercol:"#6e2a72"
}
let lights = {
	picture: "url('2.png') no-repeat center bottom / cover",
	sidebar: "#a0a9ad",
	content: "#9acae0",
	logocolor: "#000000",
	textcolor: "#000000",
	sidebar3:"#b49ca6",
	footercol:"#e2dbdb"
}

function clicking(dark) {
	let back = document.querySelector(".header");
	back.style.background = dark.picture;
	let innersidebar1 = document.querySelector(".inner-sidebar1");
	innersidebar1.style.background = dark.sidebar;
	let innersidebar2 = document.querySelector(".inner-sidebar2");
	innersidebar2.style.background = dark.sidebar;
	let innercontent1 = document.querySelector(".inner-content1");
	innercontent1.style.background = dark.content;
	let logocolor = document.querySelector(".logo");
	logocolor.style.color = dark.logocolor;
	let footer1 = document.querySelector(".footer");
	footer1.style.background = dark.footercol;
	let top_menu = document.querySelector(".inner-header .nav ul");
	top_menu.style.background = dark.sidebar;
	let top_menu_down = document.querySelector(".inner-header .nav");
	top_menu_down.style.background = dark.sidebar;
	let text = document.querySelectorAll(".inner-content1 p");
	text.forEach(e => {
		e.style.color = dark.textcolor;
	})
	let text_color = document.querySelectorAll("p");
	text_color.forEach(e => {
		e.style.color = dark.textcolor;
	})

	let tables = document.querySelector('table');
	tables.style.color = dark.textcolor

	let h4 = document.querySelectorAll('h4');
	h4.forEach(e => {
		e.style.color = dark.textcolor;
	})
	let h5 = document.querySelectorAll('h5');
	h5.forEach(e => {
		e.style.color = dark.textcolor;
	})

	let menuLinks = document.querySelectorAll('.topmenu li a');
	menuLinks.forEach(e => {
		e.style.color = dark.textcolor;
	})
	let sidebar3 = document.querySelectorAll('.sidebar3');
	sidebar3.forEach(sidebar3 => {
		sidebar3.style.background = dark.sidebar3;
	})
	let innersidebar3 = document.querySelectorAll('.inner-sidebar3');
	innersidebar3.forEach(innersidebar3 => {
		innersidebar3.style.background = dark.sidebar3;
	})
};

button1.addEventListener("click", function () {
	
		clicking(dark);
		light = false;
		button1.style.display="none";
		button2.style.display="block";
	});
	button2.addEventListener("click", function () {
		clicking(lights);
		light = true;
		button2.style.display="none";
		button1.style.display="block";
	});
