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
    if (disableClass != false && sFormStatus=='editStep') {
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
