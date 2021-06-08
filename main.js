const apiGenres="https://api.themoviedb.org/3/genre/movie/list?api_key=afd7f39df805f79f0919371b9a477ec3";
const genresSelect=document.getElementById("genres");
let genres;


const fetchGenres=()=>{
    fetch(apiGenres)
    .then(res=>res.json())
    .then(data => addGenres(data.genres))
}


const addGenres=(genres)=>{
    genres.forEach(genre => {
        console.log(genre)
    
        const genreEl=document.querySelector("option");
        genreEl.classList.add="gen";
        genreEl.value=genre.id;
        console.log(genre.id)
        genreEl.innerHTML=genre.name;
        genresSelect.appendChild(genreEl);
    });

}

fetchGenres()