System.register(["./p-09531950.system.js"],(function(e){"use strict";var t,i,r;return{setters:[function(e){t=e.r;i=e.h;r=e.H}],execute:function(){var n=":host{display:block}.container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#124372;color:white;-ms-flex-pack:justify;justify-content:space-between;width:100%}.dismissed{display:none}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:70%}h3{margin:0.5rem 0 0.5rem 1rem}p{margin:0.25rem 0 0.25rem 1rem}.actions-container{padding:0.5rem 1rem;place-self:center}button{border:solid 0.25px white;color:#fff;width:4rem;background:none;font-size:0.5rem;padding:0.2rem 0.4rem;margin:0rem 0.2rem}button:hover{cursor:pointer;background-color:#fff;color:#124372}";var o=e("legal_banner",function(){function e(e){var i=this;t(this,e);this.bannerTitle="Title for the legal banner";this.text="The text of my legal banner";this.type="small";this.dismissed=false;this.handleDismiss=function(){i.dismissed=true};this.handleLearnMore=function(){window.open("https://policies.google.com/privacy?hl=en-US","_blank")}}e.prototype.render=function(){return i(r,{style:{display:this.dismissed?"none":"flex"}},i("div",{class:"container"},i("div",{class:"text-container"},i("h3",null,this.bannerTitle),this.type==="big"&&i("p",null,this.text)),this.type!=="embedded"&&i("div",{class:"actions-container"},i("button",{onClick:this.handleDismiss},"Dismiss"),i("button",{onClick:this.handleLearnMore},"Learn more"))))};return e}());o.style=n;var s=":host{display:block}h3{margin:0.5rem 0}button{position:absolute;right:1rem;top:1rem;background:white;border-radius:50%;font-size:2rem;border:none;padding:1rem}button:hover{cursor:pointer}p{margin:0.5rem 0}.container{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.alert-container{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;text-align:center;border:1px solid black;border-radius:8px;padding:1rem 2rem}";var l=e("toast_alert",function(){function e(e){var i=this;t(this,e);this.alertTitle="Alert title";this.alertDescription="Alert description";this.isActive=false;this.handleClose=function(){return i.isActive=false}}e.prototype.render=function(){return i(r,{style:{display:this.isActive?"block":"none"}},i("div",{class:"container"},i("div",{class:"alert-container"},i("span",null,i("h3",{class:"alert-title"},this.alertTitle),i("button",{onClick:this.handleClose},"X")),i("p",{class:"alert-description"},this.alertDescription))))};return e}());l.style=s}}}));