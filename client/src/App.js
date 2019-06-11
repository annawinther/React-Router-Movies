import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movieToSave => {
    const savedList = this.state.savedList;
    const alreadyThere = savedList.find(movie => movieToSave.id === movie.id)
    if (!alreadyThere){
      savedList.push(movieToSave);
      this.setState({ savedList });
    } else alert("Already saved");
  };

  render() {
    return (
        <div>
          <SavedList list={this.state.savedList} />
          <Route
            exact
            path='/'
            component={MovieList}
          />
          <Route
          path='/movies/:id'
          render={props => <Movie {...props} addToSavedList={this.addToSavedList} />}
          />
        </div>
    );
  }
}
