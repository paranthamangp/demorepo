public with sharing class ExpensesController {
    // STERN LECTURE ABOUT WHAT'S MISSING HERE COMING SOON
    @AuraEnabled
    public static List<Account> getExpenses() {
        return [SELECT Id, Name
                FROM Account];
    }
}