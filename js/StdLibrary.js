/* StdLibrary.js
*  
*  v1.0
*  December 02, 2014
*
*/

var jQ = jQuery.noConflict();//remove conflict with MasterControl added jQuery library

var textAreaWidth = 610;
var textAreaHeight = 55;
var maxChars = 2000;
var _dynarch_popupCalendar;
var timer;

jQ(function() {
	handleMenuButtonClicks();
	
    jQ('.calendarImage').click(function() {
		var dateId;
		
		if (this.id.indexOf('mastercontrol') == 0) {
			dateId = this.id;
		}
		else {
			var index = this.id.indexOf('Calendar');
			dateId = 'txt' + this.id.substring(3, index) + '_date';
		}

        showCalendar(dateId);
    });
});

function handleMenuButtonClicks() {
	var signOffButton = parent.document.getElementById("button_signoff");
	var signOffArea = parent.document.getElementById("signoff");
	var saveButton = parent.document.getElementById("button_save");
	var saveArea = parent.document.getElementById("save");

	if (signOffButton != null) {
		signOffButton.onmouseup = function() {
			setTaskTitle();														
		}
		signOffButton.onkeypress = function() {
			setTaskTitle();
		}
	}

	if (signOffArea != null) {
		signOffArea.onmouseup = function() {
			setTaskTitle();
		}
		signOffArea.onkeypress = function() {
			setTaskTitle();
		}
	}
	
	if (saveButton != null) {
		saveButton.onmouseup = function() {
			setTaskTitle();														
		}
		saveButton.onkeypress = function() {
			setTaskTitle();
		}
	}

	if (saveArea != null) {
		saveArea.onmouseup = function() {
			setTaskTitle();
		}
		saveArea.onkeypress = function() {
			setTaskTitle();
		}
	}	
}

function setTaskTitle() {
	document.getElementById("mastercontrol.form.title").value = document.getElementById("mastercontrol.form.number").value +": "+ document.getElementById("txtTitle").value;
}

function findAllFieldIds() {
     var fieldIDs = "";

     jQ('[id]').each(function() {
         fieldIDs += this.id + "<br/>";

         jQ('#fieldIDs').html(fieldIDs);
         jQ('#divDebug').show();
     });
}

function enableAllFieldsForDataSave() {
    var allInputElements = document.getElementsByTagName("input");
    var i;
    var j;

    for (i = 0; i < allInputElements.length; i++) {
        if (allInputElements[i].type == "text") {
            if (allInputElements[i].id != null && allInputElements[i].id != "") {
                if (document.getElementById(allInputElements[i].id).disabled)
                    document.getElementById(allInputElements[i].id).disabled = false
            }
        }

        if (allInputElements[i].type == "radio")
            radioButtonsEnableDisableToggle(allInputElements[i].name, false);
    }

    var allSelectElements = document.getElementsByTagName("select");

    for (j = 0; j < allSelectElements.length; j++) {
        if (allSelectElements[j].id != null && allSelectElements[j].id != "")
            document.getElementById(allSelectElements[j].name).disabled = false
    }
}

function radioButtonsEnableDisableToggle(field, flag) {
    var radioFields = document.getElementsByName(field);

    for (var i = 0; i < radioFields.length; i++) {
        radioFields[i].disabled = flag;
    }
}

function areAllRequiredFieldsFilled() {
    var reqdFieldsLength = true;
    var reqdFieldsList = trimString(document.getElementById("requiredVariablesList").value);
    var numOfReqdFields = 0;
    var i;

    if (reqdFieldsList.length <= 0)
        return reqdFieldsLength;

    reqdFieldsList = new String(reqdFieldsList).split(",");
    reqdFieldsLength = reqdFieldsList.length;

    for (i = 0; i < reqdFieldsLength; i++) {
        var reqdField = document.getElementById(reqdFieldsList[i]);
        var reqdFieldType = reqdField.type;

        switch (reqdFieldType) {
            case "radio":
                reqdField = document.getElementsByName(reqdFieldsList[i]);

                if (getCheckedValue(reqdField) != "")
                    numOfReqdFields++;
                break;

            case "checkbox":
                if (reqdField.checked)
                    numOfReqdFields++;
                break;

            case "text":
                if (trimString(reqdField.value) != "")
                    numOfReqdFields++;
                break;

            case "textarea":
                if (trimString(reqdField.value) != "")
                    numOfReqdFields++;
                break;

            case "select-multiple":
                if (reqdField.selectedIndex >= 0)
                    numOfReqdFields++;
                break;

            case "select-one":
                if (reqdField.selectedIndex >= 0)
                    numOfReqdFields++;
                break;

            case "hidden":
                if (trimString(reqdField.value) != "")
                    numOfReqdFields++;
                break;

        }
    }

    return reqdFieldsLength == numOfReqdFields;
}

