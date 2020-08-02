import{r as t,h as o,H as e}from"./p-4681380c.js";const i=class{constructor(o){t(this,o),this.moneyValue=0,this.startDate="2010/1/1",this.inflatedValue=0,this.getInflationRate=async()=>{const t=new Date,o=`${t.getFullYear()}/${t.getMonth()}/${t.getDate()}`,e=await fetch(`https://www.statbureau.org/calculate-inflation-price-json?country=united-states&start=${this.startDate}&end=${o}&amount=${this.moneyValue}`),i=await e.json();this.inflatedValue=i}}componentWillLoad(){this.getInflationRate()}render(){return o(e,null,o("div",{class:"tooltip"},this.moneyValue," $",o("span",{class:"tooltiptext"},this.inflatedValue)))}};i.style=":host{display:block}.tooltip{position:relative;display:inline-block;border-bottom:1px dotted black}.tooltip .tooltiptext{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1}.tooltip:hover .tooltiptext{visibility:visible}";const r=class{constructor(o){t(this,o),this.bannerTitle="Title for the legal banner",this.text="The text of my legal banner",this.type="small",this.policypageLink="https://policies.google.com/privacy?hl=en-US",this.dismissed=!1,this.handleDismiss=()=>{this.dismissed=!0},this.handleLearnMore=()=>{window.open(this.policypageLink,"_blank")}}render(){return o(e,{style:{display:this.dismissed?"none":"flex"}},o("div",{class:"container"},o("div",{class:"text-container"},o("h3",null,this.bannerTitle),"big"===this.type&&o("p",null,this.text)),"embedded"!==this.type&&o("div",{class:"actions-container"},o("button",{onClick:this.handleDismiss},"Dismiss"),o("button",{onClick:this.handleLearnMore},"Learn more"))))}};r.style=":host{display:block}.container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;background-color:#124372;color:white;-ms-flex-pack:justify;justify-content:space-between;width:100%}.dismissed{display:none}.text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;max-width:70%}h3{margin:0.5rem 0 0.5rem 1rem}p{margin:0.25rem 0 0.25rem 1rem}.actions-container{padding:0.5rem 1rem;place-self:center}button{border:solid 0.25px white;color:#fff;width:4rem;background:none;font-size:0.5rem;padding:0.2rem 0.4rem;margin:0rem 0.2rem}button:hover{cursor:pointer;background-color:#fff;color:#124372}";const s=class{constructor(o){t(this,o),this.facebookLink="https://www.facebook.com/",this.twitterLink="https://www.twitter.com/",this.youtubeLink="https://www.youtube.com/"}render(){return o(e,null,o("div",{class:"facebook"},o("a",{href:this.facebookLink},"Go to Facebook")),o("div",{class:"twitter"},o("a",{href:this.twitterLink},"Go to Twitter")),o("div",{class:"youtube"},o("a",{href:this.youtubeLink},"Go to YouTube")))}};s.style=':host{display:block;width:100%;max-width:320px}div{padding:0.5rem;margin:0.5rem 0.25rem}.facebook a{color:#4267B2}.facebook a::before{content:"F";color:white;margin-right:8px;background-color:#4267B2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.twitter a{color:#1DA1F2}.twitter a::before{content:"T";color:white;margin-right:8px;background-color:#1DA1F2;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}.youtube a{color:#FF0000}.youtube a::before{content:"Y";color:white;margin-right:8px;background-color:#FF0000;font-size:1rem;padding:0.25rem 0.5rem;border-radius:25%;border:solid 1px black}';const a=class{constructor(o){t(this,o),this.alertTitle="Alert title",this.alertDescription="Alert description",this.isActive=!1,this.handleClose=()=>this.isActive=!1}render(){return o(e,{style:{display:this.isActive?"block":"none"}},o("div",{class:"container"},o("div",{class:"alert-container"},o("span",null,o("h3",{class:"alert-title"},this.alertTitle),o("button",{onClick:this.handleClose},"X")),o("p",{class:"alert-description"},this.alertDescription))))}};a.style=":host{display:block}h3{margin:0.5rem 0}button{position:absolute;right:1rem;top:1rem;background:white;border-radius:50%;font-size:2rem;border:1px solid black;padding:1rem}button:hover{cursor:pointer}p{margin:0.5rem 0}.container{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,0.4)}.alert-container{background-color:#fefefe;margin:15% auto;border:1px solid #888;width:80%;text-align:center;border:1px solid black;border-radius:8px;padding:1rem 2rem}";export{i as inflation_converter,r as legal_banner,s as social_media_widget,a as toast_alert}