var a1 = document.getElementById("opt");
var a2 = document.getElementById("pic1");
var a3 = document.getElementById("pic2");
var a4 = document.getElementById("big2");
var a5 = document.getElementById("numm1");
var a6 = document.getElementById("big41");
var a7 = document.getElementById("numm");
var a8 = document.getElementById("big31");
var a9 = document.getElementById("big33");
var a10 = document.getElementById("num1");
var a11 = document.getElementById("big52");
var a12 = document.getElementById("shop3");
var a13 = document.getElementById("shop1");
var num1 = document.getElementById("num1");
var slider = document.getElementById("slider");
var img2 = document.getElementById("img2");
var Bimg = document.getElementById("Bimg");
//件数增加
function add() {
	var sk12 = document.getElementById("big321");
	var sk13 = document.getElementById("big33");
	var sk14 = document.getElementById("big31");
	if(sk12.value==5){
		sk13.style.cursor="not-allowed";
	}
	else{
		sk12.value++;
		sk14.style.cursor="pointer";
		if(sk12.value==5){
		sk13.style.cursor="not-allowed";
	}
	}
}
a8.onclick=point;
a8.onmouseover=function(){
	var sk12 = document.getElementById("big321");
	var sk13 = document.getElementById("big31");
		if(sk12.value==1){
		sk13.style.cursor="not-allowed";
	}
}
a9.onclick=add;
//含量选择
function change2() {
	var sk12 = document.getElementById("numm");
	var sk13=document.getElementById("numm1");
	var sk14=document.getElementById("big41");
	sk12.style.background="none";
	sk12.style.border = 'none';
	sk12.style.backgroundimage="url()";
	sk13.style.background="url('img/duigou.png')no-repeat";
	sk13.style.backgroundPosition="50px 19px";
	sk13.style.border='1px solid #ff0853';
	sk14.innerHTML="\"200ml\"";
}
function change21() {
	var sk13 = document.getElementById("numm");
	var sk12=document.getElementById("numm1");
	var sk14=document.getElementById("big41");
	sk12.style.background="none";
	sk12.style.border = 'none';
	sk12.style.backgroundimage="url()";
	sk13.style.background="url('img/duigou.png')no-repeat";
	sk13.style.backgroundPosition="50px 19px";
	sk13.style.border='1px solid #ff0853';
	sk14.innerHTML="\"150ml\"";
}
//图片

function point() {
	var sk12 = document.getElementById("big321");
	var sk13 = document.getElementById("big31");
	var sk14 = document.getElementById("big33");
	if(sk12.value==1){
		sk13.style.cursor="not-allowed";
	}
	else{
		sk12.value--;
		sk14.style.cursor="pointer";
		if(sk12.value==1){
		sk13.style.cursor="not-allowed";
	}
	}
	
}
function change() {
	var sk12 = document.getElementById("big2");
	var sk13=document.getElementById("opt");
	sk12.style.border="2px solid #ffffff";
	sk13.style.border="2px solid #ff9003"
	a10.style.background="url('img/pp1.jpeg')";
	Bimg.src="img/pp3.jpeg";
}
function change1() {
	var sk12 = document.getElementById("big2");
	var sk13=document.getElementById("opt");
	sk13.style.border="2px solid #ffffff";
	sk12.style.border="2px solid #ff9003"
	a10.style.background="url('img/pp0.jpeg')";
	Bimg.src="img/pp2.jpeg";
}
//加入购物车
function tanchu(){
	var sk11= document.getElementById("shop");
	var sk12= document.getElementById("shopp");
	var sk13=document.getElementById("shop3");
	sk12.style.display="block";
	sk12.style.left= (document.body.offsetWidth-408)/2+"px";
	sk12.style.top= (window.screen.height-180)/2+"px";
	sk11.style.display="block";
	sk11.style.height= document.body.offsetHeight+"px";
	sk13.style.cursor="pointer";
}
function tanchu2(){
	var sk11= document.getElementById("shop");
	var sk12= document.getElementById("shopp");
	sk12.style.display="none";
	sk11.style.display="none";
}
a1.onclick = change;
a2.onclick = change1;
a3.onclick = change;
a4.onclick = change1;
a5.onclick = change2;
a7.onclick = change21;
a11.onclick=tanchu;
a12.onclick=tanchu2;
a13.onclick=tanchu2;
num1.onmouseover = function(){
	slider.style.display = "block";
	img2.style.display = "block";
	img2.style.left=412+"px";
}
num1.onmouseout = function(){
	slider.style.display = "none";
	img2.style.display = "none";
}

num1.onmousemove = function(ev){
	var ev = ev||window.event;
	var st =document.documentElement.scrollTop || document.body.scrollTop;
	
	var maxbox = document.getElementById("maxbox2");
	console.log(maxbox.offsetLeft);
	var left = ev.clientX - num1.offsetLeft - slider.offsetWidth/2-60;
	var top = ev.clientY - num1.offsetTop - slider.offsetHeight/2+st-220;
	var maxLeft = num1.offsetWidth - slider.offsetWidth;
	var maxTop = num1.offsetHeight - slider.offsetHeight;
	left = left>maxLeft?maxLeft:left<0?0:left;
	top = top>maxTop?maxTop:top<0?0:top;			
	slider.style.left = left+num1.offsetLeft+"px";
	slider.style.top = top+num1.offsetTop+st+"px";
	var w = left/maxLeft;
	var h = top/maxTop;
	var BmaxLeft = img2.offsetWidth - Bimg.offsetWidth; 
	var BmaxTop = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = w*BmaxLeft + "px";
	Bimg.style.top = h*BmaxTop + "px";
}
var body3 = document.getElementById("body3");
var boxmax = document.getElementById("maxbox2");
var cover =document.getElementById('head1');
window.onscroll=function(){
	var st =document.documentElement.scrollTop || document.body.scrollTop;
	if(st>129){
		cover.style.position ='fixed';
		boxmax.style.top = '130';
		body3.style.top = '130';
	}else{
		cover.style.position='static';
		boxmax.style.top = '0';
		body3.style.top = '0';
	}
}