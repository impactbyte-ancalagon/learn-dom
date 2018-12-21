const formInput = document.getElementById("input")
const output = document.getElementById("output")
const buttonClear = document.getElementById("button-clear")
const formSearch = document.getElementById("search")
const searchTodo = document.getElementById("search-todo")

// -----------------------------------------------------------------------------

// Handle form on submit, when user entering a new todo
const submit = event => {
  // Prevent default behavior of form (reload the page)
  event.preventDefault()

  // Get text input from user
  const inputTodo = document.getElementById("input-todo")

  // Check whether the input has actual characters/words
  if (inputTodo.value.trim() !== "") {
    // Get latest data
    const DATA = load()

    // Push the new todo into global DATA
    DATA.push({
      text: inputTodo.value,
      completed: false
    })

    // Save the new data into localStorage
    save(DATA)

    // Display todos again
    display()

    // Empty out the input todo text value
    inputTodo.value = ""
  }
}

// -----------------------------------------------------------------------------

// Display todos in the output area
// Also load latest data from localStorage by default
const display = (DATA = load()) => {
  // Empty out the output area
  output.innerHTML = ""

  // Loop over the array of objects
  // Put them into <ul> output as multiple <div>
  DATA.forEach((item, index) => {
    output.innerHTML += `<div class="item"">
      <div class="todo">
        <div
          onclick="complete(${index})" 
          class="box ${item.completed ? "completed" : ""}">
        </div>
        <span class="text">
          ${item.text}
        </span>
      </div>
      <div class="actions">
        <span class="action edit" onclick="edit(${index})">Edit</span>
        <span class="action remove" onclick="remove(${index})">Remove</span>
      </div>
    </div>`
  })
}

// -----------------------------------------------------------------------------

// Complete or incomplete a todo
const complete = indexToCheck => {
  // Load latest data from localStorage
  const DATA = load()

  // If the todo index is matched with the clicked one,
  // the completed value will be inverted (true/false)
  const DATA_NEW = DATA.map((item, index) => {
    if (index === indexToCheck) item.completed = !item.completed
    return item
  })

  save(DATA_NEW)
  display()
}

// -----------------------------------------------------------------------------

const remove = indexToRemove => {
  const DATA = load()

  // If the todo index is matched with the clicked one,
  // the todo will be deleted
  const DATA_NEW = DATA.filter((item, index) => {
    if (index !== indexToRemove) return item
  })

  save(DATA_NEW)
  display()
}

// -----------------------------------------------------------------------------

const edit = indexToEdit => {
  const DATA = load()

  // Ask user to input the new todo text
  const newText = prompt(`Edit '${DATA[indexToEdit].text}':`)

  // If the todo index is matched with the clicked one,
  // the todo will available to edit
  const DATA_NEW = DATA.map((item, index) => {
    if (index === indexToEdit) {
      item.text = newText
    }
    return item
  })

  save(DATA_NEW)
  display()
}

// -----------------------------------------------------------------------------

const search = event => {
  const searchTodoValue = event.target.value.toLowerCase()

  if (searchTodoValue.trim() !== "") {
    const DATA = load()

    // Filter for the searched text
    const filteredData = DATA.filter(item => {
      if (item.text.toLowerCase().includes(searchTodoValue)) {
        return item
      }
    })

    display(filteredData)
  } else {
    display()
  }
}

// -----------------------------------------------------------------------------

// Listen for submit event in the form
formInput.addEventListener("submit", submit)
buttonClear.addEventListener("click", clear)
searchTodo.addEventListener("keyup", search)

// -----------------------------------------------------------------------------

// Display all todos once in the beginning
display()
