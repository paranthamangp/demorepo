// eventSimple.js
import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {
    page = 1;

    previousHandler() {
        console.log("Previous Event was recieved in parent");
        if (this.page > 1) {
            this.page = this.page - 1;
        }
    }

    nextHandler() {
        console.log("Next Event was recieved in parent");
        this.page = this.page + 1;
    }
}