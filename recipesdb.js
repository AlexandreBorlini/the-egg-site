var allRecipes = [];
addRecipes();


function addRecipes(){

    /*
        types: 0=fried
               1=boiled
    */


    var scotchEggs = { // ----------------------------------------------------------------------- SCOTCH EGGS

        id: 2,
        name: "Scotch Eggs",
        description: "Boiled egg wrapped with fresh fried sausage",
        ingredients: ["An egg", "Fresh sausage", "Oil", "Spices"],
        directions: ["Boil the egg for the time you want", "Drain the egg, cool it and crack the shell",
                     "Remove the meat from the sausage skin, spice it, and involve in the egg", "Fry the meat-involved egg using your fry methods"],
        link: "https://www.youtube.com/embed/k8SXf5V8aPM",
        image: "images/scotchEggs.jpg"
    };

    var tamagoSando={ // -------------------------------------------------------------------- TAMAGO SANDO

        id: 4,
        name: "Tamago Sando",
        description: "Common Japanese egg sandwich",
        ingredients: ["Eggs", "Loaf bread"],
        directions: ["Boil the eggs for 12 minutes (once the water boiling) on medium heat", "After cool, crash the shell and mash the eggs with a fork", "Add salt and your spices", "Add mayonnaise (preferably japanese) and mix well", "Distribute the mix on one side of the bread and close", "Place the sandwich between two plates, pressionate and set aside for 5 minutes", "Cut the bread corners and then in half"],
        link: "https://www.youtube.com/embed/PVN5VurqAxA",
        image: "images/tamagoSando.jpg"
    }

    var boiledEggs = { // ----------------------------------------------------------------------- BOILED EGGS

        id: 0,
        name: "Boiled Eggs",
        description: "Soft/Hard boiled eggs",
        ingredients: ["An egg", "Deep pan with water"],
        directions: ["Put the egg in a pan with water", "After the water boils, waits 4 minutes for soft eggs or more than 7 for hard eggs",
                     "Cool the egg with cold water and crack the shell"],
        link: "https://www.youtube.com/embed/3CnAQzEiuvQ",
        image: "images/boiledEggs.png"
    }

    var tapiocaWithEggs= { // -------------------------------------------------------------------- TAPIOCA COM OVO

        id: 3,
        name: "Tapioca with Eggs",
        description: "Tapioca with eggs",
        ingredients: ["Eggs", "Tapioca", "nonstick pan (high recommended)"],
        directions: ["Break the eggs, add your spices and mix", "With the mixed eggs, let in low heat and scramble", "In the nonstick pan, spread the tapioca and let at low heat", "Once the tapioca get hard, put the scrambled eggs and roll or fold like tacos"],
        link: "https://www.youtube.com/embed/LAJSlXRpmPs",
        image: "images/tapiocaWithEgg.jpg"
    }

    var friedEggs = { // ----------------------------------------------------------------------- FRIED EGGS

        id: 1,
        name: "Fried Eggs",
        description: "Soft/Hard fried eggs",
        ingredients: ["An egg", "Oil, butter or olive oil"],
        directions: ["Lay the Oil/ Butter/ Olive oil in a pan", "Crash the egg and put in the pan", "Add salt and your spices", "Make sure to stir the egg constantly", "For soft eggs, until the white is set, flip the egg and wait 1 minute", "For medium/hard eggs, it need 3 minutes each side or more" ],
        link: "https://www.youtube.com/embed/YTE1z4SbyTk",
        image: "images/friedEgg.jpg"
    }

    var gyeranMari = {// ----------------------------------------------------------------------- GYERAN MARI

        id: 5,
        name: "Gyeran Mari",
        description: "Korean egg roll",
        ingredients: ["Eggs", "Carrots", "Your vegetables"],
        directions: ["Break the eggs and mix without creating too much air bubbles", "Spice as you want", "Cut the carrots and the vegetables (preferably in small pieces)", "Add to the eggs and mix again", "Spill the mix in a pan (preferably a nonstick pan) and heat", "After get more solid, roll it"],
        link: "https://www.youtube.com/embed/8DgL9y7u41o",
        image: "images/gyeranMari.jpg"
    }

    var scrambledEggs = { // --------------------------------------------------------------------- SCRAMBLED EGGS

        id: 6,
        name: "Scrambled Eggs",
        description: "Scrambled Eggs",
        ingredients: ["Eggs", "Butter"],
        directions: ["Break the eggs and mix", "Put the butter on the pan and let melt", "Add the mixed egg and with a spoon deform the format", "Wait while stir the eggs until it seems good"],
        link: "https://www.youtube.com/embed/yyi55ZrpJ0E",
        image: "images/creamyScrambledEggs.jpg"
    }

    var poachedEggs = { // --------------------------------------------------------------------- POACHED EGGS

        id: 7,
        name: "Poached Eggs",
        description: "Soft/hard poached eggs",
        ingredients: ["Egg", "Deep pan with water"],
        directions: ["Break the egg and put in a bowl", "After the water boils, put the egg", "Wait 4 minutes to soft eggs or more for hard", "Spice as you want"],
        link: "https://www.youtube.com/embed/egdu-19VM5w",
        image: "images/poachedEggs.jpg"
    }

    var frenchOmelette = { // --------------------------------------------------------------------- POACHED EGGS

        id: 8,
        name: "French Omelette",
        description: "Simple French made omelette",
        ingredients: ["Eggs", "Butter", "Your spices"],
    directions: ["Break the egg, add your spices and mix", "Melt a butter piece in the pan and add the mixed eggs", "Shake and stir the omelette", "Roll the omelette"],
        link: "https://www.youtube.com/embed/3oTFE6FAIrw",
        image: "images/frenchOmelette.jpeg"
    }

    var omurice = { // ------------------------------------------------------------------------- OMURICE

        id: 9,
        name: "Omurice",
        description: "Japanese fried rice omelette",
        ingredients: ["Eggs", "Rice", "Your spices and additionals", "Ketchup", "Tomato puree"],
        directions: ["Make the tomato sauce by mixing Ketchup, tomato puree and water", "Let it heat until get a doughy texture", "Mix your spices and additionals with rice and fry, add the Tomato sauce too", "Break and mix eggs in another pan", "After the eggs get more hard, add the rice", "envolve the rice with omelett", "Add more of sauce on top"],
        link: "https://www.youtube.com/embed/vF51LgSSpe0",
        image: "images/omurice.jpg"
    }

    var tornadoOmellete = { // ------------------------------------------------------------------ TORNADO OMELETTE

        id: 10,
        name: "Tornado Omellete",
        description: "Korean omelette with tornado shape and fried rice",
        ingredients: ["Eggs", "Bowl shaped fried rice", "Tomato sauce", "Two sticks"],
        directions: ["Break the eggs in a bowl, mix and add your spices", "Put the mixed eggs in a hot pan", "With two sticks, make a slow tornado (circular) movement approaching to the center of mixed eggs while it get hard", "It will create a contorted omelette, put it on top of the fried rice", "Add the sauce around it"],
        link: "https://www.youtube.com/embed/1uXi8BE7Wo0",
        image: "images/tornadoOmellete.jpg"
    }

    var eggCoffee = { // -------------------------------------------------------------------------- EGG COFFEE

        id: 11,
        name: "Egg Coffee",
        description: "Vietnamese egg coffee",
        ingredients: ["Coffee (drink)", "Eggs", "Condensed milk"],
        directions: ["Make your coffee as you like", "In a bowl, crack the eggs and add only the eggs yolk", "Add condensed milk and mix", "Slowly add the mixed egg on top of the coffee"],
        link: "https://www.youtube.com/embed/cHnBx2kPueM",
        image: "images/eggCoffee.jpg"
    }

    var eggFriedRice = { // ------------------------------------------------------------------------ EGG FRIED RICE

        id: 12,
        name: "Egg Fried Rice",
        description: "Fried Rice with eggs and spices",
        ingredients: ["Eggs", "Rice", "Vegetables/Spices"],
        directions: ["Break the eggs and mix", "Cut/Prepare your vegetables/spices", "In a pan, put the eggs, vegetables, spices and rice", "Mix everything"],
        link: "https://www.youtube.com/embed/qH__o17xHls",
        image: "images/eggFriedRice.png"
    }

    var tamagoSushi = { // ------------------------------------------------------------------------ TAMAGO SUSHI

        id: 13,
        name: "Tamago Sushi",
        description: "Simple sushi made with eggs instead of fish",
        ingredients: ["Eggs", "Sushi rice", "Nori (sushi seaweed)"],
        directions: ["Break the eggs, add your spices and mix", "Put it in a pan and wait until make a omelette, then roll it", "Cut the rolled omelette into pieces and put on top of the rice", "Bind with the nori"],
        link: "https://www.youtube.com/embed/7ExN9-pXw3s",
        image: "images/tamagoSushi.jpg"
    }

    var baconDeviledEggs = { // --------------------------------------------------------------------- BACON DEVILED EGGS

        id: 14,
        name: "Bacon Deviled Eggs",
        description: "Boiled eggs with bacon and other spices",
        ingredients: ["Eggs", "Bacon", "Mayonnaise"],
        directions: ["Hard boil the eggs, cool and cut them in half", "Separate the egg yolks and put in another bowl, add the mayonnaise and the spices", "Mix until get more doughy, add the fried bacon and mix again", "Distrute the mix into the hard boiled egg white"],
        link: "https://www.youtube.com/embed/BfYRqe_vguQ",
        image: "images/baconDeviledEggs.jpg"
    }

    
    var shoyuTamago = { // --------------------------------------------------------------------- SHOYU TAMAGO

        id: 15,
        name: "Shoyu Tamago",
        description: "Japanese soy sauce egg",
        ingredients: ["Eggs", "Soy sauce", "Mirin", "Garlic", "Scallions", "grated ginger"],
        directions: ["Mix water, soy Sauce and mirin (3:1:1)", "Add the scalions, minced garlics and grated gingers", "Boil with high heat", "Boil the eggs and cool them", "Let the boiled eggs marining in the mixed soy sauce overnight"],
        link: "https://www.youtube.com/embed/lWhWL8H37qw",
        image: "images/shoyuTamago.jpg"
    }

    var breadOmelette = { // --------------------------------------------------------------------- BREAD OMELETTE

        id: 16,
        name: "Bread Omelette",
        description: "Bread with spicy omelette",
        ingredients: ["Eggs", "Bread", "Butter", "Your spices"],
        directions: ["Melt the butter and mix with your spices", "In another pan, break the eggs and mix", "Add the mixed spices with the eggs", "Dip the bread on it and let fry all sides"],
        link: "https://www.youtube.com/embed/5LN7aMe1XMg",
        image: "images/breadOmelette.jpg"
    }

    allRecipes.push(boiledEggs);
    allRecipes.push(friedEggs);
    allRecipes.push(scotchEggs);
    allRecipes.push(tapiocaWithEggs);
    allRecipes.push(tamagoSando);
    allRecipes.push(gyeranMari);
    allRecipes.push(scrambledEggs);
    allRecipes.push(poachedEggs);
    allRecipes.push(frenchOmelette);
    allRecipes.push(omurice);
    allRecipes.push(tornadoOmellete);
    allRecipes.push(eggCoffee);
    allRecipes.push(eggFriedRice);
    allRecipes.push(tamagoSushi);
    allRecipes.push(baconDeviledEggs);
    allRecipes.push(shoyuTamago);
    allRecipes.push(breadOmelette);
}