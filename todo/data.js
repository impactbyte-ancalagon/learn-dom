// Save new data into localStorage
const save = data => {
  window.localStorage.setItem("todos", JSON.stringify(data))
}

// Load latest data from localStorage
const load = () => {
  const data = JSON.parse(window.localStorage.getItem("todos"))

  if (data) {
    return data
  } else {
    return []
  }
}

// Clear todos from localStorage
const clear = () => {
  window.localStorage.removeItem("todos")
  display()
}

// Get the data once from localStorage
const DATA = load()
