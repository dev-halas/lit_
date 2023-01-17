import { LitElement, html } from 'lit';

import { InfoBarCSS } from './InfoBarCSS';

export class InfoBar extends LitElement {
    
    static styles = [ InfoBarCSS ];

    render() {
        return html`
            <div class="infoBar">
                <slot></slot>
            </div>
        `;
    }

}

customElements.define('info-bar', InfoBar);