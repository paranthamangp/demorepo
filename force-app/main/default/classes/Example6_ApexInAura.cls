public with sharing class Example6_ApexInAura {
    @AuraEnabled
    public static string Callme(){
        String Name= 'Paranthaman';
        return Name;
    }

}