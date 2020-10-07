({
	show : function(component, event, helper) {
        
        var salary=0;
        var empName=component.get("v.name");
        console.log('Employee Name : ' +empName );
        var exp=component.get("v.exp");
        console.log('Exp : ' +exp);
        
        //logic for salary calculation
        if(exp>5){
            salary=50000;
        }else{
            salary=30000;
        }
        
    
        console.log('Salary : '+salary);
        component.set("v.salary",salary);
		
	}
})