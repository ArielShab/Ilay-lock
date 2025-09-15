let h = window.innerH;
let lock = document.getElementsByClassName('lock')[0];
window.addEventListener('resize', resizeLock);
function resizeLock() {
	coef = 1000 / 600;
	lock.style.transform =
		'translate(-50%, -50%) scale(' + window.innerHeight / 1000 + ')';
}
resizeLock();
function refresh() {
	var newone = lock.cloneNode(true);
	lock.parentNode.replaceChild(newone, lock);
	lock = newone;
}

function elemMaker(elem, classO, text) {
	var elem = document.createElement(elem);
	elem.classList.add(classO);
	if (text !== false) {
		elem.textContent = text;
	}
	return elem;
}
var contOfStick = document.getElementsByClassName('middleVisior')[0];
var short, long, number;
for (var i = 0; i < 40; i++) {
	if (i % 5 == 0) {
		long = elemMaker('div', 'longStick');
		long.style.transform =
			'translatey(-50%) rotate(' + 9 * i + 'deg) translatey(-130px)';
		contOfStick.appendChild(long);
		number = elemMaker('span', 'nOfStick', i);
		long.appendChild(number);
	} else {
		short = elemMaker('div', 'shortStick');
		short.style.transform =
			'translatey(-50%) rotate(' + 9 * i + 'deg) translatey(-150px)';
		contOfStick.appendChild(short);
	}
} // make lock sticks

const contactForm = document.querySelector('form');
const thankYou = document.querySelector('.thank-you-wrapper');
document.addEventListener('DOMContentLoaded', function () {
	const splide = new Splide('.splide', {
		type: 'loop',
		drag: true,
		focus: 'center',
		direction: 'rtl',
		perPage: 4,
		fixedWidth: '230px',
		fixedHeight: '330px',
		gap: '24px',
		arrows: false,
		pagination: false,
		autoplay: true, // enable autoplay
		interval: 3500, // 5000ms = 5 seconds
		pauseOnHover: true, // optional
		pauseOnFocus: true, // optional
	});

	splide.mount();

	contactForm.addEventListener('submit', function (e) {
		e.preventDefault();
		thankYou.classList.add('show');
	});
});

thankYou.addEventListener('click', function () {
	window.location.reload();
});
