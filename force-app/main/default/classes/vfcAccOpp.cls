public with sharing class vfcAccOpp {
    public List<Account> getAcc() {
        List<Account> myAcc = [SELECT Id, Name, owner.name FROM Account];
        Return myAcc;
        }
    public List<Opportunity> getOpp() {
        List<Opportunity> myOpp = [SELECT Id, Name, owner.name FROM
        Opportunity];
        Return myOpp;
    }
}