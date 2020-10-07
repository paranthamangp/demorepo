({
    invoke : function(component, event, helper) {

        var stage=component.find("sname").get("v.value");
        var action=component.get("c.fetchOpps");
        action.setParams({"stageinput":stage});
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