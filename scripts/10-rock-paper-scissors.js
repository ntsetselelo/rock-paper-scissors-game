let score = JSON.parse(localStorage.getItem('message'));
      
if(score === null){
  score = {
    Wins:0,
    Losses:0,
    Ties:0
  }
}

updateScoreElement();

function playGame(playerMove){
  const computerMove = pickComputermove();
  let result = '';

  if(playerMove === 'Scissors'){

    if(computerMove === 'Rock'){
    result = 'You Loose.';
    }else if(computerMove === 'Paper'){
    result = 'You Win.';
    }else if(computerMove === 'Scissors'){
    result = 'Tie.';
    }
  }else if(playerMove === 'Paper'){

    if(computerMove === 'Rock'){
      result = 'You Win.';
      }else if(computerMove === 'Paper'){
      result = 'Tie.';
      }else if(computerMove === 'Scissors'){
      result = 'You Loose.';
      }
  }else if(playerMove ==='Rock'){

    if(computerMove === 'Rock'){
      result = 'Tie.';
    }else if(computerMove === 'Paper'){
      result = 'You Loose.';
    }else if(computerMove === 'Scissors'){
      result = 'You Win.';
    }

  }

  if(result === 'You Win.'){
      score.Wins++;
  }else if(result === 'You Loose.'){
      score.Losses++;
  }else if(result === 'Tie.'){
      score.Ties++;
  }

  localStorage.setItem('message', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = 
  result;

  document.querySelector('.js-moves').innerHTML = 
  ` You
<img src = "images/${playerMove}-emoji.png" 
class = "move-icon">
<img src = "images/${computerMove}-emoji.png" 
class = "move-icon">
computer`;

   
    

}

function updateScoreElement(){
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.Wins}, losses: ${score.Losses}, Ties: ${score.Ties}`
}
function resetbutton(){
  document.querySelector('.js-moves')
    .innerHTML = "you vs computer"
  document.querySelector('.js-result')
  .innerHTML = "results"
}

function pickComputermove(){
  let computerMove = '';
  const randomNumber = Math.random();

      if(randomNumber >=0 && randomNumber < 1/3){
      computerMove = 'Rock';
      }else if(randomNumber >= 1/3 && randomNumber <2/3){
      computerMove = 'Paper';
      }else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'Scissors';
      }
  return computerMove;

}