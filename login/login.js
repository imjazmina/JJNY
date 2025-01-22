const nombre = document.getElementById("nombre")
const contrasena = document.getElementById("password")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    verificacion();
})

function cerrar(){
    alert("Sesion cerrada")
        document.getElementById("iniciada").style.display = "none"
        document.getElementById("form").style.display = "block"
        document.getElementById("cerrada").style.display = "none"
}

function verificacion(){
    if((nombre.value == '')||(contrasena.value == '')){
            alert("Campos incompletos")
        }
    else{
        if((nombre.value != "JJNY") || (contrasena.value != "123")){
       
            alert("Nombre de Usuario o Contraseña incorrectos!!!")
            limpiar();
        }
        else{
            alert("Sesion iniciada correctamente")
            document.getElementById("iniciada").style.display = "block"
            document.getElementById("form").style.display = "none "
            document.getElementById("cerrada").style.display = "block"
            limpiar();
        }
    }
    
}


function limpiar(){
        form.reset();
}