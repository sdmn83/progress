let pr = 0;

p = document.getElementsByTagName('button');
bar = document.getElementsByClassName('progress-bar');

p[0].onclick = f1;
p[1].onclick = f2;
p[2].onclick = f3;

function f1 () { 
	pr++;
	if (pr>100) {pr=100};
	bar[0].style = 'width: ' + pr + '%';
	bar[0].innerText = pr + '%';
}
function f2 () {
	for (let i=0; i<3; i++) {f1()}
}
function f3 () {
	for (let i=0; i<7; i++) {f1()}
}
