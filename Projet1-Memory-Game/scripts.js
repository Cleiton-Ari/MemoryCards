
const cards = document.querySelectorAll('.memory-card');

let isCardFlipped = false;
let firstCard, secondCard;

function flipcard(){
    this.classList.toggle("flip");
    if (!isCardFlipped){
        isCardFlipped = true;
        firstCard = this;
    } else {
        isCardFlipped = false;
        secondCard = this;
        if (firstCard.dataset.name === secondCard.dataset.name){
            firstCard.removeEventListener("click", flipcard);
            secondCard.removeEventListener("click", flipcard);
        } else {
            setTimeout(()=>{
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
            },1500);
        }
        }
    }
    cards.forEach((card)=> {
    card.addEventListener("click", flipcard);
    });

    let temps = 30
    const timerElement = document.getElementById("timer")
    timerElement.innerText = "29"

    

    function diminuerTemps() {
        timerElement.innerText = temps
        temps--
    }

    setInterval(diminuerTemps, 1000)
    temps = temps <= 0 ? 0 : temps - 1