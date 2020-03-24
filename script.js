var x = Math.round((Math.random())*3);

var scorePlayer=0, scoreComputer=0, computer, html, newHtml, winner, playerChoiceNumber, playerChoice = document.querySelectorAll('.choice');
reset();

for(var i=0; i<playerChoice.length; i++)
    {
        playerChoice[i].addEventListener('click', function(e) {
           
                x = Math.round((Math.random())*3);
                if(e.target.id == 'rock')
                    playerChoiceNumber = 1;
                else if(e.target.id == 'paper')
                    playerChoiceNumber = 2;
                else
                    playerChoiceNumber = 3;
                winner = getWinner(playerChoiceNumber, x);
                console.log(winner);
                html = '<h3 class="primary-heading output-heading">%MESSAGE%</h3><i class="output-symbol choice fas %ICON% fa-10x"></i><p class="computer-choice">Computer Chose <span>%CHOICE%</span></p>';
                player = getChoice(playerChoiceNumber);
                computer = getChoice(x);
                newHtml = html.replace('%ICON%', 'fa-hand-'+computer);
                newHtml = newHtml.replace('%CHOICE%', computer);
            
                if(winner == -1)
                    {
                        newHtml = newHtml.replace('%MESSAGE%', 'It\'s A Draw');
                    }
            
                else if(winner == 0)
                    {
                        newHtml = newHtml.replace('%MESSAGE%', 'You Win');
                        scorePlayer++
                    }
                
                else
                    {
                        newHtml = newHtml.replace('%MESSAGE%', 'You Lose');
                        scoreComputer++;
                    }
                document.querySelector('.result').innerHTML = newHtml;
                if(winner == 0)
                    document.querySelector('.output-heading').style.color = '#28a745';
                if(winner == 1)
                    document.querySelector('.output-heading').style.color = '#dc3545';
                document.querySelector('.layer-1').style.visibility='visible';
        });
    }

if(document.querySelector('.layer-1').style.visibility == 'visible')
    {
        document.querySelector('.continue').addEventListener('click', function() {
           console.log('MESSAGE'); 
        });
    }

document.querySelector('.continue').addEventListener('click', function() {
   document.getElementById('score-0').textContent=scorePlayer;
    document.getElementById('score-1').textContent=scoreComputer;
    document.querySelector('.layer-1').style.visibility='hidden'; 
});


document.querySelector('.reload').addEventListener('click', reset);

function reset() {
    scorePlayer = 0;
    scoreComputer = 0;
    document.getElementById('score-0').textContent=scorePlayer;
    document.getElementById('score-1').textContent=scoreComputer;
    document.querySelector('.layer-1').style.visibility='hidden';
}

function getWinner(playerOne, playerTwo)
{
    if(playerOne==1)
        {
            if(playerTwo==1)
                return -1;
            else if(playerTwo==2)
                return 1;
            else
                return 0;
        }
    if(playerOne==2)
        {
            if(playerTwo==1)
                return 0;
            else if(playerTwo==2)
                return -1;
            else
                return 1;
        }
    if(playerOne==3)
        {
            if(playerTwo==1)
                return 1;
            else if(playerTwo==2)
                return 0;
            else
                return -1;
        }
}

function getChoice(choice)
{
    if(choice == 1)
        return 'rock';
    else if(choice == 2)
        return 'paper';
    else
        return 'scissors';
}