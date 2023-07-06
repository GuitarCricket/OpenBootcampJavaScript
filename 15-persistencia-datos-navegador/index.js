let nombre = 'Hector';

let apellido = 'Sanchez';

let nombreApellido = {nombre: 'Hector', apellido: 'Sanchez'}

let nombreApellidoJSON =  JSON.stringify(nombreApellido);

// localStorage.setItem('objeto', nombreApellidoJSON);

// sessionStorage.setItem('objeto', nombreApellidoJSON)


var fechaVencimiento = new Date();
fechaVencimiento.setTime(fechaVencimiento.getTime() + (2 * 60 * 1000)); // 2 minutos en milisegundos
// document.cookie = "objeto=" + nombreApellidoJSON + "expires=" + fechaVencimiento.toUTCString();





