async function fetchData() {
  let query = document.getElementById("movie_search").value;
  let movies = await fetch(
    `http://www.omdbapi.com/?s=${query}&apikey=b014b275`
  );
  let data = await movies.json();
  //console.log(data);
  for (movie of data.Search) {
    let div = document.createElement("div");
    div.innerHTML = `<img src="${movie.Poster} style="width:300px,height:400px""/>
       <h3 >${movie.Title}</h3> 
       <h2 >${movie.Type}</h2>
       <h2 >${movie.Year}</h2>`;

    let movie_list = document.getElementById("parent");
    movie_list.appendChild(div);
  }
}
