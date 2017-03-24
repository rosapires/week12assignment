let myBoy = document.querySelector('#boy');
let boyJumpbutton = document.querySelector('#jump');
let boyOneJumpbutton = document.querySelector('#onejump');
let boyMovebutton = document.querySelector('#move');
let boyFadebutton = document.querySelector('#fade');
let boyGlowbutton = document.querySelector('#glow');
let boyFallDownbutton = document.querySelector('#falldown');
let boyShakebutton = document.querySelector('#shake');
let boyMirrorbutton = document.querySelector('#mirror');
let boyRollInbutton = document.querySelector('#rollin');
let boyHitFishbutton = document.querySelector('#hitfish');

function makeBoyJump(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyJump");
}

function removeClassJump(){
    console.log("I have been called");
    myBoy.classList.remove("boyJump");
}


function makeBoyOneJump(){
    console.log("I have been clicked");
    myBoy.classList.add("boyOneJump");
}

function removeClassOneJump(){
    console.log("I have been called");
    myBoy.classList.remove("boyOneJump");
}

function makeBoyMove(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyMove");
}

function removeClassMove(){
    console.log("I have been called");
    myBoy.classList.remove("boyMove");
}

function makeBoyFade(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyFade");
}

function removeClassFade(){
    console.log("I have been called");
    myBoy.classList.remove("boyFade");
}

function makeBoyGlow(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyGlow");
}

function removeClassGlow(){
    console.log("I have been called");
    myBoy.classList.remove("boyGlow");
}

function makeBoyFallDown(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyFallDown");
}

function removeClassFallDown(){
    console.log("I have been called");
    myBoy.classList.remove("boyFallDown");
}

function makeBoyShake(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyShake");
}

function removeClassShake(){
    console.log("I have been called");
    myBoy.classList.remove("boyShake");
}

function makeBoyMirror(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyMirror");
}

function removeClassMirror(){
    console.log("I have been called");
    myBoy.classList.remove("boyMirror");
}

function makeBoyRollIn(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyRollIn");
}

function removeClassRollIn(){
    console.log("I have been called");
    myBoy.classList.remove("boyRollIn");
}
function makeBoyHitFish(){
    console.log("I have been clicked");
    myBoy.classList.toggle("boyHitFish");
}

function removeClassHitFish(){
    console.log("I have been called");
    myBoy.classList.remove("boyHitFish");
}

boyJumpbutton.addEventListener("click", makeBoyJump);
myBoy.addEventListener("animationend", removeClassJump);

boyOneJumpbutton.addEventListener("click", makeBoyOneJump);
myBoy.addEventListener("animationend", removeClassOneJump);

boyMovebutton.addEventListener("click", makeBoyMove);
myBoy.addEventListener("animationend", removeClassMove);

boyFadebutton.addEventListener("click", makeBoyFade);
myBoy.addEventListener("animationend", removeClassFade);

boyGlowbutton.addEventListener("click", makeBoyGlow);
myBoy.addEventListener("animationend", removeClassGlow);

boyFallDownbutton.addEventListener("click", makeBoyFallDown);
myBoy.addEventListener("animationend", removeClassFallDown);

boyShakebutton.addEventListener("click", makeBoyShake);
myBoy.addEventListener("animationend", removeClassShake);

boyMirrorbutton.addEventListener("click", makeBoyMirror);
myBoy.addEventListener("animationend", removeClassMirror);

boyRollInbutton.addEventListener("click", makeBoyRollIn);
myBoy.addEventListener("animationend", removeClassRollIn);

boyHitFishbutton.addEventListener("click", makeBoyHitFish);
myBoy.addEventListener("animationend", removeClassHitFish);


<audio id=""

