const URL = 'localhost:9090/api/schema/Persona';
 const editarPersona = (persona) =>{
    document.getElementById('_id').value = "";
    document.getElementById('documento').value="";
    document.getElementById('nombre').value="";
    document.getElementById('genero').value="";
    document.getElementById('fecha_nacimiento')="";

    document.getElementById('_id').value = persona._id
    document.getElementById('documento').value = persona._id;
    document.getElementById('nombre').value;
    document.getElementById('genero').value;
    document.getElementById('fecha_nacimiento').value;
}

const actualizarPersona = async() =>{
    //Captura de valores de datos enviados desde el formulario
    let documento = document.getElementById('documento').value
    let nombre = document.getElementById('nombre').value
    let genero = document.getElementById('genero').value
    let fecha_nacimiento = document.getElementById('fecha_nacimiento').value

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
            body:JSON.stringify(persona),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert( "Cambios guardados")
        })
        window.location.href= 'file:///C:/Users/ASUS-PC/Desktop/Apis/consumir_api/APIFRONT/tablaUsuarios.html';
    }
    else{
        alert('Edad no apta para la gestion')
    }
}