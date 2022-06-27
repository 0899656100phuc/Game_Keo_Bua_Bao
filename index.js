
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceBtn')

let player
let computer;
let result;

choiceBtns.forEach(button =>{
    button.addEventListener('click',()=>{
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Người chơi: ${player}`;
        computerText.textContent = `Máy: ${computer}`;
        resultText.textContent = checkWin();
        
    })
});

//function
function computerTurn(){
    const randNum = Math.floor(Math.random()*3) + 1;
    console.log(randNum)
    switch(randNum){
        case 1:
            computer = "Kéo";
            break;
        case 2:
            computer = "Búa";
            break;
        case 3:
            computer = "Bao";
            break;
    }

}
function checkWin(){
    if(player == computer){
        return "Hòa !!";
    }
    else if(computer =="Kéo"){
        return (player =="Búa")?"Bạn đã thắng!" : "Bạn thua!"
    }
    else if(computer =="Búa"){
        return (player =="Bao")?"Bạn đã thắng!" : "Bạn thua!"
    }
    else if(computer =="Bao"){
        return (player =="Kéo")?"Bạn đã thắng!" : "Bạn thua!"
    }
    
}