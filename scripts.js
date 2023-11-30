const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const humanDisplay = document.querySelector('#human-display');
const machineDisplay = document.querySelector('#machine-display')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    humanDisplay.innerHTML = human;
    machineDisplay.innerHTML = machine ;

    console.log("Human:" + human + "machine: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    } else if(
        
    (human === 'paper' && machine ==='rock') || 
    (human === 'rock' && machine === 'scissors' || 
    (human === 'scissors' && machine=== 'paper')
    )){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    }else{
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Voce perdeu para a Alexa!"
    }

}

/* 
    pedra > tesoura



*/