const formInput = document.getElementById("input")
const output = document.getElementById("output")

// Handle form on submit, when user entering a new todo
const submit = event => {
  // Prevent default behavior of form (reload the page)
  event.preventDefault()

  // Get text input from user
  const inputTodo = document.getElementById("input-todo")

  // Check whether the input has actual characters/words
  if (inputTodo.value.trim() !== "") {
    // Push the new todo into global DATA
    DATA.push({
      text: inputTodo.value,
      completed: false
    })

    // Save the new data into localStorage
    save(DATA)

    // Display again the
    display()

    // Empty out the input todo text value
    inputTodo.value = ""
  }
}

// Display todos in the output area
const display = () => {
  // Empty out the output area
  output.innerHTML = ""

  // Load latest data from localStorage
  const DATA = load()

  // Loop over the array of objects
  // Put them into <ul> output as multiple <li>
  DATA.forEach(item => {
    output.innerHTML += `<li>${item.text}</li>`
  })
}

// Listen for submit event in the form
formInput.addEventListener("submit", submit)

// Display all todos once in the beginning
display()
