window.addEventListener("scroll", onScroll);

onScroll();

function onScroll(){
    showNavOnScrool()
    showBackToTopButtonOnScroll()

    setNavActive(home)
    setNavActive(services)
    setNavActive(about)
    setNavActive(contacts)
}

function showNavOnScrool(){
    if(scrollY===0){
        document.querySelector("body nav").classList.remove("scroll");
    } else{
        document.querySelector("body nav").classList.add("scroll")}
}
function showBackToTopButtonOnScroll(){
    if(scrollY>500){
        document.querySelector("#floatButton").classList.add("show");
    } else{
        document.querySelector("#floatButton").classList.remove("show")}
}

function openMenu(){
    document.querySelector("body").classList.add("menu-expanded")
}
function closeMenu(){
    document.querySelector("body").classList.remove("menu-expanded")
}

/* Scroll Reveal */
ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 700,            
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about
    #about header,
    #about content`);
    /* 
        Funções usadas
        targetLine = scrollY + innerHeight

        sectionTop = home.offsetTop
        sectionHeight = home.offsetHeight

        const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute(id)}]`)

        menuElement.classList.add("active")


        #MissionAccomplished

    */
function setNavActive(section){
    const targetLine = scrollY + innerHeight / 2 
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const sectionTopReachOrPassedTargetLine = targetLine >=sectionTop
    
    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const menuID = section.getAttribute("id")

    const menuElement = document.querySelector(`.menu a[href*=${menuID}]`)

    menuElement.classList.remove("active")
    if (sectionBoundaries){
        menuElement.classList.add("active")
    }
}
