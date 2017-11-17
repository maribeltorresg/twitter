window.addEventListener('load', function() {
  var button = document.getElementById('button');
  var textarea = document.getElementById('textarea');
  var tweets = document.getElementById('tweets');
  var counter = document.getElementById('counter');
  var mirror = document.getElementById('mirror');

  button.addEventListener('click', function() {
    // creando un tweet
    var tweet = document.createElement('div');
    // agregando una clase 'card' en tweet
    tweet.className = 'card';
    // asignandole el valor de textarea en el tweet
    tweet.innerHTML = textarea.value + '<div class="tweet-date">' + 'Escrito por ' + '<b>Maribel Torres</b> a las <b>' +  moment().format('LTS') + '</b>' + '</div>';
    // agregar el tweet creado en su contenedor llamado tweets (plural)
    tweets.appendChild(tweet);
    // disparar el evento
    textarea.value = ''; textarea.dispatchEvent(new Event('input')); textarea.focus();
    button.disabled = true;
    counter.textContent = 140;
  });

  textarea.addEventListener('input', function() {
    mirror.textContent = textarea.value;

    var text = textarea.value.trim();
    var length = text.length;

    if (length > 0 && length <= 140) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }

    counter.classList.remove('nearly');
    counter.classList.remove('very-nearly');

    if (length > 120) {
      // Si pasa los 120 caracteres, mostrar el contador con OTRO color.
      counter.classList.add('nearly');

      if (length > 130) {
        // Si pasa los 130 caracteres, mostrar el contador con OTRO color.
        counter.classList.add('very-nearly');
      }
    }
    // contador regresiva
    counter.textContent = 140 - length;
  });
});


