function validateForm(){
	/* Escribe tú código aquí */

	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;

	// NOMBRE

	//si nombre es igual a null
	// o la longitud del nombre es cero
	// o si no existe espacios entre el nombre
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
		alert('Campo de Nombre vacio');
		return false;
	// si el nombre tiene numeros o caracteres distintos	
	} else if (!(/^[a-zA-Z\s]*$/.test(nombre))){
		alert('El Nombre no es valido');
	// si el nombre no tiene la primer letra matuscula
	} else if (!(/^[A-Z\s]*$/.test(nombre[0]))) {
		alert('Primera letra de Nombre debe ser mayuscula');
	}

	// APELLIDO

	//si apellido es igual a null
	// o la longitud del apellido es cero
	// o si no existe espacios entre el apellido
	if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
		alert('Campo de Apellido vacio');
		return false;
	// si el apellido tiene numeros o caracteres distintos	
	} else if (!(/^[a-zA-Z\s]*$/.test(apellido))){
		alert('El Apellido no es valido');
	// si el apellido  no tiene la primer letra matuscula	
	}else if (!(/^[A-Z\s]*$/.test(apellido[0]))) {
		alert('Primera letra de Apellido debe ser mayuscula');
	}

	//CORREO

	if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
		alert('Campo de correo vacio');
		return false;
	} else if (!(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/.test(correo))){
		alert('Correo incorrecto');
	}

	// CONTRASEÑA

	if( contrasena == null || contrasena.length == 0 || /^\s+$/.test(contrasena) ) {
		alert('Campo de contraseña vacio');
		return false;
	} else if (contrasena.length > 5 || contrasena =='password' || contrasena =="123456" || contrasena =="098754") {
		alert("Contraseña no valida");
	}

	/*var indice = document.getElementById("op").selectedIndex;
	if( indice == null || indice == 0 ) {
  		alert("Seleccione una opcion");
  		return false;*/
	}
}
