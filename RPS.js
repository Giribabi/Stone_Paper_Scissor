var count=0;
var computer=0;
var user=0;
var user_score=document.getElementById("u_score");
var computer_score=document.getElementById("c_score");
user_score.innerHTML+="0";
computer_score.innerHTML+="0";
var rock=document.getElementById("rock1");
var paper=document.getElementById("paper1");
var scissor=document.getElementById("scissor1");
var user_choice="";
var computer_choice="";
rock.addEventListener("click",function(){
    var comp_choice=random_choice();
    winner("rock",comp_choice);
})
paper.addEventListener("click",function(){
    var comp_choice=random_choice();
    winner("paper",comp_choice);
})
scissor.addEventListener("click",function(){
    var comp_choice=random_choice();
    winner("scissor",comp_choice);
})
function random_choice(){
    var cc=Math.floor(Math.random()*3);
    if(cc==0){
        return "rock";
    }
    else if(cc==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}
function winner(user_choice,computer_choice){
    if(computer_choice=="rock")
    {
        var choice=document.getElementById("rock2");
        choice.style.animation="zoom 600ms forwards ease";
        setTimeout(()=>choice.style.animation='none',601);
    }
    else if(computer_choice=="paper")
    {
        var choice=document.getElementById("paper2");
        choice.style.animation="zoom 600ms forwards ease";
        setTimeout(()=>choice.style.animation='none',601);
    }
    else if(computer_choice=="scissor")
    {
        var choice=document.getElementById("scissor2");
        choice.style.animation="zoom 600ms forwards ease";
        setTimeout(()=>choice.style.animation='none',601);
    }
    var result=document.getElementById("pop");
    if(user_choice==computer_choice)
    {
        user++;
        computer++;
    }
    else if(user_choice=="paper" && computer_choice=="rock")
    {
        user++;
    }
    else if(user_choice=="paper" && computer_choice=="scissor")
    {
        computer++;
    }
    else if(user_choice=="rock" && computer_choice=="paper")
    {
        computer++;
    }
    else if(user_choice=="rock" && computer_choice=="scissor")
    {
        user++;
    }
    else if(user_choice=="scissor" && computer_choice=="paper")
    {
        user++;
    }
    else
    {
        computer++;
    }
    var u=user;
    var c=computer;
    user_score.innerHTML="Your Score: "+u.toString();
    computer_score.innerHTML="Computer Score: "+c.toString();
    var res=document.getElementById("result");
    if(user>computer)
    {
        res.style.animation='trophee-left 1000ms backwards ease';
        setTimeout(()=>res.style.animation='none',1001);
    }
    else if(user<computer)
    {
        res.style.animation='trophee-right 1000ms backwards ease';
        setTimeout(()=>res.style.animation='none',1001);
    }
    if(user==10 && computer<10)
    {
        result.innerHTML="Cup Meedhi";
        result.style='border: 10px double green';
        result.style.animation='zoom 600ms forwards ease';
        setTimeout(()=>{window.location.reload(true);},2000);
    }
    else if(user==10 && computer==10)
    {
        result.innerHTML="Draw";
        result.style='border: 10px double blue';
        result.style.animation='zoom 600ms forwards ease';
        setTimeout(()=>{window.location.reload(true);},2000);
    }
    else if(user<10 && computer==10)
    {
         result.innerHTML="Cup Naadhi";
         result.style='border: 10px double orange';
         result.style.animation='zoom 600ms forwards ease';
         setTimeout(()=>{window.location.reload(true);},2000);
    }
}