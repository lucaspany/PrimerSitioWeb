function validate() {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  let text;
  //-----------------VALIDACION DEL CAMPO NOMBRE-----------------
  if (name.length < 2) {
    text = "Porfavor ingrese un Nombre válido";
    error_message.innerHTML = text;
    return false;
  }

  //-----------------VALIDACION DEL CAMPO APELLIDO-----------------
  if (subject.length < 1) {
    text = "Porfavor ingrese un Apellido válido";
    error_message.innerHTML = text;
    return false;
  }
  //-----------------VALIDACION DEL CAMPO TELEFONO-----------------
  if (isNaN(phone) || phone.length != 10) {
    text = "Porfavor ingrese un Número de Teléfono válido";
    error_message.innerHTML = text;
    return false;
  }
  //-----------------VALIDACION DEL CAMPO EMAIL-----------------
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Porfavor ingrese un E-mail válido";
    error_message.innerHTML = text;
    return false;
  }
  //-----------------VALIDACION DEL CAMPO MENSAJE A ENVIAR-----------------
  if (message.length <= 3) {
    text = "Porfavor ingrese más de 3 Caracteres";
    error_message.innerHTML = text;
    return false;
  }
  document.getElementById("wrapr").style.display = "none";
  alert("Consulta enviada correctamente. Será respondido a la brevedad!!!");

  return true;
}
