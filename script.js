const cards = document.querySelectorAll('.card')

cards.forEach(cards => {
    cards.addEventListener("mouseenter", move)
    cards.addEventListener("mouseleave", move)
    
    cards.addEventListener("touchstart", move)
    cards.addEventListener("touchend", move)

    function move(){
        cards.classList.toggle('card-move')
    }
});