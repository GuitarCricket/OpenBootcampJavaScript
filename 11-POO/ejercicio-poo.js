
class Estudiante{
    constructor(nombre){
    this.nombre = 'Hector';
    this.asignaturas = ['javascript', 'HTML', 'CSS'];
}

obtenDatos(){
    return{
        nombre: this.nombre,
        asignaturas: this.asignaturas
    };
}

}

const estudiante = new Estudiante('Hector Sanchez');

const datosEstudiante = estudiante.obtenDatos();

console.log(datosEstudiante)