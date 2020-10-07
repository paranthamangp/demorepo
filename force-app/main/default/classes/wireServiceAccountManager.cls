public with sharing class wireServiceAccountManager {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){

        return [SELECT Id, Name, Phone FROM Account Limit 5];
        
    }
}