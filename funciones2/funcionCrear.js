const URL = 'http://localhost:9090/api/schema/Persona/'

const crearPersona = async () =>{
    let documento = document.getElementById('documento').value;
    let nombre = document.getElementById('nombre').value;
    let genero = document.getElementById('genero').value;
    let fecha_nacimiento = document.getElementById('fecha_nacimiento').value;

    let persona = {
        documento: documento,
        nombre: nombre,
        genero: genero,
        fecha_nacimiento: fecha_nacimiento
    }
    const calcularEdad = (fecha_nacimiento) => {
        const fechaNac = new Date(fecha_nacimiento);
        const fechaActual = new Date();
        
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        
        const mesActual = fechaActual.getMonth();
        const diaActual = fechaActual.getDate();
        
        const mesNacimiento = fechaNac.getMonth();
        const diaNacimiento = fechaNac.getDate();
        
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
          edad--;
        }
        
        return edad;
      };

    if( calcularEdad(fecha_nacimiento) >= 18){
        fetch(URL, {
            method: 'POST',
            mode: 'cors',
            query:JSON.stringify(persona),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert("Persona creada exitosamente")
        })
        window.location.href= 'file:///C:/Users/ASUS-PC/Desktop/Apis/consumir_api/APIFRONT/tablaUsuarios.html';
    }
    else{
        alert('Edad no apta para la gestion')
    }
}
document.getElementById('formulario').addEventListener("submit", function(e){
    e.preventDefault();
    console.log("aqui llegue")
    crearPersona();
})
