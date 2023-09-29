// Get the form element
let form = document.querySelector("form");
// Add an event listener to the form submission event
form.addEventListener("submit", (e) => {
  
  const task = taskInput.value;
  // Create a new task list item element.
  const taskItem = document.createElement("li");
  // Add the task text to the task list item element.
  taskItem.textContent = task;
  // Add the task list item element to the task list element.
  taskList.appendChild(taskItem);
  // clear the task input element
  // taskInput.reset();
  taskInput.value = "";
  // Prevent the default form submission behavior
  e.preventDefault();
  // Get the to-do task from the form

  console.log(task);
  // Send the to-do task to the server
  // "/todo" is the url endpoint we are sending the request to.

  // Send the to-do task to the server
  // "http://localhost:3000/posts/todo" is the url endpoint we are sending the request to.
  fetch("http://localhost:3000/posts", {
    // POST method is used to send data to the server

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    // The data we are sending. It's converted to a JSON string using "JSON.stringify"
    // Sends an object with a 'task' property, which contains the task data collected from the form.
    //body: JSON.stringify({ task: task })

    body: JSON.stringify({
      name: task,
    }),
  })
    .then((res) => {
    
    /* Step 6: Handle the server response: Byte Almighty >>initiate server responses : */
    // Step 7: The to-do task was successfully added

      console.log(res);
      if (res.ok) {
        console.log("SUCCESS");
        alert("Data Posted Successfully");
      } else {
        console.log("Not Successful");
        alert("An issue occurred when posting your data");
      }
      return res.json();
    })

    .then((data) => console.log(data));
});
// Get a reference to the task input element.
const taskInput = document.getElementById("task-input");
// Get a reference to the add task button element.
const addTaskButton = document.getElementById("add-task-button");
// Get a reference to the task list element.
const taskList = document.getElementById("task-list");
// Add an event listener to the add task button element.

// Add an event listener to the task list element.
taskList.addEventListener("click", (e) => {
  // Get the target element of the event.
  const target = e.target;
  // If the target element is a task list item element, toggle its completed class.
  if (target.tagName === "LI") {
    target.classList.toggle("completed");
  }
});
