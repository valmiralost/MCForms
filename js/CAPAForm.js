/* CAPA.js */
/* Global Vars */
    var stepId  =  document.getElementById("mastercontrol.route.stepid").value*1;
    var stepNumber =  document.getElementById("mastercontrol.route.stepnumber").value*1;
    var sFormStatus= document.getElementById("mastercontrol.hidden.event").value;  /*viewOnly*/
    var gSelected=jQ("#mastercontrol\\.route\\.stepusers\\.step2 option:selected").map(function(){ return this.value }).get();
/* Hide fields on start and other functions */
function formStart(){   
        /* Add events to fields */
    jQ('input[type=radio][name=rbSeverityRisk]').click(function() {
        calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk');
    });
    jQ('input[type=radio][name=rbRecurrenceRisk]').click(function() {
        calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk');
    }); 
    jQ("#mastercontrol\\.role\\.CAPAInvestigators").change(function(){           
        var selectedValue = jQ("#mastercontrol\\.role\\.CAPAInvestigators").val();
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
    ///////Fields show/hide to start //////////

   ////////Functions to set values and display ////////////

    calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk');
    var stype = document.getElementById("txtSourceType");
    var snum = document.getElementById("mastercontrol.task.parentformid");
    var stitle = document.getElementById("txtSourceTitle");
    if (stepNumber ==1 && snum.value == ""){
      stype.value = "N/A";
      snum.value = "N/A";
      stitle.value = "N/A";
    }
    if (stype == "N/A"){
        document.getElementById("mastercontrol.links.view.source").disabled = true;
    }
}/* END Hide fields on start  */


/* Enable and Disable fields in a class */
function radioEnableDisableClass(enableClass,disableClass)
{
    if (enableClass != false) {
        var enableArray = document.getElementsByClassName(enableClass);
        for(i = 0; i < enableArray.length; i++) {
            jQ(enableArray[i]).removeClass('readonly');
            jQ(enableArray[i]).prop('readonly', false);
            jQ(enableArray[i]).val('');
             if(jQ(enableArray[i]).is("select")) {
                jQ(enableArray[i]).removeAttr('disabled');
            }
        }
    }
    if (disableClass != false) {
        var disableArray = document.getElementsByClassName(disableClass);
         for(i = 0; i < disableArray.length; i++) {
            jQ(disableArray[i]).addClass('readonly');
            
            jQ(disableArray[i]).val('');
            if(jQ(disableArray[i]).is("select")) {
                jQ(disableArray[i]).attr("disabled", "disabled");
            } else  {
               jQ(disableArray[i]).prop('readonly', true);
            }
        }  
    } 
}/* END Enable and Disable fields in a class */
 
 function addUsersToRouteStepListByClass(vclass)  {
    var divArray = document.getElementsByClassName(vclass);
    var valArray = new Array();
    
   for(i = 0; i < divArray.length; i++) {
        var selectedValue = jQ(divArray[i]).val();
        valArray.push(selectedValue);
    }
    return valArray;
 }