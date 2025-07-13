let box=document.querySelector("div");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>
{
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  box.style.backgroundColor = randomColor;
})