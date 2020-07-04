import { r as registerInstance, h, H as Host } from './index-d91d5754.js';
var legalBannerTestCss = ":host{display:block}";
var LegalBannerTest = /** @class */ (function () {
    function LegalBannerTest(hostRef) {
        registerInstance(this, hostRef);
    }
    LegalBannerTest.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return LegalBannerTest;
}());
LegalBannerTest.style = legalBannerTestCss;
export { LegalBannerTest as legal_banner_test };
