import React, { Component } from "react";

class SearchBar extends Component {
  state = {term: "dffdfdf"};

  onInputChange = () => {
      
  }

  render() {
    return (
      <div className=" search-bar ui segment">
        <form className="ui form">
          <div className="field">
              <label>Video Search</label>
              <input type="text" value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
