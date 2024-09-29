const inputbox = document.getElementById("input-box")
const listcontents = document.getElementById("list-contents")
function Addtask() {
    if (inputbox.value === '') {      //if inputbox is empty
        alert("You must write something...");   //this would be shown as alert
    }
    else {
        let li = document.createElement("li"); //if we write something on inputbox, it will be stored in "li" variable
        li.innerHTML = inputbox.value;         //whatever text willbe added in "li"
        listcontents.appendChild(li);         //"li"(newchild) willbe displayed under "listcontents"(parentnode)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputbox.value = "";
    savedata();
}


listcontents.addEventListener("click", function (e) { //whenever click in container, where we stored all tasks. first itwill check where we clicked.
    if (e.target.tagName === "LI") {  //if we clicked on "Li"
        e.target.classList.toggle("checked");  //it should add checked classname.if "checked" class is already there, it will remove that bcz we added "classlist.toggle" from "target" element
        savedata();
    }
    else if (e.target.tagName === "SPAN") {  //if "clicked" targetelement is "span"
        e.target.parentElement.remove();  //if we click on span it will delete "parentelement"(Li)
        savedata();
    }
}, false);




function savedata() {
    localStorage.setItem("data", listcontents.innerHTML);
}
function showtask() {
    listcontents.innerHTML = localStorage.getItem("data");
}
showtask();


