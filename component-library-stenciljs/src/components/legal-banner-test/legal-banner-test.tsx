import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'legal-banner-test',
  styleUrl: 'legal-banner-test.css',
  shadow: true,
})
export class LegalBannerTest implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
