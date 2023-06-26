/** - Un objeto con tus datos personales (nombre, apellido, 
 * edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y 
un nuevo objeto con los datos personales de tus dos mejores 
amig@s

- Una nueva lista con los objetos de la lista anterior ordenados
 por edad, de mayor a menor */

var yo = {
    nombre: 'Hector',
    apellido: 'Sanchez',
    edad: 35,
    altura: 177,
    eresDesarrolador: true
}
const edadN = yo.edad
console.log(edadN)

var amigos = {
    yon:{
        nombre:'Yonaski',
        apellido:'Osorio',
        edad:34,
        altura:166,
        eresDesarrolador: false
    },
    jau:{
        nombre:'Jauregui',
        apellido:'Crespo',
        edad:34,
        altura:176,
        eresDesarrolador:true
    },
    yo
}

var listaObje = [yo, amigos]
console.log(amigos)

listaObje.sort((a, b) => a.edad - b.edad)

console.log(listaObje)

