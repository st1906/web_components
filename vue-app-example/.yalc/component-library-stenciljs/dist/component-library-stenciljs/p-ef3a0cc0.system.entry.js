var __awaiter=this&&this.__awaiter||function(t,e,i,r){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function a(t){try{l(r.next(t))}catch(e){n(e)}}function s(t){try{l(r["throw"](t))}catch(e){n(e)}}function l(t){t.done?i(t.value):o(t.value).then(a,s)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,o,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,o&&(n=a[0]&2?o["return"]:a[0]?o["throw"]||((n=o["return"])&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;if(o=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(a[0]===6&&i.label<n[1]){i.label=n[1];n=a;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(a);break}if(n[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(s){a=[6,s];o=0}finally{r=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-1ab608ff.system.js"],(function(t){"use strict";var e,i,r;return{setters:[function(t){e=t.r;i=t.h;r=t.H}],execute:function(){var o=":host{display:block}.tooltip{position:relative;display:inline-block;border-bottom:1px dotted black}.tooltip .tooltiptext{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1}.tooltip:hover .tooltiptext{visibility:visible}";var n=t("inflation_converter",function(){function t(t){var i=this;e(this,t);this.moneyValue=0;this.startDate="2010/1/1";this.inflatedValue=0;this.getInflationRate=function(){return __awaiter(i,void 0,void 0,(function(){var t,e,i,r;return __generator(this,(function(o){switch(o.label){case 0:t=new Date;e=t.getFullYear()+"/"+t.getMonth()+"/"+t.getDate();return[4,fetch("https://www.statbureau.org/calculate-inflation-price-json?country=united-states&start="+this.startDate+"&end="+e+"&amount="+this.moneyValue)];case 1:i=o.sent();return[4,i.json()];case 2:r=o.sent();this.inflatedValue=r;return[2]}}))}))}}t.prototype.componentWillLoad=function(){this.getInflationRate()};t.prototype.render=function(){return i(r,null,i("div",{class:"tooltip"},this.moneyValue," $",i("span",{class:"tooltiptext"},this.inflatedValue)))};return t}());n.style=o;var a=":host{display:block}.container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#124372;color:white;-ms-flex-pack:justify;justify-content:space-between;width:100%}.dismissed{display:none}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:70%}h3{margin:0.5rem 0 0.5rem 1rem}p{margin:0.25rem 0 0.25rem 1rem}.actions-container{padding:0.5rem 1rem;place-self:center}button{border:solid 0.25px white;color:#fff;width:4rem;background:none;font-size:0.5rem;padding:0.2rem 0.4rem;margin:0rem 0.2rem}button:hover{cursor:pointer;background-color:#fff;color:#124372}";var s=t("legal_banner",function(){function t(t){var i=this;e(this,t);this.bannerTitle="Title for the legal banner";this.text="The text of my legal banner";this.type="small";this.policypageLink="https://policies.google.com/privacy?hl=en-US";this.dismissed=false;this.handleDismiss=function(){i.dismissed=true};this.handleLearnMore=function(){window.open(i.policypageLink,"_blank")}}t.prototype.render=function(){return i(r,{style:{display:this.dismissed?"none":"flex"}},i("div",{class:"container"},i("div",{class:"text-container"},i("h3",null,this.bannerTitle),this.type==="big"&&i("p",null,this.text)),this.type!=="embedded"&&i("div",{class:"actions-container"},i("button",{onClick:this.handleDismiss},"Dismiss"),i("button",{onClick:this.handleLearnMore},"Learn more"))))};return t}());s.style=a;var l=':host{display:block;width:100%;max-width:320px}div{padding:0.5rem;margin:0.5rem 0.25rem}.facebook a{color:#4267B2}.facebook a::before{content:"F";color:white;margin-right:8px;background-color:#4267B2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.twitter a{color:#1DA1F2}.twitter a::before{content:"T";color:white;margin-right:8px;background-color:#1DA1F2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.youtube a{color:#FF0000}.youtube a::before{content:"Y";color:white;margin-right:8px;background-color:#FF0000;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}';var c=t("social_media_widget",function(){function t(t){e(this,t);this.facebookLink="https://www.facebook.com/";this.twitterLink="https://www.twitter.com/";this.youtubeLink="https://www.youtube.com/"}t.prototype.render=function(){return i(r,null,i("div",{class:"facebook"},i("a",{href:this.facebookLink},"Go to Facebook")),i("div",{class:"twitter"},i("a",{href:this.twitterLink},"Go to Twitter")),i("div",{class:"youtube"},i("a",{href:this.youtubeLink},"Go to YouTube")))};return t}());c.style=l;var u=":host{display:block}h3{margin:0.5rem 0}button{position:absolute;right:1rem;top:1rem;background:white;border-radius:50%;font-size:2rem;border:1px solid black;padding:1rem}button:hover{cursor:pointer}p{margin:0.5rem 0}.container{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.alert-container{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;text-align:center;border:1px solid black;border-radius:8px;padding:1rem 2rem}";var d=t("toast_alert",function(){function t(t){var i=this;e(this,t);this.alertTitle="Alert title";this.alertDescription="Alert description";this.isActive=false;this.handleClose=function(){return i.isActive=false}}t.prototype.render=function(){return i(r,{style:{display:this.isActive?"block":"none"}},i("div",{class:"container"},i("div",{class:"alert-container"},i("span",null,i("h3",{class:"alert-title"},this.alertTitle),i("button",{onClick:this.handleClose},"X")),i("p",{class:"alert-description"},this.alertDescription))))};return t}());d.style=u}}}));