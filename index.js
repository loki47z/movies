const API_KEY = "https://www.omdbapi.com/?i=tt3896198&apikey=7bb39f84"
const searchBtn = document.getElementById("searchBtn")

async function searchMovies() {
    const query = document.getElementById("search").value;
    const response = await fetch(`${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();

    const movielist = document.getElementById("list")
    console.log(data)
    if(data.Response === "True"){
        movielist.innerHTML = ""
        data.Search.forEach(movie => {
            const movieItem = document.createElement("div")
            movieItem.classList.add("card")
            movieItem.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <div class="movie-info">
                    <h3>${movie.Title}</h3>
                    <p>Year: ${movie.Year}</p>
                </div>
            `
            movielist.appendChild(movieItem)
        })
    }else {
        const errorItem = document.createElement("div")
        errorItem.classList.add("error-item")
        errorItem.innerHTML = `<p>${data.Error}</p>`
        movielist.appendChild(errorItem)
    }
}

searchBtn.addEventListener("click", searchMovies)