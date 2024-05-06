const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const clickMeBtn = document.querySelector(".click-me-btn")

yesBtn.addEventListener("click", () => {
  question.innerHTML = "LETS GOOOO!!!";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXl6cmRyOXZua3NwNm9vNXp3Z2E0Yng3ZHk2czRuazgyZ3J5MWN6YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uqcogp0CQvOKc/giphy.gif";
  
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
