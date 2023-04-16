
const MovieList = document.querySelector(' .box');


async function main(){
   const valueSearched = localStorage.getItem("search")
    const movies = await fetch(`http://www.omdbapi.com/?apikey=7bed05c8&s="${valueSearched}`);

    const moviesData = await movies.json();
    

    MovieList.innerHTML = moviesData.Search.map(movie => MovieHtml(movie)).join('');
   
    

}
main();

function MovieHtml(movie){
 return  `  <div class="movie">
 <div class="movie-image">
                <span class="play"><span class="name">${movie.Title}</span></span>
                <a href="#"><img src="${movie.Poster}" alt="${movie.Title}" /></a>
              </div>
              <div class="rating">
                <p>RATING</p>
                <div class="stars">
                  <div class="stars-in"></div>
                </div>
                <span class="comments">12</span>
              </div>
              </div>`

}

const searchInput = document.querySelector(" [data-search]")

searchInput.addEventListener("input", (e) => {
    const value = e.target.value 
  localStorage.setItem("search", value)
})