// ============================
// STARRY SKY
// ============================

const stars = document.getElementById("stars");

for(let i = 0; i < 180; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";

    star.style.animationDuration =
    (2 + Math.random()*3) + "s";

    star.style.animationDelay =
    Math.random()*3 + "s";

    stars.appendChild(star);

}


// ============================
// ELEMENTS
// ============================

const message = document.getElementById("message");

const buttonContainer =
document.getElementById("buttonContainer");

const alwaysBtn =
document.getElementById("alwaysBtn");

const ending =
document.getElementById("ending");

const scene =
document.getElementById("scene");


let index = 0;


// ============================
// STORY PLAY
// ============================

function playScene(){


    message.classList.remove("show");


    setTimeout(()=>{


        message.innerHTML =
        scenes[index].replace(/\n/g,"<br>");



        if(index === scenes.length-1){

            message.classList.add("finalQuestion");

        }

        else{

            message.classList.remove("finalQuestion");

        }


        message.classList.add("show");


    },800);



    // Stop at final message

    if(index === scenes.length-1){


        setTimeout(()=>{

            buttonContainer.classList.add("show");

        },2000);


        return;

    }


    index++;


    setTimeout(playScene,5500);


}



// Start story

setTimeout(playScene,1000);




// ============================
// ALWAYS BUTTON
// ============================

alwaysBtn.onclick = ()=>{


    if(navigator.vibrate){

        navigator.vibrate(120);

    }



    createLoveRain();



    // Fade everything away

    setTimeout(()=>{


        scene.style.opacity = "0";

        buttonContainer.style.opacity = "0";



        setTimeout(()=>{


            scene.style.display="none";

            buttonContainer.style.display="none";


            // Show final photo

            ending.classList.add("show");



        },2000);



    },2500);



};





// ============================
// LOVE RAIN
// ============================

function createLoveRain(){


    const emojis = [

        "❤️",
        "💖",
        "💕",
        "💞",
        "💗",
        "💋",
        "😘",
        "💘"

    ];



    let count = 0;



    const rain = setInterval(()=>{


        const heart = document.createElement("div");


        heart.className = "float";


        heart.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];



        heart.style.left =
        Math.random()*100 + "vw";



        heart.style.fontSize =
        (22 + Math.random()*24) + "px";



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },5000);



        count++;


        if(count >= 80){

            clearInterval(rain);

        }



    },100);



}
