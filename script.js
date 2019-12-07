//var c = document.getElementById("picture1")
//var d = document.getElementById("picture2")
//var e = document.getElementById("picture3")
//var f = document.getElementById("picture4")
//
//function androidClick (){
//	c.classList.remove ("none")
//	d.classList.remove ("none")
//	e.classList.remove ("none")
//	f.classList.remove ("none")
//	c.classList.remove ("atopleftimg1")
//	c.classList.remove ("atopleftimg2")
//	c.classList.remove ("atopleftimg3")
//	c.classList.remove ("atopleftimg4")
//	var random = Math.round(Math.random() * 4);
//	if (random == 0) {
//		c.classList.add ("atopleftimg1");
//	}
//	if (random == 1) {
//		c.classList.add ("atopleftimg2");
//	}
//	if (random == 2) {
//		c.classList.add ("atopleftimg3");
//	}
//	if (random == 3) {
//		c.classList.add ("atopleftimg4");
//	}
	
var a = document.getElementById("imgone")
var b = document.getElementById("imgtwo")
var c = document.getElementById("imgthree")
var d = document.getElementById("imgfour")
var e = document.getElementById("imgfive")
var f = document.getElementById("imgsix")
var g = document.getElementById("imgseven")
var h = document.getElementById("imgeight")
var i = document.getElementById("imgnine")

function clickOne () {
	b.classList.remove ("none")
	a.classList.remove ("yes-cursor")
	a.classList.remove ("hover")
	a.classList.remove ("hover2")
}

function clickTwo () {
	c.classList.remove ("none");	
	b.classList.remove ("yes-cursor")
	b.classList.remove ("hover")
	b.classList.remove ("hover2")
}

function clickthree () {
	e.classList.remove ("none");
	d.classList.remove ("yes-cursor")	
	d.classList.remove ("hover")
	d.classList.remove ("hover2")
}

function clickfour () {
	f.classList.remove ("none");
	e.classList.remove ("yes-cursor")
	e.classList.remove ("hover")
	e.classList.remove ("hover2")
}

function clickfive () {
	f.classList.remove ("none");	
}

function clicksix () {
	h.classList.remove ("none");
	g.classList.remove ("yes-cursor")
	g.classList.remove ("hover")
	g.classList.remove ("hover2")	
}

function clickseven () {
	i.classList.remove ("none");
	h.src = ("images/cod.gif");	
	h.classList.remove ("yes-cursor");
	h.classList.remove ("hover")
	h.classList.remove ("hover2")
}

function clickeight () {
	i.src = ("images/brawil.gif");	
	i.classList.remove ("yes-cursor")
	i.classList.remove ("hover")
	i.classList.remove ("hover2")
}
function resetPage () {
	b.classList.add("none")
	c.classList.add("none")
	e.classList.add("none")
	f.classList.add("none")
	h.classList.add("none")
	h.src = ("images/cod.jpeg");	
	i.classList.add("none")
	i.src = ("images/brawl.jpeg");
	a.classList.add ("hover")
	a.classList.add ("hover2")	
	b.classList.add ("hover")
	b.classList.add ("hover2")
	d.classList.add ("hover")
	d.classList.add ("hover2")
	e.classList.add ("hover")
	e.classList.add ("hover2")
	g.classList.add ("hover")
	g.classList.add ("hover2")	
	h.classList.add ("hover")
	h.classList.add ("hover2")
	i.classList.add ("hover")
	i.classList.add ("hover2")
	a.classList.add ("yes-cursor")
	b.classList.add ("yes-cursor")
	d.classList.add ("yes-cursor")
	e.classList.add ("yes-cursor")
	g.classList.add ("yes-cursor")
	h.classList.add ("yes-cursor")
	i.classList.add ("yes-cursor")
}