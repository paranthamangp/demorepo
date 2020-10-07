import {LightningElement, wire} from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SiblingOne extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    dataToPassToSibling = {
        description : 'This is the updated value:',
        value : 100
    };

    fireEvent(){
        fireEvent(this.pageRef, 'siblingEvent', this.dataToPassToSibling);
    }

    sendNewDataEvent(){
        this.dataToPassToSibling.value = this.dataToPassToSibling.value + 1;
        this.fireEvent();
    }
}