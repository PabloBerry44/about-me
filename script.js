const cards = document.querySelectorAll('.card')

//TRIGGER FOR DESKTOP

for(var i = 0; i < cards.length; i++){
    cards[i].addEventListener('mouseenter', function(){
      // remove card-move class for all elements
      for(var i = 0; i < cards.length; i++) {
         cards[i].classList.remove('card-move');
      }
      // add card-move to clicked element
      this.classList.add('card-move');
    });
  }

//TRIGGER FOR MOBILE DEVICES AND TOUCH SCREENS

  for(var i = 0; i < cards.length; i++){
    cards[i].addEventListener('touchstart', function(){
      // remove card-move class for all elements
      for(var i = 0; i < cards.length; i++) {
         cards[i].classList.remove('card-move');
      }
      // add card-move to clicked element
      this.classList.add('card-move');
    });
  }
  