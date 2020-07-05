import { Component, ComponentInterface, Host, h, Prop, State } from "@stencil/core"

@Component({
  tag: "legal-banner",
  styleUrl: "legal-banner.css",
  shadow: true,
})
export class LegalBanner implements ComponentInterface {
  @Prop() bannerTitle: string = "Title for the legal banner"
  @Prop() text: string = "The text of my legal banner"
  @Prop() type : 'big' | 'small' | 'embedded' = 'small'
  @Prop() policypageLink : string = 'https://policies.google.com/privacy?hl=en-US'

  @State() dismissed: boolean = false

  handleDismiss = () => {
    this.dismissed = true
  }
  handleLearnMore = () => {
    window.open(this.policypageLink, '_blank')
  }

  render() {
    return (
      <Host style={{display: this.dismissed ? 'none': 'flex'}}>
        <div class='container'>
          <div class="text-container">
            <h3>{this.bannerTitle}</h3>
            {this.type=== "big" && <p>{this.text}</p>}
          </div>
          {this.type!=='embedded' &&
          <div class="actions-container">
            <button onClick={this.handleDismiss}>Dismiss</button>
            <button onClick={this.handleLearnMore}>Learn more</button>
          </div>}
        </div>
      </Host>
    );
  }
}

