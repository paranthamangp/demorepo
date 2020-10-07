@RestResource(urlmapping='/showaccountdetails/*')

global class showaccount
    
    {
    
    @HttpGet
    global static List<Account> getaccount()
    
        {
        
            List<Account> lst;
                try
                   {
                   lst = [select name,phone from Account];
                   return lst;
                   }
                catch(Exception ex)
                
                    {
                    system.debug('Error'+ex.getmessage());
                    }   
            return lst;        
        }
    
    
    }