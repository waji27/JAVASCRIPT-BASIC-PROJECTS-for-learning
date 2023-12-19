let TaskAddButton = document.querySelector("#TaskAddButton");

TaskAddButton.addEventListener("click", function () {
const UserInput = document.getElementById('task').value
if(UserInput != ''){
    const Newli = document.createElement("li");
    ModifyLi(Newli);
    disNewli(Newli);
    document.getElementById("task").value = ""
} else {
    alert  ('Please enter a task !')
}
})

function ModifyLi(Newli) {
  const AddedTask = document.getElementById("task").value;
  const Litext = document.createElement("p");
  Litext.classList.add("d-inline-block", "col-11", 'my-auto');
  Litext.innerHTML = AddedTask;
  
  const doneButton = document.createElement("span");
  doneButton.classList.add("material-symbols-outlined", 'my-auto');
  doneButton.innerHTML = "done";
  doneButton.addEventListener("click", function () {
  const parentListItem = Litext;
    parentListItem.style.textDecoration = "line-through";
  });

  const deleteButton = document.createElement("span");
  deleteButton.classList.add("material-symbols-outlined", 'my-auto');
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", function (e) {
    const parentListItem = e.target.closest("li");
    parentListItem.style.display = "none";
  });

  Newli.classList.add("list-group-item", 'col-8', 'mx-auto', 'my-1', 'border');
  Newli.appendChild(Litext);
  Newli.appendChild(doneButton);
  Newli.appendChild(deleteButton);
}

function disNewli(Newli) {
  const taskList = document.getElementById("taskList");
  taskList.appendChild(Newli);
}
