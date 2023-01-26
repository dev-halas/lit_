import { LitElement, html } from 'lit';
import { CardItemCSS } from './CardItemCSS.js';
import { apiUrls } from '../../helpers/apiUrl.js';

import './SensorValue.js';
import '../Icons/Icons.js';

export class CardItem extends LitElement {
    static styles = [ CardItemCSS ]

    static properties = {
        city : { type: String },
        cityId : { type : Number },
        sensors : { type: Array },
        refresh : { type: Boolean }
    }

    constructor() {
        super();
        this.city = '';
        this.cityId = ''
        this.sensors = []
        this.refresh = false
    }

    /*
    delCity(city) {
        const delCity = new CustomEvent('del-city', {
            bubbles: true,
            composed: true,
            detail: city
        }) 
        this.dispatchEvent(
            delCity
        );
        
    }
    */

    _delSelf() {
        this.remove()
    }

    sortSensors( a , b ){
        if( a.param.paramName < b.param.paramName) return -1;
        if( a.param.paramName > b.param.paramName ) return 1;
        return 0;
    }

    async getSensors(city) {
        this.sensors = await fetch(`${apiUrls.sensors}${city}`)
            .then(res => res.json())
            .then(res => res.sort(this.sortSensors))
            .catch(err => console.error(err))
    }
    
    updated(changeProp){
        if(changeProp.has('cityId') || changeProp.has('refresh')) {
            this.getSensors(this.cityId)
        }
    }

    refreshData(){
        this.refresh = !this.refresh
    }

    render() {
        return html`
            <div class="cardItem">
                <button @click=${this.refreshData} class="cardRefresh">
                    <icon-reload color="#fff" width="20" height="20"></icon-reload>
                </button>
                <button @click=${this._delSelf} class="cardDelete">
                    <icon-delete color="#fff" width="20" height="20"></icon-delete>
                </button>
                <h2><slot>${this.city}</slot></h2>
                ${this.sensors.map(item => {
                    return html `
                        <div class="cardItem--data">
                            <div class="cardItem--dataName">
                                ${item.param.paramName}
                            </div>
                            <div class="cardItem--dataValue">
                                <sensor-value .sensorId=${item.id}></sensor-value>
                            </div>
                        </div>
                    `
                })}
            </div>
        `;
    }
}
  
customElements.define('card-item', CardItem);