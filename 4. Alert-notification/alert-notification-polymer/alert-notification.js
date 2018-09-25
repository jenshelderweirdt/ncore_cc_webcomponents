import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `alert-notification`
 * shows alert notification
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AlertNotification extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display:block;
          
        }
        .alert {
          color:white;
          width:100%;
          height: 35px;
          font-size:1.2em;
          padding-top: 0.5em;
          text-align:center;
          position:fixed;
        }
        .alert:hover {
          cursor:pointer;
        }
        .danger {
          background-color:#FF4747;
        }
        .success {
          background-color:#7fff7f;
        }
      </style>
      <div on-click="handleAlertClick" hidden$="[[hideNotification]]" style="font-family: "Open Sans", "Helvetica Neue", sans-serif; font-size: 14px;" class$="alert [[type]]">
        <slot name="content"></slot>
      </div>
    `;
  }
  static get properties() {
    return {
      message: {
        type: String
      },
      type: {
        type: String
      },
      life: {
        type: Number
      },
      hideNotification: {
        type: Boolean,
        notify: true,
        value: true
      },
      
    };
  }

  //hide notification
  handleAlertClick() {
    this.hideNotification = true;
  }

  show(type) {
    this.type = type;
    this.hideNotification = false;
    setTimeout(() => {
      this.hideNotification = true;
    }, this.life);
  }

}

window.customElements.define('alert-notification', AlertNotification);
