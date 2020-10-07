({
	CalculateInterest : function(component, event, helper) {
		
        var amount=component.get("v.Amount");
        var rate=component.get("v.Rate");
        var years=component.get("v.Years");
        
        var interest=(amount*rate*years);
        component.set("v.Interest",interest);
        
	}
})