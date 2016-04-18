var React = require("react");
var RecipeInfo = require("./recipeInfo.jsx")

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    //We will add addRecipe functionality here
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
