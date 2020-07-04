import { Component, Host, h } from '@stencil/core';
export class LegalBannerTest {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "legal-banner-test"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["legal-banner-test.css"]
    }; }
    static get styleUrls() { return {
        "$": ["legal-banner-test.css"]
    }; }
}
