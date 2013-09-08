
if (window.top === window) {
  safari.self.addEventListener('message', function(e) {
    if (e.name !== 'injectCSS') return;

    var node = document.createElement('link');
    node.setAttribute(
      'href',
      'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css'
    );
    node.setAttribute('rel', 'stylesheet');
    document.head.appendChild(node);
    document.body.classList.add('container');
  });
}


