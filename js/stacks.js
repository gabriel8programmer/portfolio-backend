
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
    body.setAttribute("class", "min-h-screen text-white font-[Roboto] flex flex-col bg-cover bg-center")
    body.classList.add(possibleBackgrounds[i])
}

const updateHilightSocialLinks = (index = 0) => {
    const links = [...social.querySelectorAll("a")]
    links.map(link => link.setAttribute("class", "text-3xl duration-500"))

    const hoverValue = possibleNavLinkHover[index].split(" ")[1]

    // update social link hilight
    links.map(link => link.classList.add(hoverValue))
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
    updateHilightNavLinks(i)
    updateHilightSocialLinks(i)
}

btns.forEach((btn, i) => btn.addEventListener("click", (e) => enableStackControl(e, i)))