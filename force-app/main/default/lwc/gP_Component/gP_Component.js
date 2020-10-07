import { LightningElement } from 'lwc';
export default class GP_Component extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}