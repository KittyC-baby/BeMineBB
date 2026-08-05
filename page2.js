// ===============================
// ELEMENTS
// ===============================

const envelopeContainer = document.getElementById("envelopeContainer");
const letterContainer = document.getElementById("letterContainer");
const letterText = document.getElementById("letterText");
const flap = document.querySelector(".top");
const nextBtn = document.querySelector(".nextBtn");

// ===============================
// YOUR LETTER
// ===============================

const letter = `Heyy, Twin... hehehe, I mean Baby... 💞

I don't even know what to say here...

When I first started talking to you, I never imagined we'd end up like this. 🥹

Do you remember? I asked, "Does anyone wanna join my GC?" You, Nong TeeTee, and my cousin North joined.

When I saw both of you with TeeTeePor profile pictures, I honestly thought both of you were going to choose TeeTeePor characters. But then... hehehe 😆 Nong took TeeTee. 🙃

But you know... back then, I noticed that it seemed like you really wanted the TeeTee character too. At least, that's what I felt. That's why I didn't want to hurt your feelings. I even asked you again because I was actually ready to give my character to you. 👀

Then, two days later... you wished me a happy birthday. 💌

Forget everyone else...

Your wish felt different.

Normally, I wouldn't even wish someone after knowing them for just a day. 💞

To be honest... I actually hate my birthday. People wishing me usually just makes me hate it even more. 🙇🏻‍♀️👉🏻👈🏻

But when I read your birthday message...

I laughed.

I felt relieved.

And for some reason... I thought,

"This person is really something special." 👉🏻👈🏻

I couldn't stop smiling either.

You really made my day. 💌💞

After that, you were so sassy that I honestly thought you were just a little kid. 😂

Then North told me you were being rude to him and that he wanted another partner. 👉🏻👈🏻

I was like...

"How am I even supposed to tell you that?"

Meanwhile, you kept being your sassy self around everyone. 😭

Then I joined your GC.

Honestly... Phi Duang was so rude to me back then. 🤏🏻😂 She teased me like crazy!

And then...

You started flirting too.

I was SO shocked. 😭

I didn't even know how to react. 🙂

And you even said you already had your TeeTee back then...

Yet you were still flirting with me.

Damn, girl... 🤧😌

I really liked how confident and brave you were around people.

But after getting to know the real you...

I just wanted to become closer to you.

And when you agreed to be my Kim...

Shiahh...

I was genuinely so happy. 💞

Then everything with Phi Qin happened...

I was honestly kind of heartbroken. 💌🧎🏻‍♀️

I know you told me you'd still be my Kim...

But...

You know me.

I overthink everything.

So... I let it go.

I didn't call you my Twin that day because...

How could I?

Do twins really act like us? 🙃

Nahhh.

No one would've believed it. 😂

Like I said...

I just wanted to be close to you.

So "Twin" became my own little way of saying that. 😌🤏🏻

If I called you "friend"...

It would've sounded so ordinary.

And "best friend"... well...

I'm not exactly lucky when it comes to friendships. 👀

Maybe I should've called you "bro" back then...

But that felt way too rude.

"Twin" just sounded sweeter.

Softer.

More... us. 💞

And...

Wait...

This is getting way too long to read, isn't it? 😂

Hehehe...

I'll stop here for now.

The rest of the story is waiting on the next page... 💌

Love,
Rin 💞

--------------------------------

Before you turn this page...

Thank you for giving my heart a place to belong. 💋`;

let index = 0;

// ===============================
// OPEN LETTER
// ===============================

function openLetter(){

    flap.style.transform = "rotateX(180deg)";

    setTimeout(() => {

        envelopeContainer.style.display = "none";
        letterContainer.style.display = "flex";

        typeLetter();

    },900);

}

// ===============================
// TYPE LETTER
// ===============================

function typeLetter(){

    if(index < letter.length){

        letterText.innerHTML += letter.charAt(index);

        letterText.scrollTop = letterText.scrollHeight;

        index++;

        setTimeout(typeLetter,25);

    }else{

        nextBtn.style.display="block";

    }

}

// ===============================
// NEXT PAGE
// ===============================

function nextPage(){

    window.location.href="page3.html";

       }
