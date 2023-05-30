function encriptar() {
	// Obtener el texto original
	var original = document.getElementById("original").value;

	// Reemplazar la letra segun llaves
	var encriptado = original.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

	// Mostrar el texto encriptado
	document.getElementById("encriptado").value = encriptado;
}

function desencriptar() {
	// Obtener el texto encriptado
	var encriptado = document.getElementById("encriptado").value;

	// Recuperar el texto segun llaves
	var original = encriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

	// Mostrar el texto original
	document.getElementById("original").value = original;
}