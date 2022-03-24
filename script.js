const addTask = document.querySelector("button");
let containerTasks = document.querySelector(".containerTasks");

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

//Possibility to delete task
containerTasks.addEventListener("change",function(e){
    if(e.target.classList.contains("done")){
        //console.log("done");
        let nextElement = e.target.nextElementSibling;
        nextElement.classList.toggle("deleteTask");
        e.target.classList.toggle("deleteTask");
    
        //Deleted task goes to the end of the list
    if(e.target.classList.contains("deleteTask")){
        //console.log("works");
        containerTasks.appendChild(nextElement);
        containerTasks.insertBefore(e.target,nextElement);
    }
}})