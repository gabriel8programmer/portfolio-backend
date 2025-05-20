
const body = document.querySelector("body")
const nav = document.querySelector("nav")
const navLinks = [...nav.querySelectorAll("a")]
const social = document.querySelector("#social")

// all variables will be here
const apiUrl = "https://portfolio-backend-api-nine.vercel.app" // backend api url

const possibleBackgrounds = [
    "bg-[linear-gradient(to_bottom,#3a506b,_rgba(0,0,0,0.5),#0b132b),url('/img/bg-1.jpg')]",
    "bg-[linear-gradient(to_bottom,#2d6a4f,_rgba(0,0,0,0.5),#1b4332),url('/img/bg-2.jpg')]",
    "bg-[linear-gradient(to_bottom,#3c096c,_rgba(0,0,0,0.5),#240046),url('/img/bg-3.jpg')]",
]

const possiblePaths = [
    "",
    "about.html",
    "stacks.html",
    "projects.html",
    "contact.html",
]

const possibleNavLinkActived = [
    "text-cyan-400 border-cyan-400",
    "text-green-400 border-green-400",
    "text-purple-400 border-purple-400"
]

const possibleNavLinkHover = [
    "hover:border-cyan-400 hover:text-cyan-400",
    "hover:border-green-400 hover:text-green-400",
    "hover:border-purple-400 hover:text-purple-400"
]

// util functions will be here
const updateHilightNavLinks = (activedIndex = 0) => {
    // get current path and index
    const path = window.location.pathname
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const filenameIndex = possiblePaths.indexOf(filename)

    // define navLink base style
    const baseStyleNavLink = "h-full grow flex justify-center items-center text-lg uppercase font-medium duration-500 border-b-5 border-transparent"
    // get actived value
    const activedValue = possibleNavLinkActived[activedIndex]
    // get hover value
    const hoverValue = possibleNavLinkHover[activedIndex]

    // reset navlinks
    navLinks.map(link => link.setAttribute("class", baseStyleNavLink))

    //update hilighting in navLink actived
    navLinks[filenameIndex].classList.remove("border-transparent")
    navLinks[filenameIndex].classList.add(...activedValue.split(" "))

    //update hover in navLinks
    navLinks.map(link => link.classList.add(...hoverValue.split(" ")))
}

window.addEventListener("load", () => {
    updateHilightNavLinks()
})