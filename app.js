const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products =[
    {
        id :1 ,
        title: "Air Force",
        price: 119,
        colors: [
            {
              code : "black",
              img : "./img/air.png"
            },
        
           {
            code : "darkblue",
            img : "./img/air2.png"
           }
        ],
    },
    {
        id :2 ,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
              code : "lightgray",
              img : "./img/jordan.png"
            },
        
           {
            code : "green",
            img : "./img/jordan2.png"
           }
        ],
    },
    {
        id :3 ,
        title: "Blazer",
        price: 109,
        colors: [
            {
              code : "wlightgray",
              img : "./img/blazer.png"
            },
        
           {
            code : "green",
            img : "./img/blazer2.png"
           }
        ],
    },
    {
        id :4 ,
        title: "Crater",
        price: 129,
        colors: [
            {
              code : "black",
              img : "./img/crater.png"
            },
        
           {
            code : "lightgray",
            img : "./img/crater2.png"
           }
        ],
    },
    {
        id :5 ,
        title: "Hippie",
        price: 99,
        colors: [
            {
              code : "gray",
              img : "./img/hippie.png"
            },
        
           {
            code : "black",
            img : "./img/hippie2.png"
           }
        ],
    }    
]
    
        
let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")



menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {



        // X- axis strat 0 then when click in menuitem increase -100vw to show next slide shoe
        var itemPrev = document.querySelector(".active");
        console.log(itemPrev);
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //Change the choosen product
        choosenProduct = products[index]

        //Change texts of currentProducts
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" +choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assig new colors
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
        
        
        itemPrev.classList.remove("active")
        item.classList.add("active")
    })
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ()=> {

        currentProductImg.src = choosenProduct.colors[index].img;
    })
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = 'white'
            size.style.color = 'black'
        })
        
        size.style.backgroundColor = 'black'
        size.style.color = 'white'
    })
})


productButton.addEventListener('click', ()=>{
    payment.style.display = 'flex';
});

close.addEventListener('click', ()=>{
    payment.style.display ='none'
})