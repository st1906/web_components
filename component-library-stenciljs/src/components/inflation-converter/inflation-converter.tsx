import { Component, ComponentInterface, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'inflation-converter',
  styleUrl: 'inflation-converter.css',
  shadow: true,
})
export class InflationConverter implements ComponentInterface {
  @Prop() moneyValue: number = 0;
  @Prop() startDate: string = "2010/1/1"
  @State() inflatedValue: number = 0;

  getInflationRate = async () => {
    const todaysDate = new Date();
    const endDate = `${todaysDate.getFullYear()}/${todaysDate.getMonth()}/${todaysDate.getDate()}`
    const resposne = await fetch(`https://www.statbureau.org/calculate-inflation-price-json?country=united-states&start=${this.startDate}&end=${endDate}&amount=${this.moneyValue}`);
    const result = await resposne.json();
    this.inflatedValue = result;
  }

  componentWillLoad(){
    this.getInflationRate()
  }
  render() {
    return (
      <Host>
        <div class="tooltip">{this.moneyValue} $
          <span class="tooltiptext">{this.inflatedValue}</span>
        </div>
      </Host>
    );
  }

}
