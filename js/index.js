var menu = document.getElementById('menu-icon');
var close = document.getElementById('close-icon');
var navLinks = document.getElementsByClassName('nav-links')[0];

function mobileMenu(m){
	if (m == 0) {
		navLinks.style.display = 'block';
		menu.style.display = 'none';
		close.style.display ='block';
	}

	if (m == 1) {
			navLinks.style.display = 'none';
			menu.style.display = 'block';
			close.style.display ='none';
		}	
}

var bullet = document.getElementsByClassName('card-bullet');
var card = document.getElementsByClassName('card')[0];
var container = document.getElementsByClassName('cards-container')[0];

container.addEventListener('scroll', function(){
	var pos = container.scrollLeft;
	var w = window.innerWidth 
	var s = 8;
	console.log(pos);
	console.log(w + 'w');

	for(let i = 0, length1 = bullet.length; i < length1; i++){
		

		if (pos < w) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[0].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}

		if (pos >= w && pos < w*2) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[1].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}

		if (pos < w*2.5 && pos >= w*2) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[2].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}

		if (pos >= w*2.9) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[3].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}
	}
});