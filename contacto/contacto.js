const nombre = document.getElementById("nombre")
const celular = document.getElementById("celular")
const comentario = document.getElementById("comentario")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    verificacion();
})

function verificacion(){
    if((nombre.value == '')||(celular.value == '')||(comentario.value == '')){
            alert("Campos incompletos")
            
        }
        else{
            alert("Comentario enviadio. Gracias por comunicarse con nosotros :)")
            limpiar();
        }
    }
    
function limpiar(){
        form.reset();
}