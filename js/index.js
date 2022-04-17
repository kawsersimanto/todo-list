let form = document.querySelector(".addForm");
let itemList = document.querySelector(".itemList");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", delItem);

function addItem(event){
    event.preventDefault();
    let newItem = document.querySelector("#item").value;
    let li = document.createElement("li");
    let textNode = document.createTextNode(newItem);
    let delBtn = document.createElement("button");
    let textDelete = document.createTextNode("delete");
    delBtn.className = "del-btn";
    delBtn.appendChild(textDelete);
    li.className = "list-item";
    li.appendChild(textNode);
    li.appendChild(delBtn);
    itemList.appendChild(li);
}

function delItem(event){
    if (event.target.classList.contains("del-btn")){
        let li = event.target.parentElement;
        itemList.removeChild(li);
    }
}