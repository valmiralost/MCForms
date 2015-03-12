/********************************************************************************
 * JavaScript Library for MasterControl Solution Packages						*			
 * Developed and Maintained by: MasterControl Solution Package Development Team *
 * Copyright 2011, MasterControl Inc. 											*
 ********************************************************************************/
 
 
////////////////////////////////////Section-1: START FIELD LEVEL FUNCTIONS //////////////////////////////////////////////////
/* MODIFIED */
/*

SP_CheckWin,SP_ClearTimer functions use to perform specific actions after a fixed time interval.

Arguments:
1) Function to be called.
2) Argument to specify time interval for firefox in some cases.

Sample Call: SP_CheckWin(SetSize);
Sample Call: SP_CheckWin(ManageChangedItems,this)
*/

var timer;
function SP_CheckWin()
{
	var toBeCalled = arguments[0];
	if(arguments[1] && navigator.userAgent.indexOf("Firefox") != -1)
	{
		timer = self.setInterval( function() { toBeCalled(); SP_ClearTimer(); },arguments[1]);
	}
	else
	{
		timer = self.setInterval( function() { toBeCalled(); SP_ClearTimer(); },10);
	}
}

/* MODIFIED */
function SP_ClearTimer()
{
	try
	{
		if(wDocTypes.closed)
		{
			timer = window.clearInterval(timer);
		}
	}
	catch(ex)
	{
		timer = window.clearInterval(timer);
	}
}
/*
SP_ToggleVisibility and SP_ShowAllOptions functions are used to display only selected options in a multi-select list.

Arguments:

1) ID of primary list box.
2) ID of secondary list box.
3) Event for SELECT element, this argument is passed when function is called on an event of primary list box.

This function can be called in two ways:

1) On an event of primary list box.
   Sample Call: SP_ToggleVisibility("mastercontrol.role.SP_MEET_Participants","lbInvitees",event);

2) On an event of secondary list box.
    Sample Call: SP_ToggleVisibility("mastercontrol.role.SP_MEET_Participants","lbInvitees");
	
*/
function SP_ToggleVisibility()
{
	var oPrimary = document.getElementById(arguments[0]);
	var oSecondary = document.getElementById(arguments[1]);
	oSecondary.length = 0;
	var targ;
	
	if(arguments[2])
	{
		/* Browser check to cater event for SELECT element */
		var e = arguments[2];
		if (!e) var e = window.event;
		if (e.target) targ = e.target;
		else if (e.srcElement) targ = e.srcElement;
		if (targ.nodeType == 3) // defeat Safari bug
			targ = targ.parentNode;

	}
	else
	{
		targ = "onload";
	}
	
	if(targ.id != "")
	{
		SP_AddClass(oPrimary,'hide');
		
		for(var i = 0; i< oPrimary.options.length; i++)
		{
			if(oPrimary.options[i].selected)
			{
				var objOption = document.createElement("option");
				objOption.text = oPrimary.options[i].text;
				objOption.value = oPrimary.options[i].value;
	
				if(document.all && !window.opera)
				{
					oSecondary.add(objOption);
				}
				 else
				{
					oSecondary.add(objOption, null);
				}			
			}
		}
		SP_RemoveClass(oSecondary,'hide');	
		oSecondary.size = oSecondary.length;
		
		if(arguments[3])
		{
			SP_IE8ShowHideStyle(arguments[0],arguments[3]);
			SP_IE8ShowHideStyle(arguments[1],arguments[3]);
		}
	}
	else
	{
		SP_ShowAllOptions(arguments[0],arguments[1]);
	}
	
}

function SP_ShowAllOptions()
{
	SP_RemoveClass(document.getElementById(arguments[0]),'hide');
	SP_AddClass(document.getElementById(arguments[1]),'hide');
	
	if(arguments[2])
	{
		SP_IE8ShowHideStyle(arguments[0],arguments[2]);
		SP_IE8ShowHideStyle(arguments[1],arguments[2]);
		
	}
}
/*
To mark all the fields unrequired.

Arguments:
None

Sample Call: SP_UnrequireFields();
*/
function SP_UnrequireFields()
{
	try
	{
		var RequiredFieldList = document.getElementById("requiredVariablesList");
		RequiredFieldList.value = "";
	}
	catch(ex)
	 {
	   var errMsg = ex;
	 }
}

/*
To add a blank option in any specific dropdown or in all ROLE keyword fields.

Arguments:
None
or
1) ID of dropdown.

Sample Call: SP_InsertBlank("mastercontrol.role.SP_CR_Users.Imp1");
Sample Call: SP_InsertBlank();
*/
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

