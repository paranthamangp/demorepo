public with sharing class Aura_Example9_Controller {
    public Aura_Example9_Controller() {

    }
    @AuraEnabled
    public static List<Opportunity> fetchOpps(String stageinput){
        List<Opportunity> opps =[Select Name,stageName,closeDate,Amount from Opportunity where stageName=:stageinput limit 5];
        return opps;
        
    }

}