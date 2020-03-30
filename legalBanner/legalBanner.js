// Here we are going to create a low-level web component for the legal banner
/**Optional
 * @param fixed - don't display the dismiss button
 * @param size="big" - don't display the learn more button with more info already displayed
 */

const template = document.createElement("template");

const moreLegalInformation = `
    <p class='more-info'>Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies and similar technologies for storing and honoring your preferences and settings, enabling you to sign in, providing interest-based advertising, combating fraud, analyzing how our products perform, and fulfilling other legitimate purposes.</p>
`;
template.innerHTML = `<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container {
    display: grid;
    grid-template-areas:
        "content"
        "btngroup"
        "moreinf";
    background-color: #124372;
    color: #fff;
    padding: 0.5rem;
}
.title {
    display: none;
    grid-area: title;
    font-size: 2rem;
}
.summ-text {
    font-size: 0.5rem;
}
.content {
    grid-area: content;
    align-self: center;
}
.button-group {
    grid-area: btngroup;
    place-self: center;
}
button {
    border: solid 0.25px white;
    color: #fff;
    width: 4rem;
    background: none;
    font-size: 0.5rem;
    padding: 0.2rem 0.4rem;
    margin: 0rem 0.2rem
}
button:hover {
    cursor: pointer;
    background-color: #fff;
    color: #124372
}
button[underlined]{
    text-decoration: underline;
    font-weight: bold;
}
.more-info{
    grid-area: moreinf;
    display: none;
    font-size: 0.8rem;
    font-style: oblique;
    font-weight: 100;
    padding: 1rem 0rem;
}
@media only screen and (min-width: 400px) {
.summ-text {
  font-size: 0.75rem;
}
}
@media only screen and (min-width: 601px){
.container {
    grid-template-areas:
        "content content content btngroup"
        "moreinf moreinf moreinf moreinf";
}
.button-group {
    justify-self: end;
    align-self: center;
}
}@media only screen and (min-width: 801px){
.summ-text{
    font-size: 1rem;
}
button{
    font-size: 0.75rem;
    width: 6rem;
    padding: 0.4rem 0.6rem;
}
}
@media only screen and (min-width: 1441px){
.summ-text, .more-info{
    font-size: 1.5rem;
}
}
</style>

<div class='container'>
    <div class='content'>
        <h3 class='title'>Privacy policy</h3>
        <p class='summ-text'>This site uses cookies from 3rd party services that might gather personal information from visitors</p>
    </div>
    <div class='button-group'>
        <button class='learn-more-btn'>Learn more</button>
        <button class='dismiss-btn' underlined>Dismiss</button>
    </div>
    ${moreLegalInformation}
</div>
`;

//now, let us create our custom element

class LegalBanner extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // for the optional fixed attribute
    if (this.getAttribute("fixed") !== null)
      this.shadowRoot.querySelector(".dismiss-btn").style.display = "none";
    // for the optional size attribute
    if (this.getAttribute("size") === "big") {
      this.shadowRoot.querySelector(".title").style.display = "block";
      this.shadowRoot.querySelector(".learn-more-btn").style.display = "none";
      this.shadowRoot.querySelector(".more-info").style.display = "block";
    }
  }
  destroyBanner() {
    this.shadowRoot.querySelector(".container").style.display = "none";
  }
  toggleMoreLegalInfo() {
    const moreInfo = this.shadowRoot.querySelector(".more-info");
    const learnMoreBtn = this.shadowRoot.querySelector(".learn-more-btn");
    if (moreInfo.style.display === "block") {
      moreInfo.style.display = "none";
      learnMoreBtn.textContent = "Learn more";
    } else {
      moreInfo.style.display = "block";
      learnMoreBtn.textContent = "Collapse";
    }
  }

  //fires on insert to DOM
  connectedCallback() {
    this.shadowRoot
      .querySelector(".dismiss-btn")
      .addEventListener("click", () => this.destroyBanner());
    this.shadowRoot
      .querySelector(".learn-more-btn")
      .addEventListener("click", () => this.toggleMoreLegalInfo());
  }

  //clean after removal from DOM
  disconnectedCallback() {
    this.shadowRoot.querySelector(".dismiss-btn").removeEventListener();
    this.shadowRoot.querySelector(".learn-more-btn").remove();
  }
}

// now we have to bind the class to our new html tag
window.customElements.define("legal-banner", LegalBanner);
