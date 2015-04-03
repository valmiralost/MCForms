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
//////////////////////////////////// Section-4: START TABBER FORMATTING FUNCTIONS /////////////////////////////////////////////////////////

/*
To check data in a tab.

Arguments:
1) Tab object.

Sample Call
var tabObject =  $("#mcPage_003");
var ValueExist = SP_IsTabContainData(tabObject);
*/
function SP_IsTabContainData(tabObj)
{
    var isDataExist = false;
    
    tabObj.find("input").each(function(indexInput){
        if($(this).attr("type") != "hidden" && $(this).attr("type") != "button")
        {
            if($(this).attr("value") != "")
                if(("checkbox" == $(this).attr("type") && $(this).attr("checked")) || ("radio" == $(this).attr("type") && $(this).attr("checked")))
                    isDataExist = true;
                else if("text" == $(this).attr("type")) // else case for input field with type text;
                    isDataExist = true; 
                
        }
        
        if(isDataExist) // break each loop if "isDataExist == true"
            return false;
        
    });
    
    if(!isDataExist)
    {
        tabObj.find("textarea").each(function(indexTextarea){
            if("" != $(this).attr("value"))
                isDataExist = true; 
            
            if(isDataExist) // break each loop if "isDataExist == true"
                return false;   
        });
    }
    
    if(!isDataExist)
    {
        tabObj.find("select").each(function(indexTextarea){
            if($(this).attr("value") != "" && $(this).attr("value") != 0 && $(this).attr("value") != "N/A")
                isDataExist = true; 
            
            if(isDataExist) // break each loop if "isDataExist == true"
                return false;   
        });
    }
    
    return isDataExist;
}

/*
To check data in textarea fields within a tab such as Signatures tab.

Arguments:
1) Tab object.

Sample Call
var tabObject =  $("#mcPage_002");
var ValueExist = SP_IsDataExistInTextarea(tabObject);
*/
function SP_IsDataExistInTextarea(tabObj)
{
    var isDataExist = false;
    if(!isDataExist)
    {
        tabObj.find("textarea").each(function(indexTextarea){
            if($(this).attr("value") != "" && $(this).attr("class") == "signatureField")
                isDataExist = true; 
            
            if(isDataExist) // break each loop if "isDataExist == true"
                return false;   
        });
    }
        
    return isDataExist;
}

/*
To check for editable fields in a tab.

Arguments:
1) Tab object.

Sample Call
var tabObject =  $("#mcPage_003");
var FieldsEnabled = SP_EditableFields(tabObject);
*/

function SP_EditableFields(tabObj)//33864
{
    var isEditableFieldExist = false;
    tabObj.find("input").each(function(indexInput){
        if(($(this).attr("type") != "hidden" && $(this).attr("type") != "button") || ($(this).attr("type") == "button" && $(this).hasClass("enabled")))
        {
            if(!$(this).attr("disabled") && !$(this).attr("readonly"))
                isEditableFieldExist = true;
                
        }
        
        if(isEditableFieldExist) // break each loop if "isEditableFieldExist == true"
            return false;
        
    });
    
    if(!isEditableFieldExist)
    {
        tabObj.find("textarea").each(function(indexTextarea){
            if(!$(this).attr("disabled") && !$(this).attr("readonly"))
                isEditableFieldExist = true;    
            
            if(isEditableFieldExist) // break each loop if "isEditableFieldExist == true"
                return false;   
        });
    }
    
    if(!isEditableFieldExist)
    {
        tabObj.find("select").each(function(indexTextarea){
            if(-1 == $(this).attr("name").indexOf("mastercontrol.links") && -1 == $(this).attr("name").indexOf("mastercontrol.attachments") && -1 == $(this).attr("name").indexOf("mastercontrol.packet.listLaunched") && !$(this).attr("disabled"))
                isEditableFieldExist = true;    
            
            if(isEditableFieldExist) // break each loop if "isEditableFieldExist == true"
                return false;   
        });
    }
    
    return isEditableFieldExist; 
}
//Helper function
function SP_FormatingTab(ValueExist, FieldsEnabled,anchorObj)
{
    if((true == ValueExist || false == ValueExist) && true == FieldsEnabled)
    {
        anchorObj.css({'color':'black','font-weight':700});
    }
    else if(true == ValueExist && false == FieldsEnabled)
    {
        anchorObj.css({'color':'black','font-weight':'normal'});
    }
    else if(false == ValueExist && false == FieldsEnabled)
    {
        anchorObj.css({'color':'gray','font-weight':'normal'});
    }
}

