import { LitElement, html } from 'lit';

import { InfoBarCSS } from './InfoBarCSS';

export class InfoBar extends LitElement {
    
    static styles = [ InfoBarCSS ];

    static properties = {
        hide: { type: Boolean }
    }

    _hideInfoBar() {
        this.remove()
    }

    render() {
        return html`
            <div class="infoBar">
                <slot></slot>
                <button @click=${this._hideInfoBar} class="hideButton">
                    <icon-delete color="#fff" width="20" height="20"></icon-delete>
                </button>
            </div>
        `;
    }

}

customElements.define('info-bar', InfoBar);