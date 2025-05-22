
const carousel = document.querySelector("#projects-carousel")
const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")

// get card project size
const bodyWidth = body.clientWidth
const firstCardWidth = carousel.querySelector("div").offsetWidth
const cardStep = Math.floor(bodyWidth / firstCardWidth)
const scrollAmount = (carousel.querySelector("div").offsetWidth * cardStep)

const prev = () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
}

const next = () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" })
}

const toggleVisibilityButtons = () => {
    // hide buttons
    btnPrev.classList.add("hidden")
    btnNext.classList.add("hidden")

    if (carousel.scrollLeft > 0) {
        btnPrev.classList.remove("hidden")
    }

    if (carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth) {
        btnNext.classList.remove("hidden")
    }
}

window.addEventListener("load", toggleVisibilityButtons)
carousel.addEventListener("scroll", toggleVisibilityButtons)
btnPrev.addEventListener("click", prev)
btnNext.addEventListener("click", next)