import React, { Component } from 'react'

import Movie from './Movie'


class MovieList extends Component {
    render() {
        const movies = [
            { title: "Blade Runner 2049", rating: 'R', description: 'killing vampires my niiiggg' },
            { title: 'Big Mouth', rating: 'MA', description: 'its about puberty dude' },
            { title: 'Friday', rating: 'R', description: 'smokin weed, runnin off on the plug, beatin Deebo ass' }
        ]
        const movieComponents = movies.map((movie) => {
            return <Movie title={movie.title} rating={movie.rating} description={movie.description} />
        })

        return (
            <div>
                {movieComponents}
            </div>
        )
    }
}

export default MovieList