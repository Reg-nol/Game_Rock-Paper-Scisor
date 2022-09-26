function getComputerChoice (){
    let a = Math.floor(Math.random()*3);
    if(a===0){
        return "rock";
    } else if(a===1){
        return "paper";
    } else {
        return "scisor";
    }
}

function playRound(playerSelection , computerSelection) {
    this.playerSelection = playerSelection;
    this.computerSelection = computerSelection;
    if(this.playerSelection === this.computerSelection){
        return "Its a Draw , You selected "+this.playerSelection+" and Computer selected "+this.computerSelection;
    }else{
           if(this.playerSelection == "rock" && this.computerSelection == "scisor"){
            return "playr selection was "+this.playerSelection+" and computer selected "+ this.computerSelection+ " = Player wins!";
           } else if (this.playerSelection == "scisor" && this.computerSelection == "rock"){
            return "playr selection was "+this.playerSelection+" and computer selected "+ this.computerSelection+ " = Computer wins!";
           }else if(this.playerSelection == "rock" && this.computerSelection == "paper"){
            return "playr selection was "+this.playerSelection+" and computer selected "+ this.computerSelection+ " = Computer wins!";
           }else if (this.playerSelection == "paper" && this.computerSelection == "rock"){
            return "playr selection was "+this.playerSelection+" and computer selected "+ this.computerSelection+ " = Player wins!";
           }else if (this.playerSelection == "scisor" && this.computerSelection == "paper"){
            return "playr selection was "+this.playerSelection+" and computer selected "+ this.computerSelection+ " = Player wins!";
           }else if (this.playerSelection == "paper" && this.computerSelection == "scisor"){
            return "playr selection was "+this.playerSelection+" and computer selected "+ this.computerSelection+ " = Computer  wins!";
           }
           
    }
   
}


            
            
            const computerSelectionVar = getComputerChoice();
        
        function game()
        {
        
        
            
            let a = prompt("Input Your Tool" , "Rock , Paper or Scisor");
            let playerSelectionVar = a.toLowerCase();
          let result = playRound(playerSelectionVar, computerSelectionVar);
          return result;
        
    }
        for(i = 1 ; i < 6 ; i++){
        let resultEnd = game();
        console.log(resultEnd);
        }