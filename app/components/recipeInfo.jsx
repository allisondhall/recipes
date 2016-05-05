var React = require("react");
var actions = require("../actions/RecipeActions");

module.exports = React.createClass({
    deleteRecipe: function(e){
        e.preventDefault();
        actions.deleteRecipe(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteRecipe}>&times;</span>
                </div>
                <div className="panel-body">
                    {this.props.info.description}
                </div>
            </div>
        )
    }
})
