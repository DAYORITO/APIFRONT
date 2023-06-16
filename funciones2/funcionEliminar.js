const eliminar =(_id) => {
    if(confirm('¿Está seguro de realizar la eliminación?') == true){
            //Captura de valores de datos enviados desde el formulario
    let persona = {
        _id: _id
    }
    
    //console.log(usuario)

       fetch(URL, {
            method: 'DELETE',
            mode: 'cors',
            body:JSON.stringify(persona),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })     
    }
}