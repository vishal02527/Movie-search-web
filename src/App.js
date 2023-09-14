import React,{Component} from 'react';
import MovieInfo from './components/card/movieInfo';
import css from './App.module.css'

class App extends Component {
  
  render() { 
    return (
      <div className={css.content}>
        <MovieInfo />
        <p className={css.owner}>&copy; Created by Vishal Kumar</p>
      </div>
    );
  }
}
 
export default App;