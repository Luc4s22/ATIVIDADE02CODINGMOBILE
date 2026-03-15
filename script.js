function buscarDrink(){

let nome = document.getElementById("drink").value

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)

.then(res => res.json())

.then(dados => {

let drink = dados.drinks[0]

document.getElementById("imagem").src = drink.strDrinkThumb
document.getElementById("nome").innerText = drink.strDrink
document.getElementById("ingredientes").innerText =
"Ingrediente principal: " + drink.strIngredient1
document.getElementById("modo").innerText =
"Modo de preparo: " + drink.strInstructions

})

}