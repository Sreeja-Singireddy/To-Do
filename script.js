function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value;
    if (taskText.trim() !== "") {
        var listItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
    
        checkbox.addEventListener("change", function(){
            if(checkbox.checked){
                sp.textContent="Completed";
                this.parentNode.toggle("completed");
            }
            else{
                sp.textContent="MArk as completed";
                this.parentNode.toggle("notCompleted");
            }
        });
        var span = document.createElement("span");
        span.textContent = taskText;
        var sp = document.createElement("span");
        sp.id="sp";
        sp.textContent="Mark as Completed";
        var deletBx=document.createElement("button");
        deletBx.innerHTML="Delete";
        deletBx.addEventListener("click",function(){
            this.parentNode.remove();
        })
        listItem.appendChild(span);
        listItem.appendChild(checkbox);
        listItem.appendChild(sp);
        listItem.appendChild(deletBx);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}
function displayCompleted() {

    var listItems = document.querySelectorAll("#taskList li");

    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        var checkboxItem = listItem.querySelector("input[type='checkbox']");

        if (checkboxItem.checked) {
            listItem.style.display = "block";
        } else {
            listItem.style.display = "none";
        }
    }
}
function displayAll(){
    var listItems=document.querySelectorAll("#taskList li");
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        var checkboxItem = listItem.querySelector("input[type='checkbox']");
        listItem.style.display="block";
    }
}
function displayPending(){
    var listItems = document.querySelectorAll("#taskList li");

    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        var checkboxItem = listItem.querySelector("input[type='checkbox']");

        if (!checkboxItem.checked) {
            listItem.style.display = "block";
        } else {
            listItem.style.display = "none";
        }
    }
}
