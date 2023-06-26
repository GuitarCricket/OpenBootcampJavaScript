/**  La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */

const hoy = new Date()
console.log(hoy)

const nacimiento = new Date('1988-06-03') //por alguna razon el mes si coincide con el numero que pongo pero el dia no... yo naci el 02 y debo poner 03 para que me salga 02
console.log(nacimiento)

const verificacion = hoy > nacimiento
console.log(verificacion)

const dia = nacimiento.getDate()
console.log(dia)

const mes = nacimiento.getMonth()
console.log(mes)

const año = nacimiento.getFullYear()
console.log(año)