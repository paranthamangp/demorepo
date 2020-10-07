({
	call : function(component, event, helper) {
		var action=component.get("c.getAccountData");
        action.setCallback(this,function(response){
            
            var state=response.getState();
            if(state ==='SUCCESS'){
              var result=response.getReturnValue();
              console.log(result);
              component.set("v.accounts",result)
                
            }else{
                console.log('Error');
            }
         
        });
        
        $A.enqueueAction(action);
	}
})