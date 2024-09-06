import {LitElement, html, css} from 'https://cdn.skypack.dev/lit';

export default class MyCounter extends LitElement {
    static styles = [css`button:{ background : green}`]

    static properties = {
        count : {
            state : true
        },
        initialValue : {
            attribute : true,
            type : Number
        },
        step : {
            attribute : true,
            type : Number
        }
    }

    constructor(){
        super()
        this.count = 0;
    }

    connectedCallback() {
        super.connectedCallback();
        this.count = this.initialValue || 0;
        this.step = this.step || 1;
    }

    _plus(){
        this.count += this.step;
    }

    _minus(){
        this.count -= this.step
    }

    render(){
        return html`
         <button @click="${this._minus}">-</button>
         ${this.count}
         <button @click="${this._plus}">+</button>

        `
    }

}

customElements.define('my-counter', MyCounter)