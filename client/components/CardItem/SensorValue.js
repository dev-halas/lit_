import { LitElement, html } from 'lit';
import { apiUrls } from '../../helpers/apiUrl.js';

export class SensorValue extends LitElement {

    static properties = {
        sensorId : { type : Object }, 
        sensorVal : { type : Array },
    }

    constructor() {
        super();
        this.sensorId = {}
        this.sensorVal = 0
    }

    async getDataFromSensor(id) {
        this.sensorVal = await fetch(apiUrls.getData + id)
            .then(res => res.json())
            .then(res => res.values.filter(item => !!(item.value)))
            .then(res => res.shift().value)
    }

    willUpdate(changeProps) {
        if(changeProps.has('sensorId')) {
            this.getDataFromSensor(this.sensorId) 
        }
    }

    render() {
        return html`
            <span>
                ${Math.round(this.sensorVal * 100) / 100}
            </span>
        `
    }

}

customElements.define('sensor-value', SensorValue);