const message = `Some stories are written in books...

Ours was written in our hearts.

I'm opening my heart...

For one person,

Once again. 🌸`;

const typing = document.getElementById("typing");
const hiddenNote = document.getElementById("hiddenNote");
const openBtn = document.getElementById("openHeartBtn");
const fade = document.getElementById("fade");

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    } else {
        hiddenNote.classList.add("show");

        // Show button
        openBtn.classList.remove("hidden");
        openBtn.style.display = "inline-block";
        openBtn.innerHTML = "❤️ You ❤️";
    }
}

window.onload = function () {
    typeWriter();
};

function openBook() {
    fade.style.opacity = "1";

    setTimeout(function () {
        window.location.href = "page2.html";
    }, 1000);
}
