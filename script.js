
document.addEventListener('DOMContentLoaded',function(){

document.querySelector("button").addEventListener("click",function(){

     $ajaxobj.sendGetRequest("./name.json",function(res){
         console.log(res);
         var message =res.firstName +" "+res.lastName;
         if(res.likeChineesFood){
             message+="like chinees food ";
         }else{
             message+=" does not like chinees food";
         }
         message+="she codes with";
         message+=res.numberOfDisplays;
         message+= "displays";


          document.querySelector("#content").innerHTML=message;

     })

})
})