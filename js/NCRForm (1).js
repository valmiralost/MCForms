/* Hide fields on start and other functions */
function formStart(){
    
        /* Add events to fields */
    jQ("#mastercontrol\\.dataset\\.recordids\\.Products\\.Name").change(function() {
    setProductDataEntry();
    });
    jQ('input[type=radio][name=rbInitialDisposition]').click(function() {
        initalDisposition();
    });
   jQ('input[type=radio][name=rbInvestigationRequired]').click(function() {
        investigationEval();
    });
    jQ('input[type=radio][name=rbSeverityRisk]').click(function() {
        calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk','rbSeverityRisk');
    });
    jQ('input[type=radio][name=rbRecurrenceRisk]').click(function() {
        calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk');
    });
        jQ('input[type=radio][name=rbCAPARequired]').click(function() {
        capaRequired();
    });
     jQ('input[type=radio][name=rbDCN]').click(function() {
       dcnLaunched();
    });   
    ///////Fields show/hide to start //////////
    jQ("#mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name,label[for=mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name]").hide();
    jQ("#txtNoInvestigationJustification,label[for=txtNoInvestigationJustification]").hide();
   ////////Functions to set values and display ////////////
    calcRisk();
    investigationEval();
    capaRequired();
    dcnLaunched();

}/* END Hide fields on start  */
function setProductDataEntry(){
    var selectedValue = jQ("#mastercontrol\\.dataset\\.recordids\\.Products\\.Name").val();
    if (selectedValue == 'Documentation' || selectedValue == 'Quality System' ){
        radioEnableDisableClass('nonProductField','productField');
        jQ("#mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name,label[for=mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name]").show();
        

    } else {
        radioEnableDisableClass('productField','nonProductField');
        jQ("#mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name,label[for=mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name]").hide();
        
    }
}
/* Initial Dispositon Functionality */
function initalDisposition(){
    var rbValue = getCheckedValue('rbInitialDisposition');
    if(rbValue  =='Rework in house'|| rbValue  =='Use as is'){
       // radioEnableDisableClass('productField','nonProductField'); 
       radioEnableDisableClass('initialDisNo',false); 
    } else{
        radioEnableDisableClass(false,'initialDisNo');
     }
}/* END Initial Dispositon Functionality */
function investigationEval(){
    var rbValue = getCheckedValue('rbInvestigationRequired');
    if(rbValue== 'Yes'){
        jQ("#txtNoInvestigationJustification,label[for=txtNoInvestigationJustification]").hide();
        jQ('#btnDateAssignedCalendar').prop("disabled",false);
        jQ('#btnDateCompletedCalendar').prop("disabled",false);
        radioEnableDisableClass('yesInvestigation','noInvestigation'); 
        
    }else {
        radioEnableDisableClass('noInvestigation','yesInvestigation'); 
        jQ('#btnDateAssignedCalendar').prop("disabled",true);
        jQ('#btnDateCompletedCalendar').prop("disabled",true);
        jQ("#txtNoInvestigationJustification,label[for=txtNoInvestigationJustification]").show();
        if(rbValue!= 'Yes' && rbValue != 'No'){
            jQ("#txtNoInvestigationJustification,label[for=txtNoInvestigationJustification]").hide();
        }
    }
}
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
 
function capaRequired(){
        var rbValue = getCheckedValue('rbCAPARequired');
    if(rbValue== 'Yes'){
        jQ('#btnLaunchCAPA').prop("disabled",false);
        jQ("#txtNoCAPARationale,label[for=txtNoCAPARationale]").hide();     
    }else {
        jQ('#btnLaunchCAPA').prop("disabled",true);
        jQ("#txtNoCAPARationale,label[for=txtNoCAPARationale]").show();
        if(rbValue!= 'Yes' && rbValue != 'No'){
            jQ('#btnLaunchCAPA').prop("disabled",true);
            jQ("#txtNoCAPARationale,label[for=txtNoCAPARationale]").hide();
        }
    }

}
function dcnLaunched(){
        var rbValue = getCheckedValue('rbDCN');
    if(rbValue== 'Yes'){
        radioEnableDisableClass('yesDCN',false);     
    }else {
        jQ('#btnLaunchCAPA').prop("disabled",true);
        radioEnableDisableClass(false,'yesDCN'); 
    }

}