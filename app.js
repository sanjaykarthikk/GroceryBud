const productBox = document.getElementById("Product");
const listContainer = document.getElementById("ListContainer");

// Function to add Tasks
function addTask() {
  if (productBox.value === "") {
    alert("You must write something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = productBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    li.appendChild(span);

    // Edit button
    let editButton = document.createElement("button");
    editButton.innerHTML =
      '<i class="fa-solid fa-pen-to-square Button" style="color: #17de24;"></i>';
    editButton.className = "editButton";
    editButton.addEventListener("click", function () {
      editTask(li);
    });
    span.appendChild(editButton);

    // Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<i class="fa-solid fa-trash Button" style="color: #e20808;"></i>';
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", function () {
      deleteTask(li);
    });
    span.appendChild(deleteButton);
  }

  // To Clear Input Value After Adding to List
  productBox.value = "";
}

// Function to Clear All Items
function clearAllItems() {
  listContainer.innerHTML = "";
}

// Function to handle task deletion
function deleteTask(task) {
  task.remove();
}

// Function to handle task editing
function editTask(task) {
  productBox.value = task.textContent.trim();
  task.remove();
}
