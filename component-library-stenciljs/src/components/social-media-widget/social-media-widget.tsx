import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "social-media-widget",
  styleUrl: "social-media-widget.css",
  shadow: true,
})

export class SocialMediaWidget implements ComponentInterface {

  @Prop() facebookLink: string = 'https://www.facebook.com/';
  @Prop() twitterLink: string = 'https://www.twitter.com/';
  @Prop() youtubeLink: string = 'https://www.youtube.com/';

  render() {
    return (
      <Host>
        <div class="facebook">
          <a href={this.facebookLink}>Go to Facebook</a>
        </div>
        <div class="twitter">
          <a href={this.twitterLink}>Go to Twitter</a>
        </div>
        <div class="youtube">
          <a href={this.youtubeLink}>Go to YouTube</a>
        </div>
      </Host>
    );
  }
}
