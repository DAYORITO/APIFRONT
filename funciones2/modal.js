// const botonEditar = document.getElementById('botonEditar');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');

function botonEditar() {
    modalContainer.classList.add('opened');
    console.log('aqui')
}
modalContainer.addEventListener('click',  closeCmodal)

function closeCmodal(){
    modalContainer.classList.remove('opened')
}
// modal.addEventListener('click', e=>{
//     e.stopPropagation()
// })