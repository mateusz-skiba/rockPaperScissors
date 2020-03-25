const turn = {
    playerChoice: "",
    aiChoice: "",
}

const score = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const hands = [...document.querySelectorAll('#yourChoice img')];

function aiHandSlection() {
    score.aiChoice = hands[Math.floor((Math.random()) * hands.length)].dataset.option;
    document.querySelector('[data-summary="ai"]').textContent = score.aiChoice;
    document.querySelector("#aiChoice").style.boxShadow = '0 0 0 4px red';
    if (score.aiChoice == "paper") {     
        document.querySelector("#aiChoice").innerHTML = `<img src="images/paper.jpg">`;
    }
    else if (score.aiChoice == "rock") {     
        document.querySelector("#aiChoice").innerHTML = `<img src="images/rock.jpg">`;
    }
    else if (score.aiChoice == "scissors") {     
        document.querySelector("#aiChoice").innerHTML = `<img src="images/scissors.jpg">`;
    }
}

function handSelection() {
    document.querySelector("#aiChoice").innerHTML = `<img src="images/questionMark.png">`;
    document.querySelector("#aiChoice").style.boxShadow = 'none';
    document.querySelector('[data-summary="ai"]').textContent = "";
    score.playerChoice = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
    document.querySelector('[data-summary="you"]').textContent = score.playerChoice;
}

function gameStart() {
    if (score.playerChoice) {
        aiHandSlection();
        document.querySelector('p.numbers span').textContent = ++score.numbers;
        if (score.playerChoice == "paper" && score.aiChoice == "rock" || score.playerChoice == "rock" && score.aiChoice == "scissors" || score.playerChoice == "scissors" && score.aiChoice == "paper") {
            document.querySelector('p.wins span').textContent = ++score.wins;
            document.querySelector('h2 span').textContent = "Wygrałeś!";
            document.querySelector("h2 span").style.color = "#2afc00";
        }
        else if (score.playerChoice == "paper" && score.aiChoice == "paper" || score.playerChoice == "rock" && score.aiChoice == "rock" || score.playerChoice == "scissors" && score.aiChoice == "scissors") {
            document.querySelector('p.draws span').textContent = ++score.draws;
            document.querySelector('h2 span').textContent = "Remis!";
            document.querySelector("h2 span").style.color = "red";
        }
        else {
            document.querySelector('p.losses span').textContent = ++score.losses;
            document.querySelector('h2 span').textContent = "Przegrałeś!";
            document.querySelector("h2 span").style.color = "red";
        }
    }
    else {
        return alert("Wybierz dłoń")
    }
}

hands.forEach(hand => hand.addEventListener("click", handSelection))
document.querySelector("button").addEventListener("click", gameStart)