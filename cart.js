const cartId = +localStorage.getItem('cartId');

const CART_INFO_URL = "https://dummyjson.com/carts/"+cartId;

console.log(CART_INFO_URL);

function draw(array){
    let listDiv = document.querySelector("#cart_products");
    listDiv.innerHTML = "";

    console.log(array);

    for(let task of array){
        listDiv.innerHTML += `
            <p>Title: ${task.title}</p>
            <p>Quantity: ${task.quantity}</p>
            <p>Price: ${task.price}</p>
            <p>Total: ${task.total}</p>
            <p>Discount: ${task.discountPercentage}%</p>
            <p>Discounted Price: ${task.discountedPrice}</p>

            <hr>
        `;
    }
};

async function loadCart (selectedCartID) {
    let response = await fetch(CART_INFO_URL);
    let result = await response.json();

    draw(result.products);
};

loadCart();