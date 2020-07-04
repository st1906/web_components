import { r as registerInstance, h, H as Host } from './index-d91d5754.js';
var socialMediaWidgetCss = ":host{display:block}";
var SocialMediaWidget = /** @class */ (function () {
    function SocialMediaWidget(hostRef) {
        registerInstance(this, hostRef);
    }
    SocialMediaWidget.prototype.render = function () {
        return (h(Host, null, h("div", { class: "facebook" }, h("a", { href: "www.facebook.com" }, "Go to facebook")), h("div", null, h("a", { href: "www.twitter.com" }, "Go to twitter"))));
    };
    return SocialMediaWidget;
}());
SocialMediaWidget.style = socialMediaWidgetCss;
export { SocialMediaWidget as social_media_widget };
