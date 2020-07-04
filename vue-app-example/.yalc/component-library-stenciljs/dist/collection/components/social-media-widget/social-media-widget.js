import { Component, Host, h } from "@stencil/core";
// ToDo
export class SocialMediaWidget {
    render() {
        return (h(Host, null,
            h("div", { class: "facebook" },
                h("a", { href: "www.facebook.com" }, "Go to facebook")),
            h("div", null,
                h("a", { href: "www.twitter.com" }, "Go to twitter"))));
    }
    static get is() { return "social-media-widget"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["social-media-widget.css"]
    }; }
    static get styleUrls() { return {
        "$": ["social-media-widget.css"]
    }; }
}
