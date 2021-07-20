let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', ()=>{
	letvh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
})


var imgidx = 1;
var leng = $("img.chair").length;
var name = "#c";
$(".right").click(function(){
	if(imgidx == leng){
		$(name+imgidx).toggleClass("show");
		imgidx=1;
		$(name+imgidx).toggleClass("show");
	}
	else{
		$(name+imgidx).toggleClass("show");
		imgidx++;
		$(name+imgidx).toggleClass("show");
	}
})

$(".left").click(function(){
	if(imgidx == 1){
		$(name+imgidx).toggleClass("show");
		imgidx= leng;
		$(name+imgidx).toggleClass("show");
	}
	else{
		$(name+imgidx).toggleClass("show");
		imgidx--;
		$(name+imgidx).toggleClass("show");
	}
})