function setAttachmentLinkFieldSize() {
    var oField = document.getElementById(arguments[0]);
    // Browser check for Safari & Chrome. When items are less than 4.
    if (oField.options.length <= 4 && (navigator.userAgent.indexOf("Safari") > 0 || navigator.userAgent.indexOf("Chrome") > 0)) {
        oField.size = oField.options.length;
        switch (oField.options.length) {
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
    else {
        oField.removeAttribute("style");
        if (oField.length != 0) {
            if (oField.length <= 10) {
                oField.size = oField.length;
            }
            else if (oField.length > 10) {
                oField.size = 10;
            }
            oField.disabled = false;
        }
        else {
            oField.size = 1;
        }
    }
}

function getCheckedValue(sGroupName) {
    var oRadioCheck = document.getElementsByName(sGroupName);
    if (!oRadioCheck)
        return "";

    var nLength = oRadioCheck.length;
    if (nLength == undefined) {
        if (oRadioCheck.checked)
            return oRadioCheck.value;
        else
            return "";
    }
    for (var i = 0; i < nLength; i++) {
        if (oRadioCheck[i].checked)
            return oRadioCheck[i].value;
    }
    return "";
}

function isRadioChecked(rbGroupName, radioValue) {
    var rbGroup = document.getElementsByName(rbGroupName);
    var isChecked = false;

    for (var i = 0; i < rbGroup.length; i++) {
        if (rbGroup[i].checked && rbGroup[i].value == radioValue) {
            isChecked = true;
            break;
        }
    }

    return isChecked;
}

function retainHeightWidth() {
    var i;
	
    for (i = 0; i < document.forms[0].elements.length; i++) {
        if (document.forms[0].elements[i].type == "textarea") {
            if (document.forms[0].elements[i].name.indexOf('mastercontrol.route.esig') < 0) {
				setTextAreaHeightWidth(document.forms[0].elements[i]);
            }
        }
    }
}

function expandTextArea(id) {
	setTextAreaHeightWidth(id);
}

function setTextAreaHeightWidth(oTextArea) {
    var nTextLength = oTextArea.value.length;
    var sTextAreaType = oTextArea.className;
    var nHeight;
	
    if (sTextAreaType.indexOf("textarea") >= 0) {
        nHeight = textAreaHeight;
    }
	
    if (nTextLength > 0 && oTextArea.scrollHeight >= nHeight) {
        oTextArea.style.height = oTextArea.scrollHeight + "px";
    }
	
    if (nTextLength >= maxChars) {
        oTextArea.value = oTextArea.value.substring(0, maxChars);
    }	
}

function assignUser(id, step) {
    var selected = returnSelected(document.getElementById(id));
    assignSelected(selected, step);
}

function returnSelected(sel) {
    if (sel.options.length != 0)
        return sel.options[sel.selectedIndex].text;
}

function assignSelected(user, step) {
    var stepUsersBox = document.getElementById("mastercontrol.route.stepusers.step" + step);

    for (var i = 0; i < stepUsersBox.length; i++) {
        var name = stepUsersBox[i].text;

        if (name == user)
            stepUsersBox.selectedIndex = i;
    }
}

function checkWin() {
    timer = self.setInterval("clearTimer();", 10);
}

function clearTimer() {
    try {
        if (wDocTypes.closed) {
            setSize();
            timer = window.clearInterval(timer);
        }

    }
    catch (ex) {
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;

    if (typeof window.onload != 'function')
        window.onload = func;
    else {
        window.onload = function () {
            if (oldonload)
                oldonload();

            func();
        }
    }
}

function SP_PrependBlankToKeyword(sKeyword) {
    var oAllCMB = document.getElementsByTagName('select');
    if (oAllCMB.length != 0) {
        for (var x = 0; x < oAllCMB.length; x++) {
            var cmbID = oAllCMB[x].id;
            if (cmbID.indexOf(sKeyword) != -1 && oAllCMB[x].type != "select-multiple") {
                SP_CheckAndAddBlank(cmbID);
            }
        }
    }
}

function SP_CheckAndAddBlank(selectID) {
    var oCMB = document.getElementById(selectID);
    var oCMBLength = oCMB.options.length;
    var doesBlankExist = false;
    if (oCMBLength != 0) {
        for (var i = 0; i < oCMBLength; i++) {
            if (oCMB.options[0].text == "" && oCMB.options[0].value == "") {
                doesBlankExist = true;
            }
        }

        if (!doesBlankExist) {
            SP_InsertItemInSelect("", "", 0, oCMB);
        }
    }
}

function SP_InsertItemInSelect() {
    if (arguments.length == 4) {
        var oCMB = arguments[3];
        var elOptNew = document.createElement("option");
        elOptNew.text = arguments[0];
        elOptNew.value = arguments[1];

        if (oCMB.selectedIndex == 0) {
            var isOptDefault = oCMB.options[0].defaultSelected;
            if (!isOptDefault) {
                elOptNew.selected = true;
            }
        }

        oCMB.options.add(elOptNew, 0);
    }
}

function selectRouteLaunched() {
    var oListRoute = document.getElementById(arguments[1]);
    var isRouteExist = false;
    var itemFace;
    var i;

    for (i = 0; i < oListRoute.length; i++) {
        itemFace = oListRoute[i].text;

        if (itemFace.toLowerCase() === arguments[0].toLowerCase()) {
            oListRoute.selectedIndex = i;
            isRouteExist = true;
            break;
        }
    }

    if (!isRouteExist) {
        alert("The task you are trying to launch is not available.");
    }
}

function isRouteSelected() {
    var oRoutes = document.getElementById(arguments[1]);
    var itemFace;
    var isSelected;
    var i;

    for (i = 0; i < oRoutes.length; i++) {
        itemFace = oRoutes.options[i].text;

        if (itemFace.toLowerCase() === arguments[0].toLowerCase()) {
            return oRoutes.options[i].selected;
            break;
        }
    }
}

function setNextStepNumber(nextstepnumber) {
    jQ('#mastercontrol\\.route\\.nextstepnumber').val(nextstepnumber);
}

function xmlQuery(queryURL) {
    var Url = queryURL;
    var i;
    var queryResults = Array();
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", Url, false);
    xmlHttp.send(null);
    var results = eval("(" + xmlHttp.responseText + ")");
    for (i = 0; i < results.result.length; i++) {
        queryResults.push(results.result[i]);
    }
    return queryResults;
}

function cmbClear(id) {
    var cmb = document.getElementById(id);
    var i;
    if (cmb != null) {
        cmb.options.length = 0;
    }
}

function trimString(value) {
    value = new String(value);
    return value.replace(/^\s+|\s+$/g, "");
}

// This function shows the calendar under the element having the given id.
// It takes care of catching "mousedown" signals on document and hiding the
// calendar if the click was outside.
function showCalendar(id) {
    var el = document.getElementById(id);

    // we already have some calendar created
    if (_dynarch_popupCalendar != null) {
        _dynarch_popupCalendar.hide();		// so we hide it first.
    }
    // first-time call, create the calendar.
    else {
        var cal = new Calendar(0, null, selected, closeHandler);
        cal.weekNumbers = false;		// hide the week numbers
        _dynarch_popupCalendar = cal;   // remember it in the global var
        cal.setRange(1900, 2070);       // min/max year allowed.
        cal.create();
    }

    _dynarch_popupCalendar.setDateFormat("%d %b %Y");    // set the specified date format
    _dynarch_popupCalendar.sel = el;                 // inform it what input field we use

    // the reference element that we pass to showAtElement is the button that
    // triggers the calendar.  In this example we align the calendar bottom-right
    // to the button.
    _dynarch_popupCalendar.showAtElement(el, "Br");        // show the calendar

    return false;
}

// This function gets called when the end-user clicks on some date.
function selected(cal, date) {
    cal.sel.value = date; // just update the date in the input field.

    if (cal.dateClicked) {
        cal.callCloseHandler();
    }

    handleCalendarClicks(cal.sel);
}



function handleCalendarClicks(field) {
    var todaysDate = new Date(getTodaysDate());
    var proposedImplDate = new Date(document.getElementById(field.id).value);


    var timeDiff = Math.abs(todaysDate.getTime() - proposedImplDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    jQ('#txtImplDaysLeft').val(diffDays);
}



function getTodaysDate() {
    var today = setDateFormat(new Date());
    return today;
}

function setDateFormat(thisDate) {
    var allMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var day = thisDate.getDate();
    var monthInteger = thisDate.getMonth();
    var year = thisDate.getFullYear();
    var monthString = "";

    switch (monthInteger) {
        case 0 :
            monthString = allMonths[0];
            break;
        case 1 :
            monthString = allMonths[1];
            break;
        case 2 :
            monthString = allMonths[2];
            break;
        case 3:
            monthString = allMonths[3];
            break;
        case 4:
            monthString = allMonths[4];
            break;
        case 5:
            monthString = allMonths[5];
            break;
        case 6:
            monthString = allMonths[6];
            break;
        case 7:
            monthString = allMonths[7];
            break;
        case 8:
            monthString = allMonths[8];
            break;
        case 9:
            monthString = allMonths[9];
            break;
        case 10:
            monthString = allMonths[10];
            break;
        case 11:
            monthString = allMonths[11];
            break;
        case 12:
            monthString = allMonths[12];
            break;
    }

    if (day < 10)
        day = "0" + day;

    thisDate.value = day + " " + monthString + " " + year;
    return thisDate.value;
}

// And this gets called when the end-user clicks on the _selected_ date,
// or clicks on the "Close" button.  It just hides the calendar without
// destroying it.
function closeHandler(cal) {
    cal.hide();                        // hide the calendar
    _dynarch_popupCalendar = null;
}

function setFormDateFormat(thisDate) {
    var allMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var day = thisDate.getDate();
    var monthInteger = thisDate.getMonth();
    var year = thisDate.getFullYear();
    var monthString = "";

    switch (monthInteger) {
        case 0 :
            monthString = allMonths[0];
            break;
        case 1 :
            monthString = allMonths[1];
            break;
        case 2 :
            monthString = allMonths[2];
            break;
        case 3:
            monthString = allMonths[3];
            break;
        case 4:
            monthString = allMonths[4];
            break;
        case 5:
            monthString = allMonths[5];
            break;
        case 6:
            monthString = allMonths[6];
            break;
        case 7:
            monthString = allMonths[7];
            break;
        case 8:
            monthString = allMonths[8];
            break;
        case 9:
            monthString = allMonths[9];
            break;
        case 10:
            monthString = allMonths[10];
            break;
        case 11:
            monthString = allMonths[11];
            break;
        case 12:
            monthString = allMonths[12];
            break;
    }

    if (day < 10)
        day = "0" + day;

    thisDate.value = day + " " + monthString + " " + year;

    return thisDate.value;

}

function mcOptSearch(id, txt) {
    clearTimeout(mcSearchTimer);
    mcOptSaveData(id);
    mcSearchTimer = setTimeout('mcOptSearchGo("' + id + '", "' + txt + '");', 200); //wait till they stop typing for a sec
}

function mcOptSearchGo(id, txt) {
    txt = txt.toLowerCase();
    var last = mcSearchLast[id];
    mcSearchLast[id] = txt;
    var selectBox = document.getElementById(id);
    var temp = mcRegexEscape(txt);
    temp = temp.split(" ");
    var regexes = new Array();
    for (var i = 0; i < temp.length; ++i)
        regexes[i] = new RegExp(temp[i], "i");

    if (txt.length < last.length || txt.substring(0, last.length) != last) //backspace or diff string
    {
        selectBox.innerHTML = ""; //remove all children

        //search mcOptOrigVals
        for (var i = 0; i < mcOptOrigVals[id].length; ++i) {
            //insert matching children
            if (mcMatchesAll(mcOptOrigVals[id][i], regexes)) {
                var opt = document.createElement('option');
                opt.setAttribute('value', mcOptOrigKeys[id][i]);
                opt.innerHTML = mcOptOrigVals[id][i];
                selectBox.appendChild(opt);
            }
        }
    }
    else {
        var opts = selectBox.options;
        for (var i = opts.length - 1; i >= 0; --i) //filter current children
        {
            if (!mcMatchesAll(opts[i].innerHTML, regexes))
                selectBox.removeChild(opts[i]);
        }
    }
}

function mcMatchesAll(text, regexes) {
    for (var i = 0; i < regexes.length; ++i) {
        if (!text.match(regexes[i]))
            return false;
    }
    return true;
}

function mcOptSaveData(id) {
    if (mcOptOrigKeys[id] == null) {
        mcOptOrigKeys[id] = new Array();
        mcOptOrigVals[id] = new Array();
        mcSearchLast[id] = "";
        var opts = document.getElementById(id).options;
        for (var i = 0; i < opts.length; ++i) {
            mcOptOrigKeys[id][i] = opts[i].value;
            mcOptOrigVals[id][i] = opts[i].innerHTML;
        }
    }
}

function mcRegexEscape(text) {
    var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
    var re = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
    return text.replace(re, '\\$1');
}

function IEPrintScale() {
    if (parent.document.getElementById("print") && navigator.userAgent.indexOf("Firefox") == -1) {
        var myRatio = parseInt((parseInt(parent.document.body.offsetWidth) / 640) * 100);
        myRatio = (myRatio > 100 ? myRatio : 100);
        document.styleSheets[document.styleSheets.length - 1].rules[0].style.zoom = myRatio + "%";
    }
}