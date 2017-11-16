window.addEventListener('load', function() {
  var button = document.getElementById('button');
  var textarea = document.getElementById('textarea');
  var tweets = document.getElementById('tweets');

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
});


