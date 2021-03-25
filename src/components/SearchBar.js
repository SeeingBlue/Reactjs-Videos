import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "Search..." };

onInputChange = (e) => {
  this.setState({searchTerm: e.target.value})
}

onFormSubmit = (e) => {
  e.preventDefault()
  this.props.onFormSubmit(this.state.searchTerm)

}

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}>
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
