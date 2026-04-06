let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genCompuerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    
    msg.innerText="Game was Draw.Play again";
     msg.style.backgroundColor="#081b31";
};
const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;

        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorePara.innerText=compscore;
      
      msg.innerText = `You lose! ${compChoice} beats your ${userchoice}`;

      msg.style.backgroundColor="red";
    }
}
const playGame=(userchoice)=>{

const compChoice=genCompuerChoice();


if(userchoice===compChoice){
    drawGame();

}else {
    let userwin=true;
    if (userchoice==="rock"){
        userwin=compChoice==="paper"? false:true;

    }else if(userchoice==="paper"){
        userwin=compChoice==="scissors"?false:true;
    }else{
       userwin= compChoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,compChoice);
}
};

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
    playGame(userchoice)
    })
});