
const carousel = document.querySelector("#projects-carousel")
const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")

const projects = [
    {
        title: "Todo-list-api",
        img: "/img/projects/todo-list.png",
        stackSlugs: ["nodedotjs", "typescript", "express", "mongodb", "mongoose", "swagger"],
        github: "https://github.com/gabriel8programmer/todo-list-api",
        deploy: "https://todo-list-api-yl9j.onrender.com/api/docs"
    }
]

const getListStacksTemplate = (stackSlugs = []) => {
    let html = `<ul class="flex gap-3">`

    const items = stackSlugs.map((slug) => `
        <li>
            <div>
                <img height="24" width="24" src="https://cdn.simpleicons.org/${slug}/white" />
            </div>
        </li>
    `).toString().replace(/\,/g, "")

    html += items;
    html += "</ul>"
    return html
}

function toggleOverlay(e) {
    const el = e.target;

    el.classList.toggle("bg-black/70")
    el.classList.toggle("fixed")
    el.classList.toggle("w-screen")
    el.classList.toggle("h-screen")
    el.classList.toggle("top-0")
    el.classList.toggle("left-0")
    el.classList.toggle("z-10000")
}


const getTemplateProject = ({ title, img, stackSlugs, github, deploy }) => {
    const listStacks = getListStacksTemplate(stackSlugs)

    return `<div
            class="min-w-70 max-w-80 bg-black/50 rounded-sm flex flex-col items-center gap-3 snap-center"
          >
            <h4 class="text-2xl text-center p-2">${title}</h4>

            <div onClick="toggleOverlay(event)" class="transition-500 ease-in-out">
                <img src="${img}" alt="Imagem do projeto (${title})" class="h-full object-contain" />
            </div>
            
            ${listStacks}
        
            <div class="flex flex-col gap-3 w-[99%] items-center p-5">
              <a
                href="${deploy}" target="_blank"
                class="bg-blue-500 text-center text-light flex justify-center items-center w-full h-10 rounded-xl duration-500 hover:bg-blue-400 cursor-pointer"
                >Deploy</a
              >
              <a
                href="${github}" target="_blank"
                class="bg-cyan-500 text-center text-light flex justify-center items-center w-full h-10 rounded-xl duration-500 hover:bg-cyan-400 cursor-pointer"
                >Repositório</a
              >
            </div>
          </div>`
}

const prev = () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
}

const next = () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" })
}

const populateCarousel = () => {
    projects.map(project => {
        const templateProject = getTemplateProject(project)
        carousel.innerHTML = templateProject
    })
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

window.addEventListener("load", () => {
    // populate carousel
    populateCarousel()

    // get card project size
    const bodyWidth = body.clientWidth
    const firstCardWidth = carousel.querySelector("div").offsetWidth
    const cardStep = Math.floor(bodyWidth / firstCardWidth)
    const scrollAmount = (carousel.querySelector("div").offsetWidth * cardStep)


    // toggle visibility buttons
    toggleVisibilityButtons()
})

carousel.addEventListener("scroll", toggleVisibilityButtons)
btnPrev.addEventListener("click", prev)
btnNext.addEventListener("click", next)