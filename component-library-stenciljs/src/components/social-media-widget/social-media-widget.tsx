import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "social-media-widget",
  styleUrl: "social-media-widget.css",
  shadow: true,
})

// ToDo
export class SocialMediaWidget implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="facebook">
          <a href="www.facebook.com">Go to facebook</a>
        </div>
        <div>
          <a href="www.twitter.com">Go to twitter</a>
        </div>
      </Host>
    );
  }
}
