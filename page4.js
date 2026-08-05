// ================================
// INTRO TYPING
// ================================

const titleText = "The next chapter...";
const messageText = "Some memories aren't stored in albums... they're stored in our hearts. ❤️";

let t = 0;
let m = 0;

const title = document.getElementById("typingTitle");
const text = document.getElementById("typingText");

function typeTitle(){

    if(t < titleText.length){

        title.innerHTML += titleText.charAt(t);

        t++;

        setTimeout(typeTitle,70);

    }

    else{

        setTimeout(typeMessage,500);

    }

}

function typeMessage(){

    if(m < messageText.length){

        text.innerHTML += messageText.charAt(m);

        m++;

        setTimeout(typeMessage,35);

    }

    else{

        setTimeout(showMemoryBox,1200);

    }

}

typeTitle();


// ================================
// SHOW MEMORY BOX
// ================================

function showMemoryBox(){

    document.getElementById("memoryBox").classList.remove("hidden");

}


// ================================
// OPEN MEMORY BOX
// ================================

function openMemoryBox(){

    const lid = document.querySelector(".box-lid");

    lid.style.transform = "rotateX(-120deg)";

    setTimeout(()=>{

        document.getElementById("photoArea").classList.remove("hidden");

        document.getElementById("photoArea").scrollIntoView({

            behavior:"smooth"

        });

    },800);

}


// ================================
// PHOTO DATA
// ================================

const memories=[

{

title:"The First Talk 💌",

caption:"How could I ever forget that day? ❤️"

},

{

title:"The Laugh 😂",

caption:"Every time I see your chats, I can't help but smile. 🤍"

},

{

title:"Matching PFPs 💞",

caption:"I hope one day we can have matching PFPs of our own. ❤️"

},

{

title:"Flirty Talks 🤭",

caption:"How do you always find a way to make me blush every single time? ❤️"

},

{

title:"Ordinary Days 🌸",

caption:"I don't think any day could ever be ordinary when I have you. 💖"

},

{

title:"Understanding Moments 🫶",

caption:"I don't think anyone has ever understood me the way you do. ❤️"

},

{

title:"Us ❤️",

caption:"Can we stay together forever... just like TeeTeePor? ❤️"

},

{

title:"Reserved For Our Future 🌍",

caption:"I don't know where life will take us... but I hope one day we'll look back at this scrapbook and smile. World trip together? ✈️❤️"

}

];


// ================================
// OPEN PHOTO
// ================================

function openPhoto(id){

    document.getElementById("viewer").classList.remove("hidden");

    document.getElementById("viewerImage").src="photo"+id+".jpg";

    document.getElementById("viewerTitle").innerHTML=memories[id-1].title;

    typeCaption(memories[id-1].caption);

}


// ================================
// TYPE CAPTION
// ================================

function typeCaption(sentence){

    const area=document.getElementById("viewerCaption");

    area.innerHTML="";

    let i=0;

    function type(){

        if(i<sentence.length){

            area.innerHTML+=sentence.charAt(i);

            i++;

            setTimeout(type,25);

        }

    }

    type();

}


// ================================
// CLOSE VIEWER
// ================================

function closeViewer(){

    document.getElementById("viewer").classList.add("hidden");

}


// ================================
// NEXT PAGE
// ================================

function nextPage(){

    document.body.style.opacity="0";

    document.body.style.transition=".8s";

    setTimeout(()=>{

        window.location.href="page5.html";

    },800);

}
