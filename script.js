const addTask = document.querySelector("button");
let containerTasks = document.querySelector(".containerTasks");
let task = document.querySelector("input.newTask");

//Add new task
addTask.addEventListener("click",function(){
    if(task.value !== ""){
        let newCheckbox = document.createElement("input");
        newCheckbox.type="checkbox";
        newCheckbox.classList.add("done");

        let newInput = document.createElement("input");
        newInput.classList.add("newInputStyle");

        containerTasks.appendChild(newCheckbox);
        containerTasks.appendChild(newInput);

        newInput.value=task.value;
        
        //saveTask();
        newInput.classList.add("dataset");
        newInput.dataset.task =task.value;
        task.value ="";
    }else{
        alert("Write your new task");
    }
})

//Possibility to delete task
containerTasks.addEventListener("change",function(e){
    let nextElement = e.target.nextElementSibling;
    
    //Add date and time
    let today = new Date();
    let date = today.getFullYear()+"."+today.getMonth()+"."+today.getDay();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let timeOfTask = date+" "+time;
    //alert(timeOfTask);
    
    nextElement.classList.add("dataset");
    nextElement.dataset.time= timeOfTask;
    //alert(nextElement.dataset.time);
    
    
    
    if(e.target.classList.contains("done")){
        nextElement.classList.toggle("deleteTask");
        e.target.classList.toggle("deleteTask");
    
        //Deleted task goes to the end of the list
    if(e.target.classList.contains("deleteTask")){
        containerTasks.appendChild(nextElement);
        containerTasks.insertBefore(e.target,nextElement);
        nextElement.value +="   time:"+timeOfTask;
    }else{
        nextElement.dataset.time = "";
        nextElement.value = nextElement.dataset.task;
    }
}
})