import React, { Component } from 'react';
import './App.css';
import Scrolling from './components/scrolling-text/Scrolling-text';
import Header from './components/header/Header';
import CardContainer from './components/cardContainer/CardContainer';
import API from './components/api/API';

const {fetchFilm, fetchPeople, fetchVehicles, fetchPlanets, planetResidents} = API;

class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      people: [],
      vehicles: [],
      planets: [],
      location: 'people',
      favorites: []
  
    }
      this.upDateData = this.upDateData.bind(this);
      this.updateFavorite = this.updateFavorite.bind(this);    
  }

  upDateData(event) {
    this.setState({location: event.target.innerText.toLowerCase()})
    
  }

  updateFavorite(card) {
    let favorites = this.state.favorites;
    
    const findInFavorites = favorites.find(favorite => favorite.name === card.name)
    if(findInFavorites) {
      favorites = favorites.filter(favorite => favorite.name !== card.name)
    } else {
      favorites.push(card)
    }
    this.setState({favorites})
   
  }

  async componentDidMount() {
    const film = await fetchFilm();
    const people =  await fetchPeople()
    const vehicles = await fetchVehicles();
    const planets =  await fetchPlanets();
    this.setState({ film, people, vehicles, planets })
  }

  render() {
    
    const arrayToRender = this.state.location;

    return (
      <div className="App">
      <div className="top">
        <Scrolling 
          film={this.state.film}
        />
      </div>
      <div className="bottom">
        <Header 
          upDateData={this.upDateData}
        />
        <CardContainer 
          itemData={this.state[arrayToRender]}
          location={this.state.location}
          updateFavorite={this.updateFavorite}
          favorites={this.state.favorites}
        />
      </div>
      </div>
    );
  }
}

export default App;
