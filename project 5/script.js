let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",()=>
{
  event.preventDefault();
  let note=input.value.trim();
  if(note==="")
    {
      return;
    }
  let li=document.createElement("li");
  li.textContent=note;
  li.classList="edit";
  let delbtn=document.createElement("button");
  delbtn.textContent="delete";
  delbtn.classList="deletebtn;"
  
  li.appendChild(delbtn);
  ul.append(li);
  input.value="";
  delbtn.addEventListener("click",()=>
  {
    li.remove();
  })
});