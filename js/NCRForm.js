/* Global Vars */
    var stepId  =  document.getElementById("mastercontrol.route.stepid").value*1;
    var stepNumber =  document.getElementById("mastercontrol.route.stepnumber").value*1;
    var sFormStatus= document.getElementById("mastercontrol.hidden.event").value;  /*viewOnly*/

/* Hide fields on start and other functions  3-8*/
function formStart(){
        try
    {
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
         jQ('input[type=radio][name=rbDCNLaunced]').click(function() {
           dcnLaunched();
        });   
         jQ('input[type=radio][name=rbAAFormRequired]').click(function() {
            additionalActionRequired(); 
        });
        jQ("#btnLaunchCAPA").click(function () {
            mapSourceFields();
            selectRouteLaunched("CAPANew", "mastercontrol.task.routes");
            jQ("#mastercontrol\\.task\\.launch").click();
            var vInput = document.getElementById("mastercontrol.links.CAPANew");
                 if(! vInput){
                vShow = "Something went wrong with tracking the linked form";
                alert(vShow);
            }else{
                capaRequired();                   
            }
        });
        jQ("#btnLaunchAAForm").click(function () {
            mapSourceFields();
            selectRouteLaunched("Additional Action", "mastercontrol.task.routes");
            jQ("#mastercontrol\\.task\\.launch").click();
            var vInput = document.getElementById("mastercontrol.links.Additional Action");
                 if(! vInput){
                vShow = "Something went wrong with tracking the linked form";
                alert(vShow);
            }else{
                additionalActionRequired();                
            }
        });  

         jQ('input[type=radio][name=rbFinalDisposition]').click(function() {
            finalDisposition(); 
        });
        jQ("#testB").click(function () { 
        //    document.getElementById("txtCAPANumber").value = GetLaunchedFormNo(2); 
         //   document.getElementById("txtAAFormNumber").value = GetLaunchedFormNo(1); 
         // document.getElementById("btnLaunchAAForm").disabled = false;  
        //   document.getElementById("btnLaunchCAPA").disabled = false;
      //  radios = document.getElementById("rbInitialDisposition").disabled = true;

            
            
                       
        });   

        ///////Fields show/hide to start //////////
        jQ("#mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name,label[for=mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name]").hide();
        jQ("#txtNoInvestigationJustification,label[for=txtNoInvestigationJustification]").hide();
       ////////Functions to set values and display ////////////
        calcRisk();
        investigationEval();
        capaRequired();
        dcnLaunched();
        additionalActionRequired();
        finalDisposition();
        setProductDataEntry();
    } catch(e){}

}/* END start  */
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

 /* CAPA Required Functionality */
function capaRequired(){
    var oListFormNos = document.getElementById("mastercontrol.links.CAPANew");
    var oViewButton = document.getElementById("mastercontrol.links.view.CAPANew");
    var oLaunchbutton = document.getElementById("btnLaunchCAPA");
    var valueField = document.getElementById("txtCAPANumber");  
    var justField = document.getElementById("txtNoCAPAJustification"); 
    var rbValue = getCheckedValue('rbCAPARequired');
//need to find view only status and check for it
    if(oListFormNos.length != 0)
    {
        removeClass("hide",oViewButton);
        oLaunchbutton.disabled = true;  
        jQ('input[name=rbCAPARequired]').attr("disabled",true);
        justField.value = "";
        jQ("#txtNoCAPAJustification,label[for=txtNoCAPAJustification]").hide();
        if(valueField.value == "") {
            valueField.value = GetLaunchedFormNo(2); 
        }
    } else{
        var rbValue = getCheckedValue('rbCAPARequired');
        if(rbValue== 'Yes'){
            oLaunchbutton.disabled = false;
            jQ("#txtNoCAPAJustification,label[for=txtNoCAPAJustification]").hide();     
        }else {
            oLaunchbutton.disabled = true;
            jQ("#txtNoCAPAJustification,label[for=txtNoCAPAJustification]").show();
        }
    }

}/* END CAPA Required Functionality */

/* DCR Launched Functionality */
function dcnLaunched(){
    var rbValue = getCheckedValue('rbDCNLaunced');
    if(rbValue== 'Yes'){
        radioEnableDisableClass('yesDCN',false);     
    }else {
        radioEnableDisableClass(false,'yesDCN'); 
    }
}/* END DCR Required Functionality */

/* Additional Action Required Functionality */
function additionalActionRequired(){
    var oListFormNos = document.getElementById("mastercontrol.links.Additional Action");
    var oViewButton = document.getElementById("mastercontrol.links.view.Additional Action");
    var oLaunchbutton = document.getElementById("btnLaunchAAForm"); 
    var valueField = document.getElementById("txtAAFormNumber");   
//need to find view only status and check for it
    if(oListFormNos.length != 0)
    {
        removeClass("hide",oViewButton);
        oLaunchbutton.disabled = true;  
        jQ('input[name=rrbAAFormRequired]').attr("disabled",true);
         if(valueField.value == "") {
            valueField.value = GetLaunchedFormNo(1); 
        }
    } else{
        var rbValue = getCheckedValue('rbAAFormRequired');
        if(rbValue== 'Yes'){
            oLaunchbutton.disabled = false;    
        }else {
            oLaunchbutton.disabled = true;
        }
    }
}/*END  Additional Action Required Functionality */

/* Map source fields for Form to Form Data */
function mapSourceFields(){
    var sourceDate = document.getElementById("hlpNCRCreated");
    sourceDate.value = document.getElementById("mastercontrol.form.created").value;
}/* END source fields for Form to Form Data */

function GetLaunchedFormNo(vform)
{
    if(vform == 1){
        var oListFormNos = document.getElementById("mastercontrol.links.Additional Action");
    } else if(vform == 2){
        var oListFormNos = document.getElementById("mastercontrol.links.CAPANew");
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

function removeClass(vclass,vobj){
    var myClassName=" "+ vclass; //must keep a space before class name
    vobj.className=vobj.className.replace(myClassName,"");
}
function addClass(vclass,vobj){
    var myClassName=" "+ vclass; //must keep a space before class name
    vobj.className=vobj.className.replace(myClassName,""); // first remove the class name if that already exists
    vobj.className = vobj.className + myClassName; // adding new class name
}

/* Enable and Disable fields in a class */
function radioEnableDisableClass(enableClass,disableClass)
{
    if (enableClass != false && sFormStatus=='editStep') {
        var enableArray = document.getElementsByClassName(enableClass);
        for(i = 0; i < enableArray.length; i++) {
            jQ(enableArray[i]).removeClass('readonly');
            jQ(enableArray[i]).prop('readonly', false);
             if(jQ(enableArray[i]).is("select")) {
                jQ(enableArray[i]).removeAttr('disabled');
            } else if (jQ(enableArray[i]).is(":radio")){
                jQ(enableArray[i]).attr("disabled",false);
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
            }else if (jQ(disableArray[i]).is(":radio")){
                jQ(disableArray[i]).attr('checked',false);
                jQ(disableArray[i]).attr("disabled",true);
            } 
            else  {
            //   jQ(disableArray[i]).prop('readonly', true);
            jQ(disableArray[i]).disabled = true;
            }
        }  
    }   
}/* END Enable and Disable fields in a class */

/* Final dispositon functionality */
function finalDisposition(){
    
    var rbValue = getCheckedValue('rbFinalDisposition');
    if(rbValue== 'Scrap'){
        radioEnableDisableClass('yesScrap',false);     
    }else {
        radioEnableDisableClass(false,'yesScrap'); 
    }

}/*END  Final dispositon functionality */

