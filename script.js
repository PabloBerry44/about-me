const arrow = document.querySelector('.arrow')
arrow.addEventListener('click', () => window.scrollTo({
    top: 200,
    behavior: 'smooth',
}));