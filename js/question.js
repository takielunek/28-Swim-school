const accordion = document.querySelectorAll('.questions');
const accordionBtns = document.querySelectorAll('.question-btn');
const allActiveItems = document.querySelectorAll('.question-info');


const closeAccordionItems = () => {
    allActiveItems.forEach((item) => item.classList.remove('active'));
};

function openAccordionItems() {
    if (this.nextElementSibling.classList.contains('active')) {
        this.nextElementSibling.classList.remove('active');
    } else {
        closeAccordionItems();
        this.nextElementSibling.classList.toggle('active');
    }

}

const clickOutsideAccordion = (e) => {
    if (
        e.target.classList.contains('question-btn') ||
        e.target.classList.contains('question-info') ||
        e.target.classList.contains('question-info-text')
    )
        return;

    closeAccordionItems();
};


accordionBtns.forEach((btn) =>
    btn.addEventListener('click', openAccordionItems)
);

window.addEventListener('click', clickOutsideAccordion);



