// ==========================
// CREATE STARS
// ==========================

const stars = document.getElementById("stars");

for(let i=0;i<200;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=
    (Math.random()*3+2)+"s";

    star.style.animationDelay=
    (Math.random()*3)+"s";

    stars.appendChild(star);

}

// ==========================
// TYPEWRITER
// ==========================

const typeText=document.getElementById("typeText");
const alwaysBtn=document.getElementById("alwaysBtn");

let i=0;

function typeWriter(){

    if(i<finalMessage.length){

        typeText.textContent+=finalMessage.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }

    else{

        alwaysBtn.classList.add("show");

    }

}

setTimeout(typeWriter,1500);

// ==========================
// ALWAYS BUTTON
// ==========================

const memoryScreen=document.getElementById("memoryScreen");

alwaysBtn.onclick=()=>{

    // Small vibration (supported devices)
    if(navigator.vibrate){

        navigator.vibrate(120);

    }

    createFloating();

    setTimeout(()=>{

        memoryScreen.classList.add("show");

    },2200);

};

// ==========================
// FLOATING HEARTS & KISSES
// ==========================

function createFloating(){

    const emojis=["❤️","💖","💕","💞","💋","😘","💗"];

    let count=0;

    const interval=setInterval(()=>{

        const e=document.createElement("div");

        e.className="float";

        e.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        e.style.left=Math.random()*100+"vw";

        e.style.bottom="-40px";

        e.style.fontSize=
        (20+Math.random()*22)+"px";

        document.body.appendChild(e);

        setTimeout(()=>{

            e.remove();

        },4000);

        count++;

        if(count>70){

            clearInterval(interval);

        }

    },120);

}
