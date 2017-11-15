window.onload = function() {
  var one = document.getElementById('button');
  two = one.addEventListener('click', visuali);
};
  
function visuali(event) {
  var contenedor = document.querySelector('.visualizando');
  var texto = document.formulario.text.value;
  if (texto === 0) {
    document.getElementById('button').disable = true;
  } else {
    contenedor.innerHTML = texto;
    document.getElementById('button').style.backgroundColor = '#ddd';
    document.formulario.text.value = '';
  }
}
var tweet = document.formulario.text;
tweet.addEventListener('keydown', function() {
  document.getElementById('contadorNumeros').innerHTML = tweet.value.length;
});


