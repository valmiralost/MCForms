/* ComplaintForm.js */
/* Global Vars */
    var stepId  =  document.getElementById("mastercontrol.route.stepid").value*1;
    var stepNumber =  document.getElementById("mastercontrol.route.stepnumber").value*1;
    var sFormStatus= document.getElementById("mastercontrol.hidden.event").value;  /*viewOnly*/


/* Hide fields on start and other functions  3-8*/
function formStart(){
    jQ("#mastercontrol\\.dataset\\.recordids\\.Products\\.Name").change(function() {
        setProductDefectDD();
    });
    jQ("#mastercontrol\\.dataset\\.recordids\\.AdverseEvents\\.Name").change(function() {
        setAdverseEventDD();
    });
    jQ('input[type=radio][name=rbCAPARequired]').click(function() {
        capaRequired();
    });
    jQ("#btnLaunchCAPA").click(function () {
        mapSourceFields();
        selectRouteLaunched("CAPANew", "mastercontrol.task.routes");
        jQ("#mastercontrol\\.task\\.launch").click();
        capaRequired();                    
    });
    jQ("#cmbReceivedVia").change(function() {
        displayOther('cmbReceivedVia','txtOtherDetails','lbOtherDetails');  
    }); 
    jQ("#cmbClassification").change(function() {
        displayOther('cmbClassification','txtClassificationOther','lbClassificationOther');
    });    

        jQ('input[type=radio][name=rbSeverityRisk]').click(function() {
            calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk','rbSeverityRisk');
        });
        jQ('input[type=radio][name=rbRecurrenceRisk]').click(function() {
            calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk');
        });
       jQ('input[type=radio][name=rbInvestigationRequired]').click(function() {
            investigationEval();
        });

   jQ('input[type=radio][name=rbReviewDHR]').click(function() {
        dhrReview();
    });
      jQ('input[type=radio][name=rbNotificationRequired]').click(function() {
        notifyRequired();
    });
    displayOther('cmbReceivedVia','txtOtherDetails','lbOtherDetails');
    displayOther('cmbClassification','txtClassificationOther','lbClassificationOther');
    calcRisk('txtRiskScore','#rbSeverityRisk','#rbRecurrenceRisk','rbSeverityRisk');
    investigationEval();
    dhrReview(); 
    notifyRequired();
    capaRequired();  
}

function setProductDefectDD() {
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
            //TODO Check is this is the same as NCR, if so remove Complaint from DS name
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
    displayOther('cmbDefect','txtDefectOther','lblDefectOther');
}

function setAdverseEventDD(){
            //Parent dropdown
    var item1 = document.getElementById("mastercontrol.dataset.recordids.AdverseEvents.Name");
    var selItem1;
    var defects;
    // name of the dropdown that will be populated dynamiclly
    var fldName = "cmbAdverseEventSubcategoryDefect";
    var item2Options = document.getElementById(fldName);
    var opt;
    var i;
    if (item1 != null && item2Options != null)
    {
        selItem1 = item1.options[item1.options.selectedIndex].value;
        if (selItem1 != "")
        {
            //TODO Check is this is the same as NCR, if so remove Complaint from DS name
            //dataset=Name of External DataSource and the filter parametername   GetProductDefects  Product  this is the xml query string that will get the data
            var Url = document.getElementById("txtMCUrl").value + "/Main/NOC/html_forms/query.cfm?dataset=getAdverseEventSubCatorgies&AdverseEvent=" + selItem1;
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
                opt.text = opt.value = defects[i].EventCategory;
                item2Options.options.add(opt, (item2Options.options.length + 1));
            }
            opt = document.createElement('option');
            opt.text = "Other";
            opt.value = "Other";
            item2Options.options.add(opt, (item2Options.options.length + 1));
        } else { 
            jQ("#cmbAdverseEventSubcategory option").remove();
        }
    }
    displayOther('cmbAdverseEventSubcategory','txtAdverseEventSubcategoryOther','lblAdverseEventOther');
}

/* Investigation Functionality */
function investigationEval(){
    var rbValue = getCheckedValue('rbInvestigationRequired');
    if(rbValue== 'Yes'){
        jQ('#btnDateAssignedCalendar').prop("disabled",false);
        jQ('#btnDateCompletedCalendar').prop("disabled",false);
        radioEnableDisableClass('yesInvestigation','noInvestigation'); 
        
    }else if(rbValue== 'No'){
        radioEnableDisableClass('noInvestigation','yesInvestigation'); 
        jQ('#btnDateAssignedCalendar').prop("disabled",true);
        jQ('#btnDateCompletedCalendar').prop("disabled",true);
    } else{
        radioEnableDisableClass(false,'yesInvestigation');
        radioEnableDisableClass(false,'noInvestigation'); 
        jQ('#btnDateAssignedCalendar').prop("disabled",true);
        jQ('#btnDateCompletedCalendar').prop("disabled",true);
    }
}/* END Investigation Functionality */


/* DHR Review */
function dhrReview(){
    var rbValue = getCheckedValue('rbReviewDHR');
    if(rbValue  =='Yes'){
       radioEnableDisableClass('yesDHR',false);
       document.getElementById("btnDHRReivewDateCalendar").disabled = false;        
    } else{
        radioEnableDisableClass(false,'yesDHR');
        document.getElementById("btnDHRReivewDateCalendar").disabled = true;   
     }
}/* END DHR Review*/

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

        if(valueField.value == "") {
            valueField.value = GetLaunchedFormNo(2); 
        }
    } else{
        var rbValue = getCheckedValue('rbCAPARequired');
        if(rbValue== 'Yes'){
            oLaunchbutton.disabled = false;
            radioEnableDisableClass(false,'noCAPA'); 
       } else {
            oLaunchbutton.disabled = true;
            radioEnableDisableClass(false,'noCAPA');
            if (rbValue== 'No'){
            radioEnableDisableClass('noCAPA',false);
        }
            
        }
    }

}/* END CAPA Required Functionality */


/* Is Notification Requred Funcationality */
function notifyRequired(){
        var rbValue = getCheckedValue('rbNotificationRequired');
    if(rbValue  =='Yes'){
       radioEnableDisableClass('yesNotify',false);
       document.getElementById("btnNotificationDateCalendar").disabled = false;        
    } else{
        radioEnableDisableClass(false,'yesNotify');
        document.getElementById("btnNotificationDateCalendar").disabled = true;   
     }

}/* END Is Notification Requred Funcationality */

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

/* Map source fields for Form to Form Data */
function mapSourceFields(){
    var sourceDate = document.getElementById("hlpComplaintCreated");
    sourceDate.value = document.getElementById("mastercontrol.form.created").value;
}/* END source fields for Form to Form Data */

function removeClass(vclass,vobj){
    var myClassName=" "+ vclass; //must keep a space before class name
    vobj.className=vobj.className.replace(myClassName,"");
}
function addClass(vclass,vobj){
    var myClassName=" "+ vclass; //must keep a space before class name
    vobj.className=vobj.className.replace(myClassName,""); // first remove the class name if that already exists
    vobj.className = vobj.className + myClassName; // adding new class name
}
