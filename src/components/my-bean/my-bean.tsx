import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-bean',
  styleUrl: 'my-bean.scss',
  shadow: true,
})
export class MyBean {
  @Prop() name: string;
  @Prop() height: string;
  @Prop() bg: string;
  @Prop() color: string;

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.bg ? this.bg : '', minHeight: this.height ? this.height : '30px', color: this.color ? this.color : '' }} class="btn">
          {this.name} <span>x</span>
        </button>
      </div>
    );
  }
}