/*
To set size of Attachments and Links list fields.

Arguments:
1) ID of list field

Sample Call: SP_SetAttachnLinkFieldSize("mastercontrol.attachments.Supporting");
*/
function SP_SetAttachLinkFieldSize()  // renamed function: old name was SP_SetAttachnLinkFieldSize()
{
	var oField = document.getElementById(arguments[0]);
	// Browser check for Safari & Chrome. When items are less than 4.
	if(oField.options.length <= 4 && (navigator.userAgent.indexOf("Safari") > 0 || navigator.userAgent.indexOf("Chrome") > 0))
	{
		oField.size = oField.options.length;
		switch(oField.options.length)
		{
			case 0:
			case 1:
				oField.style.height = "20px";
				break;
			case 2:
				oField.style.height = "35px";
				break;
			
			case 3:
				oField.style.height = "50px";
				break;
			
			case 4:
				oField.style.height = "65px";
				break;
		}
	}
	else
	{
		oField.removeAttribute("style");
		if(oField.length != 0)
		{
			if(oField.length <= 10)
			{
				oField.size = oField.length;
			}
			else if (oField.length > 10)
			{
				oField.size = 10;
			}
			oField.disabled = false;
		}
		else
		{
			oField.size = 1;
		}
	
	}
	
}
/*
To retain the hieght of textarea fields.

Arguments:
None

Sample Call: SP_RetainHeightWidth();
*/
function SP_RetainHeightWidth()
{
	$("textarea").each(function(index){
		if($(this).attr("name").indexOf("mastercontrol.route.esig")<0 && $(this).css("display") != 'none')
			SP_SetTextAreaHeightWidth($(this));			
	});
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
	SP_SetTextAreaHeightWidth($(oTextArea));
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

/*
A helper function to be called before form submit and it'll ensure character limit in all textarea and textfields on form

Arguments: 
No arguments required

Sample Call: SP_ValidateTextFields()
*/

function SP_ValidateTextFields() {
	var pageList = new String(mcEditablePages).split(','),
		txtVal = '';

	if (SP_Trim(pageList) !== '') {
		for (var i = 0, l = pageList.length; i < l; ++i) {
			var pageId = +SP_Trim(pageList[i]) + 1;
			
			if (pageId > 2) {
				if (pageId < 10) {
					pageId = 'mcPage_00' + pageId;
				}
				else {
					pageId = 'mcPage_0' + pageId;
				}
	
				$('#' + pageId).find('textarea').each(function (IndexInput) {
					if ($(this).css('display') !== 'none' && $(this).val().length > 0) {
						$(this).trigger('onkeyup');
					}
				});
				
				$('#' + pageId).find(':text').each(function (IndexInput) {
					if ($(this).css('display') !== 'none' && $(this).val().length > $(this).attr('maxlength')) {
						txtVal = $(this).val();
						txtVal = txtVal.substring(0, $(this).attr('maxlength'));
						$(this).val(txtVal);
					}
				});
			}
		}
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

/*
To Add a task in task table.

Arguments:
1) ID of Task Counter.
2) ID of Task Table.
3) ID of Add Task Button.

Sample Call: SP_AddTask('Implementation_Task_Count','Implementation_Task_',"btnAddImpTask");
*/
function SP_AddTask()
{
	if(arguments.length == 3)
	{
		var oTaskCounter = document.getElementById(arguments[0]);
		if (++oTaskCounter.value<=10)
		{
			SP_RemoveClass(document.getElementById(arguments[1]+oTaskCounter.value),'hide');
		}
		SP_DisableAddTaskButton(arguments[0],arguments[2]);
	}
}
/* Modified
To control the visibility of tasks in task table.

Arguments:
1) ID of Task Counter
2) ID of Task Table e.g. "Containment_Task_"
3) ID of other table to be displayed
** In addition to task table there is another table displayed is some SPs;
   which contains fields like Date Complete etc. ID will be like "Containment_Tasks"
   
Sample Call: SP_SetTaskTableViewState("Containment_Task_Count","Containment_Task_","Containment_Tasks");
*/
function SP_SetTaskTableViewState()
{
	if(arguments[0] && arguments[1])
	{
		var taskCounter = document.getElementById(arguments[0]).value*1;
		
		for(i=1; i <= taskCounter; i++)
		{
			
			SP_RemoveClass(document.getElementById(arguments[1]+i),'hide');
		}
		for(j=taskCounter+1; j<11; j++)
		{
			SP_AddClass(document.getElementById(arguments[1]+j),'hide');
		}
		if(arguments[2])
		{
			if(taskCounter > 0)
			{
				SP_RemoveClass(document.getElementById(arguments[2]),'hide');
			}
			else
			{
				SP_AddClass(document.getElementById(arguments[2]),'hide');
			}
		}
	}
}
/*
To disable add task button if all the tasks have been added.

Arguments:
1) ID of Task Counter
2) ID of Add Task button. 

Sample Call: SP_DisableAddTaskButton("Containment_Task_Count","btnAddContainmentTask");
*/
function SP_DisableAddTaskButton()
{
	if(arguments[0] && arguments[1])
	{
		var taskCounter = document.getElementById(arguments[0]).value*1;
		if(taskCounter >=10)
		{
			document.getElementById(arguments[1]).disabled = true;
		}
		else
		{
			document.getElementById(arguments[1]).disabled = false;
		}
	}
}
/*
To control the visibility of "View Source" button.

Arguments:
1) ID of span containing View Source button.

Sample Call: SP_DisplayViewSourceButton("ViewSource");

Note: To use this function following keywords fields are necessary:
SELECT field with name "mastercontrol.links.source" and Button with name "mastercontrol.links.view.source"
should be placed in form otherwise it wont work.
*/
function SP_DisplayViewSourceButton()
{
	if(arguments[0])
	{
		if(document.getElementById("mastercontrol.links.source").length > 0)
		{
			SP_RemoveClass(document.getElementById(arguments[0]),'hide');
			document.getElementById("mastercontrol.links.view.source").disabled = false;
		}
	}
}

/*
To set InfoCard Title.

Arguments:
1) ID of field whom value'll be used in setting up task title

Sample Call: SP_SetTaskTitle("txtTitle");

Note: To use this function following keywords fields are necessary:
INPUT field with name "mastercontrol.form.title" and "mastercontrol.form.number"
*/
function SP_SetTaskTitle(fieldId) {
	var oTaskTitle = document.getElementById("mastercontrol.form.title"),
		oFormNum = document.getElementById("mastercontrol.form.number"),
		oTitleField = "";

	oTaskTitle.value = oFormNum.value;	

	if (fieldId) {
		oTitleField =  document.getElementById(fieldId);

		if (SP_Trim(oTitleField.value) !== "") {
			oTaskTitle.value = oFormNum.value + ": " + oTitleField.value;	
		}
	}
}

/*
To set Creator/Created By field on form Header.

Arguments:
1) field Id which is to be populated with creator in standard format "FirstName LastName (UserID)".

Sample Call: SP_SetTaskCreator("txtCreator");

Note: To use this function following keywords fields are necessary:
INPUT field with name "mastercontrol.form.creatorname" and "mastercontrol.form.creator"
*/

function SP_SetTaskCreator()
{
	var creatorName = document.getElementById("mastercontrol.form.creatorname").value;
	var creatorId = document.getElementById("mastercontrol.form.creator").value;
	var creator = document.getElementById(arguments[0]);
	creator.value = creatorName+" ("+creatorId+")";	
}

/*
This function is used to program onclick event on Toolbar buttons (SignOff, Save etc) 
so that Client side job could be done on/before form submit.

Arguments:
1) Function name to be called on any toolbar button.
2) Id of the list item which has wrapped the toolbar button/hyperlink

Sample Call: SP_ProgramSignoffButton(SetRequiredFields, 'signoff');
*/
function SP_ProgramMenuButton()//updated under bug 38235
{
	try
	{
		var toBeCalled = arguments[0];
		var oButtonSignoff = parent.document.getElementById(arguments[1]);
		if (oButtonSignoff!=null)
		{	
			oButtonSignoff.onmouseup = function()
			{
				toBeCalled();
			}
			oButtonSignoff.onkeypress = function()
			{
				toBeCalled();
			}
		}
	}
	catch(ex){}
}

/*
To check all required fields filled or not.

Arguments:
None

Sample Call: SP_AreAllRequiredFieldsFilled();
*/
function SP_AreAllRequiredFieldsFilled()
{

	var sFieldsList = SP_Trim(document.getElementById('requiredVariablesList').value);
	if (sFieldsList.length<=0)
	return true;
	
	sFieldsList = new String(sFieldsList).split(",");
	var nFilledCounter = 0;
	var nFieldsListLength = 0;

	if(sFieldsList.length > 0)
	for (i=0; i<sFieldsList.length; i++)
	{
		
	
			if(SP_Trim(sFieldsList[i]) != "")
			{
				nFieldsListLength++;
				var oElement = document.getElementById(sFieldsList[i]);
				var sElementType = SP_Trim(oElement.type);
				
				switch (sElementType)
				{
					case "radio":
					if (SP_GetRGValue(sFieldsList[i])!=="")
						nFilledCounter++;
					break;
					case "checkbox":
					if (oElement.checked)
						nFilledCounter++;								
					break;									
					case "text":
					if (SP_Trim(oElement.value)!="")
						nFilledCounter++;						
					break;
					case "textarea":
					if (SP_Trim(oElement.value)!="")
						nFilledCounter++;						
					break;
					case "select-multiple":
					if (oElement.selectedIndex>=0)
						nFilledCounter++;
					break;
					case "select-one":
					if (oElement.selectedIndex>0)
						nFilledCounter++;
					break;
					case "hidden":
					if (SP_Trim(oElement.value)!="")			
						nFilledCounter++;						
					break;									
	
				} // end case
				
			}
		
	}// end loop
	return nFieldsListLength == nFilledCounter;

}


/*
To assign selected users from a role to a specific step. It will aslo replace/append previously added users.

Arguments:
1) Role ID.
2) Step User's Id
3) Flag: true/false. If true is passed then user will be replaced else appended to previous selection

Sample Call: SP_UserAssignment("mastercontrol.role.SP_AUD_LeadAuditors",'mastercontrol.route.stepusers.step2',false);
*/
function SP_UserAssignment(sourceRole, stepUsers, replace)
{
	var sourceRole = $(document.getElementById(sourceRole));
	var stepUsers = $(document.getElementById(stepUsers));

	if (replace) {
		stepUsers.find('option').prop('selected',false);
	}
	sourceRole.find('option:selected').each(function() {
		opt = $(this);
		var fulltext = opt.text();
		var userid = opt.text().substring(fulltext.lastIndexOf('(')+1, fulltext.lastIndexOf(')'));
		stepUsers.find('option[value*="'+userid+'"]').prop('selected',true);
	});
}

/*
To Extract users from "Extension Request Approvers" role specific to a SP and pass users to a help field used in template mapping between parent form to ER form .

Arguments:
1) ID of MC role keyword field specifying ERApprovers Role
2) ID of help field to be used in template mapping


Sample Call: SP_MapERapprovers('mastercontrol.role.SP_SCAR_ERApprovers','hlpExtReqApprovers');
*/
function SP_MapERapprovers()
{
  	//Setting Extension Request Approvers to be passed
 	var ERApproverList = document.getElementById(arguments[0]);
  	var users = "";
  	var userId = ""; 
  	var ListOption = "";
	if(ERApproverList.length != 0)
	{
		for(var i=0; i<ERApproverList.length; i++)
		{
		   ListOption = ERApproverList.options[i];
		   if(SP_Trim(ListOption.value)!="" )
		   {
			  userId = SP_GetUserID(ListOption.value);
			  users += userId +"*"; 
		   }
		}
	}
    document.getElementById(arguments[1]).value = users;
}
/* MODIFIED */
/*
To toggle between Enable/Disable state of fields.

Arguments:
1) fieldList: array of field names to be disabled.
2) isDisable: true/false
3) Optional argument: ClassName to be applied or removed on targeted field

var TargetFieldList = new Array('txtOtherSource');
Sample Call: SP_EnableDisableToggle(TargetFieldList, true);
*/
function SP_EnableDisableToggle(fieldList, isDisable)
{
	var sClassName = "EditShadow";
	if(arguments[2])
	sClassName = arguments[2];
		
	for(var i=0;i<fieldList.length;i++)
	{
	  	  var fieldType = document.getElementById(fieldList[i]).type;
	  	  var oField = document.getElementById(fieldList[i]);
		  
		  if(SP_Trim(fieldType)== "text" || SP_Trim(fieldType) == "textarea" || SP_Trim(fieldType) == "select-one" || SP_Trim(fieldType) == "select-multiple") //Testing for field type
		  {
			if(isDisable == true)
			{
				SP_DisableClassToggle(oField, isDisable);
				if(SP_Trim(fieldType) == "text" || SP_Trim(fieldType) == "textarea")
				{
					document.getElementById(fieldList[i]).value = "";
					document.getElementById(fieldList[i]).readOnly = true;
					document.getElementById(fieldList[i]).disabled = true;
				}
				else
				{	
					document.getElementById(fieldList[i]).selectedIndex = 0;
					document.getElementById(fieldList[i]).disabled = true;
				}
			}
			else
			{
				SP_DisableClassToggle(oField, isDisable);
				if(SP_Trim(fieldType) == "text" || SP_Trim(fieldType) == "textarea")
				{
					document.getElementById(fieldList[i]).readOnly = false;
					document.getElementById(fieldList[i]).disabled = false;
				}
				else
				{
					document.getElementById(fieldList[i]).disabled = false;
				}
			}
			
			try{
					if(sClassName == "PinkShadow")
					{SP_ToggleFieldShadow(oField, sClassName, !isDisable);}
					else{SP_ToggleFieldShadow(oField, sClassName, isDisable);}
				
				}catch(ex){}
		 }
		 else //condition execution for Radio button and checkbox elements.
		 {
			var EleLength = document.getElementsByName(fieldList[i]).length;
			var EleObj = document.getElementsByName(fieldList[i]);
			
			for(var j = 0; j< EleLength; j++)
			{
				if(isDisable)
				{
					EleObj[j].checked = false;
					EleObj[j].disabled = true;
				}
				else
				{
					EleObj[j].disabled = false;
				}
			}
		 }
	}//End For loop
}
/*
To add class "readonly" if flag is true.

Arguments:
1) Field Object.
2) Flag

Sample Call: SP_DisableClassToggle(oField, true);
*/
function SP_DisableClassToggle(fieldObj, flag)
{
	var fieldClass = fieldObj.className;
	var IndexReadonly = fieldClass.indexOf(" readonly");

	if(flag)
	{
		if(IndexReadonly == -1)
		fieldObj.className = fieldObj.className + " readonly";
	}
	else
	{
		if(IndexReadonly != -1)
		fieldObj.className = fieldObj.className.slice(0,IndexReadonly);
	}
}
/*
To dynamically toggles between required/unrequired, Also adds an asterik to tab name.

Arguments:
1) Label Name.
2) Field Name.
3) Flag.
4) Tab Name.
5) tab's page div id

Sample Call: SP_DynamicRequireToggle("lblPhoneNumber_T2", "txtPhoneNumber", true, "Complaint (T2)", "mcPage_003");
*/
function SP_DynamicRequireToggle(labelName, fieldName, flag)
{
	SP_RequiredLabelToggle(labelName, flag);
	SP_ToggleFieldShadow(fieldName, "PinkShadow", flag); //This call is to ensure v11 style formatting for required fields
	mcRequireToggle(fieldName, flag);
	if(!flag)
	{
		var oBorderStyle = document.getElementById(fieldName).style.border;
		if(oBorderStyle == "thick solid red" || oBorderStyle == "red thick solid")
		{
			document.getElementById(fieldName).style.border = "1px solid #A5C0dF";
		}
	}
	
	if(arguments[3] && arguments[4])
	{
		SP_DynamicTabLabel(arguments[3],arguments[4]);
	}
}

/*
To toggle required field labels.

Arguments:
1) Label ID.
2) Flag: true/false

Sample Call: SP_RequiredLabelToggle("lblSource",true);
*/
// updated under bug 40379
function SP_RequiredLabelToggle(labelId,setRequired)
{
	if(arguments.length > 2)
	{
		var label = $('label[for='+labelId+']');
		if(setRequired == true)
		{
			if(label.text().indexOf("*") == -1)
			{
				label.text("* "+ label.text());
				label.addClass("dynamicRequiredLabel");
			}
		}
		else if(setRequired == false)
		{
			if(label.text().indexOf("*") == 0)
			{
				label.text(label.text().split("*")[1]);
				label.removeClass("dynamicRequiredLabel");
			}
		}
	}
	else
	{
		if(setRequired == true &&  SP_HasClass(document.getElementById(labelId),'dynamicLabel'))
		{
			document.getElementById(labelId).innerHTML = "* "+document.getElementById(labelId).innerHTML;
			SP_RemoveClass(document.getElementById(labelId),"dynamicLabel");
			SP_AddClass(document.getElementById(labelId),"dynamicRequiredLabel");
		}
		else if(setRequired == false &&  SP_HasClass(document.getElementById(labelId),'dynamicRequiredLabel'))
		{
			document.getElementById(labelId).innerHTML = document.getElementById(labelId).innerHTML.slice(1);
			SP_AddClass(document.getElementById(labelId),"dynamicLabel");
			SP_RemoveClass(document.getElementById(labelId),"dynamicRequiredLabel");
		}
	}
}

/*
To configure the form for FTFL according to MODE variable.

Arguments:
1) MODE variable.
2) ID of Main Container in which FTFL fields are placed.
3) ID of Launch button Container.
4) ID of Reference field.

Sample Call: SP_SetModeBasedConfigs(CAPAMODE,"CAPAModeSelection","LaunchCAPA","txtCAPARef");
*/
function SP_SetModeBasedConfigs()
{
	if(arguments.length >= 4)
	{
		var MODE = arguments[0];
		var mainContainer = document.getElementById(arguments[1]);
		var launchButtonContainer = document.getElementById(arguments[2]);
		var oRefField = document.getElementById(arguments[3]);
		if (arguments[4]) {
			var viewButtonContainer = document.getElementById(arguments[4]);
		}
			
		if(SP_Trim(MODE) != "" && mainContainer != null && launchButtonContainer != null && oRefField != null)
		{
			switch (MODE)
			{
				case "Other":
				case "Document": //Special Case used for MasterControl Deviation Solution Package
					SP_AddClass(launchButtonContainer,'hide');
					if (arguments[4]) {
						SP_AddClass(viewButtonContainer,'hide');
					}
					if (SP_FieldIsOnEditablePage(oRefField.id,mcEditablePages)) {
						SP_PerformAction(oRefField.id,'readonly',false);
					}
				break;
				
				case "None":
					SP_AddClass(mainContainer,'hide');
				break;
			}
		}
	}
}

/*
To configure form for different data sources according to MODE variable.

Arguments:
Any number of Mode and Div ID pairs

Sample Call: SP_ConfigureDataSource(SUPPLIERMODE,"div_SUPPLIER_MCD","div_SUPPLIER_EDS","div_SUPPLIER_MCSM");
*/
function SP_ConfigureDataSource()
{
	if(arguments.length > 1)
	{
		var sMODE = arguments[0].toLowerCase();
		for(i=1; i<arguments.length; i++)
		{
			var container = document.getElementById(arguments[i]);
			if(container != null)
			{
				if(container.id.toLowerCase().indexOf(sMODE) > 0)
				{
					SP_RemoveClass(container,'hide');
				}
				else
				{
					SP_AddClass(container,'hide');
				}
			}
		}
	}
}

/*
To enable/disable all fields in form except hidden fields

Arguments:
1- DIV id
2- Flag values accepted (true/false)

Sample Call to Enable all fields: SP_EnableAllFields("FormID",true);
Sample Call to Disable all fields: SP_EnableAllFields("FormID",false);
*/
function SP_EnableAllFields(entityID,flag)
{
	flag = !flag;
	$("#"+entityID+"").find("input:not(input[type=hidden]), select, textarea").attr("disabled",flag);
	$("#"+entityID+"").find("input[type=button]").attr("disabled",false);
}

/*
To enable all fields of editable pages.

Arguments: 
1- System variable mcEditablePages

Sample Call: SP_EnablePageFields(mcEditablePages);
*/
function SP_EnablePageFields(mcEditablePages)
{
	var pageList = new String(mcEditablePages).split(",");

	if(SP_Trim(pageList) != "")
	{
		for(i=0; i<pageList.length; i++)
		{
			var pageId = (SP_Trim(pageList[i])*1)+1;
			if(pageId < 10)
			{
				pageId = "mcPage_00"+pageId;
			}
			else
			{
				pageId = "mcPage_0"+pageId;
			}
			$("#"+pageId+"").find(":input:not(:button)").attr("disabled",false);
		}
	}
}

/*
To check if a field is on an editable page.

Arguments
1 - fieldId - id of the field to check
2 - System variable mcEditablePages

Returns
True if field on an editable page
False otherwise

Samople Call: SP_FieldIsOnEditablePage('txtCAPARef',mcEditablePages);
*/
function SP_FieldIsOnEditablePage(fieldId, mcEditablePages) {
	var pageList = new String(mcEditablePages).split(',');
	var isOnEditablePage = false;

	if (SP_Trim(pageList) != '') {
		for(i=0; i<pageList.length; i++)
		{
			var pageId = (SP_Trim(pageList[i])*1)+1;
			if(pageId < 10)
			{
				pageId = "mcPage_00"+pageId;
			}
			else
			{
				pageId = "mcPage_0"+pageId;
			}
			
			if (!!$('#'+fieldId).closest('#'+pageId).length) {
				isOnEditablePage = true;
				break;
			}
		}
	}
	return isOnEditablePage;
}


/*
To enable/disable a Sign Off status on specific route step

Arguments:
1- step number
2- Status value
2- Flag values accepted (true/false)

Sample Call to Enable all fields: SP_SetStepStatus(3, 'Data Complete', true);
Sample Call to Disable all fields:SP_SetStepStatus(3, 'Data Complete', false);
*/
function SP_SetStepStatus() 
{
  var f = "mastercontrol.route.stepstatus.step" + arguments[0];
  var statusField = document.getElementById(f); 
  var i;
  for (i=0; i<statusField.length;i++)
  {
	   var itemFace = statusField.options[i].text;
	   if (itemFace.toLowerCase()==(new String(arguments[1])).toLowerCase())
	   {
		statusField.options[i].selected = arguments[2];
	   }
  }    
}

//////////////////////////////////// END FIELD LEVEL FUNCTIONS ///////////////////////////////////////////////////////

////////////////////////////////////Section-2: START FUNCTIONS BELONGS TO FTFL//////////////////////////////////////////////////
/*
To select the route for FTFL.

Arguments:.
1) Route name as string.
2) ID of list field from which route will be selected.

Sample Call: SP_SelectRouteLaunched("Extension Request" , "mastercontrol.task.mapped.routes.ER");
*/
function SP_SelectRouteLaunched(routeName, listFieldId) {
    var oListRoute =  document.getElementById(listFieldId),
    	isRouteExist = false,
    	itemFace,
    	i = 0,
    	l = oListRoute.length;
	
	oListRoute.disabled = false;

	for (/*i = 0, l = oListRoute.length*/; i < l; ++i) {
		itemFace = oListRoute[i].text;

		if (itemFace.toLowerCase() === routeName.toLowerCase()) {
    	    oListRoute.selectedIndex = i;
			isRouteExist = true;
		    break;   
        }
	}
	
	if (!isRouteExist) {
		if (typeof message === "object") {
			alert(message.task_launch);
			return false;
		}
		else {
			alert("The task you are trying to launch is not available.");
			return false;
		}
	}

	return true;
}
/*
To ensure relevant route selection.

Arguments:
1) Route name as string.
2) ID of list field from which route will be selected.

Sample Call: SP_IsRouteSelected("Extension Request" , "mastercontrol.task.mapped.routes.ER");
*/
function SP_IsRouteSelected(routeName, listFieldId) {
	var oRoutes =  document.getElementById(listFieldId),
		itemFace,
		i = 0,
		l = oRoutes.length;
	
	for (/*i = 0, l = oRoutes.length*/; i < l; ++i) {
		itemFace = oRoutes.options[i].text;

		if (itemFace.toLowerCase() === routeName.toLowerCase()) {
    	    return oRoutes.options[i].selected;
		    break;   
        }
	}
}
/* MODIFIED
To replace launch task button with view task button after FTFL

Arguments:
1) ID of Reference Field.
2) ID of span containing Launch Button.
3) ID of span containing View Button.
4) ID of View Button.

Sample Call: SP_SwapButtonAfterLaunch("txtCAPAReference","LaunchIR","ViewIR","mastercontrol.links.view.Issue Review HTML");
*/
function SP_SwapButtonAfterLaunch()
{
	if(arguments.length == 4)
	{
		var oRefField = document.getElementById(arguments[0]);
		var spanLaunch = document.getElementById(arguments[1]);
		var spanView = document.getElementById(arguments[2]);
		var btnView = document.getElementById(arguments[3]);
		if(SP_Trim(oRefField.value) != "" )
		{
			SP_AddClass(spanLaunch,'hide');
			SP_RemoveClass(spanView,'hide');
			btnView.disabled = false;
		}
		else
		{
			SP_RemoveClass(spanLaunch,'hide');
			SP_AddClass(spanView,'hide');
		}
	}
}
/*
To select Originator for the launched form.

Arguments:
None

Sample Call: SP_SelectOriginatorLaunched();

Note: To use this function following keywords fields are necessary:
SELECT field with name "mastercontrol.task.originator" and INPUT field with name "mastercontrol.form.currentuser"
*/
function SP_SelectOriginatorLaunched()
{
 	var oListOriginator = document.getElementById("mastercontrol.task.originator"); 
	var sCurrentUser = document.getElementById("mastercontrol.form.currentuser").value.toLowerCase();
	var i;
	var sItemValue = "";
	for (i=0; i<oListOriginator.length;i++)
	{
		sItemValue = oListOriginator[i].value;
		if (sItemValue.toLowerCase() === sCurrentUser)
		{
             oListOriginator.selectedIndex = i;
			 break;   
        }
	}  
}
/*
To extract the reference of launched form, from links field.

Arguments:
1) ID of Links field.

Sample Call: SP_GetLaunchedFormNo("mastercontrol.links.CAPA");
*/
function SP_GetLaunchedFormNo(linksField)
{
    var oListFormNos = document.getElementById(linksField); 
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

/*
To set launched form reference. 

Arguments:
1) ID of Links field.
2) ID of field to put in reference. 

Sample Call: SP_PutLaunchedRef('mastercontrol.links.CAPA','txtCAPAReference');
*/
function SP_PutLaunchedRef()
{
	if(arguments.length == 2)
	{
		var sLaunchedNum = SP_GetLaunchedFormNo(arguments[0]);
		var oRefField = document.getElementById(arguments[1]);
		if(SP_Trim(oRefField.value) == "" )
		{
			if(sLaunchedNum != "")
			{
				oRefField.value = sLaunchedNum;
			}
		}
	}
}
//////////////////////////////////// END FUNCTIONS BELONGS TO FTFL//////////////////////////////////////////////////

////////////////////////////////////Section-3: START DATE FUNCTIONS /////////////////////////////////////////////////////////
/* Global Variable Declare Here For Date Manipulation Functions*/
// Default language selected is ENGLISH
var languageSelect = "en_us";
// Date format variable
var dateFormat = "dd-mmm-yyyy"; // possible values (dd-mmm-yyyy,yyyy-mm-dd)

//This array of object used in multiple language date manipulation functions and in jquery calendar.
var regional = [];

// English
regional['en_us'] = { // Default regional settings
		closeText: 'Done', // Display text for close link
		prevText: 'Previous Month', // Display text for previous month link
		nextText: 'Next Month', // Display text for next month link
		currentText: 'Today', // Display text for current month link
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
		weekHeader: 'Wk', // Column header for week of the year
		dateFormat: 'dd-M-yy', // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: '' // Additional text to append to the year in the month headers
	};

// Chinese
regional['zh_cn'] = {
	closeText: '关闭',
	prevText: '&#x3c;上月',
	nextText: '下月&#x3e;',
	currentText: '今天',
	monthNames: ['一月','二月','三月','四月','五月','六月',
	'七月','八月','九月','十月','十一月','十二月'],
	/*monthNamesShort: ['一','二','三','四','五','六',
	'七','八','九','十','十一','十二'],*/
	monthNamesShort: ['一月','二月','三月','四月','五月','六月',
	'七月','八月','九月','十月','十一月','十二月'],
	dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
	dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
	dayNamesMin: ['日','一','二','三','四','五','六'],
	weekHeader: '周',
	dateFormat: 'dd-M-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '年'};
	
// Deutch
regional['de_de'] = {
	closeText: 'schließen',
	prevText: '&#x3c;zurück',
	nextText: 'Vor&#x3e;',
	currentText: 'heute',
	monthNames: ['Januar','Februar','März','April','Mai','Juni',
	'Juli','August','September','Oktober','November','Dezember'],
	monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dez'],
	dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
	dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
	dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
	weekHeader: 'Wo',
	dateFormat: 'dd-M-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};		

// ESpanish
regional['es_es'] = {
	closeText: 'Cerrar',
	prevText: '&#x3c;Ant',
	nextText: 'Sig&#x3e;',
	currentText: 'Hoy',
	monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
	'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
	'Jul','Ago','Sep','Oct','Nov','Dic'],
	dayNames: ['Domingo','Lunes','Martes','Mi&eacute;rcoles','Jueves','Viernes','S&aacute;bado'],
	dayNamesShort: ['Dom','Lun','Mar','Mi&eacute;','Juv','Vie','S&aacute;b'],
	dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&aacute;'],
	weekHeader: 'Sm',
	dateFormat: 'dd-M-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};	

//French		
regional['fr_fr'] = {
	closeText: 'Fermer',
	prevText: '&#x3c;Préc',
	nextText: 'Suiv&#x3e;',
	currentText: 'Courant',
	monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin',
	'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
	monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun',
	'Jul','Aoû','Sep','Oct','Nov','Déc'],
	mNames: ['Jan','Fév','Mar','Avr','Mai','Jun',
	'Juil','Aoû','Sep','Oct','Nov','Déc'],
	dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
	dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
	dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
	weekHeader: 'Sm',
	dateFormat: 'dd-M-yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
		
// Japanese
regional['ja_jp'] = {
	closeText: '閉じる',
	prevText: '&#x3c;前',
	nextText: '次&#x3e;',
	currentText: '今日',
	monthNames: ['1月','2月','3月','4月','5月','6月',
	'7月','8月','9月','10月','11月','12月'],
	monthNamesShort: ['1月','2月','3月','4月','5月','6月',
	'7月','8月','9月','10月','11月','12月'],
	dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
	dayNamesShort: ['日','月','火','水','木','金','土'],
	dayNamesMin: ['日','月','火','水','木','金','土'],
	weekHeader: '週',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: '年'};

// Korean
regional['ko_kr'] = {
	closeText: '닫기',
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
	'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
	monthNamesShort: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
	'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
	dayNames: ['일','월','화','수','목','금','토'],
	dayNamesShort: ['일','월','화','수','목','금','토'],
	dayNamesMin: ['일','월','화','수','목','금','토'],
	weekHeader: 'Wk',
	dateFormat: 'yy-mm-dd',
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: '년'};
	
	
	
/*
Set Language, to perform date manipulation when language is other then ENGLISH

Arguments
1) language key. Possible values are: (de_de,en_us,es_es,fr_fr,ja_jp,ko_kr,zh_cn)

*/
function SP_SetLanguage(sKey)
{
	languageSelect = sKey;
}

/*
Return selected Language

*/
function SP_GetLanguage()
{
	return languageSelect ;
}

/*
Set date format 

Arguments
1) date form. Possible values are: "dd-mmm-yyyy", "yyyy-mm-dd"

*/
function SP_SetFormatDate(dFormat) {
	dateFormat = dFormat;
}

/*
Return selected Language

*/
function SP_GetFormatDate() {
	return dateFormat ;
}

/*
Return month number from 0 to 11 (inclusive)

Arguments:
1) Month name in any language. Default English language is used
2) Language key (optional)

*/
function SP_GetMonthNumber(sMonthName) {
	// As Months in year are 12.
	var monthNumber = -1;

	for(var i = 0; i < 12; ++i) {
		if (sMonthName.toLowerCase() === regional[languageSelect].monthNamesShort[i].toLowerCase() || sMonthName.toLowerCase() === regional[languageSelect].monthNames[i].toLowerCase() || sMonthName.toLowerCase() === regional["fr_fr"].mNames[i].toLowerCase()) {
			monthNumber = i;
			break;
		}
	}

	return monthNumber;
}

/*
Return Date object

Arguments
1)three element array.
	arr[0] = day | Yeaar
	arr[1] = month
	arr[2] = Year | day

*/
function SP_CreateDateObject(arrDate)
{
	var oDate;
	
	if(arrDate.length == 3)
	{
		// Check First Element is either day or year
		
		if(arrDate[0].length == 4) //means year , passing array date is of format yyyy-mmm-dd
		{
			oDate = new Date(arrDate[0], --arrDate[1], arrDate[2]);
		}
		else //means day, passing array date is of format dd-mmm-yyyy 
		{
			oDate =  new Date(arrDate[2], SP_GetMonthNumber(arrDate[1]), arrDate[0]);		
		}
	}
	else
	{
		oDate = new Date();
	}
	
	return oDate;
}

/*
MODIFIED to cater multiple language

To set date format as dd-mmm-yyyy.

Arguments:
1) Date field object.

Sample Call: SP_SetDateFormat(oDate);
*/
function SP_SetDateFormat(thisDate)
{
	if(thisDate.value.search(' ') <= 0)
		return;
	var myDate,enteredDate;
	
	enteredDate = thisDate.value.split(' ');
	myDate = SP_CreateDateObject(enteredDate);
			
	var day = (myDate.getDate() < 10) ? "0"+myDate.getDate(): myDate.getDate();
	var year = myDate.getFullYear();
	var monthString;
	
	switch(dateFormat)
	{
		case "yyyy-mm-dd":
			var month = myDate.getMonth() + 1;
			monthString = (month < 10) ? "0"+month: month;
			thisDate.value =  year+"-"+monthString+"-"+day;
			
			break;
		case "dd-mmm-yyyy":
			monthString = SP_GetMonthName(myDate.getMonth());		
			thisDate.value =  day+"-"+monthString+"-"+year;	
			break;
	}
	
}

/*
To ensure that entered date is valid date. Only calls from SP_CheckDateFormat function

Arguments
- days (numeric) d
- month (numeric) m
- year (numeric full year) yyyyy
*/

function SP_CheckValidDate(day,month,year)
{
	var showErrMsg = false;
	
	// check entered year should be greater than 1900 and less than 2200. And check entered month value is in between 1 - 12
	if((year*1 < 1900 || year*1 >2200) || (month*1 < 1 || month*1 > 12))
	{
		showErrMsg = true;
		return showErrMsg;
	}
	
	//Create Date, month decremented because in JS date object month are from (0 - 11)
	var oDate = new Date(year,--month);
	month = oDate.getMonth();
	oDate.setDate(day);
	
	// Check entered day is correct as per selected month
	// Feburary case. total days in month are 28 or 29
	if(!(month*1 == oDate.getMonth()*1))
	{
		showErrMsg = true;
	}
	return showErrMsg;
}


/*
To ensure date entry in selected format.

Arguments:
1) Date field object.

Sample Call: SP_CheckDateFormat(theField);
*/
function SP_CheckDateFormat(oField)
{
	var month,day,year,splitDate;
	var alertMsg = "";
	var showErrMsg = false;
	
	if(oField && SP_Trim(oField.value) != "")
	{
		// '-' is must for every date entry
		splitDate = oField.value.split('-');
		if(splitDate.length != 3)
		{
			
			if(typeof message == "object")
			{
				alert(message.date_format+": "+dateFormat);
				
			}
			else
			{
				alert("Enter Date in this format: "+dateFormat);
			}
			oField.value = "";
			oField.focus();
			return false;
		}
		
		switch(dateFormat)
		{
			case "yyyy-mm-dd":
				if(typeof message == "object")
				{
					alertMsg = message.date_format+": yyyy-mm-dd";
				}
				else
				{
					alertMsg = "Enter Date in this format: yyyy-mm-dd";
				}
				
				month = splitDate[1];
				year = splitDate[0];
				day = splitDate[2];
				
				if(SP_CheckValidDate(day,month,year))
				{
					showErrMsg = true;
					break;
				}
				
				month = (month.length < 2) ? "0"+month: month;
				day = (day.length < 2) ? "0"+day: day;
				
				oField.value = year+ "-" + month + "-" + day;
					
				break;
			case "dd-mmm-yyyy":
				if(typeof message == "object")
				{
					alertMsg = message.date_format+": dd-mmm-yyyy";
				}
				else
				{
					alertMsg = "Enter Date in this format: dd-mmm-yyyy";
				}
				
				month = SP_GetMonthNumber(splitDate[1])* 1 + 1;
				year = splitDate[2];
				day = splitDate[0];
				
				if(SP_CheckValidDate(day,month,year))
				{
					showErrMsg = true;
					break;
				}
				
				month = SP_GetMonthName(--month);
				day = (day.length < 2) ? "0"+day: day;
				
				oField.value = day + "-" + month + "-" + year;
				break;
		}

		if(showErrMsg)
		{
			alert(alertMsg);
			oField.value = "";
			oField.focus();
			return false;
		}
		else
			return true;
	
	}
	
	
}


/*
To scan date fields and set date format to "dd-mmm-yyyy".

Arguments:
None

Sample Call: SP_GetnSetDateFields();
*/
function SP_GetnSetDateFields()
{
	try
	{	
		if(arguments.length > 0)
		{
			for (var n=0; n < arguments.length; n++ )
			{
				var oDate = document.getElementById(arguments[n]);
				SP_SetDateFormat(oDate);
			}
		}
	}
	catch (ex)
	{
		//alert(ex);
	}
	
	try
	{
		var FormDate = document.getElementById("mastercontrol.form.created");
		if(SP_Trim(FormDate.value) != "")
		{
			SP_SetDateFormat(FormDate);
			var inputFields = document.getElementsByTagName("input");
			var isDateField = false;
		
			for (var x = 0; x < inputFields.length; x++)
			{
				isDateField = false;
				if(inputFields[x].type == "text")
				{
					if(inputFields[x].name.indexOf('_date') != -1)
					{
						if(SP_Trim(inputFields[x].value) != "")	
							SP_SetDateFormat(inputFields[x]);
					}
				
				}
			}
		}
	}
	catch(excp)
	{
		//alert(excp);	
	}
}
/*
To populate today's date in a field.

Arguments:
1) ID of the field to be populated with today's date.

Sample Call: SP_PopulateTodayDate(dateField);
*/
function SP_PopulateTodayDate(dateField)
{
	var todayDate = new Date();
	var month = todayDate.getMonth();
	var day = todayDate.getDate();
	var year = todayDate.getFullYear();
	var finaldate;
	
	switch(dateFormat)
	{
		case "dd-mmm-yyyy":
			month = SP_GetMonthName(month);
			day = (day < 10) ? "0"+ day : day;
			finaldate = day+"-"+month+"-"+year;
			break;
		case "yyyy-mm-dd":
			month = month +1;
			month = (month < 10) ? "0"+ month : month;
			day = (day < 10) ? "0"+day : day;
			finaldate = year+"-"+month+"-"+day;
			
			break;
		
	}
	
	document.getElementById(dateField).value = finaldate;
}
/*
MODIFIED as to cater multiple language
To get month name abbrev from month number.

Arguments:
1) Month Number as integer.

Sample Call: SP_GetMonthName(5);
*/
function SP_GetMonthName(monthNumber)
{
	return regional[languageSelect].monthNamesShort[monthNumber];
}
/*
To get Due Dates field's array.

Arguments:
1) Prefix of field name.
2) Number of fields.

Sample Call: SP_GetDueDatesList("txtImpTaskDueDate",10);
*/
function SP_GetDueDatesList()
{
    var field = arguments[0];
	var fieldsCount = arguments[1]*1;
	var dtList  = new Array();
    var dueDtX="";
    var oDate="";
	var MDYdate="";
	
	for(var i=1; i<=fieldsCount; i++)  
	{
	   dueDtX = field+i+"_date";
	   oDate = document.getElementById(dueDtX);
	   if( oDate.value !="" )
	   {
			var fX = oDate.value.split('-');
			if(fX.length==3)
			{
				switch(dateFormat)
				{
					case "dd-mmm-yyyy":
						MDYdate = fX[1]+" "+fX[0]+","+" "+fX[2];		
						break;
					case "yyyy-mm-dd":	
						MDYdate = fX[1]+" "+fX[2]+","+" "+fX[0];		
						break;
				}
				
				dtList[dtList.length] = MDYdate;
			}    
	   }   
	}  
	return dtList;      
}
/*
To sort dates in ASC/DESC order.

Arguments:
1) Oreder ASC/DESC.
2) Array of Dates.

Sample Call: SP_SortDates("ASC",duDtList);
*/
function SP_SortDates()
{
    Sign = new Array();
	Sign["ASC"] = ">";
	Sign["DESC"] = "<";
	
	var How =  arguments[0];
	var datesArry = arguments[1];
	
	for (z=0;z<datesArry.length-1;z++) 
	{
		for (y=0;y<(datesArry.length-(z+1));y++) 
		{
			
			if ( eval(SP_ConvertDate(datesArry[y+1])+ Sign[How] +SP_ConvertDate(datesArry[y])) ) 
			{
				temp=datesArry[y+1]; 
				datesArry[y+1] = datesArry[y]; 
				datesArry[y] = temp;
			}
		}
	}
	var latestDate = SP_ConvertToDMY(datesArry[0]);
	return latestDate;
}

//Helper function to convert date format as dd-mmm-yyyy
function SP_ConvertToDMY(DT)
{
	var Month = DT.substring(0,DT.indexOf(" "));
	var Day = DT.substring(DT.indexOf(" ")+1,DT.indexOf(","));
	var Year = DT.substring(DT.lastIndexOf(" ")+1,DT.length);
	var FormattedDate = "";
	
	switch(dateFormat)
	{
		case "dd-mmm-yyyy":
			FormattedDate = Day+"-"+Month+"-"+Year;
			break;
		case "yyyy-mm-dd":
			FormattedDate = Year+"-"+Month+"-"+Day;
			break;
	}
	
	return FormattedDate;	
}
//Helper function for Date format "MMM DD, YYYY"
function SP_ConvertDate(DT)
{
	M = DT.substring(0,DT.indexOf(" "));
	D = DT.substring(DT.indexOf(" ")+1,DT.indexOf(","));
	Y = DT.substring(DT.lastIndexOf(" ")+1,DT.length);
	if (D.length == 1) {D = "0"+D;}
	
	switch(dateFormat)
	{
		case "dd-mmm-yyyy":
			
			M = SP_GetMonthNumber(M);		
			M = M + 1;
			if (M < 10) {M = "0"+M;}			
			
			break;
		case "yyyy-mm-dd":
			M = M;
			break;
	}

	return Y+""+M+""+D;
}

/* 
MODIFIED as to cater multiple language
To add Days,Months,Years and Hours to date object.

Arguments:
1- Date Object
2- Days
3- Months
4- Years
5- Hours

Sample Call to SP_AddDate is SP_AddDate(dat,12) 
Sample Call to SP_AddDate is SP_AddDate(dat,0,2) 
Sample Call to SP_AddDate is SP_AddDate(dat,0,0,3) 
Sample Call to SP_AddDate is SP_AddDate(dat,0,0,0,8) Time (24 Hours)
	
*/

function SP_AddDate(dateObj,days,months,year,hours)
{
	var m,d,y;
	var sDate = "";		
	if(days != 0)
		dateObj = new Date(dateObj.setDate(dateObj.getDate() + days));	
	if(months != null && months != 0)	
		dateObj = new Date(dateObj.setMonth(dateObj.getMonth() + months));	
	if(year != null && year != 0)	
		dateObj = new Date(dateObj.setYear(dateObj.getFullYear() * 1 + year));	
	if(hours != null && hours != 0)
		dateObj = new Date(dateObj.setHours(dateObj.getHours() + hours));	
	
	
	d = (dateObj.getDate() < 10) ? dateObj.getDate()  : dateObj.getDate();
	y = dateObj.getFullYear() * 1;
	
	switch(dateFormat)
	{	
		case "dd-mmm-yyyy":
			m = SP_GetMonthName(dateObj.getMonth());
			sDate = d + "-" +m+ "-" + y;
			break;
		case "yyyy-mm-dd":
			m = (dateObj.getMonth() < 10) ? dateObj.getMonth() + 1 : dateObj.getMonth();
			sDate = y + "-" +m+ "-" + d;
			break;
	}

	return sDate;
}

/*
To Compare two dates, this function will return:

+1 if first date is greater than second.
-1 if first date is smaller than second.
 0 if both dates are equal.
"" if any one/both date fields are blank.

Sample Call: SP_CompareDates("txtImpDueDate_date","txtApprovedDueDate_date");
*/
function SP_CompareDates(firstDate, secondDate) {
	if (arguments.length === 2) {
		var date1 =  SP_Trim(document.getElementById(firstDate).value),
			date2 =  SP_Trim(document.getElementById(secondDate).value),
			diff = "";
		
		if (SP_Trim(date1) != "" && SP_Trim(date2) != "") {
			if (languageSelect && languageSelect !== "en_us") {
				var enteredDate1 = date1.split('-'),
					enteredDate2 = date2.split('-');
				
				switch (dateFormat) {
					case "dd-mmm-yyyy":
						date1 = new Date(enteredDate1[2], SP_GetMonthNumber(enteredDate1[1]), enteredDate1[0]);
						date2 = new Date(enteredDate2[2], SP_GetMonthNumber(enteredDate2[1]), enteredDate2[0]);
						break;
					case "yyyy-mm-dd":
						date1 = new Date(enteredDate1[0], enteredDate1[1], enteredDate1[2]);
						date2 = new Date(enteredDate2[0], enteredDate2[1], enteredDate2[2]);
						break;
				}
			}
			else {
				date1 = new Date(date1.replace(/-/g,' '));
				date2 = new Date(date2.replace(/-/g,' '));
			}
		
			diff =  date1 - date2;
			diff = diff > 0 ? 1 : diff < 0 ? -1 : 0;
		}

		return diff;
	}
}

// Note make it sure that Jquery file is included before linking this library

// Default functionality to be performed on load of the SP Library JS
$(function(){

	if(document.getElementById("mastercontrol.user.language") && SP_Trim(document.getElementById("mastercontrol.user.language").value) != "")
	{
		languageSelect = document.getElementById("mastercontrol.user.language").value;
		SP_SetLanguage(languageSelect);
		
		if(SP_GetLanguage() == "ko_kr" ||SP_GetLanguage() == "ja_jp")
			SP_SetFormatDate("yyyy-mm-dd");

	}
	
});
//////////////////////////////////// END DATE FUNCTIONS ////////////////////////////////////////////////////////////////////////

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
				tabName	= tabName.replace(/ /g,'_'); //replace space with underscore
				tabName	= tabName.replace(/\//g,'_'); //replace "/" with underscore Bug 34054
				tabName	= tabName.replace(/&/g,'and'); // replace & sign with 'and'
				tabName	= tabName.replace(/,/g,''); // remove "," from tab name Bug 35570
			
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

////////////////////////////////////Section-5: START Generic Helper FUNCTIONS/////////////////////////////////////////////////////////
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
To encript data.

Arguments:
None

Sample Call: SP_EncryptString();
*/
function SP_EncryptString()
{
	var sepStr = ".a<=~@z>^*15m~Z{$}';!";
	var sepStr_esc = escape(sepStr);
	var split_escString = sepStr_esc.split("%");
	return split_escString.join("+");
}

/*
To get UserID from user name string "Name(ID)".

Arguments:
1)  User name string.

Sample Call: SP_GetUserID(oLeadAuditor[i].value);
*/

function SP_GetUserID(user)
{
	if( SP_Trim(user)!="" && user.indexOf('(')!=-1 )
	{
		try
		{
		   user = user.substring(user.lastIndexOf('(')+1,user.lastIndexOf(')'));
		}catch(ex){};
	}
	return user;
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


function SP_GetRGValue()
{
	var ret = "";
	var radioObj = document.getElementsByName(arguments[0]);
	if(!radioObj)
		ret = "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			ret = radioObj.value;
		else
			ret =  "";
	for(var i = 0; i < radioLength; i++) 
	{
		if(radioObj[i].checked) 
		{
			ret =  radioObj[i].value;
			break;
		}
	}
	return ret;
}
function SP_HasClass(ele,cls) 
{
	if(ele != null)
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function SP_AddClass(ele,cls) 
{
	if(ele != null)
		if (!this.SP_HasClass(ele,cls)) ele.className += " "+cls;
}
	
function SP_RemoveClass(ele,cls) 
{
	if(ele != null)
		if (SP_HasClass(ele,cls)) 
		{
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			ele.className=ele.className.replace(reg,' ');
		}
}
	

function SP_GetTabNameFromField(fieldObj)
{
	var fieldAlt = fieldObj.alt;
	var tabField = fieldAlt.split(" ")[0];
	return SP_Trim(tabField);
}
/*
To perform a specific action on a field/group of fields.

Arguments:

1. Field IDs as comma (,) seprated string.
2. Action, possible actions are 'readonly', 'disabled', 'empty', 'readonly empty' and 'disabled empty'.
3. Flag true/false.

Sample Call: SP_PerformAction("txtCalStdManufacturer,txtCalStdLotNo,txtCalStdCertNo","readonly",true);
*/
function SP_PerformAction()
{
	if(arguments.length == 3)
	{
		var action = arguments[1];
		var flag = arguments[2];
		var fields = arguments[0].split(',');
		var fieldsLength = fields.length;
		var isArray = false;
		for(var i =0 ; i < fieldsLength ; i++)
		{
			var objField = document.getElementById(fields[i]);
			if(objField.type == "radio" || objField.type == "checkbox")
			{
				objField = document.getElementsByName(fields[i]);
				isArray = true;
			}
			
			switch(action)
			{
				case "readonly":
					objField.readOnly = flag;
					if(flag)
					{
						SP_RemoveClass(objField,"EditShadow");
						SP_AddClass(objField,"DisabledFormat");
					}
					else
					{
						SP_AddClass(objField,"EditShadow");
						SP_RemoveClass(objField,"DisabledFormat");
					}
				break;
				
				case "disabled":
					
					if(isArray)
					{
						for(var j = 0; j<objField.length; j++)
						{
							objField[j].disabled = flag;
						}
					}
					else
					{
						objField.disabled = flag;
						if(flag)
						{
							SP_RemoveClass(objField,"EditShadow");
							SP_AddClass(objField,"DisabledFormat");
						}
						else
						{
							SP_AddClass(objField,"EditShadow");
							SP_RemoveClass(objField,"DisabledFormat");
						}
					}
				break;
				
				case "empty"://33882
					objField.value = "";
					if(isArray)
					{
						for(var j = 0; j<objField.length; j++)
						{
							objField[j].checked = false;
						}
					}
				break;
				
				case "readonly empty":
					objField.readOnly = flag;
					if(flag)
					{
						SP_RemoveClass(objField,"EditShadow");
						SP_AddClass(objField,"DisabledFormat");
						objField.value = "";
					}
					else
					{
						SP_AddClass(objField,"EditShadow");
						SP_RemoveClass(objField,"DisabledFormat");
					}
				break;
				
				case "disabled empty":
					
					if(isArray)
					{
						for(var j = 0; j<objField.length; j++)
						{
							objField[j].disabled = flag;
							objField[j].checked = false;
							
						}
					}
					else
					{
						objField.disabled = flag;
						if(flag)
						{
							SP_RemoveClass(objField,"EditShadow");
							SP_AddClass(objField,"DisabledFormat");
							objField.value = "";
						}
						else
						{
							SP_AddClass(objField,"EditShadow");
							SP_RemoveClass(objField,"DisabledFormat");
						}
					}
				break;
			}
		}
	}
}

/*
To make single radio button checked/un-checked

Arguments:

1. Radio group name
2. Value of radio, upon which to perform action
3. Flag true/false.

Sample Call: SP_MakeRadioChecked("rbCheck","Yes",true);
*/

function SP_MakeRadioChecked(rbGroupName,rbSelValue,flg)
{
	var rbGroup = document.getElementsByName(rbGroupName);
	
	if(rbGroup.length == null || typeof(rbGroup.length) == "undefined")
	{
		rbGroup.checked = true;
	}
	else	
	{
	
		for(var i = 0; i<rbGroup.length;i++)
		{
			if(rbGroup[i].value == rbSelValue)
			{
				rbGroup[i].checked = flg;	
			}
		
		}
	
	}
	
}

/*
To Enable / Disabled icon look 

Arguments:
None

Sample Call: SP_ManipulateButtonClasses();
*/

function SP_ManipulateButtonClasses()
{
	var btn = null;
	$(".button_icon").each(function(){
		btn = $(this)
		if(btn.hasClass("launchTask") || btn.hasClass("launchTask_disabled"))
		{
			if(btn.attr("disabled"))
			{
				btn.removeClass("launchTask");
				btn.addClass("launchTask_disabled");
			}	
			else
			{
				btn.removeClass("launchTask_disabled");
				btn.addClass("launchTask");
			}
		}
		else if(btn.hasClass("viewTask") || btn.hasClass("viewTask_disabled"))		
		{
			if(btn.attr("disabled"))
			{
				btn.removeClass("viewTask");
				btn.addClass("viewTask_disabled");
			}	
			else
			{
				btn.removeClass("viewTask_disabled");
				btn.addClass("viewTask");
			}
		}
		else if(btn.hasClass("addTask") || btn.hasClass("addTask_disabled"))		
		{
			if(btn.attr("disabled"))
			{
				btn.removeClass("addTask");
				btn.addClass("addTask_disabled");
			}	
			else
			{
				btn.removeClass("addTask_disabled");
				btn.addClass("addTask");
			}
		}
		else if(btn.hasClass("removeTask") || btn.hasClass("removeTask_disabled"))		
		{
			if(btn.attr("disabled"))
			{
				btn.removeClass("removeTask");
				btn.addClass("removeTask_disabled");
			}	
			else
			{
				btn.removeClass("removeTask_disabled");
				btn.addClass("removeTask");
			}
		}
	});

}

////////////////////////// Start Controller functions to AutoSave //////////////////////////////////////////////////////////////////////////
var AllowAutoSave = true; //This variable is a controller to pause/continue autoSave 

/*
To trigger event of currently focused element on form 

Arguments: None then blur event default/specify eventName as string 

Sample Call: SP_ValidateActiveElement(); Or SP_ValidateActiveElement('click');
*/
function SP_ValidateActiveElement()
{
	try
	{
		var oActiveField = document.activeElement;
		var eFieldEvent = 'blur';
	
		if(arguments.length > 0)
		eFieldEvent = arguments[0];
	
	
		$(oActiveField).trigger(eFieldEvent);
	}
	catch(ex)
	{}
}

/*
To be called onBlur and onFocus of  an element which requires validation on AutoSave 

Arguments: True/false as boolean

Sample Call: onfocus = "SP_ContinueAutoSave(false);" , onblur = "SP_ContinueAutoSave(true);"
*/
function SP_ContinueAutoSave()
{
	var userAgentInfo = navigator.userAgent.toLowerCase();
	
	if(userAgentInfo.indexOf('msie') != -1)
	if(typeof mcAutoSaver != 'undefined')
	{
		if(arguments[0] == true)
		{
			AllowAutoSave = true;
		}
		else
		{
				AllowAutoSave = false;
		}
	}
}
////////////////////////// End Controller functions to AutoSave //////////////////////////////////////////////////////////////////////////

/*User Agent Detection Code*/

var cssua = (function(html, userAgent) {
	'use strict';

	/*const string*/ var PREFIX = ' ua-';

	/*jslint regexp: false, browser: true */

	var R_Top = /^([^(]+)\((.+)\)(.*)$/,
		R_Platform = /\s*([\-\w ]+)[\s\/]([\d_]+\b([\-\._\/]\w+)*)/,
		R_Version = /([\w\-\.]+[\s\/][v]?[\d_]+\b([\-\._\/]\w+)*)/g,

		R_Gecko = /rv[:](\d+(\.\w+)*).*?\bgecko[\/]\w+/,
		R_BlackBerry = /\bblackberry\w*[\s\/]+(\d+(\.\w+)*)/,
		R_desktop = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,
		R_mobile = /(\bandroid\b|\bipad\b|\bipod\b|\bblackberry|\brim tablet os\b|\bwebos\b|\bwindows ce\b|\bwindows phone os\b|\bwindows ce\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
		R_game = /(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/;

	var cssua = {

		/*Map<string,string>*/ parse : function(/*string*/ uaStr) {
			/*Map<string,string>*/ var ua = {};

			uaStr = (''+uaStr).toLowerCase();
			if (!uaStr) {
				return ua;
			}

			var i, count, raw = uaStr.split(/[()]/);
			for (var j=0, rawCount=raw.length; j<rawCount; j++) {
				if (j%2) {
					// inside parens covers platform identifiers
					var platforms = raw[j].split(';');
					for (i=0, count=platforms.length; i<count; i++) {
						if (R_Platform.exec(platforms[i])) {
							var key = RegExp.$1.split(' ').join('_'),
								val = RegExp.$2;

							// if duplicate entries favor highest version
							if ((!ua[key] || parseFloat(ua[key]) < parseFloat(val))) {
								ua[key] = val;
							}
						}
					}

				} else {
					// outside parens covers most version identifiers
					var uas = raw[j].match(R_Version);
					if (uas) {
						for (i=0, count=uas.length; i<count; i++) {
							var parts = uas[i].split(/[\/\s]+/);
							if (parts.length && parts[0] !== 'mozilla') {
								ua[parts[0].split(' ').join('_')] = parts.slice(1).join('-');
							}
						}
					}
				}
			}

			if (R_mobile.exec(uaStr)) {
				// mobile device indicators
				ua.mobile = RegExp.$1;
				if (R_BlackBerry.exec(uaStr)) {
					ua.blackberry = RegExp.$1;
				}

			} else if (R_desktop.exec(uaStr)) {
				// desktop OS indicators
				ua.desktop = RegExp.$1;

			} else if (R_game.exec(uaStr)) {
				// game console indicators
				ua.game = RegExp.$1;
				var game = ua.game.split(' ').join('_');

				if (ua.version && !ua[game]) {
					ua[game] = ua.version;
				}
			}

			// platform naming standardizations
			if (ua.intel_mac_os_x) {
				ua.mac_os_x = ua.intel_mac_os_x.split('_').join('.');
				delete ua.intel_mac_os_x;

			} else if (ua.cpu_iphone_os) {
				ua.ios = ua.cpu_iphone_os.split('_').join('.');
				delete ua.cpu_iphone_os;

			} else if (ua.cpu_os) {
				ua.ios = ua.cpu_os.split('_').join('.');
				delete ua.cpu_os;
			}

			// UA naming standardizations
			if (ua.opera && ua.version) {
				ua.opera = ua.version;
			}

			if (ua.applewebkit) {
				ua.webkit = ua.applewebkit;
				delete ua.applewebkit;

				if (ua.safari) {
					if (ua.chrome || (ua.mobile && !ua.ios)) {
						delete ua.safari;

					} else if (ua.version && !ua.rim_tablet_os) {
						ua.safari = ua.version;
	
					} else {
						ua.safari = ({
							'419': '2.0.4',
							'417': '2.0.3',
							'416': '2.0.2',
							'412': '2.0',
							'312': '1.3',
							'125': '1.2',
							'85': '1.0'
						})[parseInt(ua.safari, 10)] || ua.safari;
					}
				}

			} else if (ua.msie) {
				if (!ua.opera) {
					ua.ie = ua.msie;
				}
				delete ua.msie;

			} else if (R_Gecko.exec(uaStr)) {
				ua.gecko = RegExp.$1;
			}

			if (ua.version) {
				delete ua.version;
			}

			return ua;
		},

		/*string*/ format : function (/*Map<string,string>*/ ua) {
			/*string*/ function format(/*string*/ b, /*string*/ v) {
				b = b.split('.').join('-');
				/*string*/ var css = PREFIX+b;
				if (v) {
					v = v.split(' ').join('_').split('.').join('-');
					var i = v.indexOf('-');
					while (i > 0) {
						// loop through chopping last '-' to end off
						// concat result onto return string
						css += PREFIX+b+'-'+v.substring(0, i);
						i = v.indexOf('-', i+1);
					}
					css += PREFIX+b+'-'+v;
				}
				return css;
			}

			var	uaCss = '';
			for (var b in ua) {
				if (b && ua.hasOwnProperty(b)) {
					uaCss += format(b, ua[b]);
				}
			}

			// user-agent classNames
			return uaCss;
		},

		/* Encodes parsed userAgent object as a compact URI-Encoded key-value collection */
		/*string*/ encode : function(/*Map<string,string>*/ ua) {
			var query = '';
			for (var b in ua) {
				if (b && ua.hasOwnProperty(b)) {
					if (query) {
						query += '&';
					}
					query += encodeURIComponent(b)+'='+encodeURIComponent(ua[b]);
				}
			}
			return query;
		}
	};

	// calculate userAgent
	cssua.userAgent = cssua.ua = cssua.parse(userAgent);

	// append CSS classes to HTML node
	var ua = cssua.format(cssua.ua)+' js';
	if (html.className) {
		html.className = html.className.replace(/\bno-js\b/g, '') + ua;
		
	} else {
		html.className = ua.substr(1);
	}

	return cssua;
})(document.documentElement, navigator.userAgent);

// Bug 33487, Implemented fields shading functionality


function SP_ToggleFieldShadow(oField, clsName, Flag)
{
	if(typeof(oField) == 'string')
	{
		var fID = oField;
		oField = document.getElementById(fID);
		}
	var ObjType = oField.type;
	var sBrowser = "";
	 switch (SP_Trim(ObjType))
	{
	
		case 'text':
		case 'textarea':
		case 'select-multiple':
			switch (clsName)
			 {
				case 'PinkShadow':
					if(Flag)
					{
						
						SP_RemoveClass(oField,"EditShadow");
						SP_AddClass(oField,clsName);
						
					}	
					else
					{
						SP_RemoveClass(oField,clsName);
					}
				break;
				
				case 'EditShadow':
					if(!Flag)
					{
						
						SP_RemoveClass(oField,"PinkShadow");
						SP_AddClass(oField,clsName);
						$(oField).removeClass("DisabledFormat");	//Just remove DisabledFormat Class from select-one
						
					}	
					else
					{
						SP_RemoveClass(oField,clsName);
						if(!SP_ConfirmUserAgentInfo('ie'))
							SP_AddClass(oField,"DisabledFormat");
					}
				break;
						
			 }
		break;
		case 'select-one':
			
			if(SP_ConfirmUserAgentInfo('webkit') || SP_ConfirmUserAgentInfo('android'))
			{
				
				if(oField.parentNode.nodeName.toLowerCase() == 'span')
				{
					 
					 switch (clsName)
					 {
						case 'PinkShadow':
							if(Flag)
							{
								oField.parentNode.className = "";
								oField.parentNode.className = "webkitPinkShadow";	
								
							}	
							else
							{
								oField.parentNode.className = "";
							}
						break;
						
						case 'EditShadow':
							
							if(!Flag)
							{
								
								oField.parentNode.className = "";
								oField.parentNode.className = "webkitEditShadow";
								$(oField).removeClass("EditShadow");	//Just remove EditShadow Class from select-one
								$(oField).removeClass("DisabledFormat");	//Just remove DisabledFormat Class from select-one
								
							}	
							else
							{
								oField.parentNode.className = "";
								if(!SP_ConfirmUserAgentInfo('ie'))
									SP_AddClass(oField,"DisabledFormat");
							}
						break;
																	
					 }
						
						
				}
			
			}
			else
			{
		
				 switch (clsName)
				 {
					case 'PinkShadow':
						if(Flag)
						{
							
							SP_RemoveClass(oField,"EditShadow");
							SP_AddClass(oField,clsName);
							
						}	
						else
						{
							SP_RemoveClass(oField,clsName);
						}
					break;
					
					case 'EditShadow':
						if(!Flag)
						{
							
							SP_RemoveClass(oField,"PinkShadow");
							SP_AddClass(oField,clsName);
							$(oField).removeClass("DisabledFormat");	//Just remove DisabledFormat Class from select-one
							
						}	
						else
						{
							SP_RemoveClass(oField,clsName);
							if(!SP_ConfirmUserAgentInfo('ie'))
								SP_AddClass(oField,"DisabledFormat");
						}
					break;
				
					
				 }
				
			}
		break;
	}
	
}


function SP_SetFieldsFormat(mcEditablePages)
{
	var pageList = new String(mcEditablePages).split(",");
	if(SP_Trim(pageList) != "")
	{
		for(i=0; i<pageList.length; i++)
		{
			
			var pageId = (SP_Trim(pageList[i])*1)+1;
		
			if(pageId >= 2)
			{
				if(pageId < 10)
				{
					pageId = "mcPage_00"+pageId;
				}
				else
				{
					pageId = "mcPage_0"+pageId;
				}

				$("#"+pageId+"").find(":text,textarea").each(function(IndexInput)
				{
				
					if(!$(this).attr("disabled") && !$(this).attr("readonly") && $(this).attr("display") != "none")
					{
						if(!$(this).hasClass("PinkShadow") && !$(this).hasClass("EditShadow"))
							$(this).addClass("EditShadow");
					}
									
				});		
		
				
				$("#"+pageId+"").find("select:enabled").each(function(IndexInput)
				{
						
					if($(this).css("display") != "none")
					{				
						if(SP_ConfirmUserAgentInfo('webkit') || SP_ConfirmUserAgentInfo('android'))
						{
							if(!$(this).attr("multiple"))
							{
								if($(this).parent().get(0).tagName.toLowerCase() != 'span')
								{
									$(this).wrap('<span class="webkitEditShadow"></span>').parent().width(function() {
										return $(this).outerWidth() - 2
									}).height(function() {
										return $(this).outerHeight() - 2
									});
								}
								else if($(this).parent().attr("class") != "webkitEditShadow" && $(this).parent().attr("class") != "webkitPinkShadow")
								{
									$(this).parent().attr("class", "webkitEditShadow");
									
								}
								$(this).removeClass("EditShadow");	//Just remove EditShadow Class from select-one
							}
							else
							{
								if(!$(this).hasClass("PinkShadow") && !$(this).hasClass("EditShadow"))
									$(this).addClass("EditShadow");
							}
						
						}
						else
						{
							if(!$(this).hasClass("PinkShadow") && !$(this).hasClass("EditShadow"))
								$(this).addClass("EditShadow");
							
						}
					}
					
					
				});
				
			}
			
		}

	}
	SP_FormatDisabledFields();
}

function SP_FormatDisabledFields()
{	
	//Bug 44387 - MSCIENSKI - remove check on IE, apply same class to all browsers
	$("textarea:disabled,input:disabled:not(input[type=button]),select:disabled").each(function(IndexInput)
	{
		if(!$(this).hasClass("DisabledFormat"))
		$(this).addClass("DisabledFormat");
										
	});	
}


function SP_ConfirmUserAgentInfo(infoType)
{
	
	var ua = cssua.userAgent;
	var infoFound = false;
	
	for (var key in ua) 
	{
	
		switch(key)
		{
			case infoType:
			infoFound = true;
			return infoFound;
			break;
		}
		if(infoFound)
		break;
	}
	return infoFound;

}

/*
This function will adjust the size of signature fields

Sample Call: SP_AdjustSignFieldSize()
*/
function SP_AdjustSignFieldSize()
{
	var newLineCount = 0;
	var TotalSignLength = 0;

	$("#mcPage_002").find("textarea").each(function()
	{ 
		if(this.id.indexOf('mastercontrol.route.esig.sigstatus') == 0)
		{
			if(this.value != "")
			{
				var newLineCount = this.value.match(/\n/gi);
				if(newLineCount)
				{
					TotalSignLength = newLineCount.length+1;
					var SignStepnum =  this.name.substr(39, this.name.length);
					document.getElementById('mastercontrol.route.esig.sigstatus.step'+SignStepnum).rows=TotalSignLength;
					document.getElementById('mastercontrol.route.esig.timestamps.step'+SignStepnum).rows=TotalSignLength;
					document.getElementById('mastercontrol.route.esig.users.step'+SignStepnum).rows=TotalSignLength;
				}
			}
		}
	});
}

/*
This function is written to eliminate/add Class on certain fields in case form loading on IE8

Sample Call: SP_IE8ShowHideStyle(fieldId, CSSclassName)
*/
function SP_IE8ShowHideStyle()
{
		
		if(arguments.length > 0)
		{
				if(cssua.userAgent.ie)
				{
					var nVersion = cssua.userAgent.ie * 1;
					if(nVersion > 7 && nVersion < 9)
					{
						var oField = document.getElementById(arguments[0]);
						var sDisplay = oField.style.display;
						
						if(sDisplay != 'none')
						SP_AddClass(oField, arguments[1]);
						else
						SP_RemoveClass(oField, arguments[1]);
					
					}
					
				}
		}

}

/*
This function will set the state of related records section in About (T1)
Arguments:
1) ID of Source dropdown.
2) ID of Other Source field.
3) ID of Container containing View Source icon.

Sample Call: SP_SetRelatedRecords("mastercontrol.dataset.recordids.SP_CFG_ChangeControl_Adv_Source","txtOtherSource","ViewSource");
*/
function SP_SetRelatedRecords()
{
	var oSourceLinks = document.getElementById("mastercontrol.links.source");
	var stepNum = document.getElementById("mastercontrol.route.stepnumber").value*1;
	var formStatus = document.getElementById("mastercontrol.hidden.event").value.toLowerCase();
	// Disabled it as per bug 43859
	SP_PerformAction("mastercontrol.task.parentformid","readonly",true);
	
	if(oSourceLinks.length > 0)
	{
		document.getElementById("mastercontrol.task.parentformid").parentNode.style.width = "270px";
		SP_RemoveClass(document.getElementById(arguments[2]),'hide');
		document.getElementById("mastercontrol.links.view.source").disabled = false;
		SP_PerformAction(arguments[0]+","+arguments[1]+","+"mastercontrol.task.parentformid","disabled",true);
	}
	else if(oSourceLinks.length == 0 && (stepNum == 1 || formStatus == "prepopulate" || formStatus == "editform")) 
	{
		SP_PerformAction(arguments[0]+","+arguments[1],"disabled",false);
		SP_PerformAction(arguments[0]+","+arguments[1],"readonly",false);
	}
	else
	{
		SP_PerformAction(arguments[0]+","+arguments[1]+","+"mastercontrol.task.parentformid","disabled",true);
	}
}

/*
This function will show/hide calendar/today date icons as per field's disabled/enabled status.

Arguments:

1. ID of field
*/
function SP_ShowHideCalendar(fieldId)
{
	if($("#"+fieldId).prop("disabled"))
	{
		$("#"+fieldId).next("button").hide().next("button").hide();	
		$("#"+fieldId).removeClass("frm_text");
		$("#"+fieldId).addClass("textfield");
	}
	else
	{
		$("#"+fieldId).next("button").show().next("button").show();	
		$("#"+fieldId).removeClass("textfield");
		$("#"+fieldId).addClass("frm_text");
	}
}

/*
This function will remove frm_text class from disabled date fields.

No arguments required.
*/
function SP_RemoveCalendarClass()
{
	$.each($(".frm_text"),function(j, items)
	{
		if($(this).prop("disabled"))
		{				
			$(this).removeClass("frm_text");
			$(this).addClass("textfield");
		}
	});
}

/*
This function will apply Pink shadow to required fields

No arguments required.
*/
function SP_ApplyPinkShadow()
{
	var objField = "";
	var radioObj = "";
	var RequiredFieldList = SP_Trim(document.getElementById("requiredVariablesList").value);
	RequiredFieldList = RequiredFieldList.split(",");
	$.each($("[class*=PinkShadow]"), function(j, items)
	{
		$(items).removeClass("PinkShadow");
		if(!$(items).prop("disabled") && !$(items).prop("readonly"))
		{
			$(items).addClass("EditShadow");
		}
	});
	
	if(RequiredFieldList.length > 0)
	{
		$.each(RequiredFieldList,function()
		{
			if(SP_Trim(this) != "")
			{
				objField = document.getElementById(this);
				switch(objField.type)
				{
					case "text":
					case "textarea":
					case "select-one":
					case "select-multiple":
						SP_ToggleFieldShadow(objField,"PinkShadow",true);
					break;
				}
			}
		});
	}
}

/*
This function will make required fields read-able by screen readers

No arguments required.
*/
function SP_MakeRequiredFieldsReadable()
{
	var objField = "";
	var radioObj = "";
	var RequiredFieldList = document.getElementById("requiredVariablesList").value;
	RequiredFieldList = RequiredFieldList.split(",");
	
	$(':input[aria-required = "true"]').each(function(){
		$(this).removeAttr("aria-required");
	});
	
	if(RequiredFieldList.length > 0)
	{
		$.each(RequiredFieldList,function()
		{
			if(SP_Trim(this) != "")
			{
				objField = document.getElementById(this);
				switch(objField.type)
				{
					case "radio":
						radioObj = document.getElementsByName(this);
						for(var i = 0; i < radioObj.length; i++) 
						{
							radioObj[i].setAttribute("aria-required", "true");
						}
					break;
					
					default:
						objField.setAttribute("aria-required", "true");
					break;
				}
			}
		});
	}
}

function SP_GetLatestDate()
{
	var fieldID = ""
	var fieldsCount = arguments[1]*1;
	var values = new Array();
	var i = 1;
	
	for(; i<=fieldsCount; i++)  
	{
	   fiedID = "#"+arguments[0]+i+"_date";
	   if($(fiedID).val() !="")
	   {
			values[values.length] = $(fiedID).datepicker("getDate");
	   }   
	}
	if(values.length > 0)
	{
		values.sort(function (a,b){return  b-a;});
		return values[0];
	}
	return "";
}

function SP_ProgramCalendarEvents()
{
	$.each($("[class*= hasDatepicker]"), function()
	{
		if($(this).prop("alt").indexOf("Expiration") == -1)
		{
			var tabName = $(this).prop("alt").split(" ")[0];
			var obj = this;
			if (SP_FieldIsOnEditablePage(this.id,mcEditablePages)) {
				$(this).mcdatepicker('option',{onClose:function(){RefreshFieldProperties(this,tabName)}});
				$("#"+this.id+"TodayButton").on("click",function(){RefreshFieldProperties(obj,tabName)});
			}
		}
	});
}

(function() {
	if (!($('#mastercontrol\\.hidden\\.event').val().toLowerCase() !== 'showform' && (/iphone|ipad|ipod|android|blackberry|opera\smini|windows\sce|palm|mobile\ssafari|bb10|wosbrowser|iemobile|windows\sphone|kindle|opera\smobi/ig.test(navigator.userAgent.toLowerCase()) || window.location.href.indexOf(mcURL) === -1))) {
		MC.makeAPICall({
			method: 'GET',
			uri: 'session',
			successCallback: function(data) {
				if (!!data && !!data.result && !!data.result.comply508) {
					$(':input:disabled:not([type="button"])').each(function(i,el) {
						var $this = $(this);
						var role = '';
						var value = '';
						if ($this.is('[type="checkbox"]')) {
							role = 'role="checkbox" aria-checked="'+$this.is(':checked')+'"';
							value = '&nbsp;';
						} else if ($this.is('[type="radio"]')) {
							role = 'role="radio" aria-checked="'+$this.is(':checked')+'"';
							value = $this.val();
						} else if ($this.is('select:not([multiple])')) {
							role = 'role="listbox" aria-multiselectable="false"';
							var selValue = 'blank';
							var selOpt = $this.find('option:selected');
							if (!!selOpt.length) {
								selValue = (selOpt.text()!='')?selOpt.text():'blank';
							}
							value = selValue + ' selected';
						} else if ($this.is('select[multiple]')) {
							role = 'role="listbox" aria-multiselectable="true"';
							var selValue = 'blank';
							var selOpt = $this.find('option:selected');
							if (!!selOpt.length) {
								selValue = selOpt.text();
							}
							value = selValue + ' selected';
						} else if ($this.is(':text') || $this.is('textarea')) {
							role = 'role="textbox"';
							if ($this.is('textarea')) {
								role += ' aria-multiline="true"';
							}
							value = $this.val();
						}
						$this.after($('<a href="" class="screenreader"' + role + ' aria-disabled="true" aria-label="'+$this.attr('title')+ ' ' + value + '">*</a>')
							.on('click keyup', function(e) {
								e.preventDefault();
							})
							.on('focus', function() {
								if ($this.is('[type="checkbox"]')) {
									$this.data('cssborder',$this.nextAll('span:first').css('border'));
									$this.nextAll('span:first').css('border','dashed 1px #e91');
								} else if ($this.is('[type="radio"]')) {
									$this.data('cssborder',$this.parent('span').next('span').css('border'));
									$this.parent('span').next('span').css('border','dashed 1px #e91');
								} else {
									$this.data('cssborder',$this.css('border'));
									$this.css('border','dashed 1px #e91');
								}
							})
							.on('blur',function() {
								if ($this.is('[type="checkbox"]')) {
									$this.nextAll('span:first').css('border',$this.data('cssborder'));
								} else if ($this.is('[type="radio"]')) {
									$this.parent('span').next('span').css('border',$this.data('cssborder'));
								} else {
									$this.css('border',$this.data('cssborder'));
								}
							})
							.css({
								'position': 'absolute',
								'top':0,
								'left':'-9999px'
							})
						);
					});
				}
			}
		});
	}
})();
//////////////////////////////////// END Generic Helper FUNCTIONS /////////////////////////////////////////////////////////