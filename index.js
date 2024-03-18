let btn =document.querySelector(".check");
let input= document.querySelector(".userIn");
let output= document.querySelector(".output");

let randomNum =Math.floor(Math.random()*(20)+1);
let attempts =5;
let attemptsp=document.querySelector(".attemptsp");
btn.addEventListener("click",function(){
    attempts--;
   
    let userNum =Number(input.value);
    if(attempts<0){
        output.textContent=`you ran out of life!`;
        attempts ++;
    }else{
        if(userNum > 0 && userNum < 20 && userNum !==NaN ){
        if(userNum===randomNum){
            output.textContent =`you have guessed the number correct 🏆 ! the number is ${randomNum}`;
            attemptsp.textContent = "";
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.querySelector(".screenlit").textContent = ` you have won and brought light to our screen 🥹☀️`;
           
            window.location.reload;
        }else if(userNum > randomNum){
            output.textContent =`your guess is high ⚡`;
        }else if(userNum < randomNum){
            output.textContent =`your guess is low 🪫`;
        }
    }else{
        alert("enter a valid number");
        attempts++;
    }
    }
    document.querySelector(".attempts").textContent=attempts;
})