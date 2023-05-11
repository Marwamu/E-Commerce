const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // X- axis strat 0 then when click in menuitem increase -100vw to show next slide shoe
        wrapper.style.transform = `translateX(${-100 * index}vw)`

    })
});
item.style.color = `white`
