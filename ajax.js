(function(global){

   var ajaxobj={};
   function getRequestObject(){
       if(window.XMLHttpRequest){
           return(new XMLHttpRequest());
       }else if(window.ActiveXObject){
           return (new ActiveXObject("Microsoft.XMLHTTP"));
       }
       else{
          global.alert('ajax does not supported!');
          return(null);
       }

   }
   ajaxobj.sendGetRequest= function (requestUrl,responseHandler,isJsonResponse){
      var request=getRequestObject();
       request.onreadystatechange= function(){
           handleResponse(request,responseHandler,isJsonResponse);
       };
       request.open('GET',requestUrl,true);
       request.send(null);

   };
  function handleResponse(request,responseHandler,isJsonResponse){
     if((request.readystate==4 )&& (request.status==200)){
         if(isJsonResponse== undefined){
             isJsonResponse=true;
         }
         if(isJsonResponse){
             responseHandler(JSON.parse(request.responseText));
         }
         else{
             responseHandler(request.responseText);
         }
       }

    }
    global.$ajaxobj= ajaxobj;

}
)(window)