const arrow = document.querySelector('.arrow')
arrow.addEventListener('click', () => window.scrollBy({
    top: 200,
    behavior: 'smooth',
}));