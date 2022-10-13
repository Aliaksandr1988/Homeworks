let cart = []
function addToBasket (name, price, amount, category) {
    let a = {
        id: Math.random(),
        name: name,
        price: price,
        amount: amount,
        sum: price*amount,
        category: category,
    }

    cart.push(a)
}

addToBasket (
    name = prompt("Наименование товара"), 
    price = prompt("Стоимость товара"), 
    amount = prompt("Колличество товара"), 
    category = prompt("Укажите категорию товара")
)

console.log(cart)