let gameSeq = [];
let userSeq = [];

let btns = ["red" , "orange" , "green" ,"purple"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function() {
    if (started == false ) {
        console.log("game is started.");
        started = true; 
        
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    },220);
}
function aftFlash(btn) {
    btn.classList.add("aftFlash")
    setTimeout(function() {
        btn.classList.remove("aftFlash")
    },220);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;

    let randIdx = (Math.floor(Math.random() * 4));
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    // console.log(`randIdx = ${randIdx}`);
    // console.log(`randcol = ${randCol}`);
    // console.log(`randBtn = ${randBtn}`);
    gameSeq.push(randCol);
    console.log("game seq = ",gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx) {
    console.log(`level ${level}`);
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else {
        h3.innerHTML = `Game over! Your score is <b>${level * 10 - 10}</b> Press Any key to restart.`;

        document.querySelector('*').style.backgroundColor = "red";
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector('*').style.backgroundColor = "#7090df"
            document.querySelector('body').style.backgroundColor = "#7090df"
        }, 300)

        reset();
    }
}

function btnPress() {
    let btn = this;    
    console.log("this btn = ",this)
    aftFlash(btn);

    userCol = btn.getAttribute("id");
    userSeq.push(userCol);

    console.log(`userSeq ${userSeq}`);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn) {
    btn.addEventListener("click" , btnPress);
}

function reset() {
    setTimeout(
        started = false,gameseq = [],userSeq = [],level = 0 ,1000)
}

function score() {

}