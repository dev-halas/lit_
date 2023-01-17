import { LitElement, html } from 'lit';
import { CardsWrapperCSS } from './CardsWrapperCSS.js';
import '../CardItem/CardItem.js'

export class CardsWrapper extends LitElement {
    static styles = [ CardsWrapperCSS ];

    static properties = {
        city: { 
            type : {}, 
            state: true 
        }
    };

    constructor() {
        super();
        this.city = {}
    }

    render() {
        return html`
            <div class="cardsWrapper" >
                ${this.city.map((city) => {
                    return html`
                        <card-item .cityId=${city.id}>
                            ${city.city}
                        </card-item>
                    `
                })}
                
            </div>
        `
    }
}

customElements.define('cards-wrapper', CardsWrapper);