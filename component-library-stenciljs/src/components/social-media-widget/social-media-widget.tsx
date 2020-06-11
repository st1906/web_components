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
        <div class="facebookIcon">
          <a></a>
        </div>
      </Host>
    );
  }
}
