import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'procom-multiselect',
  styleUrl: 'procom-multiselect.scss',
  shadow: true,
})
export class ProcomMultiSelect {

  @Prop() defaultPressed: boolean = false;
  @Prop() pressedText: string = "ON";
  @Prop() unpressedText: string = "OFF";
  @Prop() options: string;

  @State() pressed: boolean = this.defaultPressed;
  @State() _options: Array<any>;

  arrayDataWatcher(options) {
    if (typeof options === 'string') {
      this._options = JSON.parse(options);
    } else {
      this._options = options;
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.options);
  }

  render() {
    console.log(this.options);

    return (
      <div>
        <button 
          class='button button-primary'
          onClick={() => this.pressed = !this.pressed}
        >   
        {this.pressed ? this.pressedText : this.unpressedText}
        </button>
      </div>
    );
  }

  disconnectedCallback() {
    // required for `useEffect` cleanups to run
  }
}
