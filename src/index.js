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
const item1 = await creatItem("hotwheels ferrari", 24.99, 3, "brinquedo");
const item2 = await creatItem("hotwheels audi", 18.99, 4, "brinquedo");
const item3 = await creatItem("hotwheels bmw", 25.99, 6, "brinquedo");
const item4 = await creatItem("hotwheels nissan", 19.99, 2, "brinquedo");
const item5 = await creatItem("Monitor LG 24ms500-b", 599.08, 1, "eletrônico");
const item6 = await creatItem("Jaqueta de Couro Masculina", 169.31, 3, "roupa");
const item7 = await creatItem("CD Linkin Park - Live In Texas", 187.90, 3, "música");
const item8 = await creatItem("Lógica de Programação e Algoritmos com Javascript - 2ª Edição", 65.86, 15, "livro");


// adicionar itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);
await cartService.addItem(myCart, item6);
await cartService.addItem(myCart, item7);
await cartService.addItem(myCart, item8);

// remover unitariamente um item
await cartService.removeItem(myCart, item2);

// deletar dois itens do carrinho
await cartService.deleteItem(myCart, item3.name);

// monstra o carrinho
await cartService.displayCart(myCart, "menor preço");

// calcula o total do carrinho
await cartService.calculateTotal(myCart);