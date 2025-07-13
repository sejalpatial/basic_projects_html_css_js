let btn=document.querySelector("button");
let form=document.querySelector("form");
let ul=document.querySelector("ul");
// let arr=[]; only required when you need to store the data in local storage 

form.addEventListener("submit",()=>  //submit for both enter and click on button
{ 
    event.preventDefault();  //when a form submit the page automatically reloads by default 
  
    let task=input.value.trim();//input.value is used to take input what user entered and trm is to clear whitespaces from start and end
   if(task=="")
    return;
   // arr.push(task);
   let li=document.createElement("li");  
   li.textContent=task;//li saves the task in it

   let del=document.createElement("button");
   del.textContent="delete";
   del.classList="deletebtn";
   li.appendChild(del);   //li contains del
   ul.append(li);         //ul conatins li
   input.value="";        //after insertion clear the input box

   del.addEventListener("click",()=>
   {
      ul.removeChild(li); 
      // arr.filter(t=>t!==task)
   });
   li.addEventListener("click",()=>
      {
         li.classList.toggle("completed");
      }
   );


   
});

