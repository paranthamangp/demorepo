public class WeatherOfCity {

            Http http=new Http();        
            HttpRequest request=new HttpRequest();        
            HttpResponse response=new HttpResponse();            
                       
        
            public Double getWeatherInfo(String city){
                
                String url='http://api.openweathermap.org/data/2.5/weather?APPID=093e4e73ac0663b78978a27ea82e4a62&units=metric';
                url +='&q='+City;
                               
                system.debug(url);
                request.setMethod('GET');
                request.setEndpoint(url);
            
               // request.setHeader('content-type', 'application/xml');
                response=http.send(request);
                
                Double temprature;
                if(response.getStatusCode() == 200 ){         
                    
                    System.debug('API Call was successfull');
                    system.debug('Weather INformation of City '+city);
                    
                  	//JSOn Deserialise method
                    Map<String, Object> result= (Map<String,Object>)JSON.deserializeUntyped(response.getBody());
                    Set<String> keys1= result.keySet();  
                 
                    
              		//Print Key ,Value Pair
              		/* 
                    for(String obj:keys1){                    
                        System.debug(obj+'>>'+result.get(obj));
                    }
                    */
               
              
                  
                     Map<String, Object> temp=(Map<String, Object>)  result.get('main');
                    Set<String> keys=temp.keySet();
 				

                       
                    for(String obj:keys){                    
                        System.debug(obj+'>>'+temp.get(obj));
                    }
                   
                
                    
                    
                    temprature = (Double)temp.get('temp');
                    system.debug('temprature '+temprature);
                    system.debug('pressure >> ' + temp.get('pressure')+' humidity >> '+temp.get('humidity'));
                  
            }
            
            return temprature;

        }
            }