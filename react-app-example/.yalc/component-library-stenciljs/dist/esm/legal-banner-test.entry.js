import { r as registerInstance, h, H as Host } from './index-d91d5754.js';

const legalBannerTestCss = ":host{display:block}";

const LegalBannerTest = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
LegalBannerTest.style = legalBannerTestCss;

export { LegalBannerTest as legal_banner_test };
