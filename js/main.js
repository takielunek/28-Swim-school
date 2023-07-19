const footerYear = document.querySelector('.footer__year');
const navMobile = document.querySelector('.nav__mobile');
const navBtn = document.querySelector('.burger-btn');



const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav__mobile--active');
};


navBtn.addEventListener('click', handleNav);



