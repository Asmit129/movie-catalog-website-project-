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


if (returnToFlightInfo) {
          // Return to flight info overlay — explicitly set up overlay with flight content
          // (mirrors the exact flow from the Flight Info tile click)
          const overlay = document.getElementById("searchOverlay");
          if (overlay) {
            renderSearchInOverlay = true;
            overlay.classList.add("show");
            document.body.classList.add("overlay-active");
            overlayCurrentSearchTerm = "";
            overlay.dataset.searchType = "flights";

            const searchInput = document.getElementById("searchOverlayInput");
            if (searchInput) {
              searchInput.value = "";
              let searchPlaceholderText = getTranslatedText("search.placeholder", "Search");
              const mainSearchInput = document.querySelector(".search-main-input");
              if (mainSearchInput && mainSearchInput.placeholder) {
                searchPlaceholderText = mainSearchInput.placeholder;
              }
              searchInput.placeholder = searchPlaceholderText;
            }

            // Move the flight grid into the overlay content
            const flightGrid = document.querySelector(".flight-grid");
            const overlayContent = document.getElementById("searchModalContent");
            if (flightGrid && overlayContent) {
              overlayContent.innerHTML = "";
              overlayContent.appendChild(flightGrid);
            }

            if (typeof filterFlightCards === "function") {
              filterFlightCards("");
            }
            updateOverlayBackgroundMode(true);

            // Re-set the flag so subsequent navigation from the overlay continues to track flight info origin
            cameFromFlightInfoOverlay = true;
          }
        } else {
          // Return to search overlay (shows search results)
