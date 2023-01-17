import { LitElement, html } from 'lit';

export class IconDelete extends LitElement {
    
    static properties = {
        color : { type : String }, 
        width : { type : String }, 
        height : { type : String }, 
    }

    constructor() {
        super();
        this.color = '#000';
        this.width = '24'
        this.height = '24'
    }

    render() {
        return html`
            <svg height="${this.height}" width="${this.width}" fill="${this.color}" viewBox="0 0 24 24" style="display: block">
                <path d="m6.4 19.8-2.2-2.2L9.8 12 4.2 6.4l2.2-2.2L12 9.8l5.6-5.6 2.2 2.2-5.6 5.6 5.6 5.6-2.2 2.2-5.6-5.6Z"/>
            </svg>
        `;
    }

}

customElements.define('icon-delete', IconDelete);

export class IconReload extends LitElement {
    
    static properties = {
        color : { type : String }, 
        width : { type : String }, 
        height : { type : String }, 
    }

    constructor() {
        super();
        this.color = '#000';
        this.width = '24'
        this.height = '24'
    }

    render() {
        return html`
            <svg height="${this.height}" width="${this.width}" fill="${this.color}" viewBox="0 0 24 24" style="display: block">
                <path d="M11.9 20.85q-3.675 0-6.262-2.588Q3.05 15.675 3.05 12q0-3.675 2.588-6.263Q8.225 3.15 11.9 3.15q1.95 0 3.688.787 1.737.788 2.962 2.288V3.15h2.4v8.225H12.7V9h4.05q-.8-1.25-2.075-1.975Q13.4 6.3 11.9 6.3q-2.375 0-4.037 1.663Q6.2 9.625 6.2 12t1.663 4.038Q9.525 17.7 11.9 17.7q1.775 0 3.238-1.025Q16.6 15.65 17.25 14h3.275q-.725 3-3.125 4.925-2.4 1.925-5.5 1.925Z"/>
            </svg>
        `;
    }

}

customElements.define('icon-reload', IconReload);