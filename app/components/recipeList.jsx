var React = require("react");
var RecipeInfo = require("./recipeInfo.jsx")
var AddRecipe = require("./addRecipe.jsx")

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddRecipe/>
                </div>
                <div className="col-md-6">
                    {
                        this.props.recipes.map(function(s,index){
                            return(
                                <RecipeInfo info={s} key={"recipe"+index} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
});
