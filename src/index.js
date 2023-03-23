document.addEventListener("DOMContentLoaded", () => {
  // Get form
  const form = document.querySelector('#create-task-form')
  // Display area for tasks
  const taskList = document.getElementById('tasks')

  // Store value that was put into the field
  function addTask(task) {
    const li = document.createElement('li');
    li.innerText = task
    taskList.appendChild(li)
  }
  
  // Press submit button to add to to-do list
  // Display value in new list on page
  form.addEventListener('submit', (e) =>
  {
    e.preventDefault()
    //console.log(form.new-task-description.value)
    addTask(form.newtaskdescription.value)
  })
});






