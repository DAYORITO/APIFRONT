const submit = document.getElementById('formulario');
submit.addEventListener('submit', (e) =>{
    const regexdocu= /^[0-9]{10}$/
    try{
        if(document.getElementById('documento').value == "" || regexdocu.test(document.getElementById('documento').value)==false){
            throw new Error('El documento esta vacio o es invalido');
        }
        alert('Correct!')
    }catch(err){
        alert(err.message)
    }
})