
const cards = document.querySelectorAll('.memory-card');

let isCardFlipped = false;
let firstCard, secondCard;

function flipcard(){
    //
    // fonction qui est appelee a chq fois qu'on click sur une carte
    //

    // this vaut l'elemetn clique <div class="memory-card">

    this.classList.toggle("flip"); // mettre ou enlever la class "flip"


    if (!isCardFlipped){
        isCardFlipped = true; // 1ere carte retournée
        firstCard = this;
    } else {
        isCardFlipped = false;  // 2second carte retournée 
        secondCard = this;
        if (firstCard.dataset.name === secondCard.dataset.name){ // si les deux cartes correspondent
            firstCard.removeEventListener("click", flipcard);
            secondCard.removeEventListener("click", flipcard);
        } else {
            setTimeout(()=>{
                firstCard.classList.remove("flip"); //retirer la 1ere carte
                secondCard.classList.remove("flip"); // retirer la 2eme carte
            },900);
        }
        }
    }
    cards.forEach((card)=> { //ecoute ttes les cartes
    card.addEventListener("click", flipcard);
    });


    //temps
    let temps = 30
    const tempsElement = document.getElementById("temps")
    tempsElement.innerText = "29"

    
    //reduire le temps a chaque seconde
    function reduireTemps() {
        tempsElement.innerText = temps
        temps--
    };     
    //arrete a 0
    setInterval(reduireTemps, 1000)
        temps = temps <= 0 ? 0 : temps - 1
   
    

   