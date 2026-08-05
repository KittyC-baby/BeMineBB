// ==========================
// STARS
// ==========================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=
    (Math.random()*3+2)+"s";

    stars.appendChild(star);

}


// ==========================
// DREAMS
// ==========================

const dreams=[

"🌍✈️ Let's travel the world together.",

"🌅 Let's watch every sunrise and sunset together... just you and me. ❤️",

"🏡 One day... only us!! Walking hand in hand on a cold night, holding each other so tightly. 🫣❤️",

"☕ Slow mornings... coffee... and you. That's all I need. 💞",

"🌙 Waking up next to each other... then staying up late every night, talking about everything and nothing. 🥹💌",

"❤️ My biggest dream isn't a place... it's simply growing old with you."

];


// ==========================
// ELEMENTS
// ==========================

const fireflies=document.querySelectorAll(".firefly");

const card=document.getElementById("dreamCard");

const text=document.getElementById("dreamText");

const closeBtn=document.getElementById("closeDream");

const finalMessage=document.getElementById("finalMessage");

const nextBtn=document.getElementById("nextBtn");

let opened=0;


// ==========================
// OPEN DREAM
// ==========================

fireflies.forEach((fly,index)=>{

    fly.onclick=()=>{

        if(fly.classList.contains("done")) return;

        fly.classList.add("done");

        fly.style.opacity="0";

        fly.style.pointerEvents="none";

        text.textContent=dreams[index];

        card.classList.add("show");

        opened++;

    };

});


// ==========================
// CLOSE CARD
// ==========================

closeBtn.onclick=()=>{

    card.classList.remove("show");

    if(opened===dreams.length){

        showEnding();

    }

};


// ==========================
// FINAL MAGIC
// ==========================

function showEnding(){

    // Create floating hearts

    for(let i=0;i<20;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💛";

        heart.style.position="fixed";

        heart.style.left=(40+Math.random()*20)+"%";

        heart.style.top="70%";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.transition="3s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform=
            `translate(${Math.random()*250-125}px,-350px)`;

            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },3200);

    }

    // Show final message

    setTimeout(()=>{

        finalMessage.classList.add("show");

    },1800);

    // Show next button

    setTimeout(()=>{

        nextBtn.classList.add("show");

    },3200);

}


// ==========================
// NEXT PAGE
// ==========================

nextBtn.onclick=()=>{

    window.location.href="page8.html";

};
