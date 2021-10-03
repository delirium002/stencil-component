import { Component, Prop, State, Event, EventEmitter, h, Listen } from '@stencil/core';

@Component({
  tag: 'procom-multiselect',
  styleUrl: 'procom-multiselect.scss',
  shadow: true,
})
export class ProcomMultiSelect {
  @Prop() name: string = 'Procom Multi-select';
  @Prop() options: string = `[
    {"text":"Coffee", "isSelected":"false"},
    {"text":"Bagels", "isSelected":"false"},
    {"text":"Toast", "isSelected":"false"},
    {"text":"Eggs", "isSelected":"false"},
    {"text":"Avocado", "isSelected":"false"}
  ]`;
  @Prop() variation?: 'light' | 'dark' = 'dark';
  @State() pressed: boolean = false;
  @State() _options: Array<any>;
  @State() clickedItem: string = '';
  @Event() clickedDropdownItem: EventEmitter<any>;

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

  handleDropdownItemClick(e) {
    e.preventDefault();
    this.clickedItem = e.target.innerHTML;
    const itemId = e.target.getAttribute('attr-id');
    const itemName = e.target.innerHTML;
    const isActive = e.target.getAttribute('attr-selected');
    isActive == 'false' && this.clickedDropdownItem.emit({ itemId, itemName });
  }

  @Listen('clickedDropdownItem', { target: 'body' })
  onClickedDropdownItemHandler(event: CustomEvent<any>) {
    const { itemId, itemName } = event.detail;
    this._options[itemId].isSelected = 'true';
    this.pressed = !this.pressed;
    // console.log('DD Clicked', itemId, itemName, this._options);
  }

  @Listen('removeBean', { target: 'body' })
  onRemoveBean(event: CustomEvent<string>) {
    // console.log('Remove Bean Clicked', event.detail);
    const itemId = event.detail;
    this._options[itemId].isSelected = 'false';
    this.pressed = !this.pressed;
  }

  render() {
    // console.log('options', this._options);
    const handleDropdownItemClick = e => this.handleDropdownItemClick(e);
    return (
      <div class="procom-container">
        <div class="dropdown">
          <button class="dropbtn">
            {this.name} <div class="arrow-down"></div>
          </button>
          <div class="dropdown-content">
            {this._options?.map((e, index) => (
              <span class={e.isSelected == 'true' ? 'active' : 'inactive'} attr-id={index} attr-selected={e.isSelected} onClick={handleDropdownItemClick}>
                {e.text}
              </span>
            ))}
          </div>
        </div>
        <div class="bean-list">
          {this._options?.map((e, index) => {
            if (e.isSelected == 'true') return <procom-bean variation={this.variation} name={e.text} itemId={index} />;
          })}
        </div>
      </div>
    );
  }
}
