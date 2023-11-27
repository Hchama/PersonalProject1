const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const clickMeBtn = document.querySelector(".click-me-btn")

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Dope, see u on January 10th";
  gif.src = "https://media.giphy.com/media/A8FFkyhB2G36g/giphy.gif";
  
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  clickMeBtn.style.display = "block";

});


clickMeBtn.addEventListener("click", ()=> {
  window.location.href = "elements/f.html";
})

noBtn.addEventListener("mouseover", () => {
  moveNoButtonRandomly();
});

function moveNoButtonRandomly() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
