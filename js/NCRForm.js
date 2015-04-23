/*NCRForm.js*/
/* Global Vars */
    var stepId  =  document.getElementById("mastercontrol.route.stepid").value*1;
    var stepNumber =  4;//document.getElementById("mastercontrol.route.stepnumber").value*1;
    var sFormStatus= document.getElementById("mastercontrol.hidden.event").value;  /*viewOnly*/
    var gSelected=jQ("#mastercontrol\\.route\\.stepusers\\.step4 option:selected").map(function(){ return this.value }).get();
    

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

        jQ("#mastercontrol\\.role\\.NCRInvestigators").change(function(){
            
            var selectedValue = jQ("#mastercontrol\\.role\\.NCRInvestigators").val();
            var trimmedValue = trimUserID(selectedValue);
            if (selectedValue != ""){
                if(jQ.inArray(trimmedValue, gSelected) == -1 ) {
                    var currentSelected = gSelected.slice();
                    currentSelected.push(trimmedValue);
                    jQ('#mastercontrol\\.route\\.stepusers\\.step4').val(currentSelected);
                } else {
                    jQ('#mastercontrol\\.route\\.stepusers\\.step4').val(gSelected);
                }

            } else {
                jQ('#mastercontrol\\.route\\.stepusers\\.step4').val(gSelected);
            }

        });

        jQ('input[type=radio][name=rbIDSeverityRisk]').click(function() {
            calcRisk('txtIDRiskScore','#rbIDSeverityRisk','#rbIDRecurrenceRisk','rbIDSeverityRisk');
        });
        jQ('input[type=radio][name=rbIDRecurrenceRisk]').click(function() {
            calcRisk('txtIDRiskScore','#rbIDSeverityRisk','#rbIDRecurrenceRisk');
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
            capaRequired();                   
        });
        jQ("#btnLaunchAAForm").click(function () {
            mapSourceFields();
            selectRouteLaunched("Additional Action", "mastercontrol.task.routes");
            jQ("#mastercontrol\\.task\\.launch").click();
            additionalActionRequired();                
        });  

         jQ('input[type=radio][name=rbFinalDisposition]').click(function() {
            finalDisposition(); 
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
    //    setProductDataEntry();
    } catch(e){}
     SP_CheckAndAddBlank("mastercontrol.role.NCRInvestigators"); 

}/* END start  */
function setProductDataEntry(){
    var selectedValue = jQ("#mastercontrol\\.dataset\\.recordids\\.Products\\.Name").val();
    if (selectedValue == 'Documentation' || selectedValue == 'Quality System' ){
        radioEnableDisableClass('nonProductField','productField');
        jQ("#mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name,label[for=mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name]").show();
        

    } else {
        jQ("#mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name,label[for=mastercontrol\\.dataset\\.recordids\\.QualitySystemLocation\\.Name]").hide();
        radioEnableDisableClass('productField','nonProductField'); 
        setDefectCombo();
    }
}

function setDefectCombo() {
    //Parent dropdown
    var item1 = document.getElementById("mastercontrol.dataset.recordids.Products.Name");
    var selItem1;
    var defects;
    // name of the dropdown that will be populated dynamiclly
    var fldName = "cmbDefect";
    var item2Options = document.getElementById(fldName);
    var opt;
    var i;
    if (item1 != null && item2Options != null)
    {
        selItem1 = item1.options[item1.options.selectedIndex].value;
        if (selItem1 != "")
        {
            //dataset=Name of External DataSource and the filter parametername   GetProductDefects  Product  this is the xml query string that will get the data
            var Url = document.getElementById("txtMCUrl").value + "/Main/NOC/html_forms/query.cfm?dataset=getProductDefects&Product=" + selItem1;
            cmbClear(fldName);
            defects = xmlQuery(Url);
            opt = document.createElement('option');
            opt.text = "";
            opt.value = "";

            item2Options.options.add(opt, (item2Options.options.length + 1));

            for (i = 0; i < defects.length; i++)
            {
                opt = document.createElement('option');
                 //update to column from the datasource that you are using  Defect
                opt.text = opt.value = defects[i].Defect;
                item2Options.options.add(opt, (item2Options.options.length + 1));
            }
            opt = document.createElement('option');
            opt.text = "Other";
            opt.value = "Other";
            item2Options.options.add(opt, (item2Options.options.length + 1));
        } else { 
            jQ("#cmbDefect option").remove();
        }
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
        }else if(rbValue== 'No'){
            jQ("#txtNoCAPAJustification,label[for=txtNoCAPAJustification]").show();
             oLaunchbutton.disabled = true;
        } else {
            oLaunchbutton.disabled = true;
            jQ("#txtNoCAPAJustification,label[for=txtNoCAPAJustification]").hide();   
            
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
        jQ('input[name=rbAAFormRequired]').attr("disabled",true);
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

/* Final dispositon functionality */
function finalDisposition(){
    
    var rbValue = getCheckedValue('rbFinalDisposition');

    if(rbValue  =='Rework in house'|| rbValue  =='Use as is'){
       // radioEnableDisableClass('productField','nonProductField'); 
       radioEnableDisableClass('reqJust','yesScrap'); 
    } else if (rbValue  =='Scrap'){
        radioEnableDisableClass('yesScrap','reqJust'); 

    }else {
        radioEnableDisableClass(false,'reqJust');
        radioEnableDisableClass(false,'yesScrap');
     }

}/*END  Final dispositon functionality */


