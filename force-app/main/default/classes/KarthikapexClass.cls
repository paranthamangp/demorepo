public with sharing class KarthikapexClass {
    @AuraEnabled
    public static List<Account> getAllActiveAccounts() {
      return [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'No'];
    }
}