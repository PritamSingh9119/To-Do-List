document.getElementById("input1").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addNewTaskInToDoList();
    }
});


function addNewTaskInToDoList() {
    var input1 = document.getElementById('input1');
    var listTask = document.getElementById('listTask');
    var totalTasks = listTask.getElementsByTagName('li').length;


    if (totalTasks >=20){
        alert("Only 20 tasks can be added!");
        return;
    }


    if (input1.value.trim() !=="") {
        var li = document.createElement('li');
        li.textContent = input1.value;


        var tickIcon = document.createElement('button');
        tickIcon.textContent = '✅';
        tickIcon.className = 'tickIcon-class';
        tickIcon.onclick = function () {
            if(li.style.textDecoration === "line-through"){
                li.style.textDecoration = "none";
            } else {
            li.style.textDecoration = "line-through";
        }
            updateTaskCount();
        };


        var xIcon = document.createElement('button');
        xIcon.textContent = '❌';
        xIcon.className = 'xIcon-class';
        xIcon.onclick = function () {
            listTask.removeChild(li);
            updateTaskCount();
        };

        li.appendChild(xIcon);
        li.appendChild(tickIcon);
        listTask.appendChild(li);

        input1.value="";
        input1.focus()

        updateTaskCount();

    }else{
        alert("can not add blank task");
    }
}



function updateTaskCount() {
    var listTask = document.getElementById('listTask');
    var totalTasks = listTask.getElementsByTagName('li').length;
    var completedTasks = listTask.querySelectorAll('li[style="text-decoration: line-through;"]').length;
    document.getElementById('taskCount').textContent = "Total Tasks: " + totalTasks + " | Completed Tasks: " + completedTasks;
    if (totalTasks===completedTasks){
        document.getElementById('taskCount').textContent = "All tasks completed! 😊";
    }
}