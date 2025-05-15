
const form = document.querySelector("#contact-form")

const contact = (e) => {
    console.log("Deu certo!")
    // cancel default behavior
    e.preventDefault()
}

form.addEventListener("submit", contact)