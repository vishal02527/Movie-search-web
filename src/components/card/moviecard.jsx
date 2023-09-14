import React from 'react';
import styles from './moviecard.module.css'

class MovieCard extends React.Component {
     
    render() {
        const {movieData} = this.props;
        return (
            <>
                <div className={styles.card}> 
                    <img src={movieData.Poster} className={styles.movieposter} />
                    <div className={styles.titlediv}>
                        <h5>{movieData.Title}<span>{movieData.Year}</span></h5>
                    </div>
                    <div className={styles.circle}>
                        <p className={styles.watch}>watch</p>
                    </div>
                </div>
            </>
        );
    }
}
 
export default MovieCard;