// ============================
// STARRY SKY
// ============================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=
    (2+Math.random()*3)+"s";

    star.style.animationDelay=
    Math.random()*3+"s";

    stars.appendChild(star);

}

// ============================
// ELEMENTS
// ============================

const message=document.getElementById("message");

const buttonContainer=
document.getElementById("buttonContainer");

const alwaysBtn=
document.getElementById("alwaysBtn");

const ending=
document.getElementById("ending");

let index=0;

// ============================
// PLAY SCENES
// ============================

function playScene(){

    message.classList.remove("show");

    setTimeout(()=>{

        message.innerHTML=scenes[index].replace(/\n/g,"<br>");

        if(index===scenes.length-1){

            message.classList.add("finalQuestion");

        }

        else{

            message.classList.remove("finalQuestion");

        }

        message.classList.add("show");

    },800);

    // Last scene
    if(index===scenes.length-1){

        setTimeout(()=>{

            buttonContainer.classList.add("show");

        },2500);

        return;

    }

    setTimeout(()=>{

        message.classList.remove("show");

    },4300);

    index++;

    setTimeout(playScene,5600);

}

setTimeout(playScene,1000);

// ============================
// ALWAYS BUTTON
// ============================

alwaysBtn.onclick=()=>{

    if(navigator.vibrate){

        navigator.vibrate(120);

    }

    createLoveRain();

    setTimeout(()=>{

        ending.classList.add("show");

    },2500);

};

// ============================
// HEART & KISS RAIN
// ============================

function createLoveRain(){

    const emojis=[

        "❤️",
        "💖",
        "💕",
        "💞",
        "💗",
        "💋",
        "😘",
        "💘"
        ];

    let amount=0;

    const rain=setInterval(()=>{

        const e=document.createElement("div");

        e.className="float";

        e.innerHTML=
        emojis[Math.floor(Math.random()*emojis.length)];

        e.style.left=
        Math.random()*100+"vw";

        e.style.fontSize=
        (22+Math.random()*24)+"px";

        document.body.appendChild(e);

        setTimeout(()=>{

            e.remove();

        },5000);

        amount++;

        if(amount>=80){

            clearInterval(rain);

        }

    },100);

}
