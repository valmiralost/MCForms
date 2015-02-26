/* Hide fields on start and other functions */
function formStart(){
    
        /* Add events to fields */
    jQ('input[type=radio][name=rbSeverityRisk]').click(function() {
        calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk');
    });
    jQ('input[type=radio][name=rbRecurrenceRisk]').click(function() {
        calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk');
    }); 
    ///////Fields show/hide to start //////////

   ////////Functions to set values and display ////////////
    calcRisk();
}/* END Hide fields on start  */


/* Calculate Risk and background color */
function calcRisk(riskFld,sevField,OccField,test) {
    //sevField and occField include # with fieldid
    var oRadioCheck = document.getElementsByName(test);
    if (!oRadioCheck){
      return false;  
    }
     var riskNum = document.getElementById(riskFld);
     var severity = parseInt(jQ(sevField+":checked").val(), 10);
    var selected = parseInt(jQ(OccField+":checked").val(), 10);
     var riskScore = selected + severity;
     if(riskScore >0){
            riskNum.value = riskScore;
            if (riskScore < 6) { 
                jQ(riskNum).removeClass( "riskYellow riskRed" ).addClass('riskGreen');
            } else if (riskScore < 10) {
                jQ(riskNum).removeClass( "riskGreen riskRed" ).addClass('riskYellow');
            } else {
                jQ(riskNum).removeClass( "riskGreen riskYellow" ).addClass('riskRed');
            }
     }else{
        jQ(riskFld).removeClass( "riskGreen riskYellow riskRed" )
     }
}/* END Calculate Risk and background color */
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
 