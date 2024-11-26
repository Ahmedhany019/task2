let slidesContainer = document.querySelector(".slides")
let slides = document.querySelectorAll(".slide")
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let pagination = document.querySelectorAll(".pagination-dot")
let current = 1
let slideInterval;
const updateFunction = ()=>{
    slidesContainer.style.transform = `translateX(-${current * 100}%)`
    pagination.forEach((dots,i)=>{dots.classList.remove("active-dot")})
    pagination[current].classList.add("active-dot")
}
const changeSlide = ()=>{
    current = (current + 1 + slides.length) % slides.length;
    updateFunction()
}

function handleHover() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
}

function handleMouseOut() {
    slideInterval = setInterval(changeSlide, 3000);
}

next.addEventListener("click",()=>{
    changeSlide()
    })

prev.addEventListener("click",()=>{
    current = (current - 1 + slides.length) % slides.length;
    updateFunction()
})

const goToSlide = (index)=>{
    current = index
    updateFunction()
}


pagination.forEach((dot,index)=>{
    dot.addEventListener("click",()=>goToSlide(index))
})
slidesContainer.addEventListener('mouseover', handleHover);
slidesContainer.addEventListener('mouseout', handleMouseOut);
slideInterval = setInterval(changeSlide, 3000);
