const formInput = document.getElementById("input")
const output = document.getElementById("output")

const submit = event => {
  event.preventDefault()

  const inputTodo = document.getElementById("input-todo")

  if (inputTodo.value.trim() !== "") {
    const DATA = load()

    DATA.push({
      text: inputTodo.value,
      completed: false
    })

    save(DATA)
    display()
    inputTodo.value = ""
  }
}

const display = () => {
  const DATA = load()

  output.innerHTML = ""
  DATA.forEach(item => {
    output.innerHTML += `<li>${item.text}</li>`
  })
}

formInput.addEventListener("submit", submit)

display()
