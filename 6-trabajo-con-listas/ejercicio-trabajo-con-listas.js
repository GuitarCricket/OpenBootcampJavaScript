
var compra = ['harina', 'arroz', 'atun', 'carne', 'piña']

compra.push('aceite de girasol')

compra.pop()

const turboMan = {
    titulo: 'El regalo Prometido',
    director: 'Brian Levant',
    lanzamiento: new Date('1996-11-16')
}

var slimer = {
    titulo: 'Los Cazafantasmas',
    director: 'Ivan Reitman',
    lanzamiento: new Date('1984-06-08')
}

var bishop = {
    titulo: 'El Especialista',
    director: 'Simon West',
    lanzamiento: new Date('2011-09-15')
}

var peliculas = [turboMan, slimer, bishop]

console.log(peliculas)

const fechaFiltro = new Date('2010-01-01');


const peliculaDespues2010 = peliculas.filter(function(pelicula) {
    return pelicula.lanzamiento > fechaFiltro;
  });

console.log(peliculaDespues2010)

const directores = peliculas.map(function(director) {
    return director.director;
})

console.log(directores)

const titulos = peliculas.map(function(titulo){
    return titulo.titulo
})

console.log(titulos)

const unionArray = directores.concat(titulos)

console.log(unionArray)

const arrayFinal = [...titulos, ...directores]

console.log(arrayFinal)