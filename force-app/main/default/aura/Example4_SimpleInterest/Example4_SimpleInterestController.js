({
	calculate : function(component, event, helper) {
		var amount=component.get("v.amount");
        var rate=component.get("v.rate");
        var years=component.get("v.years");
        var interest=(amount*years*rate)/100;
        component.set("v.interest",interest);      
	},
    
    resetData : function(component, event, helper) {
        component.set("v.amount",''); 
        component.set("v.rate",'');  
        component.set("v.years",'');  
        component.set("v.interest",'');  
        
	}
})