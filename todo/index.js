const formInput = document.getElementById("input")
const output = document.getElementById("output")

const save = data => {
  window.localStorage.setItem("todos", JSON.stringify(data))
}

const load = () => {
  return JSON.parse(window.localStorage.getItem("todos"))
}

const submit = event => {
  event.preventDefault()

  const inputTodo = document.getElementById("input-todo")

  if (inputTodo.value.trim() !== "") {
    DATA.push({
      text: inputTodo.value,
      completed: false
    })
    display()
    inputTodo.value = ""
  }
}

const display = () => {
  output.innerHTML = ""
  DATA.forEach(item => {
    output.innerHTML += `<li>${item.text}</li>`
  })
}

formInput.addEventListener("submit", submit)

display()
