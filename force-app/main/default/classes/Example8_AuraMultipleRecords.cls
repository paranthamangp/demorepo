public class Example8_AuraMultipleRecords {
    
    @AuraEnabled
    public static List<Account> getAccountData(){
        
        List<account> accounts=[Select id,Name,Phone,Industry from Account limit 30];
        return accounts;
    }

}