// =============================
// TITLE TYPING ANIMATION
// =============================

const title = document.getElementById("title");

const text = "There are so many things I love about you...";

let index = 0;

function typeTitle(){

    if(index < text.length){

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeTitle,60);

    }

}

typeTitle();


// =============================
// SECRET NOTE
// =============================

function openSecret(){

    const note = document.querySelector(".secret");

    note.style.transform =
    "translateX(-50%) rotateY(180deg) scale(1.05)";

    note.style.transition = ".7s";

    setTimeout(()=>{

        document.getElementById("secretBox").style.display="block";

        document.getElementById("secretBox")
        .scrollIntoView({

            behavior:"smooth"

        });

    },700);

}


// =============================
// NEXT PAGE
// =============================

function nextPage(){

    document.body.style.transition=".8s";
    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="page4.html";

    },800);

}


// =============================
// FLOATING HEARTS
// =============================

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(15+Math.random()*15)+"px";

    heart.style.opacity=".7";

    heart.style.pointerEvents="none";

    heart.style.transition="4s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-110vh)";
        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },4200);

},2200);


// =============================
// NOTE HOVER SOUND (OPTIONAL)
// =============================

// If later you add paper.mp3 inside an
// assets folder, uncomment below.

/*

const notes=document.querySelectorAll(".note");

const audio=new Audio("assets/paper.mp3");

notes.forEach(note=>{

    note.addEventListener("mouseenter",()=>{

        audio.currentTime=0;

        audio.play();

    });

});

*/


// =============================
// SMALL SURPRISE
// =============================

setTimeout(()=>{

    const surprise=document.createElement("div");

    surprise.innerHTML="🌸 Keep looking... one note is hiding a little secret.";

    surprise.style.position="fixed";

    surprise.style.bottom="20px";

    surprise.style.left="50%";

    surprise.style.transform="translateX(-50%)";

    surprise.style.padding="12px 22px";

    surprise.style.background="#111";

    surprise.style.border="1px solid #ff4d6d";

    surprise.style.borderRadius="30px";

    surprise.style.color="#ffb6c1";

    surprise.style.boxShadow="0 0 20px rgba(255,77,109,.35)";

    surprise.style.opacity="0";

    surprise.style.transition=".8s";

    document.body.appendChild(surprise);

    setTimeout(()=>{

        surprise.style.opacity="1";

    },200);

    setTimeout(()=>{

        surprise.style.opacity="0";

        setTimeout(()=>{

            surprise.remove();

        },800);

    },6000);

},9000);
