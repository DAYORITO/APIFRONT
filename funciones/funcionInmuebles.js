import { URL } from "../coneccion.js";

const contenidoTable = document.getElementById('contenidoTable')

if(contenidoTable){
    window.addEventListener('DOMContentLoaded', getContenido)
}

async function getContenido(){
    console.log(`${URL}Persona/`)
    const response = await fetch(`http://${URL}Persona/`)
    const personas = await response.json()
    contenidoTable.innerHTML = personas.persona.map(persona =>{
        return `<tr><td>${persona.documento}</td><td>${persona.nombre}</td><td>${persona.genero}</td><td>${persona.fecha_nacimiento}</td></tr>`
    }).join('')
}
// const submit = document.getElementById('formulario');
// submit.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     const regexdocu= /^[0-9]{10}$/
//     try{
//         if(document.getElementById('documento').value == "" || regexdocu.test(document.getElementById('documento').value)==false){
//             throw new Error('El documento esta vacio o es invalido');
//         }
//         alert('Correct!')
//     }catch(err){
//         alert(err.message)
//     }
// })