$container = document.getElementById("custom-paragraph-containter");
$shadowRoot = $container.attachShadow({mode: 'closed'});
$container.shadowRoot.appendChild((document.getElementById('custom-paragraph').content).cloneNode(true));