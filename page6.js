// =============================
// ELEMENTS
// =============================

const letter = document.getElementById("letterText");
const seal = document.getElementById("seal");
const nextBtn = document.getElementById("nextBtn");
const pen = document.getElementById("pen");

// =============================
// TYPEWRITER EFFECT
// =============================

let index = 0;

function writeLetter() {

    if (index < message.length) {

        letter.textContent += message.charAt(index);

        index++;

        // Move pen while writing
        const progress = index / message.length;

        pen.style.top = (90 + progress * 420) + "px";
        pen.style.right = (25 - Math.sin(progress * 12) * 8) + "px";

        // Tiny bounce animation
        pen.style.transform = "rotate(20deg) translateY(-2px)";

        setTimeout(() => {
            pen.style.transform = "rotate(20deg) translateY(0px)";
        }, 40);

        // Auto-scroll the paper
        const paper = document.querySelector(".paper");
        paper.scrollTop = paper.scrollHeight;

        setTimeout(writeLetter, 45);

    } else {

        finishLetter();

    }

}

// Start writing after a short delay
setTimeout(writeLetter, 800);

// =============================
// FINISH LETTER
// =============================

function finishLetter() {

    // Hide pen
    pen.style.opacity = "0";

    // Show wax seal
    seal.classList.add("show");

    // Show next button after a short pause
    setTimeout(() => {

        nextBtn.classList.add("show");

    }, 1000);

}

// =============================
// NEXT PAGE
// =============================

nextBtn.addEventListener("click", () => {

    window.location.href = "page7.html";

});
