
const playButton = document.querySelector('.play-button');
const defaultText = document.querySelector('.default-text');
const grid = document.querySelector('.grid');


// click su Play
playButton.addEventListener('click', function(){

  //scompare testo, compare griglia, reset griglia
  defaultText.classList.add('d-none');
  grid.classList.remove('d-none');
  grid.innerHTML="";

 
  let selectedDifficulty = parseInt( document.getElementById('difficulty').value);
  console.log(selectedDifficulty);
  
  // creazione griglia in base alla difficoltà
  if(selectedDifficulty === 1){
    createSquares(100);

   }else if(selectedDifficulty === 2){
    createSquares(81);   

  }else{
    createSquares(49);
  };

  //funzione per creare la griglia
  function createSquares (squaresNumber){

    for(i = 0 ; i < squaresNumber; i++){

      const square = document.createElement('div');
      square.className = 'square';
      square.innerHTML = i + 1;  

      if(selectedDifficulty === 1){
        square.classList.add('easy');  

      }else if(selectedDifficulty === 2){
        square.classList.add('hard'); 
      
      }else{
        square.classList.add('crazy');   
  
      };

      console.log(square);
      
      square.addEventListener('click', function(){
        this.classList.add('clicked');    
      });    
    
      grid.append(square);

    };
  
  }

});



