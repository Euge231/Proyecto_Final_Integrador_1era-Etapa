//FUNCIÓN PARA MOSTRAR LAS DIFERENTES PESTAÑAS
function mostrar_pestaña(evt, id) {
  var i, contenido, pest;

  // Esconde todos los elementos que tengan la clase "pestaña_contenido"
  contenido = document.getElementsByClassName("pestaña_contenido");
  for (i = 0; i < contenido.length; i++) {
    contenido[i].style.display = "none";
  }

  // Selecciona todos los elementos con la clase "pestaña" y remueve la clase "active"
  pest = document.getElementsByClassName("pestaña");
  for (i = 0; i < pest.length; i++) {
      pest[i].className = pest[i].className.replace(" active", "");
  }

  // Muestra la pestaña en la que nos encontramos y añade la clase "active" a el boton de dicha pestaña
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " active";
}

//MODO OSCURO
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
document.body.classList.toggle('oscuro');
});