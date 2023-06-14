// import { URL } from "../coneccion";

const listarUsuarios = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''
        

        fetch('http://localhost:9090/api/schema/Persona')//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarUsuarios = data.persona
            listarUsuarios.map((persona) => {
                mensaje += `<tr><td>${persona.documento}</td>`+
                `<td>${persona.nombre}</td>`+
                `<td>${persona.genero === 'F' ? 'F' : 'M' }</td>`+
                `<td>${persona.fecha_nacimiento}</td>`+
                `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(persona)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${persona._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarUsuarios()

// console.log("aqui1");
// const contenidoTable = document.getElementById('contenidoTable')

// if(contenidoTable){
//     window.addEventListener('DOMContentLoaded', getContenido)
// }

// async function getContenido(){
//     console.log(`${URL}Persona/`)
//     const response = await fetch(`http://localhost:9090/api/schema/Persona/`)
//     const persona = await response.json()
//     contenidoTable.innerHTML = persona.map(person =>{
//         return `<tr><td>${person.documento}</td><td>${person.nombre}</td><td>${person.genero}</td><td>${person.fecha_nacimiento}</td></tr>`
//     }).join('')
// }
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