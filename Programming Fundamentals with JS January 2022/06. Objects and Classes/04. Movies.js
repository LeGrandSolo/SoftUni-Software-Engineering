function movies(moviesInfo) {
    let movies = {};
    for (let movieInfo of moviesInfo) {
        movieInfo = movieInfo.split(' ');
        if (movieInfo.includes('addMovie')) {
            movieInfo.shift();
            movieInfo = movieInfo.join(' ');
            movies[movieInfo] = { name: movieInfo };
        } else if (movieInfo.includes('directedBy')) {
            movieInfo.splice(movieInfo.indexOf('directedBy'), 1, '|');
            let director = movieInfo.splice(movieInfo.indexOf('|'));
            director.shift();
            director = director.join(' ');
            movieInfo = movieInfo.join(' ');
            if (Object.keys(movies).includes(movieInfo)) {
                movies[movieInfo]['director'] = director;
            }
        } else if (movieInfo.includes('onDate')) {
            movieInfo.splice(movieInfo.indexOf('onDate'), 1, '|');
            let date = movieInfo.splice(movieInfo.indexOf('|'));
            date.shift();
            date = date.join(' ');
            movieInfo = movieInfo.join(' ');
            if (Object.keys(movies).includes(movieInfo)) {
                movies[movieInfo]['date'] = date;
            }
        }
    }
    for (let movie of Object.values(movies)) {
        if (Object.keys(movie).includes('name') && Object.keys(movie).includes('director') && Object.keys(movie).includes('date')) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
)