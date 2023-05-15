window.onscroll=function(){
	
	let header=document.getElementById("navbarExample");

	header.classList.toggle("sticky",window.scrollY > 0)
	
	
}