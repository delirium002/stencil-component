import { Component, Prop, State, Event,EventEmitter, h, Listen } from '@stencil/core';

@Component({
  tag: 'procom-multiselect',
  styleUrl: 'procom-multiselect.scss',
  shadow: true,
})
export class ProcomMultiSelect {
  @Prop() name: string;
  @Prop() defaultPressed: boolean = false;
  @Prop() pressedText: string = "ON";
  @Prop() unpressedText: string = "OFF";
  @Prop() options: string;

  @State() pressed: boolean = this.defaultPressed;
  @State() _options: Array<any>;
  @State() clickedItem: string = '';
  @State() selected: Array<any> = [];
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
  handleOnClick(e) {
    e.preventDefault();
    console.log('clicked button')
  };

  handleDropdownItemClick(e) {
    e.preventDefault();
    this.clickedItem = e.target.innerHTML
    console.log('clicked dropdown', this.selected);
    this.clickedDropdownItem.emit(this.clickedItem);
  };

  @Listen('clickedDropdownItem', {target:'body'})
  onClickedDropdownItemHandler(event:CustomEvent<string>){
    console.log('DD Clicked', event);
    this.selected.push(event.detail);
  }

  @Listen('removeBean', {target:'body'})
  onRemoveBean(event:CustomEvent<string>){
    console.log('Remove Bean Clicked', event.detail);
    //this.selected.push(event.detail);
    let arr = this.selected;
    arr = arr.filter(e => e !== event.detail);
    this.selected = arr;
  }


  render() {
    console.log(this.options);
    const handleDropdownItemClick = (e) => this.handleDropdownItemClick(e);
    
    return (
      <div>
        <div class="dropdown">
          <button class="dropbtn">
            Click Here 
          </button>
          <div class="dropdown-content">
            {' '}
            {this._options?.map(e => (
              <span onClick={handleDropdownItemClick}>{e.text}</span>
            ))}{' '}
          </div>
        </div>
        <div class='bean-list'>
          {this.selected.map((e) => (
            <procom-bean name={e}/>
          ))}
        </div>
      </div>
    );
  }

}
