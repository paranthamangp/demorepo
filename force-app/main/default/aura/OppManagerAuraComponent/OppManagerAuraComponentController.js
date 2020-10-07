({
    invoke : function(component, event, helper) {

        var action=component.get("c.fetchOpps");
        action.setCallback(this,function(response){

            var state=response.getState();
            if(state==='SUCCESS'){
                component.set("v.opplist",response.getReturnValue());
            }
            else{
                console.log('Error');
            }
        }
        );
        $A.enqueueAction(action);   
    }
})