var React = require("react");
var actions = require("../actions/RecipeActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          description:""
      }
    },
    addRecipe:function(e){
        e.preventDefault();
        actions.addRecipe(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addRecipe}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Recipe Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Recipe Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="description">Description:</label>
                    <input type="text" className="form-control" id="description" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Description" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Recipe</button>
                </div>
            </form>
        )
    }
})
