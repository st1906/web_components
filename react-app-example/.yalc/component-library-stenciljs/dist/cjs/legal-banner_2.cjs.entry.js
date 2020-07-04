'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ffba803f.js');

const legalBannerCss = ":host{display:block}.container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#124372;color:white;-ms-flex-pack:justify;justify-content:space-between;width:100%}.dismissed{display:none}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:70%}h3{margin:0.5rem 0 0.5rem 1rem}p{margin:0.25rem 0 0.25rem 1rem}.actions-container{padding:0.5rem 1rem;place-self:center}button{border:solid 0.25px white;color:#fff;width:4rem;background:none;font-size:0.5rem;padding:0.2rem 0.4rem;margin:0rem 0.2rem}button:hover{cursor:pointer;background-color:#fff;color:#124372}";

const LegalBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { style: { display: this.dismissed ? 'none' : 'flex' } }, index.h("div", { class: 'container' }, index.h("div", { class: "text-container" }, index.h("h3", null, this.bannerTitle), this.type === "big" && index.h("p", null, this.text)), this.type !== 'embedded' &&
            index.h("div", { class: "actions-container" }, index.h("button", { onClick: this.handleDismiss }, "Dismiss"), index.h("button", { onClick: this.handleLearnMore }, "Learn more")))));
    }
};
LegalBanner.style = legalBannerCss;

const toastAlertCss = ":host{display:block}h3{margin:0.5rem 0}button{position:absolute;right:1rem;top:1rem;background:white;border-radius:50%;font-size:2rem;border:none;padding:1rem}button:hover{cursor:pointer}p{margin:0.5rem 0}.container{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.alert-container{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;text-align:center;border:1px solid black;border-radius:8px;padding:1rem 2rem}";

const ToastAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.alertTitle = "Alert title";
        this.alertDescription = "Alert description";
        this.isActive = false;
        this.handleClose = () => this.isActive = false;
    }
    // ToDo: Some css modal stuff to fix
    render() {
        return (index.h(index.Host, { style: { display: this.isActive ? 'block' : 'none' } }, index.h("div", { class: "container" }, index.h("div", { class: "alert-container" }, index.h("span", null, index.h("h3", { class: "alert-title" }, this.alertTitle), index.h("button", { onClick: this.handleClose }, "X")), index.h("p", { class: "alert-description" }, this.alertDescription)))));
    }
};
ToastAlert.style = toastAlertCss;

exports.legal_banner = LegalBanner;
exports.toast_alert = ToastAlert;
