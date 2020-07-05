import { Component, Host, h, Prop } from "@stencil/core";
export class SocialMediaWidget {
    constructor() {
        this.facebookLink = 'https://www.facebook.com/';
        this.twitterLink = 'https://www.twitter.com/';
        this.youtubeLink = 'https://www.youtube.com/';
    }
    render() {
        return (h(Host, null,
            h("div", { class: "facebook" },
                h("a", { href: this.facebookLink }, "Go to Facebook")),
            h("div", { class: "twitter" },
                h("a", { href: this.twitterLink }, "Go to Twitter")),
            h("div", { class: "youtube" },
                h("a", { href: this.youtubeLink }, "Go to YouTube"))));
    }
    static get is() { return "social-media-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["social-media-widget.css"]
    }; }
    static get styleUrls() { return {
        "$": ["social-media-widget.css"]
    }; }
    static get properties() { return {
        "facebookLink": {
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
            "attribute": "facebook-link",
            "reflect": false,
            "defaultValue": "'https://www.facebook.com/'"
        },
        "twitterLink": {
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
            "attribute": "twitter-link",
            "reflect": false,
            "defaultValue": "'https://www.twitter.com/'"
        },
        "youtubeLink": {
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
            "attribute": "youtube-link",
            "reflect": false,
            "defaultValue": "'https://www.youtube.com/'"
        }
    }; }
}
