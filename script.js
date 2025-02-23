let btns = document.querySelectorAll(".btn")
let click = true;
let counting = 0;
let score1=0
let score2=0;
let winnerboard=document.querySelector(".winnerboard");
let winnerdiv = document.querySelector(".winnerdiv")
let cross= document.querySelector(".cross")

let patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
btns.forEach((btns) => {
    btns.addEventListener("click", function () {
        if (click === true) {
            btns.innerHTML = "X"
            click = false
            btns.style.color = "red"

            counting++
checkwinner()
        }
        else {
            btns.innerHTML = "O"
            click = true
            btns.style.color = "green"
            counting++
checkwinner()
        } 
   

        console.log(counting)
        btns.disabled = true

       
    })

})



let reset= document.querySelector(".reset")

reset.addEventListener("click", function () {
    enablebtns ()
    counting=0
    score1 =0
    score2=0
   })

   function enablebtns () {      btns.forEach((btns) => { 
       
    btns.disabled=false;
    btns.innerHTML=""})}
  
function checkwinner(){
    let win=false
   
    for(pattern of patterns){
        let val1 =btns[pattern[0]].innerHTML
   
        let val2 =btns[pattern[1]].innerHTML
        
        let val3 =btns[pattern[2]].innerHTML
        
        if (val1 !== "" && val2!=="" && val3!=="" 
            && val1 === val2 && val2 === val3 &&  btns[pattern[0]].innerHTML=="X") {
                score1++
            whoisthewinner1(val1);
         win =true
        } 
        else if (val1 !== "" && val2!=="" && val3!=="" 
            && val1 === val2 && val2 === val3 &&  btns[pattern[0]].innerHTML=="O") {
                score2++
            whoisthewinner2(val1);
         win =true
        } 
        else if(counting === 9 && val1 !== val2 && val2 !== val3 && !win)
              setTimeout(()=>{
            
                enablebtns ()
                counting = 0;
                winnerboard.style.display="flex";
                winnerdiv.style.display="flex"
               cross.style.display="flex"
                winnerdiv.innerHTML="<h1>It's a Tie</h1>"
            cross.innerText="TRY AGAIN"
              },1000)
             }
        }
        

const whoisthewinner1 = (winner) => {
setTimeout(()=>{
    winnerboard.style.display="flex";
    winnerdiv.style.display="flex"
   cross.style.display="flex"
    winnerdiv.innerHTML="<h3>Congratulations, the winner is</h3> </br> <h1>PLAYER1</>"
    enablebtns ()
    counting = 0;
},1000)   
};
const whoisthewinner2 = (winner) => {
    setTimeout(()=>{
        winnerboard.style.display="flex";
        winnerdiv.style.display="flex"
       cross.style.display="flex"
        winnerdiv.innerHTML="<h3>Congratulations, the winner is</h3> </br> <h1>PLAYER2</>"
            enablebtns ()
        counting = 0;
    },1000)   
    };
let findscore=document.querySelector(".score")

let popupscore= document.querySelector(".popup")
let scoreboard= document.querySelector(".scoreboard")


    findscore.addEventListener("click", function () {
popupscore.style.display="flex"
scoreboard.style.display="flex"
        scoreboard.innerHTML=`<h1>SCOREBOARD</h1>
        <p>Player1 Score: ${score1}</p>
        <p>Player2 Score: ${score2}</p>`


    })

    let closepopup=document.querySelector(".close")
    closepopup.addEventListener("click", function () {
        popupscore.style.display="none"
        scoreboard.style.display="none"
    })

    cross.addEventListener("click", function () {
        winnerboard.style.display="none"
        winnerdiv.style.display="none"
    })
