
const body = document.querySelector("body")
const controlStacks = document.querySelector("#control-stacks")
const btns = [...controlStacks.querySelectorAll("button")]
const stackGroups = document.querySelector("#stack-groups")
const groups = stackGroups.querySelectorAll("ul")

const disableAll = () => {
    btns.forEach(btn => {
        btn.classList.add("text-white/50")
        btn.classList.remove("border-b-5")
    })

    groups.forEach(group => {
        if (!group.classList.contains("hidden")) {
            group.classList.add("hidden")
        }
    })
}

const updateBackground = (i) => {
    body.setAttribute("class", "min-h-screen flex flex-col bg-cover bg-center")

    body.classList.add(`bg-[linear-gradient(to_bottom,_black,_rgba(0,0,0,0.5),_black),url('/img/bg-${i + 2}.jpg')]`)
}

const enableStackControl = (e, i) => {
    const btn = e.target;

    // disable all controls
    disableAll()

    // add hilight only active component 
    btn.classList.remove("text-white/50")
    btn.classList.add("border-b-5")
    // add stack group enabled
    groups[i].classList.remove("hidden")

    // change background
    updateBackground(i)
}

btns.forEach((btn, i) => btn.addEventListener("click", (e) => enableStackControl(e, i)))