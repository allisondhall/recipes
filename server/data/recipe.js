var sequelize = require("sequelize");

var recipeSchema = sequelize.define('recipe', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = sequelize.model("recipe", recipeSchema);
