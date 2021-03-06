const circle_btns = document.querySelector('.circle_btns')
const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

const prev_btn = document.querySelector('#prev_btn')
const next_btn = document.querySelector('#next_btn')

let counter = 1

let size = carouselImages[0].clientWidth

window.addEventListener('resize', () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.classList.remove("transition")
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    setTimeout( () => {carouselSlide.classList.add('transition')}, 0000)
});

const move = () => {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px'
}

move()

setTimeout( () => {carouselSlide.classList.add('transition')}, 0000)

const nextAction = () => {
    counter++
    move()
    next_btn.removeEventListener('click', nextAction)
    setTimeout( () => {
        next_btn.addEventListener('click', nextAction)
    }, 601)

    // Circle buttons
    setTimeout( () => {
        if (counter >= carouselImages.length - 1) {
            circleBtns[0].style.transform = 'scale(135%)'
        } else {
            circleBtns[counter - 1].style.transform = 'scale(135%)'
        }
        circleBtns[counter - 2].style.transform = 'scale(100%)'
    }, 0)
}

const prevAction = () => {
    lcounterCache = counter
    counter--
    move()
    prev_btn.removeEventListener('click', prevAction)
    setTimeout( () => {
        prev_btn.addEventListener('click', prevAction)
    }, 601)

    // Circle buttons
    setTimeout( () => {
        if (counter <= 0) {
            circleBtns[circleBtns.length - 1].style.transform = 'scale(135%)'
        } else {
            circleBtns[counter - 1].style.transform = 'scale(135%)'
        }
        circleBtns[counter].style.transform = 'scale(100%)'
    }, 0)
}

next_btn.addEventListener('click', nextAction)

prev_btn.addEventListener('click', prevAction)

carouselSlide.addEventListener('transitionend', () => {
    if (counter <= 0) {
        carouselSlide.classList.remove("transition")
        counter = carouselImages.length - 2
        move()
        setTimeout( () => {carouselSlide.classList.add('transition')}, 0000)
    } else if (counter >= carouselImages.length - 1) {
        carouselSlide.classList.remove("transition")
        counter = 1
        move()
        setTimeout( () => {carouselSlide.classList.add('transition')}, 0000)
    }
})


const circleBtnsIds = []

for (let i = 0; i < carouselImages.length -2; i++) {
    circleBtnsIds.push(['circle_btn_' + i, 'circle_box_' + i])
}

circleBtnsIds.forEach( id => {
    const iBox = document.createElement('div')
    iBox.className = 'i-box'
    iBox.id = id[1]
    circle_btns.appendChild(iBox)

    const circle = document.createElement('i')
    circle.className = "circle"
    circle.id = id[0]
    iBox.appendChild(circle)
})

const iBoxes = document.querySelectorAll('.i-box')
const circleBtns = document.querySelectorAll('.circle')

circleBtns[0].style.transform = 'scale(140%)'


for (let i = 0; i < iBoxes.length; i++) {
    iBoxes[i].addEventListener('click', () => {
        if (counter - 1 !== i) {
            circleBtns[i].style.transform = 'scale(140%)'
            circleBtns[counter - 1].style.transform = 'scale(100%)'
            counter = i + 1
            move()}
        }
    )
}
