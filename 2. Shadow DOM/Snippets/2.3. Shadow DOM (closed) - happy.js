$container = document.getElementById("custom-paragraph-containter");
$shadowRoot = $container.attachShadow({mode: 'closed'});
$shadowRoot.appendChild((document.getElementById('custom-paragraph').content).cloneNode(true));