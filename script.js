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
    let nextElement = e.target.nextElementSibling;
    
    if(e.target.classList.contains("done")){
        //console.log("done");
        
        nextElement.classList.toggle("deleteTask");
        e.target.classList.toggle("deleteTask");
    
        //Deleted task goes to the end of the list
    if(e.target.classList.contains("deleteTask")){
        //console.log("works");
        containerTasks.appendChild(nextElement);
        containerTasks.insertBefore(e.target,nextElement);
    }else{
        nextElement.dataset.time= "";
        //nextElement.value =
    }
    
    //Add date and time
    let today = new Date();
    let date = today.getFullYear()+"."+today.getMonth()+"."+today.getDay();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let timeOfTask = date+" "+time;
    //alert(timeOfTask);
   
    nextElement.classList.add("dataset");
    nextElement.dataset.time= timeOfTask;
    //alert(nextElement.dataset.time);
    nextElement.value +="   time:"+timeOfTask;
}})