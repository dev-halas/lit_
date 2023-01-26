import { LitElement, html } from 'lit';
import { SearchBarCSS } from './SearchBarCSS.js';
import { apiUrls } from '../../helpers/apiUrl.js';

export class SearchBar extends LitElement {
    static styles = [ SearchBarCSS ];

    static properties = {
        entryData: { type: Array },
        outputData: { type: Array },
        city: { type : Object },
        input: { type: String }
    };

    constructor() {
        super();
        this.entryData = []
        this.outputData = []
        this.inputChange = ''
    }

    //get entry data from API
    async getCity() {
        this.entryData = await fetch(apiUrls.findAll)
            .then(res => res.json())
            .catch(err => console.error('Failed to load DATA from API: ', err))
    }

    firstUpdated() {
        this.getCity()
    }

    //sen dinput to parent event
    sendData(city) {
        const sendCity = new CustomEvent('send-city', {
            bubbles: true,
            composed: true,
            detail: {
                city: city.stationName,
                id: city.id
            }
        }) 
        this.dispatchEvent(
            sendCity
        );
    }

    //filtering entry data to find match
    filterData() {
        return this.outputData = this.entryData
            .filter(item => 
                item.stationName.toLowerCase().match(this.inputChange.toLowerCase())
            )
    }

    //input change handle
    changeInput(e) {
        this.inputChange = e.target.value;
        this.inputChange.length >= 4 ? this.outputData = this.filterData() : this.outputData = []
    }

    //click handle city
    handleClick(city) {
        this.outputData = []
        this.sendData(city)
    }

    //render component
    render(){
        return html`
            <div class="serachWrapper">
                <input 
                    .value=${this.inputChange} 
                    @input=${this.changeInput} 
                    @focus=${this.changeInput}
                    @click=${this.getCity}
                    type="search" 
                    id="search" 
                    placeholder="Wpisz miasto lub ulicę (min. 4 znaki)"  
                />
                <ul class="list">
                    ${this.outputData.map(city => {
                        return html`
                            <li @click=${() => this.handleClick(city)}>
                                ${city.stationName}
                            </li>
                        `
                    })}
                </ul>
            </div>
            
        `;
    }
}

customElements.define('search-bar', SearchBar);