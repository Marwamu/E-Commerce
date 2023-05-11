const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // X- axis strat 0 then when click in menuitem increase -100vw to show next slide shoe
        var itemPrev = document.querySelector(".active");
        console.log(itemPrev);
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        itemPrev.classList.remove("active")
        item.classList.add("active")
    })
});
