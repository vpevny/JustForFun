var pics = document.getElementsByClassName("pics");
var rightpics = document.getElementsByClassName("rightpics");
var leftpics = document.getElementsByClassName("leftpics");
var ppoints = 0
var apoints = 0
var pscore = document.querySelector(".playerScore")
var ascore = document.querySelector(".andyScore")

pscore.textContent = "Score:" + ppoints
ascore.textContent = "Score:" + apoints

//Defs

function hideAll(){
    for (var i=0;i<10;i++){
    pics[i].style.display = "none";
    }
}

function hideRightPics(){
    for (var i=0;i<5;i++){
    rightpics[i].style.display = "none";
    }
}

function hideLeftPics(){
    for (var i=0;i<5;i++){
    leftpics[i].style.display = "none";
    }
}

function rockl(){
    hideLeftPics();
    var rck=document.querySelector(".rockL");
    rck.style.display = "block"
}
function lizardl(){
    hideLeftPics();
    var lzd=document.querySelector(".lizardL");
    lzd.style.display = "block"
}  
function scissorsl(){
    hideLeftPics();
    var scs=document.querySelector(".scissorsL");
    scs.style.display = "block"
}
function papperl(){
    hideLeftPics();
    var ppr=document.querySelector(".papperL");
    ppr.style.display = "block"
}
function spockl(){
    hideLeftPics();
    var spc=document.querySelector(".spockL");
    spc.style.display = "block"
}
function play(){
    var resu = document.querySelector(".resbtn");
    if (document.querySelector(".rockL").style.display !== "block" &&
        document.querySelector(".scissorsL").style.display !== "block" &&
        document.querySelector(".papperL").style.display !== "block" &&
        document.querySelector(".lizardL").style.display !== "block" &&
        document.querySelector(".spockL").style.display !== "block" && 
        ppoints !== 5 && 
        apoints !== 5){
        resu.textContent = "Choose an option";
    } else {
        if (resu.textContent == "Draw" || resu.textContent == "Win" || resu.textContent == "Lose"){
            resu.textContent = "";
            resu.style.backgroundColor = "orange";
            hideAll();
            addClass();
        }
        else if (resu.textContent == "You won!" || resu.textContent == "You lost!"){
            hideAll();
            document.querySelector(".btn1").disabled = true;
            } 
        else {
            hideRightPics();
            var rightpics = document.querySelectorAll(".rightpics");
            rightpics[Math.floor(Math.random()*5)].style.display = "block";
            result();
            score();
    }
    
    
}     
    }
    


function new_game(){
    hideAll();
    ppoints = 0;
    apoints = 0;
    pscore.textContent = "Score:" + ppoints;
    ascore.textContent = "Score:" + apoints;
    document.querySelector(".resbtn").textContent = "";
    addClass();
    document.querySelector(".resbtn").style.backgroundColor = "orange";
    
}

function result(){
//    draw
    var result = document.querySelector(".resbtn");
    if (document.querySelector(".rockL").style.display == "block" &&                                               document.querySelector(".rockP").style.display == "block" || 
        document.querySelector(".scissorsL").style.display == "block" && document.querySelector(".scissorsP").style.display == "block" || 
        document.querySelector(".papperL").style.display == "block" && document.querySelector(".papperP").style.display == "block" || 
        document.querySelector(".lizardL").style.display == "block" && document.querySelector(".lizardP").style.display == "block" || 
        document.querySelector(".spockL").style.display == "block" && document.querySelector(".spockP").style.display == "block"){
            document.querySelector(".resbtn").style.backgroundColor = "orange";
            result.textContent = "Draw";
            remClass()
    }
//    win
    else if (document.querySelector(".rockL").style.display == "block" &&                                              document.querySelector(".scissorsP").style.display == "block" || 
             document.querySelector(".rockL").style.display == "block" && document.querySelector(".lizardP").style.display == "block" || document.querySelector(".scissorsL").style.display == "block" && document.querySelector(".papperP").style.display == "block"|| 
             document.querySelector(".scissorsL").style.display == "block" && document.querySelector(".spockP").style.display == "block"||
             document.querySelector(".papperL").style.display == "block" && document.querySelector(".rockP").style.display == "block"|| 
             document.querySelector(".papperL").style.display == "block" && document.querySelector(".spockP").style.display == "block"|| 
             document.querySelector(".lizardL").style.display == "block" && document.querySelector(".spockP").style.display == "block"|| 
             document.querySelector(".lizardL").style.display == "block" && document.querySelector(".papperP").style.display == "block"|| 
             document.querySelector(".spockL").style.display == "block" && document.querySelector(".rockP").style.display == "block"|| 
             document.querySelector(".spockL").style.display == "block" && document.querySelector(".scissorsP").style.display == "block"){
                document.querySelector(".resbtn").style.backgroundColor = "green";
                result.textContent = "Win";
                remClass()
             }
//    lose
    else{
        document.querySelector(".resbtn").style.backgroundColor = "red"
        result.textContent = ("Lose");
        remClass()
    } 
    
}
function score(){
    if (document.querySelector(".resbtn").textContent == "Win"){
        ppoints += 1
        pscore.textContent = "Score:" + ppoints
        end()
    }
    else if (document.querySelector(".resbtn").textContent == "Lose"){
        apoints += 1
        ascore.textContent = "Score:" + apoints
        end()
    }
}
function end(){
    var resu = document.querySelector(".resbtn")
    if (ppoints == 5){
        resu.textContent = "You won!";
        hideAll();
        remClass();
    }
    else if (apoints == 5){
        resu.textContent = "You lost!";
        hideAll();
        remClass();
        
    }
}
function addClass(){
    rock = document.querySelector(".ro").classList.add("rock");
    scissors = document.querySelector(".sc").classList.add("scissors");
    papper = document.querySelector(".pa").classList.add("papper");
    lizard = document.querySelector(".li").classList.add("lizard");
    spock = document.querySelector(".sp").classList.add("spock");
}

function remClass(){
    rock = document.querySelector(".ro").classList.remove("rock");
    scissors = document.querySelector(".sc").classList.remove("scissors");
    papper = document.querySelector(".pa").classList.remove("papper");
    lizard = document.querySelector(".li").classList.remove("lizard");
    spock = document.querySelector(".sp").classList.remove("spock");
}
//showing of leftpictures

hideAll()    
document.querySelector(".rock").addEventListener("click", rockl);
document.querySelector(".papper").addEventListener("click", papperl);
document.querySelector(".scissors").addEventListener("click", scissorsl);
document.querySelector(".lizard").addEventListener("click", lizardl);
document.querySelector(".spock").addEventListener("click", spockl);

//play button

document.querySelector(".btn1").addEventListener("click", play);

//new game button

document.querySelector(".btn2").addEventListener("click", new_game);
