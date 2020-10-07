public with sharing class OppManagerForAura {
    public OppManagerForAura() {

    }

    @AuraEnabled
    public static List<Opportunity> fetchOpps(){
        List<Opportunity> opps =[Select Name,stageName,closeDate,Amount from Opportunity limit 5];
        return opps;
        
    }
}