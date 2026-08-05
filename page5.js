// ===========================
// CREATE TWINKLING STARS
// ===========================

const stars = document.getElementById("stars");

for(let i = 0; i < 180; i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    star.style.animationDelay =
        (Math.random() * 2) + "s";

    stars.appendChild(star);

}


// ===========================
// POPUP
// ===========================

const loveStar = document.getElementById("loveStar");

const popup = document.getElementById("popup");

const closePopup =
document.getElementById("closePopup");


loveStar.onclick = () => {

    popup.classList.add("show");

};


closePopup.onclick = () => {

    popup.classList.remove("show");

};


// Close if background clicked

popup.onclick = (e)=>{

    if(e.target===popup){

        popup.classList.remove("show");

    }

};


// ===========================
// SHOOTING STARS
// ===========================

const shootingContainer =
document.getElementById("shooting-stars");


function shootingStar(){

    const star =
    document.createElement("div");

    star.className = "shooting";

    star.style.left =
    Math.random()*100 + "%";

    star.style.top =
    Math.random()*40 + "%";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}


setInterval(shootingStar,4000);


// ===========================
// NEXT PAGE
// ===========================

const nextBtn =
document.getElementById("nextBtn");


nextBtn.onclick = ()=>{

    window.location.href="page6.html";

};
