import { r as registerInstance, h, H as Host } from './index-d91d5754.js';

const socialMediaWidgetCss = ":host{display:block}";

const SocialMediaWidget = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "facebook" }, h("a", { href: "www.facebook.com" }, "Go to facebook")), h("div", null, h("a", { href: "www.twitter.com" }, "Go to twitter"))));
    }
};
SocialMediaWidget.style = socialMediaWidgetCss;

export { SocialMediaWidget as social_media_widget };
