import { Component, Host, h, Prop, State } from "@stencil/core";
export class LegalBanner {
    constructor() {
        this.bannerTitle = "Title for the legal banner";
        this.text = "The text of my legal banner";
        this.type = 'small';
        this.dismissed = false;
        this.handleDismiss = () => {
            this.dismissed = true;
        };
        this.handleLearnMore = () => {
            window.open('https://policies.google.com/privacy?hl=en-US', '_blank');
        };
    }
    render() {
        return (h(Host, { style: { display: this.dismissed ? 'none' : 'flex' } },
            h("div", { class: 'container' },
                h("div", { class: "text-container" },
                    h("h3", null, this.bannerTitle),
                    this.type === "big" && h("p", null, this.text)),
                this.type !== 'embedded' &&
                    h("div", { class: "actions-container" },
                        h("button", { onClick: this.handleDismiss }, "Dismiss"),
                        h("button", { onClick: this.handleLearnMore }, "Learn more")))));
    }
    static get is() { return "legal-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["legal-banner.css"]
    }; }
    static get styleUrls() { return {
        "$": ["legal-banner.css"]
    }; }
    static get properties() { return {
        "bannerTitle": {
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
            "attribute": "banner-title",
            "reflect": false,
            "defaultValue": "\"Title for the legal banner\""
        },
        "text": {
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
            "attribute": "text",
            "reflect": false,
            "defaultValue": "\"The text of my legal banner\""
        },
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'big' | 'small' | 'embedded'",
                "resolved": "\"big\" | \"embedded\" | \"small\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'small'"
        }
    }; }
    static get states() { return {
        "dismissed": {}
    }; }
}
