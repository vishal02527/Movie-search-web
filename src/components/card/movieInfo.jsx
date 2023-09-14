import React,{Component} from 'react';
import axios from 'axios'
import MovieCard from './moviecard';
import style from './moviecard.module.css'

class MovieInfo extends Component {
    
        state ={
            movies: [],
            search: '',
            filteredData: []
        }

    componentDidMount() {
        axios.get(' https://www.omdbapi.com/?apikey=45f0782a&s=war')
        .then(res => this.setState({ movies: res.data.Search}))
        .catch(err => console.log(err))
    }

    handleSearch = (e) => {
        let data = this.state.movies.filter(movie => movie.Title.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({search: e.target.value, filteredData: data}, ()=> console.log(this.state))
    }

    render() { 
        console.log(this.state.movies)
        return (
            <>
                <div className={style.searchdiv}>
                    <input type='text' 
                    placeholder="Search movie name" 
                    className={style.searchbar} 
                    onChange={(e) => this.handleSearch(e)}
                    />
                </div>
                <div className={style.container}>
                {
                    
                    this.state.filteredData.length === 0 && this.state.search === ''?
                            this.state.movies.map((movie,index) => <MovieCard movieData = {movie} key={'movie'+index} />):
                                this.state.filteredData.length === 0 && this.state.search !== ''? <h2 className={style.noRecFound}>No record found !</h2> :
                                    this.state.filteredData.map((movie, index)=> <MovieCard movieData = {movie} key={'movie'+index} />)
                }
                </div> 
            </>  
        );
    }
}
 
export default MovieInfo;