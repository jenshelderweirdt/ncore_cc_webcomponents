$container = document.getElementById("custom-paragraph-containter");
$container.attachShadow({mode: 'open'});
$container.shadowRoot.appendChild((document.getElementById('custom-paragraph').content).cloneNode(true));