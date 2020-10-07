import { LightningElement, track } from 'lwc';

export default class ldsBaseComponent extends LightningElement {

    @track recordId;
    successHandler(event){
        this.recordId = event.detail.id;
    }
}