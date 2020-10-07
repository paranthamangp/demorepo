import { LightningElement,track } from 'lwc';

export default class Example1_BMICalculator_track extends LightningElement {

    cardTitle = 'BMI Calculator';


    @track bmiData = {
        weight : 0,
        height : 0,
        result : 0
    }

    onWeightChange(event){
        this.bmiData.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.bmiData.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        try{
        this.bmiData.result = this.bmiData.weight/(this.bmiData.height*this.bmiData.height);
        console.log('BMI was calcualted succesfully. BMI is : ' +this.bmiData.result);
        } catch(error){
          
            console.log('Error in BMI calculation : Undefined ');
        }
    }
}