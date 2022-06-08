window.onload = function() {
    const sliderMain = document.getElementsByClassName('slider__main')[0]
    const sliderButtons = document.getElementsByClassName('slider__buttons')[0].children

    sliderMain.addEventListener('scroll', () => {
        getCurrentIndex()
    })

    const onButtonClick = (index) => {
        sliderMain.scrollLeft = sliderMain.clientWidth * index
        getCurrentIndex()
    }

    const getCurrentIndex = () => {
        const index = Math.round(sliderMain.scrollLeft / sliderMain.clientWidth)
        
        for(let i = 0; i < sliderButtons.length; ++i) {
            sliderButtons[i].classList.toggle('active', i == index)
        }
    }
    
    getCurrentIndex()

    for(let i = 0; i < sliderButtons.length; ++i) {
        sliderButtons[i].addEventListener('click', () => {
            onButtonClick(i)
        })
    }
}