import { Component, Host, h, Prop } from "@stencil/core";
export class ToastAlert {
    constructor() {
        this.alertTitle = "Alert title";
        this.alertDescription = "Alert description";
        this.isActive = false;
        this.handleClose = () => this.isActive = false;
    }
    render() {
        return (h(Host, { style: { display: this.isActive ? 'block' : 'none' } },
            h("div", { class: "container" },
                h("div", { class: "alert-container" },
                    h("span", null,
                        h("h3", { class: "alert-title" }, this.alertTitle),
                        h("button", { onClick: this.handleClose }, "X")),
                    h("p", { class: "alert-description" }, this.alertDescription)))));
    }
    static get is() { return "toast-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["toast-alert.css"]
    }; }
    static get styleUrls() { return {
        "$": ["toast-alert.css"]
    }; }
    static get properties() { return {
        "alertTitle": {
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
            "attribute": "alert-title",
            "reflect": false,
            "defaultValue": "\"Alert title\""
        },
        "alertDescription": {
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
            "attribute": "alert-description",
            "reflect": false,
            "defaultValue": "\"Alert description\""
        },
        "isActive": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-active",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
