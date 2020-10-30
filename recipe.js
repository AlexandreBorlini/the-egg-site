
// Id da receita, usada para saber em que local do array de todas as receitas
// está a informação dessa
var recipeId = 0;


var recipeName = localStorage.getItem("recipe_name");
var recipeDescription = localStorage.getItem("description");
var recipeImage = localStorage.getItem("image");
var recipeLink = localStorage.getItem("link");

var ingredients = [];
for(var i=0; i < localStorage.getItem("ingredient_qnt"); i++){

    ingredients.push(localStorage.getItem("ingredient" + i));
}

var directions = [];
for(var i=0; i < localStorage.getItem("direction_qnt"); i++){

    directions.push(localStorage.getItem("direction" + i));
}

// NOME DA RECEITA ======================================================================================================================


var recipeNameHTML = document.getElementById("recipe_name");
recipeNameHTML.innerHTML = recipeName;

// IMAGEM DA RECEITA ====================================================================================================================

var recipeImageHTML = document.getElementById("recipe_image");
recipeImageHTML.style.background = `url(` + recipeImage + `)`;
recipeImageHTML.style.backgroundPosition = "center";
recipeImageHTML.style.backgroundSize = "auto 33em";
recipeImageHTML.style.backgroundRepeat = "no-repeat";

// ALA DE DESCRIÇÃO =====================================================================================================================


var descriptionHtml = document.createElement('p'); 

var descriptionContainer = document.getElementById("description_text");

var descriptionText = `<p class="description"><img src="images/topicIcon.png" class="eggIcon">` + recipeDescription + `</p>`;

descriptionHtml.innerHTML = descriptionText;
descriptionContainer.appendChild(descriptionHtml);



// ALA DE INGREDIENTES =======================================================================================================


var ingredientHtml = document.createElement('p'); // O que de fato será colocado no html

// O local onde será colocado o ingredientHtml
var ingredientsContainers = document.getElementById("ingredients_list");


var finalIngredientText = ""; // Acumulador de texto html que será colocado dentro do previewHtml

for(var i=0; i<ingredients.length; i++){

    var singleIngredientText = `<p id="ingredient` + i + `">` + `<img src="images/topicIcon.png" class="eggIcon">` + ingredients[i] + `</p>`;

    finalIngredientText = finalIngredientText.concat(singleIngredientText);
}

ingredientHtml.innerHTML = finalIngredientText; // Transforma o texto do html com todos os previews em html de fato
ingredientsContainers.appendChild(ingredientHtml); // Adiciona no html real

for(var i=0; i<ingredients.length; i++){

    var ingredientElement = document.getElementById("ingredient" + i);

    ingredientElement.style.position = "relative";
    ingredientElement.style.fontSize = "1.2em";

    ingredientElement.style.width = "50vw";
    ingredientElement.style.height = "auto";

    ingredientElement.style.top = "29em";
    ingredientElement.style.left = "10vw";
}


// ALA DE PREPARO =================================================================================================================


var directionsHtml = document.createElement('p'); 
var directionsContainers = document.getElementById("directions_list");

var finalDirectionsText = "";

for(var i=0; i<directions.length; i++){

    var singleDirectionText = `<p id="direction` + i + `">` + `<img src="images/topicIcon.png" class="eggIcon">` + directions[i] + `</p>`;
    
    finalDirectionsText = finalDirectionsText.concat(singleDirectionText);
}


directionsHtml.innerHTML = finalDirectionsText; 
directionsContainers.appendChild(directionsHtml);


for(var i=0; i<directions.length; i++){

    var directionElement = document.getElementById("direction" + i);

    directionElement.style.position = "relative";
    directionElement.style.fontSize = "1.2em";

    directionElement.style.width = "90vw";
    directionElement.style.height = "auto";

    directionElement.style.top = "29em";
    directionElement.style.left = "10vw";
}


// LINK DO YOUTUBE ======================================================================================================================


var linkContainer = document.getElementById("youtube_video").src = recipeLink;



// MENU ===========================================================================================================================


function viewMenu(){

    var menuContainer = document.getElementById("type_menu");

    if(menuContainer.style.visibility == "hidden"){

        menuContainer.style.visibility = "visible";
    }
    else
        menuContainer.style.visibility = "hidden";
}

function search(){

    localStorage.setItem("search", document.getElementById("search_field").value.toUpperCase());
    window.location.href = "./index.html"
}

function reset(){

    localStorage.setItem("search", "");
    window.location.href = "./index.html"
}