const taskInput = document.querySelector(".input-task"),
    dateInput = document.querySelector(".input-date"),
    filter = document.querySelectorAll(".task-filter span"),
    clearAll = document.querySelector(".clear-button"),
    taskList = document.querySelector(".task-list");

//initialize variable
let editId,
    isEditTask = false,
    todos = JSON.parse(localStorage.getItem("todo-list"));

//event listeners for filter buttons
filter.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

//function to display tasks based on filter
function showTodo(filter) {
    let Litag = "";
    if (todos) {
        todos.forEach(todo, id) => {
            //determine if tasks is completed or pending
            let completed = todo.status == "completed" ? "checked" : "";
            if (filter == todo.status || filter == "all"){
                //create tasks list item
                liTag += '<li class="task-value">
                            <span>Task</span>
                                <div class="subtools">
                                    <span><i class="fa fa-pencil-square-o" style="color: green;"></i><i class="fa fa-trash" style="color:red;"></i></span>
                                </div>
                            </li>'
            }
        }
    }
}