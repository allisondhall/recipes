var dispatcher = require("../dispatcher");

function RecipeStore() {
    var listeners = [];
    var recipes = [{name:"Chicken Rice Casserole",description:"Deliciousness"},
                   {name:"Salmon",description:"All dat protein"},
                   {name:"Mexican Lasagna",description:"The mexicans created the best foods ever."},
                   {name:"Insane Orzo",description:"Always cook it in chicken stock."}];

    function getRecipes() {
        return recipes;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addRecipe(recipe) {
        recipes.push(recipe)
        triggerListeners();
    }

    function deleteRecipe(recipe) {
      console.log("delete " + recipe);
        var _index;
        recipes.map(function (r, index) {
            if (r.name === recipe.name) {
                _index = index;
            }
        });
        recipes.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(recipes);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "recipe") {
            switch (split[1]) {
                case "addRecipe":
                    addRecipe(payload.recipe);
                    break;
                case "deleteRecipe":
                    deleteRecipe(payload.recipe);
                    break;
            }
        }
    });

    return {
        getRecipes: getRecipes,
        onChange: onChange
    }
}

module.exports = RecipeStore();
