/*var btn = document.createElement("BUTTON");
var t = document.createTextNode("Español");
btn.appendChild(t);
document.body.appendChild(btn); 	
*/

//h2
var a = document.getElementById('form-signin-heading');
a.innerHTML='Por favor inicia sesion';

// inputs
document.getElementById('inputEmail').placeholder='Correo Electrónico';

document.getElementById('inputPassword').placeholder='Contraseña';

//check
document.getElementsByTagName('span')[0].textContent='Recuerdame';

//boton
document.getElementsByTagName('button')[0].textContent='Iniciar Sesion';
