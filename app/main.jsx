var React = require("react");
var ReactDOM = require("react-dom");
var RecipesList = require("./components/recipeList.jsx");
var recipesStore = require("./stores/recipeStore");
var _recipes = recipesStore.getRecipes();
recipesStore.onChange(function(recipes){
    _recipes = recipes;
    render();
});


function render(){
    ReactDOM.render(<RecipesList recipes={_recipes} />, document.getElementById("container"));
}
render();
