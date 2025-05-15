
const form = document.querySelector("#contact-form")
const spinner = document.querySelector("#spinner")

const apiUrl = "http://localhost:3000/api"

const contact = async (e) => {
    // cancel default behavior
    e.preventDefault()

    // get form data
    const formData = new FormData(e.target)

    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    try {
        // show spinner
        spinner.classList.remove("hidden")

        // send email
        await fetch(`${apiUrl}/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        })

        // clear all fields
        e.target.reset()

        // set focus in first field
        const firstInput = e.target.querySelector("input,textarea")
        firstInput.focus()

    } catch (error) {

        console.log("Algo deu errado!")

    } finally {
        // hide spinner
        spinner.classList.add("hidden")
    }


}

form.addEventListener("submit", contact)