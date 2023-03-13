let input = document.getElementById("addToDo");
input.addEventListener("keypress", addToDo);

function addToDo(event){
    if (event.key === "Enter"){
    // get input value
    let newToDoText = event.target.value;
    // build new li item with this task
    let newToDo = document.createElement("li");
    newToDo.innerHTML = `<span><i class="fa fa-trash"></i></span> ${newToDoText}`; 
    // newToDo.textContent = newToDoText;
    // get a hold of parent of child ul
    let toDoList = document.querySelector("ul");
    // append new child li to the parent ul
    toDoList.appendChild(newToDo);
    // empty input
    event.target.value = "";
    }
    console.log(event.key);
}

let li = document.querySelector("ul");
li.addEventListener("click", removeLi);

function removeLi(event) {
    if (event.target.tagName === "I") {
        event.target.parentElement.parentElement.remove(); // Remove the <li> element
      }
}