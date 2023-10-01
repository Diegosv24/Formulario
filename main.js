
//Evitar que el form se recargue al enviarlo
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
});
///////////////////////////////////////////////


//Funcion para validar los datos del form
function validateData () {


    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;

    if (nombre == "" || apellido == "") {
        Swal.fire({  //Alerta de SweetAlert2
            title: 'Error!',
            text: 'No admitimos campos vacios',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }
}
