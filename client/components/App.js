import { AppCSS } from './AppCSS.js';

import './SearchBar/SearchBar.js'
import './CardsWrapper/CardsWrapper.js'
import './InfoBar/InfoBar.js'

import { LitElement, html } from 'lit';

export class AppWrapper extends LitElement {
    static styles = [ AppCSS ];

    static properties = {
        city : { type : Array }
    };

    constructor() {
        super();
        this.city = []
    }

    getCity(event) {
        this.city = [...this.city, event.detail]
    }

    delCity(event) {
        this.city = this.city.filter(city => city.id !== event.detail)
    }

    render() {
        return html`
            <div class="appWrapper">
                <div class="container">
                    <search-bar @send-city=${this.getCity}></search-bar>
                    <cards-wrapper .city=${this.city} @del-city=${this.delCity}></cards-wrapper>
                    <info-bar>
                        *Index jakości powietrza wyrażany jest w <strong>"µg/m3"</strong><br/>
                        (mikro-gramach na metr sześcienny)
                    </info-bar>
                </div>
            </div>
        `
    }
}

customElements.define('app-wrapper', AppWrapper);