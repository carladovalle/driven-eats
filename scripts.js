let food;
let drink;
let dessert;
let eat;
let toDrink;
let sweet;

function selectFood(nameFood) {
    const selectButtom = document.querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameFood.classList.add("select");
    food = nameFood.innerHTML;
    eat = (nameFood)
    close();
}

function selectDrink(nameDrink) {
    drink = nameDrink.innerHTML;
    const selectButtom = document.querySelector(".drink").querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameDrink.classList.add("select");
    toDrink = (nameDrink)
    close();
}

function selectDessert(nameDessert) {
    dessert = nameDessert.innerHTML;
    const selectButtom = document.querySelector(".dessert").querySelector(".select");
    if (selectButtom !== null) {
        selectButtom.classList.remove("select");
    }
    nameDessert.classList.add("select");
    sweet = (nameDessert);
    close();
}

function close() {
    if (food !== null && drink !== null && dessert !== null) {
        document.querySelector(".selectMenu").classList.add("hidden");
        document.querySelector(".closeOrder").classList.remove("hidden");
    }
}

function orderShipping() {
    let clientName = prompt("Qual o seu nome?");
    let customerAddress = prompt("Qual o seu endereço?");
    let totalPrice = Number(eat.querySelector("h6").innerText.replace("R$","").replace(",",".")) + Number(toDrink.querySelector("h6").innerText.replace("R$","").replace(",",".")) + Number(sweet.querySelector("h6").innerText.replace("R$","").replace(",",".")); 
    const uri = (`Olá, gostaria de fazer o pedido:
    - Prato: ${eat.querySelector("h4").innerText}
    - Bebida: ${toDrink.querySelector("h4").innerText}
    - Sobremesa: ${sweet.querySelector("h4").innerText}
    Total: R$ ${totalPrice.toFixed(2)}
    Nome: ${clientName}
    Endereço: ${customerAddress}`);

    const uriEncoded = encodeURIComponent(uri);
    window.open(`https://wa.me/553299999999?text=${uriEncoded}`, `_blank`);
}

function openConfirmation() {
    if (food !== undefined && drink !== undefined && dessert !== undefined) {
        const overlay = document.querySelector(".confirmOrder");
        overlay.classList.remove("hidden");
        let totalPrice = Number(eat.querySelector("h6").innerText.replace("R$","").replace(",",".")) + Number(toDrink.querySelector("h6").innerText.replace("R$","").replace(",",".")) + Number(sweet.querySelector("h6").innerText.replace("R$","").replace(",",".")); 
        overlay.querySelector(".choiceFood .nameChoice").innerHTML = eat.querySelector("h4").innerText;
        overlay.querySelector(".choiceFood .priceChoice").innerHTML = eat.querySelector("h6").innerText;
        overlay.querySelector(".choiceDrink .nameChoice").innerHTML = toDrink.querySelector("h4").innerText;
        overlay.querySelector(".choiceDrink .priceChoice").innerHTML = toDrink.querySelector("h6").innerText;
        overlay.querySelector(".choiceDessert .nameChoice").innerHTML = sweet.querySelector("h4").innerText;
        overlay.querySelector(".choiceDessert .priceChoice").innerHTML = sweet.querySelector("h6").innerText;
        overlay.querySelector(".total .priceTotal").innerHTML = "R$ " + totalPrice.toFixed(2);
    }
}

function cancelOrder() {
    document.querySelector(".confirmOrder").classList.add("hidden");
}