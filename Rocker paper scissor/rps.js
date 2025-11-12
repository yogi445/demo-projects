let score = JSON.parse(localStorage.getItem('score'));
    if(score === null) {
        score = {
        wins : 0,
        losses : 0,
        tie : 0
    }
}
jsscore();
let autoplaying=false;
let validno;
  function autoplay(){
    if(!autoplaying){
        validno=setInterval(() => {
     const picked=computermove();
     game1(picked);
        },1000)
        autoplaying=true;
      }else{
clearInterval(validno);
autoplaying=false;
      }
    }
    document.body.addEventListener('keydown', (event) => {
        if(event.key==='r'){
            game1('rock');
        }
        else if(event.key==='s'){
            game1('scissors');
        }else if(event.key==='p'){
            game1('paper');
        }
    })
   function game1(picked) {
    const move =  computermove();
    let result='';
    if(picked ==='rock') {
    if(move === 'rock'){
    result =  'tie';
    }
    else if(move === 'scissors'){
    result =  'you win';
    }
    else if(move === 'paper'){
    result =  'you loose';
    }
    }

    else if (picked === 'paper') {
    if(move === 'rock'){
    result =  'you win';
    }
    else if(move === 'scissors'){
    result =  'you loose';
    }
    else if(move === 'paper'){
    result =  'tie';
    }
    }
    
    else if(picked === 'scissors'){
    if(move === 'rock'){
    result =  'you loose';
    }
    else if(move === 'scissors'){
    result =  'tie';
    }
    else if(move === 'paper'){
    result =  'you win';
    }
    }
    if(result === 'you win') {
        score.wins=score.wins+1;
    }else if(result === 'tie'){
        score.tie+=1;
    }else if(result==='you loose'){
        score.losses+=1;
    }
    jsscore();
       document.querySelector('.tally').innerHTML=` ${result}`;
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.data').innerHTML=`You: 
    <img src="images/${picked}-emoji.png" class="image">
    Computer:
    <img src="images/${move}-emoji.png" class="image">`;
    }
      function jsscore(){
document.querySelector('.js-score')
.innerHTML=`Wins:${score.wins} , Looses:${score.losses} , Ties:${score.tie}`;
      }
function computermove() {
 const mathnumber = Math.random();
 let move = '';
 if(mathnumber>=0 && mathnumber<1/3)
{
 move = 'rock';  
}
else if(mathnumber>=1/3 && mathnumber<2/3)
{
    move = 'paper';
}
else if(mathnumber>=2/3 && mathnumber<1)
{
    move = 'scissors';
}
return move;
}