var isMobile = true;


var selectedRecipes=[];
var index    = 0;
var maxIndex = 6;

// Filtra as receitas por nome se search for uma string ou 
// por tipo se for por número 
function selectRecipes(search){

    selectedRecipes = [];

    // Pegar todas as receitas (id) que tem a pesquisa no nome
    for(var i=0; i<window.allRecipes.length; i++){

        if(window.allRecipes[i].name.toUpperCase().includes(search)){

            selectedRecipes.push(window.allRecipes[i].id);
        }
    }
}

function renderPhonePreviews(){
    
    // Renderizar as receitas ---------------------------------
    var recipeContainers = document.getElementById("recipe_containers");
    recipeContainers.innerHTML = "";

    var rowPreviewsCounter = 0; // Quando for 2 aumenta quantidade de colunas
    var columnsCounter     = 0; // Quantidades de coluna
    
    var previewHtml = document.createElement('div'); // O que de fato será colocado no html

    var recipePreviewHtml = ""; // Acumulador de texto html que será colocado dentro do previewHtml

    // Para cada preview de receita renderiza o quadrado
    for(var i=index; i<maxIndex; i++){

        // HTML de APENAS UM preview, esse será concatenado em uma variável contendo
        // todos os previews
        var pieceRecipePreviewHtml = `
        <div class="recipe_preview` + selectedRecipes[i] + `" id="recipe_preview` + selectedRecipes[i] + `">
        <div class="recipe_preview_image_cel" style="background: url(`+ window.allRecipes[selectedRecipes[i]].image + `); background-position: center; background-size: auto 20vw;">
            <div class="recipe_preview_text_container_cel">
                <div class="recipe_preview_texts_cel">
                    <p class="recipe_preview_name_cel">`+ window.allRecipes[selectedRecipes[i]].name + `</p>
                    <p class="recipe_preview_description_cel">`+ window.allRecipes[selectedRecipes[i]].description + `</p>
                </div>
            </div>
        </div>
        </div>`;

        // Concatena os previews individuais
        recipePreviewHtml = recipePreviewHtml.concat(pieceRecipePreviewHtml);
    }

    previewHtml.innerHTML = recipePreviewHtml; // Transforma o texto do html com todos os previews em html de fato
    recipeContainers.appendChild(previewHtml); // Adiciona no html real

    
    /*
        Aplica os styles aos previews criados
    */

   for(var i=index;i<maxIndex; i++ ){

        if(rowPreviewsCounter>=2){
        
            rowPreviewsCounter = 0;
            columnsCounter++;
        } 

        var recipePreviewElement = document.getElementById("recipe_preview" + selectedRecipes[i]);


            // Style do preview
            recipePreviewElement.style.width    = "45vw";
            recipePreviewElement.style.height   = "20vw";
            recipePreviewElement.style.cursor   = "pointer"; // Faz mostrar ser clicável
            recipePreviewElement.style.position = "absolute";

            recipePreviewElement.style.top = "calc(40em + " + 24*columnsCounter + "vw)";
            recipePreviewElement.addEventListener("click", viewRecipe.bind(this, selectedRecipes[i]), false);


            // Separa se for o preview da direita ou da esquerda
            if(rowPreviewsCounter == 0){ // Se for o preview

                recipePreviewElement.style.left = "2vw";
            }
            else{

                recipePreviewElement.style.right = "2vw";
            }

            rowPreviewsCounter++;
    }
}

