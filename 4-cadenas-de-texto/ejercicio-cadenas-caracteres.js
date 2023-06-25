nombre = 'Hector';
apellido = 'Sanchez'

estudiante = nombre.concat(' ', apellido);
console.log(estudiante) 

estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

largo = estudiante.length
console.log(largo)

primeraLetra = nombre.charAt(0)
console.log(primeraLetra)

ultimaLetra= apellido.charAt(apellido.length - 1)
console.log(ultimaLetra)

sinEspacios = estudiante.replace(/ /g,'')
console.log(sinEspacios)

estaNombre =  estudiante.startsWith(nombre);
console.log(estaNombre)