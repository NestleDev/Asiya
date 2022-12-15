const LeftBtn = document.querySelector("#left");
const RightBtn = document.querySelector("#right");
const items = document.querySelector("#items");
 let currenRight=0;
 RightBtn.addEventListener("click", e=>{
    e.preventDefault();
    console.log(e)
    currenRight += 100;
    items.style.right =`${currenRight}px`;
 });
 LeftBtn.addEventListener("click", e=>{
   

 });