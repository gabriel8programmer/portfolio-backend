
const body = document.querySelector("body")
const nav = document.querySelector("nav")
const navLinks = [...nav.querySelectorAll("a")]
const social = document.querySelector("#social")

const btnOpenNavBar = document.querySelector("#btn-open-navbar")
const btnCloseNavBar = document.querySelector("#btn-close-navbar")

// all variables will be here
const apiUrl = "https://portfolio-backend-api-nine.vercel.app" // backend api url

const possibleBackgrounds = [
    "bg-[linear-gradient(to_bottom,#3a506b,_rgba(0,0,0,0.5),#0b132b),url('/img/bg-1.jpg')]",
    "bg-[linear-gradient(to_bottom,#2d6a4f,_rgba(0,0,0,0.5),#1b4332),url('/img/bg-2.jpg')]",
    "bg-[linear-gradient(to_bottom,#3c096c,_rgba(0,0,0,0.5),#240046),url('/img/bg-3.jpg')]",
    "bg-[linear-gradient(to_bottom,#621708,_rgba(0,0,0,0.5),#220901),url('/img/bg-4.jpg')]",
]

const possiblePaths = [
    "",
    "about.html",
    "stacks.html",
    "projects.html",
    "contact.html",
]

const possibleNavLinkTextStyle = [
    "text-cyan-400 border-cyan-400",
    "text-green-400 border-green-400",
    "text-purple-400 border-purple-400",
    "text-orange-400 border-orange-400"
]

const possibleNavLinkHoverStyle = [
    "lg:hover:border-cyan-400 lg:hover:text-cyan-400",
    "lg:hover:border-green-400 lg:hover:text-green-400",
    "lg:hover:border-purple-400 lg:hover:text-purple-400",
    "lg:hover:border-orange-400 lg:hover:text-orange-400"
]

const removeAnyTextStyleInNavLink = (index) => {
    // get navlink by your index
    const navLink = navLinks[index]
    // if already exists text colors then define a new
    possibleNavLinkTextStyle.map(props => {
        const propsSepared = props.split(" ")
        propsSepared.map((prop) => {
            if (navLink.classList.contains(prop)) {
                navLink.classList.remove(prop)
            }
        })
    })
}

const removeAllHoverStyles = () => {
    // if already exists text colors then define a new
    possibleNavLinkHoverStyle.map(props => {
        const propsSepared = props.split(" ")
        propsSepared.map((prop) => {
            navLinks.map(link => link.classList.remove(prop))
        })
    })
}

// util functions will be here
const updateStyleNavLinks = (activedIndex = 0) => {
    // get current path and index
    const path = window.location.pathname
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const filenameIndex = possiblePaths.indexOf(filename)

    // get actived value
    const activedValue = possibleNavLinkTextStyle[activedIndex]
    // get hover value
    const hoverValue = possibleNavLinkHoverStyle[activedIndex]

    //update hilighting in navLink actived
    removeAnyTextStyleInNavLink(filenameIndex)
    navLinks[filenameIndex].classList.remove("border-transparent")
    navLinks[filenameIndex].classList.add(...activedValue.split(" "))

    //update hover in navLinks
    removeAllHoverStyles()
    navLinks.map(link => link.classList.add(...hoverValue.split(" ")))
}

window.addEventListener("load", () => {
    updateStyleNavLinks()
})

btnOpenNavBar.addEventListener("click", () => {
    nav.classList.remove("opacity-0", "left-[100%]")
    nav.classList.add("left-0")
})

btnCloseNavBar.addEventListener("click", () => {
    nav.classList.add("opacity-0", "left-[100%]")
})