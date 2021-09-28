import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'drop-button',
  styleUrl: 'drop-button.scss',
  shadow: true,
})
export class DropButton {
  @Prop() name: string;

  render() {
    return (
      <div>
        <div class="dropdown">
          <button class="dropbtn">{this.name} &#8595;</button>
          <div class="dropdown-content">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
