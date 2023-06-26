/* Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos */

function verdadera (){
    return true
}

console.log(verdadera())

async function asincrona() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Hola soy una promesa')
}
asincrona()

function* indicesPares() {
    let indice = 0;
    while (true) {
      yield indice + 2;
      indice += 2;
    }
  }
  
  const generador = indicesPares();
  
  console.log(generador.next().value); // Imprime: 0
  console.log(generador.next().value); // Imprime: 2
  console.log(generador.next().value); // Imprime: 4
  console.log(generador.next().value); // Imprime: 6
  // Y así sucesivamente...
  