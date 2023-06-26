/** Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */

var familia = ['Maria', 'Omar', 'Tito', 'Hector']

const setFamilia = new Set(familia)

console.log(setFamilia)

setFamilia.add('Hector')

console.log(setFamilia)

setFamilia.add('JavaScript')

console.log(setFamilia)