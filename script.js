const CART_INFO_URL = "https://dummyjson.com/carts";

function draw(array){
    let listDiv = document.querySelector("#listOfCarts");
    listDiv.innerHTML = "";

    for(let task of array){
        listDiv.innerHTML += `
            <div onclick="taskClick(${task.id})">
                <p>Корзина: ${task.id}</p>
            </div>
            <hr>
            `;
    }
};

async function loadUser (cartID) {
    let response = await fetch(CART_INFO_URL);
    let result = await response.json();
    console.log(result);

    draw(result.carts);
};

const taskClick = cartId => {
    localStorage.setItem('cartId', cartId);
    location.href = 'cart.html';
}

loadUser();