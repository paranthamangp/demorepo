public class RestDemoClass {
    
        Http http = new Http();
        HttpRequest request = new HttpRequest();

    	
    public void RestDemoMethod(){
 
            request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
            request.setMethod('GET');
            //request.setHeader('Content-Type', 'application/json;charset=UTF-8');
            // Set the body as a JSON object
            request.setBody('{"name":"mighty moose"}');
            HttpResponse response = http.send(request);
            // Parse the JSON response
            if (response.getStatusCode() != 201) {
                System.debug('The status code returned was not expected: ' +
                    response.getStatusCode() + ' ' + response.getStatus()); 
                 System.debug(response.getBody());
                
            } else {
                System.debug(response.getBody());
                
                Map<String, Object> results = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
                List<Object> animals = (List<Object>) results.get('animals');
                for(Object accObj: animals){
				system.debug('accObj:'+accObj);}
            }

    }
}