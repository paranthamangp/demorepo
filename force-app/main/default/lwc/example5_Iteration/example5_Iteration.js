import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {


    @track cityList = ['Jaipur', 'Bangluru', 'Hyderabad', 'Mumbai'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }

}