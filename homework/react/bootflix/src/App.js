import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'
import axios from "axios"

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the responseponseponse from the server
  

  _searchByTitle = (title) => {
    console.log(title)
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`)
      .then((response) => {
        
        console.log(response)
          this.setState({
            title: response.data.Title,
            year: response.data.Year,
            director: response.data.Director,
            genre: response.data.Genre,
            plot: response.data.Plot
          }).catch((error) => {
            console.log(error)
          })
      })
    
  }

  // _searchById = (id) => {
  //   // event.preventDefault()
  //   const id = event.target.id.value
  //   axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${id}`)
  //     .then((response) => {
        
  //       console.log(response)
  //         this.setState({
  //           title: response.data.Title,
  //           year: response.data.Year,
  //           director: response.data.Director,
  //           genre: response.data.Genre,
  //           plot: response.data.Plot
  //         }).catch((error) => {
  //           console.log(error)
  //         })
  //     })
  // }

  componentWillMount() {
    
    
  }
  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search 
          _searchById={this._searchById}
          _searchByTitle={this._searchByTitle}
        />
        <Movie />
      </div>
    );
  }
}

export default App;
