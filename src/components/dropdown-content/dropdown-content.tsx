import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dropdown-content',
  styleUrl: 'dropdown-content.scss',
  shadow: true,
})
export class DropdownContent {
  @Prop() name: string;
  @Prop() bg: string;
  @Prop() color: string;

  render() {
    return (
      <div class="dropdown-content">
        <div style={{ color: this.color ? this.color : 'black', background: this.bg ? this.bg : '#f9f8f9' }}>{this.name}</div>
      </div>
    );
  }
}
