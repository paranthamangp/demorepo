import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/wireServiceAccountManager.getAccount'

export default class WireServiceAccountManager extends LightningElement {

    @wire(getAllAccounts)
    accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }


}