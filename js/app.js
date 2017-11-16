window.addEventListener('load', function() {
  var boton = document.getElementById('boton');

  boton.addEventListener('click', function() {
    var tweetPublicado = document.getElementById('tweet-publicado');
    var text = document.formulario.text.value;
    
    if (text === 0) {
      document.getElementById('botton').disabled = true;
    } else {
      tweetPublicado.textContent = text;
      document.formulario.text.value = '';
    }
  });
});

// window.onload = function() {
//   var one = document.getElementById('button');
//   two = one.addEventListener('click', visuali);
// };
  
// function visuali(event) {
//   var contenedor = document.querySelector('.visualizando');
//   var texto = document.formulario.text.value;
//   if (texto === 0) {
//     document.getElementById('button').disable = true;
//   } else {
//     contenedor.innerHTML = texto;
//     // document.getElementById('button').style.backgroundColor = '#ddd';
//     document.formulario.text.value = '';
//   }
// }
// var tweet = document.formulario.text;
// tweet.addEventListener('keydown', function() {
//   document.getElementById('contadorNumeros').innerHTML = tweet.value.length;
// });


