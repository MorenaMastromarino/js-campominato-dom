
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

  let squaresNumber;
  
  // creazione griglia in base alla difficoltà
  if(selectedDifficulty === 1){
    squaresNumber = 100;

   }else if(selectedDifficulty === 2){
    squaresNumber = 81;   

  }else{
    squaresNumber = 49;
  };

  createSquares();

  


  //creazione bombe  
  const bombs = bombsGenerator(16);
  console.log('bombs', bombs);  




  //funzione per creare la griglia
  function createSquares (){

    for(let i = 0 ; i < squaresNumber; i++){

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
      
   
      //click sulla casella
      square.addEventListener('click', function(){
        this.classList.add('clicked');    
        
        
        if(bombs.includes(parseInt(event.target.innerText))){
          this.classList.add('bomb'); 
                   
        }; 
       

      });   

      grid.append(square);      

    };
   
  
  };
 

  //funzione per generare le bombe
  function bombsGenerator (bombsNumber){

    const bombs = [];

    while(bombs.length < bombsNumber){

      const bomb = getRandomNumber(1, squaresNumber);
      
      if(!bombs.includes(bomb)){
        bombs.push(bomb);
      };    

    };

    return bombs;
  };



});


//funzione numero random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};


