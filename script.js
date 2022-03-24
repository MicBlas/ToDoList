const addTask = document.querySelector("button");

addTask.addEventListener("click",function(){
    let task = document.querySelector("input.newTask");

    if(task.value !== ""){
        let newCheckbox = document.createElement("input");
        newCheckbox.type="checkbox";
        newCheckbox.classList.add("done");

        let newInput = document.createElement("input");
        newInput.classList.add("newInputStyle");

        const parentOfTasks = document.querySelector(".containerTasks");
        parentOfTasks.appendChild(newCheckbox);
        parentOfTasks.appendChild(newInput);

        newInput.value=task.value;
        task.value ="";

    }else{
        alert("Write your new task");
    }
})