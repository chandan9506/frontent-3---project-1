let decBtn = document.getElementById("dec");
let incBtn = document.getElementById("inc");
let clrBtn = document.getElementById("clr");
let errorMessage = document.getElementById("paraElement");
let count = document.getElementById("spanElement");
let currentValue = parseInt(count.innerHTML);


decBtn.addEventListener("click", handleDec);
incBtn.addEventListener("click", handleInc);
clrBtn.addEventListener("click", handleClr);

if(currentValue == 0)   clrBtn.style.display='none';

function handleDec(){
    if(currentValue >=1){
        currentValue--;
        count.innerHTML = currentValue;
        clrBtn.style.display='block';
        errorMessage.innerText ="";
    }
    else if(currentValue ==0){
        decBtn.classList.remove("active");
        if(currentValue == 0)   clrBtn.style.display='none';
        errorMessage.innerText = "Error: Cannot go below 0";
    } 
}

function handleInc(){
    currentValue++;
    count.innerHTML = currentValue;
    clrBtn.style.display='block';
    errorMessage.innerText ="";
}

function handleClr(){
    errorMessage.innerText ="";
    currentValue = 0;
    count.innerHTML = currentValue;
    if(currentValue == 0)   clrBtn.style.display='none';
}  
