import { formElement, buttonE1, taskList } from './refs';
import { randerTask } from './tasks';
import { saveTaskLlocalStorage, deleteTaskFromLocalStorage, renderTaskLocalStorage} from './local-storage-api';
 
renderTaskLocalStorage()
formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = event.target.taskName.value.trim();
    const taskDescription = event.target.taskDescription.value.trim();
    console.log(taskName);
    console.log(taskDescription);

    if (!taskName || !taskDescription) {
        return alert("Заповніть всі поля форми");
    }
    randerTask({ title: taskName, description: taskDescription });
    saveTaskLlocalStorage({title: taskName, description: taskDescription});
    formElement.reset();
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task-list-item-btn')) {
        const taskItem = event.target.closest('.task-list-item');
        console.log(taskItem);
        const indexEl = [...taskList.children].indexOf(taskItem);
        deleteTaskFromLocalStorage(indexEl);
        taskItem.remove();
    }

});

buttonE1.addEventListener('click', (e) => {
    const body = document.querySelector("body");

 if (body.classList.contains("theme-dark")) {
     body.classList.replace("theme-dark", "theme-light")
     localStorage.setItem("theme", "theme-light");

  } else {
     body.classList.replace("theme-light", "theme-dark")
     localStorage.setItem("theme", "theme-dark");
  }
})

