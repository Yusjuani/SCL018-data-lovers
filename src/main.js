import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

const films = data.peliculas;
const container = document.getElementById("allFirst");

const img = (films) => {
  return `
    <div>
        <img src= "${films.poster}" class= "orderPoster"/>
    </div>`;
};

for (let i = 0; i < films.length; i++) {
  container.innerHTML += img(films[i]);
}

const search = document.getElementById("filter");

//FILTRO DE BUSQUEDA
search.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    const text = search.value.toLowerCase();
    const titleFilter = films.filter(x => (x.title.toLowerCase()).includes(text));

    if (titleFilter.length > 0) {
      container.innerHTML = " ";
      for (let i = 0; i < titleFilter.length; i++) {
        container.innerHTML += img(titleFilter[i]);
      }
    } else {
      alert("Película no encontrada");
    }
  }
});

//FILTRO ALFABETICO
const order = document.getElementById("order");
order.addEventListener("change", (event) => {
  const option = event.target.value;
  if (option === "Alfabetico") {
    container.innerHTML = " ";
    const titleFilter = films.filter(x => (x.title.toLowerCase()));

    for (let i = 0; i < titleFilter.length; i++) {
      titleFilter.sort((t1, t2) => {
        return (t1.title < t2.title) ? -1 : 1
      })
      container.innerHTML += img(titleFilter[i]);
      //console.log(titleFilter[i].title);
    }
  }
  //FILTRO AÑO
  if (option === "Año") {
    container.innerHTML = " ";
    const yearFilter = films.filter(x => (x.release_date));
    
    for (let i = 0; i < yearFilter.length; i++) {
      yearFilter.sort((a, b) => {
        return a.release_date - b.release_date
      }

      container.innerHTML += img(yearFilter[i]);
      console.log(yearFilter[i].release_date);
    }
  }
  //FILTRO TODAS
  if (option === "Todas") {
    container.innerHTML = " ";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += img(films[i]);
    }
  }
});

//FILTRO POR DIRECTOR
const director = document.getElementById("director");
director.addEventListener("change", (event) => {
  const directorOption = event.target.value;
  if (directorOption === "todas") {
    container.innerHTML = " ";
    for (let i = 0; i < films.length; i++) {
      container.innerHTML += img(films[i]);
    }}
    if (directorOption === "Hayao") {
      container.innerHTML = " ";
      const hayaoFilter = films.filter(x => (x.director === "Hayao Miyazaki"));
     for (let i = 0; i < hayaoFilter.length; i++) {
        container.innerHTML += img(hayaoFilter[i]);
        //console.log(hayaoFilter[i].director);  
      }
    }
    if (directorOption === "Isao") {
      container.innerHTML = " ";
      const isaoFilter = films.filter(x => (x.director === "Isao Takahata"));
     for (let i = 0; i < isaoFilter.length; i++) {
        container.innerHTML += img(isaoFilter[i]);
        //console.log(isaoFilter[i].director); 
      }
    }
    if (directorOption === "Gorō") {
      container.innerHTML = " ";
      const goroFilter = films.filter(x => (x.director === "Gorō Miyazaki"));
     for (let i = 0; i < goroFilter.length; i++) {
        container.innerHTML += img(goroFilter[i]);
        //console.log(goroFilter[i].director);
        
      }
    }
    if (directorOption === "Hiroyuki") {
      container.innerHTML = " ";
      const hiroyukiFilter = films.filter(x => (x.director === "Hiroyuki Morita"));
     for (let i = 0; i < hiroyukiFilter.length; i++) {
        container.innerHTML += img(hiroyukiFilter[i]);
        //console.log(hiroyukiFilter[i].director);  
      }
    }
    if (directorOption === "Hiromasa") {
      container.innerHTML = " ";
      const hiromasaFilter = films.filter(x => (x.director === "Hiromasa Yonebayashi"));
     for (let i = 0; i < hiromasaFilter.length; i++) {
        container.innerHTML += img(hiromasaFilter[i]);
        //console.log(hiromasaFilter[i].director);  
      }
    }
    if (directorOption === "Yoshifumi") {
      container.innerHTML = " ";
      const yoshifumiFilter = films.filter(x => (x.director === "Yoshifumi Kondō"));
     for (let i = 0; i < yoshifumiFilter.length; i++) {
        container.innerHTML += img(yoshifumiFilter[i]);
        //console.log(yoshifumiFilter[i].director); 
      }
    }
});

