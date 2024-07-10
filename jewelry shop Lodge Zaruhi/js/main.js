"use strict"; 
let jewellery=[
    {
        name: " Ring",
        img: "url(images/p1.png)", 
        price:1000.00, 
        madeof:"silver", 
       
    }, 
    {
        name: " Ring",
        img: "url(images/sliderimg.png)", 
        price:1100.00, 
        madeof:"gold",
    }, 
    {
        name: " Earrings",
        img: "url(images/i3.png)", 
        price:1000.00, 
        madeof:"gold",
    }, 
    {
        name: "Bracelet",
        img: "url(images/about-img.png)", 
        price:1200.00, 
        madeof:"gold",
    }, 
    {
        name: "Bracelet",
        img: "url(images/bracelet1.jpeg)", 
        price:1000.00, 
        madeof:"silver",
    }, 
    {
        name: "Bracelet",
        img: "url(images/bracelet2.jpeg)", 
        price:1300.00, 
        madeof:"gold",
    }, 
    {
        name: "Tiara",
        img: "url(images/tiara.jpeg)", 
        price:1400.00, 
        madeof:"diamond", 
    }, 
    {
        name: "Earrings",
        img: "url(images/earrings1.jpeg)", 
        price:1500.00, 
        madeof:"diamond",  
    }, 
    {
        name: "Earrings",
        img: "url(images/earrings2.jpeg)", 
        price:1600.00,
        madeof:"silver", 
    },
] 
let jewelleryprice=document.querySelector(".jewelleryprice"); 
let Jewellery=document.querySelector("#Jewellery"); 
let inputjewel=document.querySelector("#searchjewel"); 
let searchjewel=document.querySelector("#jewelbtn"); 
jewellery.forEach(showJewel)

searchjewel.addEventListener("click",function(){ 
     clearContainer();
    let filtername=jewellery.filter(function(item){
    return item.name.toLowerCase().includes(inputjewel.value.toLowerCase())
    }) 
    filtername.forEach(showJewel) 
    let filterprice=jewellery.filter(function(item){
     return item.price>=inputjewel.value;
   }) 
    filterprice.forEach(showJewel) 
    let filtermadeof=jewellery.filter(function(item){
        return item.madeof.toLowerCase().includes(inputjewel.value.toLowerCase())
    }) 
    filtermadeof.forEach(showJewel)
})
function showJewel(item){
    let jewellerydiv=document.createElement("div"); 
    jewellerydiv.className="product"; 
    
    jewelleryprice.prepend(jewellerydiv); 
    
    jewellerydiv.innerHTML=`<strong>${item.name}</strong><br> 
    <p>${item.price}</p><br> 
    <strong>${item.madeof}</strong>
      ` 
      let jewelbtn=document.createElement("button"); 
      jewelbtn.className="jewelbtn"; 
      jewellerydiv.prepend(jewelbtn); 
      jewelbtn.innerHTML=`Buy Now`
     let jewelimg=document.createElement("div"); 
     jewelimg.className="jewelimg";
     jewellerydiv.prepend(jewelimg); 
     jewelimg.style.backgroundImage=item.img; 
    
} 
function clearContainer(){
    jewelleryprice.innerHTML=""
}