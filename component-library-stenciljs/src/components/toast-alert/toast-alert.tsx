import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'toast-alert',
  styleUrl: 'toast-alert.css',
  shadow: true,
})
export class ToastAlert implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
