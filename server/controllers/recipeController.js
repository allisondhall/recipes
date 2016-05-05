var sequelize = require("sequelize");
var Recipe = require("../data/recipe");
var _ = require("underscore");

var router = require("express").Router();
router.route("/recipes/:id?").get(getRecipes).post(addRecipe).delete(deleteRecipe);

function getRecipes(req, res) {
    Recipe.find(function (err, recipes) {
        if (err)
            res.send(err);
        else
            res.json(recipes);
    });
}

function addRecipe(req, res) {
    var recipe = new Recipe(_.extend({}, req.body));
    recipe.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(recipe);
    });
}

function deleteRecipe(req, res) {
    var id = req.params.id;
    Recipe.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
