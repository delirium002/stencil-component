import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-bean',
  styleUrl: 'bean.scss',
  shadow: true,
})
export class Bean {
  @Prop() first: string;

  @Prop() second: string;

  @Prop() third: string;

  @Prop() forth: string;

  @Prop() opt: string[];

  private getText(): string[] {
    return format(this.first, this.second, this.third, this.forth);
  }

  render() {
    let options = this.getText();
    let e;
    const removeItem = name => {
      options.splice(
        options.findIndex(e => e === name),
        1,
      );

      e = options;
      console.log(options);
    };

    return (
      <div class="bean">
        {this.getText().map(e => (
          <button class="btn">
            {e} <span onClick={() => removeItem(e)}>x</span>
          </button>
        ))}
      </div>
    );
  }
}
