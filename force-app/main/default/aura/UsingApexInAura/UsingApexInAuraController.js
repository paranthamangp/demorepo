({
	show : function(component, event, helper) {
		  //Getting the employee name from APEX Controller method (Callme)
        var empNameAction=component.get("c.callme");
        
        //Asynchronous call
        $A.enqueueAction(empNameAction);


        //Invoking the apex method
          empNameAction.setCallback(this,function(response){
              console.log('Method was invoked');
              //We don’t know whether the apex code was run succesfully or not. So to check the current state.
              var state=response.getState();
              if(state==='SUCCESS'){
                  console.log('Success: APEX code execution was succesfull')
                  //Set the value to output
                  var result=response.getReturnValue();
                  component.set("v.empName",result);
              }else{
                  if(state==='ERROR'){
                      console.log('Fail: APEX code execution have failed')   
                  }
              }
          });
      
	}
})