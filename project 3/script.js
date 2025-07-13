const quotes=[
   "The only limit is you.",
  "Believe you can and you're halfway there.",
  "Dream big and dare to fail.",
  "Success is not final, failure is not fatal.",
  "Stay positive, work hard, make it happen.",
  "Act as if what you do makes a difference. It does.",
  "Don't watch the clock; do what it does. Keep going.",
  "Everything you can imagine is real."
];
let newquotebtn=document.getElementById("newquotebtn");

let quote=document.getElementById("quote");
newquotebtn.addEventListener("click",()=>
{
    const random=Math.floor(Math.random()*quotes.length);  //to generate random number 
    const randQuote=quotes[random];
    quote.innerText=randQuote;
})
