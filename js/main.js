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


if(window.location.pathname == "/o-firme/"){
    window.location.pathname = "/"
}

if(window.location.href === 'http://www.kinepro.cz/pro-fyzioterapeuty/konzultace/'){
    window.location.href = "https://www.kinepro.cz/"
}

if(window.location.href === "http://www.kinepro.cz/pro-fyzioterapeuty/"){
    window.location.assign("/index.html")
}