// obtener referencia al boton y al elemengo donde mosrar el resultado
const boton =document.getElementById('boton');
const rrsultado = document.getElementById('resultado');

//agregar in event listener al boton
boton.addEventListener('click', function(){
    // accion a realizar cuando  se hace click al boton
    resultado.textContent = 'has hecho clic en el boton';
}