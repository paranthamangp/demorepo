trigger AccountTrigger on Account (before insert,After Insert,before update,after update) {

    if(Trigger.isbefore)
    {
        if(Trigger.isinsert)
        {
            AccountTriggerHelper.BeforeInsertLogic(Trigger.new);
        }
        if(Trigger.isupdate)
        {
            //Before Update Logic
        }
    }
    if(Trigger.isafter)
    {
        if(Trigger.isinsert)
        {
            AccountTriggerHelper.afterInsertLogic(Trigger.new);
        }
        if(Trigger.isupdate)
        {
            //After Update Logic
        }
    }
    
    

}