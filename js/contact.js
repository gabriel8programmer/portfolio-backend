const form = document.querySelector("#contact-form")
const spinner = document.querySelector("#spinner")
const inputs = [...document.querySelectorAll("#inputs > div")]
const inputErrors = [...document.querySelectorAll("#inputs > div .text-red-500")]

const alert = document.getElementById("success-alert")
const progressBar = document.getElementById("progress-bar")


function showSuccessAlert() {

    // Mostrar o alerta com animação de bottom e opacidade
    alert.classList.remove("bottom-[-100px]", "opacity-0")
    alert.classList.add("bottom-2", "opacity-100")

    // Iniciar animação da barra de progresso
    setTimeout(() => {
        progressBar.classList.remove("w-0")
        progressBar.classList.add("w-full")
    }, 100) // Pequeno delay para garantir renderização

    // Ocultar após 3 segundos (tempo da barra)
    setTimeout(() => {
        alert.classList.remove("bottom-2", "opacity-100")
        alert.classList.add("bottom-[-100px]", "opacity-0")

        // Resetar a barra
        progressBar.classList.remove("w-full")
        progressBar.classList.add("w-0")
    }, 3500) // 3s de duração + 0.5s de margem de transição
}


const contact = async (e) => {
    // cancel default behavior
    e.preventDefault()

    // get form data
    const formData = new FormData(e.target)

    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // get input errors
    const [nameError, emailError, messageError] = inputErrors

    // validate fields
    let hasValidationError = false

    const errors = {
        name: "",
        email: "",
        message: ""
    }

    // validate name
    if (name === "") {
        errors.name = "Nome é obrigatório!"
        hasValidationError = true
    }

    // validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        errors.email = "E-mail é obrigatório!"
        hasValidationError = true
    } else if (!emailRegex.test(email)) {
        errors.email = "Formato de email inválido!"
        hasValidationError = true
    }

    // validate message
    if (message === "") {
        errors.message = "Mensagem é obrigatória!"
        hasValidationError = true
    }

    // update input errors
    nameError.textContent = errors.name
    emailError.textContent = errors.email
    messageError.textContent = errors.message

    if (hasValidationError) return

    // show spinner
    spinner.classList.remove("hidden")

    // send email
    await fetch(`${apiUrl}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
    })

    // clear all fields
    e.target.reset()

    // set focus in first field
    const firstInput = e.target.querySelector("input,textarea")
    firstInput.focus()

    // hide spinner
    spinner.classList.add("hidden")

    // show success alert
    showSuccessAlert()
}

form.addEventListener("submit", contact)