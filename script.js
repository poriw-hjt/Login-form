const $ = document
/// Color Changing 
const box = $.querySelector(".login-box") 
const password = $.querySelector('.password')
const boxAfter = window.getComputedStyle(box, '::before')
const afterColor = boxAfter.getPropertyValue('background-color')
const color1 = $.querySelector(".color-1")
const color2 = $.querySelector(".color-2")
const color3 = $.querySelector(".color-3")
const color4 = $.querySelector(".color-4")
const root = $.querySelector(':root')
console.log(color1)

color1.addEventListener('click' , function () {
    box.style.background = '#ffc324'
    root.style.setProperty("--primary-color", "#ffc324")
})
color2.addEventListener('click' , function () {
    box.style.background = '#00008B'
    root.style.setProperty("--primary-color", "#00008B")
})
color3.addEventListener('click' , function () {
    box.style.background = '#301934'
    root.style.setProperty("--primary-color", "#301934")
})
color4.addEventListener('click' , function () {
    box.style.background = '#ADD8E6'
    root.style.setProperty("--primary-color", "#ADD8E6")
})



/// show password
const show = $.querySelector('.fa-eye')
const hide = $.querySelector('.fa-eye-slash')

function passwordToggle() {
    if (password.type == "text"){
        password.type = "password";
        hide.classList.remove("active");
        show.classList.add("active")
    } else {
        password.type = "text";
        hide.classList.add("active")
        show.classList.remove("active")

    }
}
show.addEventListener('click' , passwordToggle)

hide.addEventListener('click' , passwordToggle)

password.addEventListener("paste", (event)=> {
    event.preventDefault()
})

// pulse on button 

const button = $.querySelector(".submit")

function mousePos(event, element){
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px")
    element.style.setProperty("--Y", posY + "px")
}

button.addEventListener("click", (event)=> {
    mousePos(event, button)
    button.classList.add("pulse")
    button.addEventListener("animationend", () => {
        button.classList.remove("pulse")
    })
} )

