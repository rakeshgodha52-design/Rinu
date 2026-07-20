const intro = document.getElementById("intro");
const giftSection = document.getElementById("giftSection");
const gallery = document.getElementById("gallery");
const messageSection = document.getElementById("messageSection");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");

const music = document.getElementById("music");

const typing = document.getElementById("typing");

const secretBtn = document.getElementById("secretBtn");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");

const message = `Happy Raksha Bandhan ❤️

Dear Rinu,

Maybe I don't have solutions for every problem you face.

But I promise...

You will never have to face anything alone.

Whenever life becomes difficult,

remember your brother is always by your side.

Keep smiling.

Keep shining.

Love You Forever ❤️

— Rakesh`;

startBtn.onclick = () => {
intro.style.display="none";
giftSection.style.display="flex";
music.play();
};

giftBox.onclick = () => {

giftBox.innerHTML="💖";

giftBox.style.transform="scale(1.4)";

setTimeout(()=>{

giftSection.style.display="none";

gallery.style.display="flex";

setTimeout(()=>{

gallery.style.display="none";

messageSection.style.display="flex";

typeWriter();

},6000);

},1500);

};

let i=0;

function typeWriter(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,45);

}else{

setTimeout(()=>{

messageSection.style.display="none";

finalPage.style.display="flex";

fireworks();

},2000);

}

}

secretBtn.onclick=()=>{

letter.style.display="flex";

};

closeLetter.onclick=()=>{

letter.style.display="none";

};

function fireworks(){

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.transition="4s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-50px";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},4000);

},250);

}
// Loader

window.onload = () => {

setTimeout(() => {

document.getElementById("loader").style.display="none";

},4000);

};

// Floating Hearts

setInterval(() => {

let heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = ["❤️","💖","✨","🌸"][Math.floor(Math.random()*4)];

heart.style.left = Math.random()*100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize = (20 + Math.random()*25) + "px";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
},8000);

},700);
