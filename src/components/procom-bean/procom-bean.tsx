import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'procom-bean',
  styleUrl: 'procom-bean.scss',
  shadow: true,
})
export class ProcomBean {
  @Prop() name?: string = 'Procom Bean';
  @Prop() itemId: number;
  @Prop() variation?: 'light' | 'dark' = 'dark';
  @Event() removeBean: EventEmitter<any>;

  handleClose(e) {
    e.preventDefault();
    this.removeBean.emit(this.itemId);
  }

  render() {
    const handleClose = e => this.handleClose(e);
    return (
      <div>
        <div class={`procom-bean ${this.variation}`}>
          <span class="name">{this.name}</span>
          <span class="close-bean" onClick={handleClose}>
            X
          </span>
        </div>
      </div>
    );
  }
}
