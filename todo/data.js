const save = data => {
  window.localStorage.setItem("todos", JSON.stringify(data))
}

const load = () => {
  const data = JSON.parse(window.localStorage.getItem("todos"))

  if (data) {
    return data
  } else {
    return []
  }
}
