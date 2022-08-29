const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  console.log(colors[randomNumber]);
  let printColor = "";
  printColor += colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = printColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
