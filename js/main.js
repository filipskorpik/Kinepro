new WOW().init();


window.addEventListener("scroll", function(){
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - window.innerHeight
    let scrollHome = document.querySelector(".scroll-home")

    if(Math.ceil(scrolled) > (scrollable/4)){
        scrollHome.classList.add("scroll-home__is-active")
    } else {
        scrollHome.classList.remove("scroll-home__is-active")
    }
})
