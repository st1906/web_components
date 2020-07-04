import { r as registerInstance, h, H as Host } from './index-d91d5754.js';
var legalBannerCss = ":host{display:block}.container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#124372;color:white;-ms-flex-pack:justify;justify-content:space-between;width:100%}.dismissed{display:none}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:70%}h3{margin:0.5rem 0 0.5rem 1rem}p{margin:0.25rem 0 0.25rem 1rem}.actions-container{padding:0.5rem 1rem;place-self:center}button{border:solid 0.25px white;color:#fff;width:4rem;background:none;font-size:0.5rem;padding:0.2rem 0.4rem;margin:0rem 0.2rem}button:hover{cursor:pointer;background-color:#fff;color:#124372}";
var LegalBanner = /** @class */ (function () {
    function LegalBanner(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.bannerTitle = "Title for the legal banner";
        this.text = "The text of my legal banner";
        this.type = 'small';
        this.dismissed = false;
        this.handleDismiss = function () {
            _this.dismissed = true;
        };
        this.handleLearnMore = function () {
            window.open('https://policies.google.com/privacy?hl=en-US', '_blank');
        };
    }
    LegalBanner.prototype.render = function () {
        return (h(Host, { style: { display: this.dismissed ? 'none' : 'flex' } }, h("div", { class: 'container' }, h("div", { class: "text-container" }, h("h3", null, this.bannerTitle), this.type === "big" && h("p", null, this.text)), this.type !== 'embedded' &&
            h("div", { class: "actions-container" }, h("button", { onClick: this.handleDismiss }, "Dismiss"), h("button", { onClick: this.handleLearnMore }, "Learn more")))));
    };
    return LegalBanner;
}());
LegalBanner.style = legalBannerCss;
var toastAlertCss = ":host{display:block}h3{margin:0.5rem 0}button{position:absolute;right:1rem;top:1rem;background:white;border-radius:50%;font-size:2rem;border:none;padding:1rem}button:hover{cursor:pointer}p{margin:0.5rem 0}.container{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.alert-container{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;text-align:center;border:1px solid black;border-radius:8px;padding:1rem 2rem}";
var ToastAlert = /** @class */ (function () {
    function ToastAlert(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.alertTitle = "Alert title";
        this.alertDescription = "Alert description";
        this.isActive = false;
        this.handleClose = function () { return _this.isActive = false; };
    }
    // ToDo: Some css modal stuff to fix
    ToastAlert.prototype.render = function () {
        return (h(Host, { style: { display: this.isActive ? 'block' : 'none' } }, h("div", { class: "container" }, h("div", { class: "alert-container" }, h("span", null, h("h3", { class: "alert-title" }, this.alertTitle), h("button", { onClick: this.handleClose }, "X")), h("p", { class: "alert-description" }, this.alertDescription)))));
    };
    return ToastAlert;
}());
ToastAlert.style = toastAlertCss;
export { LegalBanner as legal_banner, ToastAlert as toast_alert };
