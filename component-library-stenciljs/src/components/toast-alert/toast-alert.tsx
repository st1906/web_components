import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "toast-alert",
  styleUrl: "toast-alert.css",
  shadow: true,
})
export class ToastAlert implements ComponentInterface {
  @Prop() alertTitle: string = "Alert title";
  @Prop() alertDescription: string = "Alert description";
  @Prop() isActive: boolean = false;

  handleClose = () => this.isActive = false;
  // ToDo: Some css modal stuff to fix
  render() {
    return (
      <Host style={{display: this.isActive ? 'block' : 'none'}}>
        <div class="container">
          <div class="alert-container">
            <span><h3 class="alert-title">{this.alertTitle}</h3><button onClick={this.handleClose}>X</button></span>
            <p class="alert-description">{this.alertDescription}</p>
          </div>
        </div>
      </Host>
    );
  }
}
