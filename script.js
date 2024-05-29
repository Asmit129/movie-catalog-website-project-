document.addEventListener("DOMContentLoaded", () => {
    loadMovies();
    loadGenres();
});

function loadMovies() {
    // Fetch movies from an API or local data and display them in the grid
    const movies = [
        { title: "Movie 1", year: 2020, poster: "poster1.jpg", genre: "Action" },
        { title: "Movie 2", year: 2021, poster: "poster2.jpg", genre: "Comedy" },
        // Add more movie objects here
    ];

    const movieGrid = document.getElementById("movie-grid");
    movieGrid.innerHTML = "";

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie-item");

        movieElement.innerHTML = `
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
        `;

        movieElement.addEventListener("click", () => {
            window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}`;
        });

        movieGrid.appendChild(movieElement);
    });
}

function loadGenres() {
    const genres = ["Action", "Comedy", "Drama", "Horror"];
    const genreFilter = document.getElementById("genre-filter");

    genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

function searchMovies() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const selectedGenre = document.getElementById("genre-filter").value;
    
    // Implement search and filter logic here
    // Update the movie grid based on the search term and selected genre
}
