window.addEventListener('load', function() {
  var button = document.getElementById('button');
  var textarea = document.getElementById('textarea');
  var tweets = document.getElementById('tweets');
  var counter = document.getElementById('counter');

  button.addEventListener('click', function() {
    // creando un tweet
    var tweet = document.createElement('div');
    // agregando una clase 'card' en tweet
    tweet.className = 'card';
    // asignandole el valor de textarea en el tweet
    tweet.textContent = textarea.value;
    // agregar el tweet creado en su contenedor llamado tweets (plural)
    tweets.appendChild(tweet);
  });

  textarea.addEventListener('keyup', function() {
    var text = textarea.value.trim();

    if (text.length > 0 & text !== '') {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
    // contador regresiva
    counter.textContent = 140 - text.length;
  });

  
});


