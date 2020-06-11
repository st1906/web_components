import { Component, ComponentInterface, Host, h, Prop, State } from "@stencil/core";

@Component({
  tag: "legal-banner",
  styleUrl: "legal-banner.css",
  shadow: true,
})
export class LegalBanner implements ComponentInterface {
  @Prop() title: string = "Title for the legal banner"
  @Prop() text: string = "The text of my legal banner"
  @Prop() type : 'big' | 'small' | 'embedded' = 'small'

  @State() dismissed: boolean = false

  handleDismiss = () => {
    this.dismissed = true;
  }
  handleLearnMore = () => {
    window.open('https://policies.google.com/privacy?hl=en-US', '_blank')
  }

  render() {
    return (
      <Host style={{display: this.dismissed ? 'none': 'flex'}}>
        <div class='container'>
          <div class="text-container">
            <h3>{this.title}</h3>
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
