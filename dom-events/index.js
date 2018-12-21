console.log("DOM Events")

const formGuestList = document.getElementById("guest-list")
const preOutput = document.getElementById("output-code")
const ulOutput = document.getElementById("output-ul")

const submitGuestData = event => {
  event.preventDefault()

  const inputGuestFullName = document.getElementById("guest-full-name").value
  const inputGuestPhone = document.getElementById("guest-phone").value
  const inputGuestEmail = document.getElementById("guest-email").value

  const data = {
    name: inputGuestFullName,
    phone: inputGuestPhone,
    email: inputGuestEmail
  }

  displayToList(data)
}

const displayToConsole = data => {
  console.log(data)
}

const displayToPre = data => {
  const text = JSON.stringify(data)
  preOutput.innerText = text
}

const displayToList = data => {
  const guest = `${data.name} (${data.phone}) <${data.email}>`
  ulOutput.innerHTML += `<li>${guest}</li>`
}

formGuestList.addEventListener("submit", submitGuestData)
