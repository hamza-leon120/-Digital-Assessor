let bar = document.querySelector("header .container .bar")
let buttonBar = document.querySelector("header .container .fa-solid")
let up = document.querySelector(".up")
let header = document.querySelector("header")
console.log(typeof window.getComputedStyle(bar).height)
buttonBar.onclick = function () {
    if (window.getComputedStyle(bar).height === "2px") {
        bar.style.setProperty("height","350px")
    }else {
        bar.style.removeProperty("height")
        bar.style.removeProperty("padding")
    }
}
addEventListener ("scroll" , function () {
    if(bar.offsetHeight !== 0) {
        bar.style.removeProperty("height")
        bar.style.removeProperty("padding")
    }
})
window.onscroll = function() {
    if(window.scrollY >= 100) {
        up.style.setProperty("display","flex")
    }else {
        up.style.setProperty("display","none")
    }
    if(window.scrollY >= 500){
        header.style.setProperty("position","fixed")
        header.style.setProperty("border-bottom","2px solid #eeeeee")
    }else {
        header.style.removeProperty("border-bottom")
    }
}
up.onclick = function () {
    window.scrollTo ({
        top: 0,
        lest: 0,
        behavior: "smooth",
    })
}