const url = 'http://localhost:9090/api/schema/Persona/'
const listarUsuarios = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''
        

        fetch(url)//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarUsuarios = data.persona
            listarUsuarios.map((personas) => {
                mensaje += `<tr><td>${personas.documento}</td>`+
                `<td>${personas.nombre}</td>`+
                `<td>${personas.genero? 'F':'M' }</td>`+
                `<td>${personas.fecha_nacimiento}</td>`+
                `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(personas)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${personas._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarUsuarios()



// //import { URL } from "../coneccion.js";

// const contenidoTable = document.getElementById('contenidoTable')

// if(contenidoTable){
//     window.addEventListener('DOMContentLoaded', getContenido)
// }

//  async function getContenido(){
//     //console.log(`localhost:9090/api/schema/Persona/`)
//     const response = await fetch(`http://localhost:9090/api/schema/Persona`)
//     const personas = response.json()
//     //console.log('xxxxxxxxxx'+personas)
//     contenidoTable.innerHTML = personas.map((persona) =>{
//         return `<tr><td>${persona.documento}</td><td>${persona.nombre}</td><td>${persona.genero}</td><td>${persona.fecha_nacimiento}</td></tr>`
//     }).join('')
    
// };