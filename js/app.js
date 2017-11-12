window.onload = function() {
  document.getElementById('button').addEventListener('click', function() {
    var showText = document.getElementById('text-publicado');
    var myText = document.getElementById('textarea').value;
    showText.innerHTML = myText;
  });
};
