/* ComplaintForm.js */
/* Global Vars */
    var stepId  =  document.getElementById("mastercontrol.route.stepid").value*1;
    var stepNumber =  document.getElementById("mastercontrol.route.stepnumber").value*1;
  //  var sFormStatus= document.getElementById("mastercontrol.hidden.event").value;  /*viewOnly*/

/* Hide fields on start and other functions  3-8*/
function formStart(){
	        jQ('input[type=radio][name=rbCAPARequired]').click(function() {
            capaRequired();
        });
	        jQ("#btnLaunchCAPA").click(function () {
            mapSourceFields();
            selectRouteLaunched("CAPANew", "mastercontrol.task.routes");
            jQ("#mastercontrol\\.task\\.launch").click();
            capaRequired();                   
        });
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
