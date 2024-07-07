const inputContent = document.getElementById("itemTyped");
const groceryItems = document.getElementById("listContent");

function addItem(){
    if(inputContent.value === '')
    {
        alert("You must type something!");
    } else
    {
        let li = document.createElement("li");
        li.innerHTML = inputContent.value;
        groceryItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputContent.value = "";
    saveData();
}

groceryItems.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", groceryItems.innerHTML);
}
function showData(){
    groceryItems.innerHTML = localStorage.getItem("data");
}



showData();

