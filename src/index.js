let allmovies=[]

function getMovies() {
  

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:3000/films", requestOptions)
  .then((response) => response.json())
  .then((result) => {
  //console.log(result);
  ListMovies(result)
  allmovies=result
})
  .catch((error) => console.error(error));
}

function ListMovies(movies) {
  const movieList= document.getElementById('films');
  let html ="";


  for (let i = 0; i<movies.length; i++) {
    let movie = movies[i];
    html= html + `<li class="film item" onClick="clickedMovie(${i})">${movie.title}</li>`;
  }

  movieList.innerHTML = html;
}
 getMovies();

 function clickedMovie(id) {
  let poster =document.getElementById('poster')
  let clickedMovie= allmovies[id]
  poster.src=clickedMovie.poster;
  poster.alt = clickedMovie.title;
  movieinformation(clickedMovie.id)
 };


 function movieinformation(id) {
  let movietitle= document.getElementById("title")
  let runtime=document.getElementById("runtime")
  let filminfo=document.getElementById("film-info")
  let ticketnumber=document.getElementById("ticket-num")
   let showtime=document.getElementById("showtime" )
  let button= document.getElementById("buy-ticket" )
   const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch(`http://localhost:3000/films/${id}`, requestOptions)

    .then((response) => response.json())
    .then((result) =>{
      console.log(result)
    movietitle.innerText = result.title;
    runtime.innerText= `${result.runtime} minutes`
    filminfo.innerText=result.description
    showtime.innerText= result.showtime
    ticketnumber.innerText=`remaining  tickets ${result.capacity - result.tickets_sold}`
    })
    .catch((error) => console.error(error));

 }

function buttonclick() {
  let result=Currentmovie
  let remainingTickets= Currentmovie-SpeechRecognitionResultList.ticket_sold
   if (remainingTickets>0) {
    makeSale(result)
   }else{
    ticket.innerText="Sorry Sold Out!"
   }
    
   }

