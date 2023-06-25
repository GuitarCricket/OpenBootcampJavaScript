let resultado = 1;
let i = 1;

while (true) {
  resultado *= i;
  
  if (i === 10) {
    break;
  }
  
  i++;
}

console.log(resultado);
