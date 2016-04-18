var React = require("react");
var ReactDOM = require("react-dom");
var RecipesList = require("./components/recipeList.jsx");

var _recipes = [{name:"Chicken Rice Casserole",description:"Deliciousness"},
                {name:"Salmon",description:"All dat protein"}];

function render(){
    ReactDOM.render(<RecipesList recipes={_recipes} />, document.getElementById("container"));
}
render();
