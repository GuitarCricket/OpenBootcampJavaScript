function fibonacci(num) {
    var serie = [];
    

    serie.push(1);
    serie.push(1);
    
   
    for (var i = 2; i < num; i++) {
      var nextNumber = serie[i - 1] + serie[i - 2];
      serie.push(nextNumber);
    }
    
    console.log(serie)
    return serie;

  }
  
  fibonacci()