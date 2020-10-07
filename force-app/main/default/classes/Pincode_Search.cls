public class Pincode_Search {

    public String pincode {set;get;}
    public List<String> places  {set;get;}
    
    
    public void getDetails(){
        Http p=new Http();
        HttpRequest request=new HttpRequest();
        request.setEndPoint('http://postalpincode.in/api/pincode/'+pincode);
        request.setMethod('GET');
        HttpResponse response=p.send(request);
        String result=response.getBody();
        places=new List<String>();
        System.JSONParser jp=JSON.createParser(result);
        while(jp.nextToken()!=null){
            if(jp.getText()=='Name'){
                jp.nextToken();
                places.add(jp.getText());
            }
        }
    
}
}