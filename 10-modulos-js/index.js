import { suma, multiplica } from './controller.js';
import chalk from 'chalk';


var a = suma(1, 2)
var b = suma(4, 5)
var resultado;

console.log(chalk.green(resultado = multiplica(a,b)))

