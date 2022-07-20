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
    close();
}

function selectDrink(nameDrink) {
    drink = nameDrink.innerHTML;
    const selectButtom = document.querySelector(".drink").querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameDrink.classList.add("select");
    close();
}

function selectDessert(nameDessert) {
    dessert = nameDessert.innerHTML;
    const selectButtom = document.querySelector(".dessert").querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameDessert.classList.add("select");
    close();
}
function close() {
    if (food !== null && drink !== null && dessert !== null) {
        document.querySelector(".selectMenu").classList.add("hidden");
        document.querySelector(".closeOrder").classList.remove("hidden");
    }
}