import React, { Component } from 'react';
import NavBar from "./components/NavBar.js"
import SplashImage from "./components/SplashImage.js"
import Description from "./components/Description.js"
import Contact from "./components/Contact.js"
import MenuList from "./components/MenuList.js"
import LocationList from "./components/LocationList.js"
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SplashImage />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />
        
      </div>
    );
  }
}

export default App;