/*
To Set up tabs format.

Arguments:
None.

Sample Call: SP_SetTabsFormat();
*/

function SP_SetTabsFormat()
{
    var tabObject,valueExist,edFieldExist,pageObj;
    var pageMC = 2; // value assign 2, to get mcPageId
    var oFormStatus = document.getElementById("mastercontrol.hidden.event");
    var oPage = "";
    var nPagesInTab = 0;
    
    // For tab having more than one page in it.
    var pgCnData = new Array();
    pgCnData[0] = false; // Value Exist
    pgCnData[1] = false;// Editable Field Exist;
    
    if(SP_Trim(oFormStatus.value) != "")
    {

        $("ul.tabbernav li a").each(function(anchorIndex){
    
            // get mcPages
            var tabName = $(this).text()+"";
            
            if(tabName.indexOf('*') != -1)
                tabName = tabName.replace('*','');
                
            var oAnchor = $(this);
            if($(this).attr("name"))
            {tabName = SP_Trim($(this).attr("name"));}
            else
            {
                var tempTabName = tabName.split("(");
                tabName = SP_Trim(tempTabName[0]);                                
                tabName = tabName.replace(/ /g,'_'); //replace space with underscore
                tabName = tabName.replace(/\//g,'_'); //replace "/" with underscore Bug 34054
                tabName = tabName.replace(/&/g,'and'); // replace & sign with 'and'
                tabName = tabName.replace(/,/g,''); // remove "," from tab name Bug 35570
            
                }
                    
            $("#"+tabName+" div.mcPageDiv").each(function(){
                nPagesInTab = $("#"+tabName+" div.mcPageDiv").size() * 1;
                
                if(SP_Trim(tabName) == "Signatures")
                {
                    valueExist = SP_IsDataExistInTextarea($(this));
                    if(valueExist)
                    {
                        oAnchor.css("color","black");
                    }
                    else
                    {
                        oAnchor.css("color","gray");
                    }
                }
                else
                {
                    valueExist = SP_IsTabContainData($(this));
                    edFieldExist  = SP_EditableFields($(this));
                     
                    pgCnData[0] = (valueExist || pgCnData[0]) ? true : false;
                    pgCnData[1] = (edFieldExist || pgCnData[1]) ? true : false;                 
                     
                    if(nPagesInTab > 1)
                    {
                        SP_FormatingTab(pgCnData[0],pgCnData[1],oAnchor);
                    }
                    else
                    {
                        SP_FormatingTab(valueExist,edFieldExist,oAnchor);
                    }
                        
                }
            });
            
            pgCnData[0] = false; // re initialize with default value
            pgCnData[1] = false; // re initialize with default value                    

    
        });
    }   
    
}

/* Modified by new Jquery Implementation */
/*
To add a leading asterik with tab name, If there is any dynamically required/required field in that tab.

Arguments:
1) Tab Label Text.
2) Tab Page.

Sample Call: SP_DynamicTabLabel('Supplier (T2)','mcPage_003');
*/

function SP_DynamicTabLabel()
{
    if(arguments.length == 1)
    {
        var PageId = arguments[0];
        var TabLabelText = "";  
        $("ul.tabbernav li a").each(function(anchorIndex){
            TabLabelText = $(this).attr("name");                                 
            if($("#"+TabLabelText+ " #"+PageId+"").find(".dynamicRequiredLabel").attr("id") != null)
            {   
                    if($(this).html().indexOf('*') == -1)
                    $(this).html("* "+$(this).html());
            }
                else if($("#"+TabLabelText+ " #"+PageId+"").find(".dynamicRequiredLabel").attr("id") == null)
                    {$(this).html(SP_Trim ($(this).html().replace('*','')))}
        });
    }
    else
    {
        var PageId = arguments[1];
        var TabLabelText = arguments[0];    
        
        $("ul.tabbernav li a").each(function(anchorIndex){
        if($(this).html() == TabLabelText)
        {
            if($("#"+PageId+"").find(".dynamicRequiredLabel").attr("id") != null)
                $(this).html("* "+TabLabelText);
        }       
        else if($(this).html() == "* "+TabLabelText)
        {
            if($("#"+PageId+"").find(".dynamicRequiredLabel").attr("id") == null)
            {
                TabLabelText = TabLabelText.slice(0);
                $(this).html(TabLabelText);
            }
        }
        });
    }

}

/*
To adjust language-specific width of tabber, this function call can be used in case your tabber get disturb while switching MC languages.

Arguments:
1) Widthset (Array of 8 string elements where value at 0 index is default width for tabber and rest of 7 indexs would hold values for each MC-Language in a predetermined order).

Sample Call: 
                default,en,jp  du     es  ch fr ko 
var WidthSet = ["820px","","","920px","","","",""];
SP_AdjustTabberWidth(WidthSet,tabberID);

Note: if any array element is set null for a language then default width would be set. 
*/
function SP_AdjustTabberWidth()
{
    var arrWidthSet =  arguments[0];
    var UserLang = document.getElementById('mastercontrol.user.language').value.toLowerCase();
    var TabberObj = document.getElementById(arguments[1]);
    var defaultWidth = arrWidthSet[0];
    
    if(arrWidthSet.length > 1)
    {
        switch(UserLang)
        {
            case 'en_us':
                
                if(arrWidthSet[1] != '')
                    TabberObj.style.width = arrWidthSet[1];
                else
                    TabberObj.style.width = defaultWidth;
            break;
            
            case 'ja_jp':
                
                if(arrWidthSet[2] != '')
                    TabberObj.style.width = arrWidthSet[2];
                else
                    TabberObj.style.width = defaultWidth;
            break;
            
            case 'de_de':
                
                if(arrWidthSet[3] != '')
                    TabberObj.style.width = arrWidthSet[3];
                else
                    TabberObj.style.width = defaultWidth;
            break;
            
            case 'es_es':
                
                if(arrWidthSet[4] != '')
                    TabberObj.style.width = arrWidthSet[4];
                else
                    TabberObj.style.width = defaultWidth;
            break;
            
            case 'zh_cn':
                
                if(arrWidthSet[5] != '')
                    TabberObj.style.width = arrWidthSet[5];
                else
                    TabberObj.style.width = defaultWidth;
            break;
            
            case 'fr_fr':
                
                if(arrWidthSet[6] != '')
                    TabberObj.style.width = arrWidthSet[6];
                else
                    TabberObj.style.width = defaultWidth;
            break;
            
            case 'ko_kr':
                
                if(arrWidthSet[7] != '')
                    TabberObj.style.width = arrWidthSet[7];
                else
                    TabberObj.style.width = defaultWidth;
            break;
        
        }
    }
    else
    {
        TabberObj.style.width = defaultWidth;
    }
}

//////////////////////////////////// END TABBER FORMATTING FUNCTIONS /////////////////////////////////////////////////////////

/*
To remove extra spaces from a value.

Arguments:
1) Value to be trimmed.

Sample Call: SP_Trim(obj.value);
*/
function SP_Trim(value) 
{
    value = new String(value);
    return value.replace(/^\s+|\s+$/g, "");
}

/*
To remove the full name and end parenthisis when getting name from role list
*/

function trimUserID(vfield){
      var pStr=vfield;
  var newTxt = pStr.split('('); //remove everything outside (
  for (var i = 1; i < newTxt.length; i++) {
    var subStr = newTxt[i].split(')')[0]; //remove everything outside )
}

  return subStr ; // return just the UserID
}