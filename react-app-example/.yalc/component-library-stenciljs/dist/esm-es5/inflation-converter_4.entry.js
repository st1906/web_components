var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, H as Host } from './index-320bb76a.js';
var inflationConverterCss = ":host{display:block}.tooltip{position:relative;display:inline-block;border-bottom:1px dotted black}.tooltip .tooltiptext{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1}.tooltip:hover .tooltiptext{visibility:visible}";
var InflationConverter = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.moneyValue = 0;
        this.startDate = "2010/1/1";
        this.inflatedValue = 0;
        this.getInflationRate = function () { return __awaiter(_this, void 0, void 0, function () {
            var todaysDate, endDate, resposne, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        todaysDate = new Date();
                        endDate = todaysDate.getFullYear() + "/" + todaysDate.getMonth() + "/" + todaysDate.getDate();
                        return [4 /*yield*/, fetch("https://www.statbureau.org/calculate-inflation-price-json?country=united-states&start=" + this.startDate + "&end=" + endDate + "&amount=" + this.moneyValue)];
                    case 1:
                        resposne = _a.sent();
                        return [4 /*yield*/, resposne.json()];
                    case 2:
                        result = _a.sent();
                        this.inflatedValue = result;
                        return [2 /*return*/];
                }
            });
        }); };
    }
    class_1.prototype.componentWillLoad = function () {
        this.getInflationRate();
    };
    class_1.prototype.render = function () {
        return (h(Host, null, h("div", { class: "tooltip" }, this.moneyValue, " $", h("span", { class: "tooltiptext" }, this.inflatedValue))));
    };
    return class_1;
}());
InflationConverter.style = inflationConverterCss;
var legalBannerCss = ":host{display:block}.container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#124372;color:white;-ms-flex-pack:justify;justify-content:space-between;width:100%}.dismissed{display:none}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:70%}h3{margin:0.5rem 0 0.5rem 1rem}p{margin:0.25rem 0 0.25rem 1rem}.actions-container{padding:0.5rem 1rem;place-self:center}button{border:solid 0.25px white;color:#fff;width:4rem;background:none;font-size:0.5rem;padding:0.2rem 0.4rem;margin:0rem 0.2rem}button:hover{cursor:pointer;background-color:#fff;color:#124372}";
var LegalBanner = /** @class */ (function () {
    function LegalBanner(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.bannerTitle = "Title for the legal banner";
        this.text = "The text of my legal banner";
        this.type = 'small';
        this.policypageLink = 'https://policies.google.com/privacy?hl=en-US';
        this.dismissed = false;
        this.handleDismiss = function () {
            _this.dismissed = true;
        };
        this.handleLearnMore = function () {
            window.open(_this.policypageLink, '_blank');
        };
    }
    LegalBanner.prototype.render = function () {
        return (h(Host, { style: { display: this.dismissed ? 'none' : 'flex' } }, h("div", { class: 'container' }, h("div", { class: "text-container" }, h("h3", null, this.bannerTitle), this.type === "big" && h("p", null, this.text)), this.type !== 'embedded' &&
            h("div", { class: "actions-container" }, h("button", { onClick: this.handleDismiss }, "Dismiss"), h("button", { onClick: this.handleLearnMore }, "Learn more")))));
    };
    return LegalBanner;
}());
LegalBanner.style = legalBannerCss;
var socialMediaWidgetCss = ":host{display:block;width:100%;max-width:320px}div{padding:0.5rem;margin:0.5rem 0.25rem}.facebook a{color:#4267B2}.facebook a::before{content:\"F\";color:white;margin-right:8px;background-color:#4267B2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.twitter a{color:#1DA1F2}.twitter a::before{content:\"T\";color:white;margin-right:8px;background-color:#1DA1F2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.youtube a{color:#FF0000}.youtube a::before{content:\"Y\";color:white;margin-right:8px;background-color:#FF0000;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}";
var SocialMediaWidget = /** @class */ (function () {
    function SocialMediaWidget(hostRef) {
        registerInstance(this, hostRef);
        this.facebookLink = 'https://www.facebook.com/';
        this.twitterLink = 'https://www.twitter.com/';
        this.youtubeLink = 'https://www.youtube.com/';
    }
    SocialMediaWidget.prototype.render = function () {
        return (h(Host, null, h("div", { class: "facebook" }, h("a", { href: this.facebookLink }, "Go to Facebook")), h("div", { class: "twitter" }, h("a", { href: this.twitterLink }, "Go to Twitter")), h("div", { class: "youtube" }, h("a", { href: this.youtubeLink }, "Go to YouTube"))));
    };
    return SocialMediaWidget;
}());
SocialMediaWidget.style = socialMediaWidgetCss;
var toastAlertCss = ":host{display:block}h3{margin:0.5rem 0}button{position:absolute;right:1rem;top:1rem;background:white;border-radius:50%;font-size:2rem;border:1px solid black;padding:1rem}button:hover{cursor:pointer}p{margin:0.5rem 0}.container{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.alert-container{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;text-align:center;border:1px solid black;border-radius:8px;padding:1rem 2rem}";
var ToastAlert = /** @class */ (function () {
    function ToastAlert(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.alertTitle = "Alert title";
        this.alertDescription = "Alert description";
        this.isActive = false;
        this.handleClose = function () { return _this.isActive = false; };
    }
    ToastAlert.prototype.render = function () {
        return (h(Host, { style: { display: this.isActive ? 'block' : 'none' } }, h("div", { class: "container" }, h("div", { class: "alert-container" }, h("span", null, h("h3", { class: "alert-title" }, this.alertTitle), h("button", { onClick: this.handleClose }, "X")), h("p", { class: "alert-description" }, this.alertDescription)))));
    };
    return ToastAlert;
}());
ToastAlert.style = toastAlertCss;
export { InflationConverter as inflation_converter, LegalBanner as legal_banner, SocialMediaWidget as social_media_widget, ToastAlert as toast_alert };
