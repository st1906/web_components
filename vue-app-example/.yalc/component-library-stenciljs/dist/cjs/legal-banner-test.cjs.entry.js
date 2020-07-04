'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ffba803f.js');

const legalBannerTestCss = ":host{display:block}";

const LegalBannerTest = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
LegalBannerTest.style = legalBannerTestCss;

exports.legal_banner_test = LegalBannerTest;
