import { Component, Prop, State, h } from '@stencil/core';
import { withHooks, useState } from '@saasquatch/stencil-hooks';

@Component({
  tag: 'dropdown-select',
  styleUrl: 'dropdown-select.scss',
  shadow: true,
})
export class DropDownSelect {
  constructor() {
    withHooks(this);
  }

  @Prop() name: string;
  @Prop() options: string;

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
    const [beanOptions, setBeanOptions] = useState([]);

    const selectWord = name => {
      beanOptions.push(name);
      setBeanOptions(beanOptions);
    };

    const removeWord = name => {
      beanOptions.splice(
        beanOptions.findIndex(e => e === name),
        1,
      );
      setBeanOptions(beanOptions);
    };

    return (
      <div>
        <div class="dropdown">
          <button class="dropbtn">{this.name} &#8595;</button>
          <div class="dropdown-content">
            {this._options.map(e => (
              <span onClick={() => selectWord(e.text)}>{e.text}</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          {beanOptions.map(e => (
            <button class="btn">
              {e}{' '}
              <span class="cross" onClick={() => removeWord(e)}>
                x
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  disconnectedCallback() {
    // required for `useEffect` cleanups to run
  }
}
