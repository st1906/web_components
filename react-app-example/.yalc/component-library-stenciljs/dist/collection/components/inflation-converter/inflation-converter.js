import { Component, Host, h, Prop, State } from '@stencil/core';
export class InflationConverter {
    constructor() {
        this.moneyValue = 0;
        this.startDate = "2010/1/1";
        this.inflatedValue = 0;
        this.getInflationRate = async () => {
            const todaysDate = new Date();
            const endDate = `${todaysDate.getFullYear()}/${todaysDate.getMonth()}/${todaysDate.getDate()}`;
            const resposne = await fetch(`https://www.statbureau.org/calculate-inflation-price-json?country=united-states&start=${this.startDate}&end=${endDate}&amount=${this.moneyValue}`);
            const result = await resposne.json();
            this.inflatedValue = result;
        };
    }
    componentWillLoad() {
        this.getInflationRate();
    }
    render() {
        return (h(Host, null,
            h("div", { class: "tooltip" },
                this.moneyValue,
                " $",
                h("span", { class: "tooltiptext" }, this.inflatedValue))));
    }
    static get is() { return "inflation-converter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["inflation-converter.css"]
    }; }
    static get styleUrls() { return {
        "$": ["inflation-converter.css"]
    }; }
    static get properties() { return {
        "moneyValue": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "money-value",
            "reflect": false,
            "defaultValue": "0"
        },
        "startDate": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "start-date",
            "reflect": false,
            "defaultValue": "\"2010/1/1\""
        }
    }; }
    static get states() { return {
        "inflatedValue": {}
    }; }
}
