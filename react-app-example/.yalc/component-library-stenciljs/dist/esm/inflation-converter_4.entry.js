import { r as registerInstance, h, H as Host } from './index-320bb76a.js';

const inflationConverterCss = ":host{display:block}.tooltip{position:relative;display:inline-block;border-bottom:1px dotted black}.tooltip .tooltiptext{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1}.tooltip:hover .tooltiptext{visibility:visible}";

const InflationConverter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.moneyValue = 0;
        this.startDate = "2010/1/1";
        this.inflatedValue = 0;
        this.getInflationRate = async () => {
            const todaysDate = new Date();
            const endDate = `${todaysDate.getFullYear()}/${todaysDate.getMonth()}/${todaysDate.getDate()}`;
            const resposne = await fetch(`https://www.statbureau.org/calculate-inflation-price-json?country=united-states&start=${this.startDate}&end=${endDate}&amount=${this.moneyValue}`);
            const result = await resposne.json();
            this.inflatedValue = result;
        };
    }
    componentWillLoad() {
        this.getInflationRate();
    }
    render() {
        return (h(Host, null, h("div", { class: "tooltip" }, this.moneyValue, " $", h("span", { class: "tooltiptext" }, this.inflatedValue))));
    }
};
InflationConverter.style = inflationConverterCss;

const legalBannerCss = ":host{display:block}.container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#124372;color:white;-ms-flex-pack:justify;justify-content:space-between;width:100%}.dismissed{display:none}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:70%}h3{margin:0.5rem 0 0.5rem 1rem}p{margin:0.25rem 0 0.25rem 1rem}.actions-container{padding:0.5rem 1rem;place-self:center}button{border:solid 0.25px white;color:#fff;width:4rem;background:none;font-size:0.5rem;padding:0.2rem 0.4rem;margin:0rem 0.2rem}button:hover{cursor:pointer;background-color:#fff;color:#124372}";

const LegalBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bannerTitle = "Title for the legal banner";
        this.text = "The text of my legal banner";
        this.type = 'small';
        this.policypageLink = 'https://policies.google.com/privacy?hl=en-US';
        this.dismissed = false;
        this.handleDismiss = () => {
            this.dismissed = true;
        };
        this.handleLearnMore = () => {
            window.open(this.policypageLink, '_blank');
        };
    }
    render() {
        return (h(Host, { style: { display: this.dismissed ? 'none' : 'flex' } }, h("div", { class: 'container' }, h("div", { class: "text-container" }, h("h3", null, this.bannerTitle), this.type === "big" && h("p", null, this.text)), this.type !== 'embedded' &&
            h("div", { class: "actions-container" }, h("button", { onClick: this.handleDismiss }, "Dismiss"), h("button", { onClick: this.handleLearnMore }, "Learn more")))));
    }
};
LegalBanner.style = legalBannerCss;

const socialMediaWidgetCss = ":host{display:block;width:100%;max-width:320px}div{padding:0.5rem;margin:0.5rem 0.25rem}.facebook a{color:#4267B2}.facebook a::before{content:\"F\";color:white;margin-right:8px;background-color:#4267B2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.twitter a{color:#1DA1F2}.twitter a::before{content:\"T\";color:white;margin-right:8px;background-color:#1DA1F2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.youtube a{color:#FF0000}.youtube a::before{content:\"Y\";color:white;margin-right:8px;background-color:#FF0000;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}";

const SocialMediaWidget = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.facebookLink = 'https://www.facebook.com/';
        this.twitterLink = 'https://www.twitter.com/';
        this.youtubeLink = 'https://www.youtube.com/';
    }
    render() {
        return (h(Host, null, h("div", { class: "facebook" }, h("a", { href: this.facebookLink }, "Go to Facebook")), h("div", { class: "twitter" }, h("a", { href: this.twitterLink }, "Go to Twitter")), h("div", { class: "youtube" }, h("a", { href: this.youtubeLink }, "Go to YouTube"))));
    }
};
SocialMediaWidget.style = socialMediaWidgetCss;

const toastAlertCss = ":host{display:block}h3{margin:0.5rem 0}button{position:absolute;right:1rem;top:1rem;background:white;border-radius:50%;font-size:2rem;border:1px solid black;padding:1rem}button:hover{cursor:pointer}p{margin:0.5rem 0}.container{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.alert-container{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;text-align:center;border:1px solid black;border-radius:8px;padding:1rem 2rem}";

const ToastAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.alertTitle = "Alert title";
        this.alertDescription = "Alert description";
        this.isActive = false;
        this.handleClose = () => this.isActive = false;
    }
    render() {
        return (h(Host, { style: { display: this.isActive ? 'block' : 'none' } }, h("div", { class: "container" }, h("div", { class: "alert-container" }, h("span", null, h("h3", { class: "alert-title" }, this.alertTitle), h("button", { onClick: this.handleClose }, "X")), h("p", { class: "alert-description" }, this.alertDescription)))));
    }
};
ToastAlert.style = toastAlertCss;

export { InflationConverter as inflation_converter, LegalBanner as legal_banner, SocialMediaWidget as social_media_widget, ToastAlert as toast_alert };
