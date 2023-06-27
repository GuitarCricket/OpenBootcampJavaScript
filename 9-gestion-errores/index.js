function errorF (num){

    if (num === 498747){
        return num 
    }
    throw new Error('No acertaste el numero')
}



try{
    const prueba = errorF(2)
    console.log(prueba)
    console.log('has tenido suerte')
    
} catch(e){
    console.log('Sigue intentando a ver si lo consigues')
}finally{
    console.log('Este es el juego de la Oca')
}