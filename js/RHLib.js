/* Enable and Disable fields in a class */
function radioEnableDisableClass(enableClass,disableClass)
{
//    if (enableClass != false && sFormStatus=='editStep') {
            if (enableClass != false ) {
        var enableArray = document.getElementsByClassName(enableClass);
        for(i = 0; i < enableArray.length; i++) {
            var vid = jQ(enableArray[i]).attr("id");
            if(vid.indexOf("_date")<0){
                jQ(enableArray[i]).removeClass('readonly');
                jQ(enableArray[i]).prop('readonly', false);
                 if(jQ(enableArray[i]).is("select")) {
                    jQ(enableArray[i]).removeAttr('disabled');
                } else if (jQ(enableArray[i]).is(":radio")){
                    jQ(enableArray[i]).attr("disabled",false);
                }
            }
        }
    }
 //   if (disableClass != false && sFormStatus=='editStep') {
            if (disableClass != false ) {
        var disableArray = document.getElementsByClassName(disableClass);
         for(i = 0; i < disableArray.length; i++) {
            jQ(disableArray[i]).addClass('readonly');
            jQ(disableArray[i]).prop('readonly', true);
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
function SP_InsertBlank()
{   
    
    switch(arguments.length)
    {
        case 0:
            
            var oAllCMB = document.getElementsByTagName('select');
            if(oAllCMB.length != 0)
            {
                for(var x=0; x<oAllCMB.length; x++)
                {
                    var cmbID = oAllCMB[x].id;
                    if(cmbID.indexOf('mastercontrol.role') != -1 && oAllCMB[x].type != "select-multiple")
                    {
                        if (oAllCMB[x].selectedIndex != -1) {
                            var selectedOption = oAllCMB[x].options[oAllCMB[x].selectedIndex];
                        }
                        SP_CheckAndAddOption(cmbID);
                        if (oAllCMB[x].value !== '') {
                            for (var i=0; i<oAllCMB[x].options.length;i++) {
                                if (selectedOption != undefined && oAllCMB[x].options[i].text == selectedOption.text) {
                                    oAllCMB[x].selectedIndex = i;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        break;
        
        case 1:
            var sel = document.getElementById(arguments[0]);
            if (sel.selectedIndex != -1) {
                var selectedOption = sel.options[sel.selectedIndex];
            }
            SP_CheckAndAddOption(arguments[0]);
            if (sel.value !== '') {
                for (var i=0; i<sel.options.length;i++) {
                    if (selectedOption != undefined && sel.options[i].text == selectedOption.text) {
                        sel.selectedIndex = i;
                        break;
                    }
                }
            }
        break;
    }
}
// Helper function
function SP_CheckAndAddOption(selectId)
{
    var oCMB = document.getElementById(selectId);
    var oCMBLength = oCMB.options.length; 
    var isBlankExist = false;
    if(oCMBLength != 0 && oCMB.type == "select-one")
    {
        for(var i = 0 ; i < oCMBLength; i++)
        {
            if(oCMB.options[0].text == "" && oCMB.options[0].value == "")
            {
                isBlankExist = true;
            }
        }
        
        
        if(!isBlankExist)
        {
            SP_InsertOption("","",oCMB,0);
        }
    }
}
/* MODIFIED  */
/*
To insert an option in select object.

Arguments:
1) Value to be inserted.
2) Export value.
3) Select object.
4) Position of an inserted option.


Sample Call: SP_InsertOption(assigneeUser,assigneeUser,oStepUsers,1);
*/

function SP_InsertOption()
{
    if(arguments.length == 4)
    {
        var oCMB = arguments[2];
        var elOptNew = document.createElement('option');
        var pstn = arguments[3];
        elOptNew.text = arguments[0];
        elOptNew.value = arguments[1];
        
        if(oCMB.selectedIndex == 0)
        {
            var isOptDefault = oCMB.options[0].defaultSelected;
            if(!isOptDefault)
            {
                elOptNew.selected = true;
            }
        }
        
        oCMB.options.add(elOptNew,pstn);
        
    }
}
/*
To set Height of textareas.

Arguments:
1) Textarea object

Sample Call: SP_SetTextAreaHeightWidth(oTextArea);
*/
function SP_SetTextAreaHeightWidth(oTextArea)
{
    var nTextLength = oTextArea.text();
    nTextLength = nTextLength.length;
    var nHeight, nWidth;
    var nTA3Height = 45;
    var nTA5Height = 75;
    
    if (oTextArea.attr("class").indexOf("short")>=0)
    {
        nHeight = nTA3Height;
    }
    else
    {
        nHeight = nTA5Height;       
    }
    
    oTextArea.prop("style").height = "75px";
    
    if (oTextArea.prop("scrollHeight") >= nHeight)
    {
        
        var textareaHeight = oTextArea.prop("scrollHeight");
        oTextArea.prop("style").height = textareaHeight+"px";
        
        
        if(navigator.userAgent.indexOf("Firefox") > 0)
        {
            var stextareaHeight = oTextArea.prop("scrollHeight") * 1 + 8;
            oTextArea.prop("style").height = stextareaHeight+"px";
            
        }
    }   
}
/* MODIFIED */
/*
Automatically grows the textareas per text entry.

Arguments:
1) Textarea object

Sample Call: SP_GrowUP(oTextArea);
*/

function SP_GrowUP(oTextArea) // We shall rename as SP_GrowTextArea
{
    SP_SetTextAreaHeightWidth(jQ(oTextArea));
}

/*
A sort of helper function used in validating newline characters across IE and other browsers

Arguments:
1) String

Returns: 
validated string

Sample Call: SP_FixNewLines(String)
*/
function SP_FixNewLines()
{
    var fixedString = arguments[0];
      // Adjust newlines so can do correct character counting.
    if (fixedString.indexOf('\r\n')!=-1)
        return fixedString;  // this is IE on windows. Puts both characters for a newline, No need to alter
    else if (fixedString.indexOf('\r')!=-1)
        fixedString.replace ( /\r/g, "\r\n" );        // this is IE on a Mac. Need to add the line feed
    else if (arguments[0].indexOf('\n')!=-1)
        fixedString.replace ( /\n/g, "\r\n" );        // this is Firefox,chrome or safari on any platform. Need to add carriage return
   
    return fixedString;
    
}


/*
A helper function used in validating newline characters on browsers other than IE

Arguments: 
1- field object

Sample Call: SP_ValidateCRnLineFeed(fieldObj)
*/

function SP_ValidateCRnLineFeed()
{
    var totalLength = arguments[0].value.length;
    var noOfEnterKey = arguments[0].value.match(/\n/gi);
    var inProcessString = "";
    var userAgentInfo = navigator.userAgent.toLowerCase();
    
    if(noOfEnterKey && totalLength + noOfEnterKey.length > 2000 && userAgentInfo.indexOf('msie') == -1)
        arguments[0].value = arguments[0].value.substring(0, 2000-noOfEnterKey.length);
            
}
