const menuButton = document.getElementById("hambugger")
const navMenu = document.getElementById("nav--menu")
const closeIcon = document.getElementById("nav--close")
const navList = document.querySelectorAll(".nav--list")

const tabs = document.querySelectorAll(".tabs_wrap ul li")

menuButton.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
})

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

navList.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })
});

// tabs.forEach(tab => {
//     tab.addEventListener("click", () => {
//         tab.classList.remove("active")
//     })
//     tab.classList.add("active")
// })