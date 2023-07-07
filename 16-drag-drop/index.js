let parrafos = document.querySelectorAll('.parrafo')
let secciones = document.querySelectorAll('.seccion');
let papeleras = document.querySelectorAll('.papelera')

parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event =>{
        console.log('Estoy arrastrando el parrafo numero ' + parrafo.innerText)
        parrafo.classList.add('dragging')
        event.dataTransfer.setData('id', parrafo.id)
        const elemento_fantasma = document.querySelector('.imagen-fantasma')
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0) 
    })

    parrafo.addEventListener('dragend', ()=>{
        console.log('El arrastre ha terminado')
        parrafo.classList.remove('dragging')
    })
});

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
        //console.log('drag Over')

    })

    seccion.addEventListener('drop', event =>{
        console.log('Drop')
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

