'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ffba803f.js');

const socialMediaWidgetCss = ":host{display:block}";

const SocialMediaWidget = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "facebook" }, index.h("a", { href: "www.facebook.com" }, "Go to facebook")), index.h("div", null, index.h("a", { href: "www.twitter.com" }, "Go to twitter"))));
    }
};
SocialMediaWidget.style = socialMediaWidgetCss;

exports.social_media_widget = SocialMediaWidget;
