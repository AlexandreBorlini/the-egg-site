window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

var isMobile = mobileCheck();


var selectedRecipes=[];
var index    = 0;

var maxIndex = 6;
var maxIndexMobile = 3;

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

// Modelo de previews para MOBILE
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
        <div class="recipe_preview_image_cel" style="background: url(`+ window.allRecipes[selectedRecipes[i]].image + `); background-position: center; background-size: auto 35vw;">
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

        var recipePreviewElement = document.getElementById("recipe_preview" + selectedRecipes[i]);


            // Style do preview
            recipePreviewElement.style.width    = "70vw";
            recipePreviewElement.style.height   = "35vw";
            recipePreviewElement.style.cursor   = "pointer"; // Faz mostrar ser clicável
            recipePreviewElement.style.position = "absolute";

            recipePreviewElement.style.top = "calc(40em + " + 30*columnsCounter + "vw)";
            recipePreviewElement.addEventListener("click", viewRecipe.bind(this, selectedRecipes[i]), false);

            recipePreviewElement.style.left = "15vw";

            columnsCounter++;
    }
}

// Modelo de preiews para DESKTOP
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

// Ve se é DESKTOP ou MOBILE e renderiza
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
    var step;

    if(isMobile) {step = maxIndexMobile; } else { step = maxIndex; }

    if(selectedRecipes.length < step){
        maxIndex = selectedRecipes.length;
    }
    else{
        maxIndex = step;
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
    
    var step;
    if(isMobile){ step = maxIndexMobile; } else { step = 6; }


    if(maxIndex <  selectedRecipes.length){

    if(maxIndex + step >= selectedRecipes.length){

        index += selectedRecipes.length - maxIndex +1;
        maxIndex = selectedRecipes.length;
    }
    else if(maxIndex + step < selectedRecipes.length){

        maxIndex += step;
        index += step;
    }
}

    renderPreviews();
}

function previousRecipes(){
    
    var step;
    if(isMobile){ step = maxIndexMobile; } else { step = 6; }

    
    if(index -step >= 0 && index -step != maxIndex-step){
        
        index -=step;
        
        if(index + step > selectedRecipes.length)
        maxIndex = selectedRecipes.length;
        
        else{
            
            maxIndex = index + step;
        }
    }
    
    renderPreviews();
}

renderInitialPreviews();