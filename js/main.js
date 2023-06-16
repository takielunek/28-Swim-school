const accordion = document.querySelector('.questions');
const accordionBtns = document.querySelectorAll('.question-btn');
const arrow = document.getElementById('fa');
const footerYear = document.querySelector('.footer__year');
const navMobile = document.querySelector('.nav__mobile');
const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const allNavItems = document.querySelectorAll('.nav__item');
const navList = document.querySelector('.nav__collapse');

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
		fa.style.transform = 'rotate(0deg)';
	} else {
		closeAccordionItems();
		this.nextElementSibling.classList.toggle('active');
		fa.style.transform = 'rotate(180deg)';
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.question-info');
	allActiveItems.forEach((item) => item.classList.remove('active'));
	fa.style.transform = 'rotate(0deg)';
};

const clickOutsideAccordion = (e) => {
	if (
		e.target.classList.contains('question-btn') ||
		e.target.classList.contains('question-info') ||
		e.target.classList.contains('question-info-text')
	)
		return;

	closeAccordionItems();
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav__mobile--active');
};



function addShadow() {
	if (window.scrollY >= 300) {
		nav.classList.add('shadow-bg');
	} else {
		nav.classList.remove('shadow-bg');
	}
}

addShadow();

window.addEventListener('scroll', addShadow);

navBtn.addEventListener('click', handleNav);

accordionBtns.forEach((btn) =>
	btn.addEventListener('click', openAccordionItems)
);

window.addEventListener('click', clickOutsideAccordion);
