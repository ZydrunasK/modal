const modalDOM = document.querySelector('.modal'),
btnDOM = document.querySelector('#btn'),
modalContentDOM = document.querySelector('.modalContent'),
closeDOM = document.querySelector('.close');

btnDOM.addEventListener('click', () => {
    modalDOM.style.display = 'block';
});
closeDOM.addEventListener('click', () => {
    modalContentDOM.classList.add('slideUp');
    setTimeout(() => {
        modalContentDOM.classList.remove('slideUp');
        modalDOM.style.display = 'none';
    }, 500);
});