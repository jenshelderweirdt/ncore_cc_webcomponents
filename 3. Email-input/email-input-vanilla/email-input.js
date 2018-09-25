const currentDocument = document.currentScript.ownerDocument;

class EmailInput extends HTMLElement {
    constructor() {
        super();
    }

    get validmessage() {
        return this.getAttribute('validmessage');
    }

    set validmessage(val) {
        this.setAttribute('validmessage', val)
    }

    get invalidmessage() {
        return this.getAttribute('invalidmessage');
    }

    set invalidmessage(val) {
        this.setAttribute('invalidmessage', val)
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const template = currentDocument.querySelector('#email-input-template');
        const instance = template.content.cloneNode(true);
        this.shadowRoot.appendChild(instance);

        const emailInput = this.shadowRoot.getElementById('email-input');
        const validationText = this.shadowRoot.getElementById('validationtext');

        emailInput.onblur = () => {
            if (emailInput.value.length > 0) {
                var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (regex.test(String(emailInput.value).toLowerCase())) {
                    validationText.innerHTML = this.validmessage || "Default valid message!";
                    validationText.classList.add("valid");
                }
                else {
                    validationText.innerHTML = this.invalidmessage || "Default invalid message!";
                    validationText.classList.add("invalid");
                }
                validationText.style.visibility = "visible";
            } 
            else
                validationText.style.visibility = "hidden";
        };
    }
}
window.customElements.define('email-input', EmailInput);