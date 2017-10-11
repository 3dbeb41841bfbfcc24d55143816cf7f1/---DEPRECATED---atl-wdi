import React, {Component} from 'react';

// Update the forms to utilize methods being passed down from App.js
class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      value: ""

    }
  }
  handleIdSubmit = (event) => {
    event.preventDefault()
    this.props._searchById(this.state.value)

    const newSearch = {
      value: ""
    }
    this.setState({value: newSearch})
  }
  
  handleTitleSubmit = (event) => {
    event.preventDefault()
    this.props._searchByTitle(this.state.value)

    const newSearch = {
      value: ""
    }
    this.setState({value: newSearch})
  }

  handleIdChange =(event)=> {
    const newSearch = {...this.state.value}
    newSearch[event.target.name] = event.target.value
    this.setState({value: newSearch})
  }
  render(){
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

        <div className="search">
          <form id="title-search-form" method="get" onSubmit={this.handleTitleSubmit}>
            <input type="text" name="title" placeholder="Enter movie title" />
            <input onChange={this.handleTitleChange} type="submit" value={this.state.value} />
          </form>
        </div>

        <div className="search">
          <form id="id-search-form" method="get" onSubmit={this.handleIdSubmit}>
            <input type="text" name="id" placeholder="Enter omdb movie ID" />
            <input onChange={this.handleIdChange} type="submit" value={this.state.value} />
          </form>
        </div>

      </section>
    );
  };
}
export default Search;