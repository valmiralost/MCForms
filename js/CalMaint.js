var JQ = jQuery.noConflict();
var gSelected=jQ("#mastercontrol\\.route\\.stepusers\\.step2 option:selected").map(function(){ return this.value }).get();


var mcURL = JQ('#txtMCURL').val();
var calURL = mcURL + '/Main/NOC/library/image.cfm?file=calendar.jpg';

JQ(function(){

    
});

function startup(){

	    JQ("#mastercontrol\\.dataset\\.recordids\\.EquipmentMaster").change(function(){
        JQ("#mastercontrol\\.dataset\\.show\\.EquipmentMaster").click();
      });

      jQ("#btnLaunchNCR").click(function () {
        mapSourceFields();
        selectRouteLaunched("NCR", "mastercontrol.task.routes");
        jQ("#mastercontrol\\.task\\.launch").click();  
        ncrRequired();               
    });

   jQ("#mastercontrol\\.role\\.ComplaintInvestigators").change(function(){   
    var selectedValue = jQ("#mastercontrol\\.role\\.ComplaintInvestigators").val();
    var trimmedValue = trimUserID(selectedValue);
    if (selectedValue != ""){
        if(jQ.inArray(trimmedValue, gSelected) == -1 ) {
            var currentSelected = gSelected.slice();
            currentSelected.push(trimmedValue);
            jQ('#mastercontrol\\.route\\.stepusers\\.step2').val(currentSelected);
        } else {
            jQ('#mastercontrol\\.route\\.stepusers\\.step2').val(gSelected);
        }

    } else {
        jQ('#mastercontrol\\.route\\.stepusers\\.step2').val(gSelected);
    }

        });


      ncrRequired();
}
function mapSourceFields(){

}/* END source fields for Form to Form Data */

/* Additional Action Required Functionality */
function ncrRequired(){
    var oListFormNos = document.getElementById("mastercontrol.links.NCR");
    var oViewButton = document.getElementById("mastercontrol.links.view.NCR");
    var oLaunchbutton = document.getElementById("btnLaunchNCR"); 
    var valueField = document.getElementById("txtNCRNumber");   
//need to find view only status and check for it
    if(oListFormNos.length != 0)
    {
        jQ(oViewButton).show(); 
        jQ(oLaunchbutton).hide(); 
         if(valueField.value == "") {
            valueField.value = GetLaunchedFormNo(1); 
        }
    } else{
      jQ(oViewButton).hide();
    }
}/*END  Additional Action Required Functionality */

function GetLaunchedFormNo(vform)
{
    if(vform == 1){
        var oListFormNos = document.getElementById("mastercontrol.links.NCR");
    } else if(vform == 2){
        var oListFormNos = document.getElementById("mastercontrol.links.NCR");
    } else{
        alert("cannot locate form link");
        return "issue locating links select";
    }
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