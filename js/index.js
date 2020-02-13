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

container.addEventListener('wheel', function(){
	console.log(container.deltaX);
});

/* not working */

function myScroll() {

	


	/*var pos = container.scrollLeft;

	for(let i = 0, length1 = bullet.length; i < length1; i++){
		

		if (pos == 8) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[0].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}

		if (pos == 392) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[1].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}

		if (pos == 775) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[2].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}

		if (pos == 1151) {
			bullet[i].style.backgroundColor = 'hsla(12, 88%, 59%, 0)';
			bullet[3].style.backgroundColor = 'hsl(12, 88%, 59%)';
		}
	}*/
}


/*

8 = anisha
392 = ali
775 = rich
1151 = shanai

*/