var dispatcher = require("../dispatcher");

module.exports = {
    addRecipe:function(recipe){
        dispatcher.dispatch({
           recipe:recipe,
           type:"recipe:addRecipe"
        });
    },
    deleteRecipe:function(recipe){
        dispatcher.dispatch({
           recipe:recipe,
           type:"recipe:deleteRecipe" 
        });
    }
}
