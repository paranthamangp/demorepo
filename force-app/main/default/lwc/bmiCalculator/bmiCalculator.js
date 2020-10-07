import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';

    weight;
    height;
    @track bmi;

    onWeightChange(event){
        this.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        try{
        this.bmi = this.weight/(this.height*this.height);
        console.log('BMI was calcualted succesfully. BMI is : ' +this.bmi);
        } catch(error){
            this.bmi = undefined;
            console.log('Error in BMI calculation : Undefined ');
        }}

    get displayBmi(){

        if(this.bmi===undefined){
            return "";
        }else{
          return `Your BMI is: ${this.bmi}`; 
        }        
        }
        }