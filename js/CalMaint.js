var JQ = jQuery.noConflict();





var mcURL = JQ('#txtMCURL').val();
var calURL = mcURL + '/Main/NOC/library/image.cfm?file=calendar.jpg';




JQ(function(){
    //event handlers




    
   JQ("#mastercontrol\\.dataset\\.recordids\\.EquipmentMaster").change(function()
   {
       JQ("#mastercontrol\\.dataset\\.show\\.EquipmentMaster").click();
    
   
});




    JQ(".DateField").datepicker({    //this add the calander functionlaity 
   showOn: "button",
   //buttonImage: "images/calendar.jpg",
   buttonImage: calURL,
   buttonImageOnly: true,
   dateFormat: "dd M yy",
   beforeShowDay: JQ.datepicker.noWeekends
  });
  
  JQ("#mastercontrol\\.task\\.mapped\\.launch\\.NCMR").mousedown(function()
{
    SelectRouteLaunched()
});
  
  
 if(JQ("#Ncmrlaunch").val() == "1")
     {
       var formnum = GetLaunchedFormNo();
      if( JQ("#txtNonconformanceReference").val() =="")
          {
              JQ("#txtNonconformanceReference").val(formnum);
          }
          
          JQ("#LaunchNONC").hide();
          JQ("#ViewNONC").show();
     }
     
     if(JQ("#firstrun").val() =="")
         {
           JQ("#firstrun").val("1"); 
          var fuser = JQ("#mastercontrol\\.user\\.fname").val() + " " +JQ("#mastercontrol\\.user\\.lname").val();
          JQ("#txtTechName").val(fuser);
              
           
         }
  
  
    
});


 function SelectRouteLaunched()
{
    var oListRoute =  document.getElementById("mastercontrol.task.mapped.routes.NCMR");
   	var itemFace;
	var i;
	
	for (i=0; i<oListRoute.length; i++)
	{
		itemFace = oListRoute[i].text;
		if (itemFace.toLowerCase()=== "ncmr")
		{
    	    oListRoute.selectedIndex = i;
            JQ("#Ncmrlaunch").val("1");
		    break;   
        }
	}
		 	
}

function GetLaunchedFormNo()
{
    var oListFormNos = document.getElementById("mastercontrol.links.NCMR"); 

	if(oListFormNos.length != 0)
	{
		var sLastFormNum;
		var nRevIndex;
		var arry = new Array();
		var i;
		
		for (i=0; i<oListFormNos.length;i++)
		{
			var itemFace = oListFormNos[i].value;
			arry[i] = itemFace;
		}  
		arry.sort();
		
		sLastFormNum = arry[arry.length-1];
		nRevIndex = sLastFormNum.toLowerCase().indexOf(new String("Rev").toLowerCase());
		if (nRevIndex>-1)
		sLastFormNum = sLastFormNum.substr(0, nRevIndex-1);
		
		return sLastFormNum;
	}
	else
	{
		return "";
	}
	
}