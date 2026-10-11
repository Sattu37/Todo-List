let add = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

add.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li);
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    li.appendChild(delBtn);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let toBeDeleted = event.target.parentElement;
        toBeDeleted.remove();
    }
})