let food;
let drink;
let dessert;

function selectFood(nameFood) {
    const selectButtom = document.querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameFood.classList.add("select");
    food = nameFood.innerHTML;
}

function selectDrink(nameDrink) {
    drink = nameDrink.innerHTML;
    const selectButtom = document.querySelector(".drink").querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameDrink.classList.add("select");
}

function selectDessert(nameDessert) {
    dessert = nameDessert.innerHTML;
    const selectButtom = document.querySelector(".dessert").querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameDessert.classList.add("select");
}