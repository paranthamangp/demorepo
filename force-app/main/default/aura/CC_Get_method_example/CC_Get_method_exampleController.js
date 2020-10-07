({
	SumFunction : function(component, event, helper) {
		
        var a=component.get("v.avalue");
        var b=component.get("v.bvalue");
        var sum=a+b;
        component.set("v.sumresult",sum);
        
	}
})