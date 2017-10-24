import React, {Component} from 'react';

// Update the forms to utilize methods being passed down from App.js
class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      newSearch: {
        title: "",
        id: ""
      }
    }
  }
  handleIdSubmit = (event) => {
    event.preventDefault()
    this.props._searchById(this.state.newSearch.id)

    const newSearch = {
      value: ""
    }
    this.setState({newSearch: newSearch})
  }
  
  handleTitleSubmit = (event) => {
    console.log
    event.preventDefault()
    this.props._searchByTitle(this.state.newSearch.title)

    const newSearch = {
      value: ""
    }
    this.setState({newSearch: newSearch})
  }

  handleIdChange =(event)=> {
    const newSearch = {...this.state.value}
    newSearch[event.target.name] = event.target.value
    this.setState({newSearch: newSearch})
  }
  handleTitleChange =(event)=> {
    const newSearch = {...this.state.value}
    newSearch[event.target.name] = event.target.value
    this.setState({newSearch: newSearch})
  }
  render(){
    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

        <div className="search">
          <form id="title-search-form" method="get" onSubmit={this.handleTitleSubmit}>
            <input onChange={this.handleTitleChange} type="text" name="title" placeholder="Enter movie title" />
            <input  type="submit" value="Search by title" />
          </form>
        </div>

        <div className="search">
          <form id="id-search-form" method="get" onSubmit={this.handleIdSubmit}>
            <input onChange={this.handleIdChange} type="text" name="id" placeholder="Enter omdb movie ID" />
            <input  type="submit" value="Search by IMDB id" />
          </form>
        </div>

      </section>
    );
  };
}
export default Search;