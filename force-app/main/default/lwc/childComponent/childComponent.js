import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api childRecord;

    @api showRoomInfo= false;

}