//importa as funções
import creatItem from "./services/item.js"
import * as cartService from "./services/cart.js"

// carrinho de compras
const myCart = [];

// lista de desejo
const myWhishList = [];

// mensagem executada no inicio
console.log("Welcome to the your Shopee Cart");

// criar itens
const item1 = await creatItem("hotwheels ferrari", 24.99, 1);
const item2 = await creatItem("hotwheels audi", 18.99, 4);
const item3 = await creatItem("hotwheels bmw", 25.99, 6);
const item4 = await creatItem("hotwheels nissan", 19.99, 2);


// adicionar itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

// remover unitariamente um item
await cartService.removeItem(myCart, item2);

// deletar dois itens do carrinho
await cartService.deleteItem(myCart, item3.name);

// monstra o carrinho
await cartService.displayCart(myCart);

// calcula o total do carrinho
await cartService.calculateTotal(myCart);