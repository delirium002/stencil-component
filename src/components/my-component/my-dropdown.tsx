import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.scss',
  shadow: true,
})
export class MyComponent {
  @Prop() name: string;

  @Prop() first: string;

  @Prop() second: string;

  @Prop() third: string;

  @Prop() forth: string;

  render() {
    let options = [this.first, this.second, this.third, this.forth];

    return (
      <div>
        <div class="dropdown">
          <button class="dropbtn">{this.name} &#8595;</button>
          <div class="dropdown-content">
            {options.map(e => (
              <option>{e}</option>
            ))}
          </div>
        </div>
        <my-bean first={this.first} second={this.second} third={this.third} forth={this.forth}></my-bean>
      </div>
    );
  }
}
