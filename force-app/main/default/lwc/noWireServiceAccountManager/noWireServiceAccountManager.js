import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/wireServiceAccountManagerNC.getAccount'

export default class NoWireServiceAccountManager extends LightningElement {

    @track numberOfRecords;
    @track accounts;

    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accounts = response;
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
        })
    }

    
    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    




}