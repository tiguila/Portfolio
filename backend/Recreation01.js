
/** Change header of <select> input change */
var milkselect = document.getElementById("milk");
var toppingsoneselect = document.getElementById("toppingsone");
var toppingstwoselect = document.getElementById("toppingstwo");
var customizedRecipeHeader = document.getElementById("customizedrecipe");

milkselect.addEventListener("change", function () {
    
    if(milkselect.value == "Whole Milk"){
        customizedRecipeHeader.textContent = "What's included";    
    }
    else {
        customizedRecipeHeader.textContent = "Customized recipe";
    }
});


toppingsoneselect.addEventListener("change", function () {
    if(toppingsoneselect.value == "Caramel Drizzle"){
        customizedRecipeHeader.textContent = "What's included";    
    }
    else {
        customizedRecipeHeader.textContent = "Customized recipe";
    }
});


toppingstwoselect.addEventListener("change", function () {    
    if(toppingstwoselect.value == "Whipped Cream"){
        customizedRecipeHeader.textContent = "What's included";    
    }
    else {
        customizedRecipeHeader.textContent = "Customized recipe";
    }
});


// --------------------- handle "+" or "-" operations
let minus = document.getElementById("minus");
let thenumber = document.getElementById("mainvalue");
let plus = document.getElementById("plus");

let x = parseInt(thenumber.innerText);

// reduce the value when clicking "-" button
minus.addEventListener("click", e => {
    if (x > 1) {
        x -= 1;
        thenumber.innerText = x;
    }
    // if the value if 1, hide the minus button
    if (x === 1) {
        minus.style.display = "none";
    }

    // Change header text if the the value is changed
    if(x == 4){
        customizedRecipeHeader.textContent = "What's included";
    }
    else {
        customizedRecipeHeader.textContent = "Customized recipe";
    }
});

// Increment the value when clicking "+" button
plus.addEventListener("click", e => {
    x += 1;
    thenumber.innerText = x;

    // Change header text if the the value is changed
    if(x == 4){
        customizedRecipeHeader.textContent = "What's included";
    }
    else {
        customizedRecipeHeader.textContent = "Customized recipe";
    }
    // if the value if 1 and plus it clicked, the minus button is visible again.
    minus.style.display = "inline";
});


let minusFlavors = document.getElementById("minusFlavors");
let thenumberFlavors = document.getElementById("mainvalueFlavors");
let plusFlavors = document.getElementById("plusFlavors");

let tempFlavors = thenumber.innerText;
let xFlavors = parseInt(tempFlavors);



// reduce the value when clicking "-" button
minusFlavors.addEventListener("click", e => {
    if (xFlavors > 1) {
        xFlavors -= 1;
        thenumberFlavors.innerText = xFlavors;
    }
    // if the value if 1, hide the minus button
    if (xFlavors === 1) {
        minusFlavors.style.display = "none";
    }

    // Change header text if the the value is changed
    if(xFlavors == 4){
        customizedRecipeHeader.textContent = "What's included";
    }
    else {
        customizedRecipeHeader.textContent = "Customized recipe";
    }


});

// Increment the value when clicking "+" button
plusFlavors.addEventListener("click", e => {
    xFlavors += 1;
    thenumberFlavors.innerText = xFlavors;

    // Change header text if the the value is changed
    if(xFlavors == 4){
        customizedRecipeHeader.textContent = "What's included";
    }
    else {
        customizedRecipeHeader.textContent = "Customized recipe";
    }

    // if the value if 1 and plus it clicked, the minus button is visible again.
    minusFlavors.style.display = "inline";
});





