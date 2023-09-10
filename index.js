window.onload = function() {
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTopRatedMovies();
    fetchNowPlayingMovies();
}

function getFirstSixMovies(movies) {
    return movies.slice(0, 6);
}

function limitStringCharacters(string, limit) {
    return string.substring(0, limit);
}

function fetchPopularMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGYzMzllZjMwMjI3MWY4NThiZDQwYWM0MDhmYzA0MiIsInN1YiI6IjY0ZjUyNmUxM2Q0M2UwMDBhY2ZlMDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DaJt15EZ85oElz1IBNT-6cOBWkGTPp63DHPFmyWDB2c'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const totalMovies = getFirstSixMovies(response.results);
            buildPopularMovieCards(totalMovies); 
        })
        .catch(err => console.error(err));
}

function buildPopularMovieCards(movies) {
    const movieContainer = document.querySelector('#popularMovies');

    movies.forEach(movie => {
        const cardColumn = document.createElement('div');
        cardColumn.classList.add('col-md-4');

        const movieCard = document.createElement('div');
        movieCard.classList.add('card');
        movieCard.classList.add('mb-4');

        const movieImage = document.createElement('img');
        movieImage.classList.add('card-img-top');
        movieImage.classList.add('mb-3');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('card-title');
        movieTitle.classList.add('popular-movies-card-title');
        movieTitle.textContent = movie.title;

        const movieOverview = document.createElement('p');
        movieOverview.classList.add('card-text');
        movieOverview.textContent = limitStringCharacters(movie.overview, 100) + '...';

        cardColumn.appendChild(movieCard);
        movieCard.appendChild(cardBody);
        cardBody.appendChild(movieImage);
        cardBody.appendChild(movieTitle);
        cardBody.appendChild(movieOverview);

        movieContainer.appendChild(cardColumn);
    });
}

function fetchUpcomingMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGYzMzllZjMwMjI3MWY4NThiZDQwYWM0MDhmYzA0MiIsInN1YiI6IjY0ZjUyNmUxM2Q0M2UwMDBhY2ZlMDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DaJt15EZ85oElz1IBNT-6cOBWkGTPp63DHPFmyWDB2c'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const totalMovies = getFirstSixMovies(response.results);
            buildUpcomingMovieCards(totalMovies); 
        })
        .catch(err => console.error(err));
}

function buildUpcomingMovieCards(movies) {
    const movieContainer = document.querySelector('#upcomingMovies');

    movies.forEach(movie => {
        const cardColumn = document.createElement('div');
        cardColumn.classList.add('col-md-4');

        const movieCard = document.createElement('div');
        movieCard.classList.add('card');
        movieCard.classList.add('mb-4');

        const movieImage = document.createElement('img');
        movieImage.classList.add('card-img-top');
        movieImage.classList.add('mb-3');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('card-title');
        movieTitle.classList.add('upcoming-movies-card-title');
        movieTitle.textContent = movie.title;

        const movieOverview = document.createElement('p');
        movieOverview.classList.add('card-text');
        movieOverview.textContent = limitStringCharacters(movie.overview, 100) + '...';

        cardColumn.appendChild(movieCard);
        movieCard.appendChild(cardBody);
        cardBody.appendChild(movieImage);
        cardBody.appendChild(movieTitle);
        cardBody.appendChild(movieOverview);

        movieContainer.appendChild(cardColumn);
    });
}

function fetchTopRatedMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGYzMzllZjMwMjI3MWY4NThiZDQwYWM0MDhmYzA0MiIsInN1YiI6IjY0ZjUyNmUxM2Q0M2UwMDBhY2ZlMDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DaJt15EZ85oElz1IBNT-6cOBWkGTPp63DHPFmyWDB2c'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const totalMovies = getFirstSixMovies(response.results);
            buildTopRatedMovieCards(totalMovies); 
        })
        .catch(err => console.error(err));
}

function buildTopRatedMovieCards(movies) {
    const movieContainer = document.querySelector('#topRatedMovies');

    movies.forEach(movie => {
        const cardColumn = document.createElement('div');
        cardColumn.classList.add('col-md-4');

        const movieCard = document.createElement('div');
        movieCard.classList.add('card');
        movieCard.classList.add('mb-4');

        const movieImage = document.createElement('img');
        movieImage.classList.add('card-img-top');
        movieImage.classList.add('mb-3');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('card-title');
        movieTitle.classList.add('top-rated-movies-card-title');
        movieTitle.textContent = movie.title;

        const movieOverview = document.createElement('p');
        movieOverview.classList.add('card-text');
        movieOverview.textContent = limitStringCharacters(movie.overview, 100) + '...';

        cardColumn.appendChild(movieCard);
        movieCard.appendChild(cardBody);
        cardBody.appendChild(movieImage);
        cardBody.appendChild(movieTitle);
        cardBody.appendChild(movieOverview);

        movieContainer.appendChild(cardColumn);
    });
}

function fetchNowPlayingMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGYzMzllZjMwMjI3MWY4NThiZDQwYWM0MDhmYzA0MiIsInN1YiI6IjY0ZjUyNmUxM2Q0M2UwMDBhY2ZlMDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DaJt15EZ85oElz1IBNT-6cOBWkGTPp63DHPFmyWDB2c'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const totalMovies = getFirstSixMovies(response.results);
            buildNowPlayingMovieCards(totalMovies); 
        })
        .catch(err => console.error(err));
}

function buildNowPlayingMovieCards(movies) {
    const movieContainer = document.querySelector('#nowPlayingMovies');

    movies.forEach(movie => {
        const cardColumn = document.createElement('div');
        cardColumn.classList.add('col-md-4');

        const movieCard = document.createElement('div');
        movieCard.classList.add('card');
        movieCard.classList.add('mb-4');

        const movieImage = document.createElement('img');
        movieImage.classList.add('card-img-top');
        movieImage.classList.add('mb-3');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('card-title');
        movieTitle.classList.add('now-playing-movies-card-title'); 
        movieTitle.textContent = movie.title;

        const movieOverview = document.createElement('p');
        movieOverview.classList.add('card-text');
        movieOverview.textContent = limitStringCharacters(movie.overview, 100) + '...';

        cardColumn.appendChild(movieCard);
        movieCard.appendChild(cardBody);
        cardBody.appendChild(movieImage);
        cardBody.appendChild(movieTitle);
        cardBody.appendChild(movieOverview);

        movieContainer.appendChild(cardColumn);
    });
}