function renderDesktopPreviews(){
    
    // Renderizar as receitas ---------------------------------
    var recipeContainers = document.getElementById("recipe_containers");
    recipeContainers.innerHTML = "";

    var rowPreviewsCounter = 0; // Quando for 2 aumenta quantidade de colunas
    var columnsCounter     = 0; // Quantidades de coluna
    
    var previewHtml = document.createElement('div'); // O que de fato será colocado no html

    var recipePreviewHtml = ""; // Acumulador de texto html que será colocado dentro do previewHtml

    // Para cada preview de receita renderiza o quadrado
    for(var i=index; i<maxIndex; i++){

        // HTML de APENAS UM preview, esse será concatenado em uma variável contendo
        // todos os previews
        var pieceRecipePreviewHtml = `
        <div class="recipe_preview` + selectedRecipes[i] + `" id="recipe_preview` + selectedRecipes[i] + `">
        <div class="recipe_preview_image" style="background: url(`+ window.allRecipes[selectedRecipes[i]].image + `); background-position: center; background-size: auto 20vw;">
            <div class="recipe_preview_text_container">
                <div class="recipe_preview_texts">
                    <p class="recipe_preview_name">`+ window.allRecipes[selectedRecipes[i]].name + `</p>
                    <p class="recipe_preview_description">`+ window.allRecipes[selectedRecipes[i]].description + `</p>
                </div>
            </div>
        </div>
        </div>`;

        // Concatena os previews individuais
        recipePreviewHtml = recipePreviewHtml.concat(pieceRecipePreviewHtml);
    }

    previewHtml.innerHTML = recipePreviewHtml; // Transforma o texto do html com todos os previews em html de fato
    recipeContainers.appendChild(previewHtml); // Adiciona no html real

    
    /*
        Aplica os styles aos previews criados
    */

   for(var i=index;i<maxIndex; i++ ){

        if(rowPreviewsCounter>=2){
        
            rowPreviewsCounter = 0;
            columnsCounter++;
        } 

        var recipePreviewElement = document.getElementById("recipe_preview" + selectedRecipes[i]);


            // Style do preview
            recipePreviewElement.style.width = "35vw";
            recipePreviewElement.style.height = "15vw";
            recipePreviewElement.style.cursor = "pointer"; // Faz mostrar ser clicável
            recipePreviewElement.style.position = "absolute";

            recipePreviewElement.style.top = "calc(40em + " + 18*columnsCounter + "vw)";
            recipePreviewElement.addEventListener("click", viewRecipe.bind(this, selectedRecipes[i]), false);


            // Separa se for o preview da direita ou da esquerda
            if(rowPreviewsCounter == 0) // Se for o preview
                recipePreviewElement.style.left = "13vw";
            else
                recipePreviewElement.style.left = "51vw";

            rowPreviewsCounter++;
    }
}


function renderPreviews(){

    if(isMobile){

        renderPhonePreviews();
    }
    else{
        renderDesktopPreviews();
    }
}


function renderPreviewsWithSearch(search){
    
    var recipeContainers = document.getElementById("recipe_containers");
    recipeContainers.innerHTML = "";

    // Pegar todas as receitas (id) que tem a pesquisa no nome
    selectRecipes(search);

    index =0;
    if(selectedRecipes.length < 6){
        maxIndex = selectedRecipes.length;
    }
    else{
        maxIndex = 6;
    }

    renderPreviews();
}

function renderInitialPreviews(){

    if (localStorage.getItem("search") === null) {

        renderPreviewsWithSearch("");
    }
    else{

        renderPreviewsWithSearch(localStorage.getItem("search"));  
    }
}

function reset(){

    renderPreviewsWithSearch(""); 
}

function search(){

    // Pegar o texto
    var searchText = document.getElementById("search_field").value.toUpperCase();

    console.log(searchText);

    renderPreviewsWithSearch(searchText);
}


// Quando clicar no preview vai para a página de 
function viewRecipe(recipeId){

    localStorage.setItem("recipe_name", window.allRecipes[recipeId].name);
    localStorage.setItem("description", window.allRecipes[recipeId].description);

    localStorage.setItem("ingredient_qnt", window.allRecipes[recipeId].ingredients.length);
    for(var i=0; i<window.allRecipes[recipeId].ingredients.length; i++){

        localStorage.setItem("ingredient" + i, window.allRecipes[recipeId].ingredients[i]);
    }

    localStorage.setItem("direction_qnt", window.allRecipes[recipeId].directions.length);
    for(var i=0; i<window.allRecipes[recipeId].directions.length; i++){

        localStorage.setItem("direction" + i, window.allRecipes[recipeId].directions[i]);
    }

    localStorage.setItem("link", window.allRecipes[recipeId].link);
    localStorage.setItem("image", window.allRecipes[recipeId].image);

    window.location.href = "./recipe.html";
}

function nextRecipes(){
    
    if(index + 6 != selectedRecipes.length){
        
        if(maxIndex + 6 > selectedRecipes.length){
            
            maxIndex = selectedRecipes.length;
        }
        else{
            
            maxIndex+= 6;
        }
        
        if(index + 6 <= maxIndex){
            
            index += 6;
        }
        
        renderPreviews();
    }
}

function previousRecipes(){
    
    if(index -6 >= 0 && index -6 != maxIndex-6){
        
        index -=6;
        
        if(index + 6 > selectedRecipes.length)
        maxIndex = selectedRecipes.length;
        
        else{
            
            maxIndex = index + 6;
        }
    }
    
    renderPreviews();
}

renderInitialPreviews();