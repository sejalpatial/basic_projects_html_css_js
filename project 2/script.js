let num=document.querySelector("p");//accesses the paragraph element all the prop and methods of it
let one=document.getElementById("one");
let two=document.getElementById("two");
let re=document.getElementById("reset");
one.addEventListener("click",()=>
{
   let current=parseInt(num.innerText);
   //convert the element's text into number(int)
   current++;
   //increment it 
   num.innerText=current;
   //change the inner html
});
two.addEventListener("click",()=>
{   let current=parseInt(num.innerText);
    current--;
    num.innerText=current;
});
re.addEventListener("click",()=>
{
    let current=parseInt(num.innerText);
    current=0;
    num.innerText=current;
})