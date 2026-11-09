const phone = "923058709847";
const data = {
 burgers:[
 ["Hot Firror Chicken/Beef Burger","Rs. 1050–1399","burger"],
 ["Hangover Beef Burger","Rs. 1399","burger2"],
 ["Smash Beef Burger","Rs. 700","burger"],
 ["Death By Cheesy Burger","Rs. 1050","burger2"],
 ["Meet House Chicken Burger","Rs. 1050","burger"],
 ["Victoria Grill Burger","Rs. 699","burger2"],
 ["Jalapeno Grill Burger","Rs. 699","burger"],
 ["Mushroom Grill Burger","Rs. 699","burger2"],
 ["Chipotle Grill Burger","Rs. 699","burger"],
 ["Zinger Burger","Rs. 420","burger2"],
 ["Zinger Tower Burger","Rs. 630","burger"],
 ["Mighty Burger","Rs. 550","burger2"],
 ["Patty Burger","Rs. 330","burger"]
 ],
 continental:[
 ["Spicy Jalapeno Stuff Chicken","Rs. 1499","pasta"],
 ["Swiss Polo Stuff Chicken","Rs. 1499","pasta2"],
 ["Cordon Stuff Chicken","Rs. 1499","pasta"],
 ["Neapolitan Stuff Chicken","Rs. 1499","pasta2"],
 ["Red Sauce Penni Pasta","Rs. 799","pasta"],
 ["Spicy Fettuccine Pasta","Rs. 799","pasta2"],
 ["Alfredo Pasta W/ White Sauce","Rs. 799","pasta"],
 ["Chicken Cheese Pasta","Rs. 799","pasta2"],
 ["Chicken Chowmein","Rs. 850","chinese"],
 ["Vegetable Chowmein","Rs. 750","chinese2"]
 ],
 chinese:[
 ["Kung Pao Chicken","Rs. 900","chinese"],
 ["Thai Chachewurt","Rs. 900","chinese2"],
 ["Sweet & Sour Chicken","Rs. 900","chinese"],
 ["Chicken Almond","Rs. 900","chinese2"],
 ["Chicken Chilli Dry","Rs. 900","chinese"],
 ["Chicken Manchurian","Rs. 900","chinese2"],
 ["Chicken Black Pepper","Rs. 900","chinese"],
 ["Chicken Shashlic","Rs. 900","chinese2"],
 ["Crispy Sweet Chicken Chilli","Rs. 900","chinese"],
 ["Thai Basil Chicken","Rs. 900","chinese2"],
 ["Special Fried Rice","Rs. 650–1090","chinese"],
 ["Chicken Fried Rice","Rs. 590–1050","chinese2"]
 ],
 deals:[
 ["Deal #01 — Zinger Burger + Drink","Rs. 410","deal"],
 ["Deal #02 — Patty Burger + Drink","Rs. 330","deal"],
 ["Deal #03 — 2 Zinger Burgers + Fries + Drink","Rs. 610","deal"],
 ["Deal #04 — 2 Patty Burgers + Fries + Drink","Rs. 840","deal"],
 ["Deal #05 — Zinger Tower + Fries + Drink","Rs. 790","deal"],
 ["Deal #06 — Zinger Burger + Chicken Piece + Fries","Rs. 850","deal"],
 ["Deal #07 — 2 Zinger Burgers + Fries + Drink","Rs. 980","deal"],
 ["Deal #08 — 3 Zinger Burgers + Fries + Drink","Rs. 1380","deal"],
 ["Deal #10 — 5 Hot Wings + Drink","Rs. 360","deal"],
 ["Deal #11 — 10 Hot Wings + Drink","Rs. 670","deal"],
 ["Deal #15 — Zinger Roll + Fries + Drink","Rs. 590","deal"],
 ["Deal #16 — Donner + Drink","Rs. 750","deal"]
 ]
};

const grid=document.getElementById("menuGrid");
function render(category){
 grid.innerHTML=data[category].map((item,i)=>`
 <article class="food-card clean-card">
   <div class="food-info">
     <h3>${item[0]}</h3>
     <p class="price">${item[1]}</p>
     <button class="order-item" data-item="${item[0]}">ORDER NOW →</button>
   </div>
 </article>`).join("");
 document.querySelectorAll(".order-item").forEach(btn=>btn.onclick=()=>{
   const item=btn.dataset.item;
   const message=encodeURIComponent(`Hello! I would like to order: ${item}`);
   window.open(`https://wa.me/${phone}?text=${message}`,"_blank");
 });
}
render("burgers");
document.querySelectorAll(".tabs button").forEach(btn=>btn.onclick=()=>{
 document.querySelector(".tabs .active").classList.remove("active");
 btn.classList.add("active"); render(btn.dataset.category);
});
const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav-links");
toggle.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll(".nav-links a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
