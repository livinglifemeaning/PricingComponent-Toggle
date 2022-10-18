const annualPrices = document.querySelectorAll("[data-annual-price]");
const monthlyPrices = document.querySelectorAll("[data-monthly-price]");
const toggleButton = document.querySelector(".toggle");
console.log(annualPrices, toggleButton, monthlyPrices);

const switchAriaHidden = () => {
    annualPrices.forEach((el) => {
       el.ariaHidden === "false" ? el.ariaHidden = "true" : el.ariaHidden = "false"
        el.classList.toggle("hidden"); 
    })  
    monthlyPrices.forEach(el => {
        el.ariaHidden === "false" ? el.ariaHidden = "true" : el.ariaHidden = "false"
        el.classList.toggle("hidden");  
    }) 

}
toggleButton.addEventListener(
  "click",
  () => {
    toggleButton.classList.toggle("monthly");
    switchAriaHidden() 
  },
);
