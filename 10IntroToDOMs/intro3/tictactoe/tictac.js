let player='X';
let gamestate= ['','','','','','','','',''];
let winner=document.getElementById('winner');
let winnerDeclare=false;

let winningConditions=
[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]
//handle my click
function handleclick()
{
    let td=event.target;
    console.log(td);
    let index=td.getAttribute('index');
    //check if empty
    if(td.innerHtml=='')
    {
        td.innerHtml=player;
        gamestate[index]=player;

        checkwinner();
        checkdraw();
        changePlayer();
    }
    
}

function changePlayer()
{
    player= player=='X' ? 'O' : 'X';
}

//check for winner
function checkwinner()
{
    for(let i=0;i<9;i++)
    { [0,1,2]
        var a=winningConditions[i][0];
        var b=winningConditions[i][1];
        var c=winningConditions[i][2];
        if(gamestate[a]==player &&
            gamestate[b]==player &&
            gamestate[c]==player){
                winnerDeclare=true;
                winner.innerHTML="Winner is"+player;            }

    }
}
//check for draw
function checkdraw()
{
    if(!gamestate.includes('')&& winnerDeclare==false)
    {
        winner.innerHTML="Game is Tied";
    }
}
//intialize
function init()
{
    var tdCells=document.getElementsByTagName('td');
    for(let i=0;i<9;i++)
    {
        tdCells[i].addEventListener('click',handleclick);
    }
}

init();