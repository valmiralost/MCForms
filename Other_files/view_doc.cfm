<!DOCTYPE html>
<style type="text/css">

/*--------------------------------------------------
  REQUIRED to hide the non-active tab content.
  But do not hide them in the print stylesheet!
  --------------------------------------------------*/
.tabberlive .tabbertabhide {
	display:none;
}

/*--------------------------------------------------
  .tabber = before the tabber interface is set up
  .tabberlive = after the tabber interface is set up
  --------------------------------------------------*/
.tabber {
}

.tabberlive {
	overflow:none;
	width:820px;
}

/*--------------------------------------------------
  ul.tabbernav = the tab navigation list
  li.tabberactive = the active tab
  --------------------------------------------------*/
ul.tabbernav
{
	margin:0;
	padding: 23px 1px;
	border-bottom: 1px solid #778;
	list-style:none;
}

ul.tabbernav li
{
	float:left;
	background:url(../../../images/tab_left.gif) no-repeat left top;
	margin:0;
	padding:0 0 0 8px;
}

ul.tabbernav li a
{
	float:left;
	display:block;
	width:.1em;	  
	background:url(../../../images/tab_right.gif) no-repeat right top;
	padding:5px 14px 4px 6px;
	text-decoration:none;
	color: #000;
	white-space:nowrap;
	font-family : Arial;
	font-size : 11px;
	color : #000000;
	width:auto;
}

/*Adding New Class Spike 24911*/
ul.tabbernav li.tabberactive
{
 background-image:url(../../../images/tab_left_on.gif);
 border-bottom: 1px solid #ffffff;
}

ul.tabbernav li.tabberactive a
{
 background-image:url(../../../images/tab_right_on.gif);
 border-bottom: 1px solid #ffffff;
}

/*--------------------------------------------------
  .tabbertab = the tab content
  Add style only after the tabber interface is set up (.tabberlive)
  --------------------------------------------------*/
.tabberlive .tabbertab {
 padding:5px;
 border:1px solid #aaa;
 border-top:0;
 
}

#tabHeading{
	display:none;
}

/*==================================================
		END TABING INTERFACE CSS
*===================================================*/

.container{
	font-family:Arial;
	font-size:11px;
}

/* FORM HEADER RELEVANT CSS STARTS */
.formHeader{
	width:700px;
}

/* CSS added to cater doctype issue in header */
.formHeader input.textfield{
	width:99%;
}

.formHeader span.cell{
	width: 205px;
	float:left;
	margin-right: 10px;/*5px;*/
}

.formHeader div{
	float:left;
}


/* FORM HEADER RELEVANT CSS ENDS */

/* FORM BODY RELEVANT CSS STARTS */
.formBody{

}

.formBody subSectionDataRight{
	float:right;
}

.sectionData{
	padding-top:3px;
	width:780px
}

.sectionData span.cell{
	width: 300px;
	float:left;
	/*margin-right:5px;*/
}

.sectionData span.longcell{
	width: 710px;
	float:left;
	margin-right:5px;
}

.sectionData span.mediumcell{
	width: 680px;
	float:left;
	margin-top:3px;
	margin-left:25px;
}

.mleft25top3 {
margin-left:25px;
margin-top:3px;
}

.formBody input{
	float:left;
}

.sectionData span.spacer{
	width:110px;
	float:left;
}

.subSectionDataRight{
	width:366px;
	float:right;
	padding:2px;
}

.subSectionDataLeft{
	float:left;
	width:300px;
	padding:2px;
}

.sectionHeading{
	font-family : Arial; 
	font-size : 12px; 
	color : #000000; 
	font-weight : bold; 
	margin-left : 0px; 
	border-bottom : solid 2px #D9D9D9; 
	height: .2in; 
	padding-top:5px; 
	width:720px;
	
} 

.sectionHeading span.right{
	float:right
}
.sectionHeading span.left{
	float:left
}

/* FORM BODY RELEVANT CSS ENDS */

/* FORM FIELDS CSS STARTS */
/* CSS 3 Starts 
input[type="text"], select, textarea{
	
	-webkit-border-radius:5px;
	-moz-border-radius:5px;
	border-radius:5px;
}

select[multiple="multiple"]{
	width:302px;
}

input:focus, select:focus, textarea:focus{
	box-shadow:0 0 8px #0099FF;
    behavior:url('PIE.htc');
	outline:none;
}


 CSS 3 Ends */

.textfield{
	border:1px solid #A5C0dF;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color : #146; 
	margin-bottom:1;
	width: 100%;
}

.selectfield {
	border:1px solid #A5C0dF;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color : #146; 
	margin-bottom:1;
	width: 100%;
}

.longtextfield {
	border:1px solid #A5C0dF;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color : #146; 
	margin-bottom:5;
	overflow:hidden;
	resize:none;
	width: 100%;

}
.textfield50px
{
	border:1px solid #A5C0dF;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color : #146; 
	margin-bottom:1;
	width: 50px;
}

/*.DateField
{	
	border:1px solid #A5C0dF;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color : #146; 
	margin-bottom:1;
	width: 91%;
}*/

.frm_text{
	border:1px solid #A5C0dF;
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color : #146; 
	margin-bottom:1;
	width:83%;
}

.btn_icon {
width:10px; 
float:left; 
margin-left:10px; 
margin-top:10px;
}


.button{ 
	font: 11px Arial; 
	width: 125px; 
}
/* FORM FIELDS CSS ENDS */

/* SIGNATURE SECTION RELEVANT CSS STARTS */
.signatureData {
	padding-top:10px;
	padding-bottom:10px;
	text-align:left;
	width:700px;
}
.signatureTable {
	border-width:0;
	border-top:1px solid #000000;
	border-right:1px solid #000000;
	width:700;
	text-align:left;
}
.signatureTable thead {
	height:10px;
}
.signatureTable thead th {
	font:8pt Tahoma;
	background-color:#EAEAEA;
	padding-left:5px;
	border-left:1px solid #000000;
	border-bottom:1px solid #000000;
}

.signatureTable thead th label{
	text-align:left;
}

.signatureTable tbody td {
	border-left:1px solid #000000;
	border-bottom:1px solid #000000;
	text-align:center;
}
.signatureName {
	width:200px;
}
.signatureDate {
	width:200px;
}
.signatureStatus {
	width:200px;
}
.signatureField {
	font:9pt Helvetica;
	color:#0000FF;
	overflow:hidden;
	border:0;
	width:97%;
	resize:none;
}

/* SIGNATURE SECTION RELEVANT CSS ENDS */


/* ICON RELEVANT CSS */
.button_icon{ 
	font: 11px Arial; 
	background:#FFFFFF;
	background-repeat:no-repeat;
	height:24px;
	width:24px;
	border:none;
	cursor:pointer;
	margin-top:-2px;
	-webkit-print-color-adjust:exact;
}

.launchTask{
	background-image:url(../../../images/NEW/button_launch.gif);
	-webkit-print-color-adjust:exact;

}

.launchTask_disabled{
	background-image:url(../../../images/NEW/button_launch_bw.gif);
	-webkit-print-color-adjust:exact;
}

.viewTask{
	background-image:url(../../../images/NEW/button_view_infocards.gif);
	-webkit-print-color-adjust:exact;
}

.viewTask_disabled{
	background-image:url(../../../images/NEW/button_view_infocards_bw.gif);
	-webkit-print-color-adjust:exact;
}

.addTask{
	background-image:url(../../../images/NEW/button_new.gif);
	-webkit-print-color-adjust:exact;
}

.addTask_disabled{
	background-image:url(../../../images/NEW/button_new_bw.gif);
	-webkit-print-color-adjust:exact;
}
.removeTask{
	background-image:url(../../../images/NEW/button_delete.gif);
	-webkit-print-color-adjust:exact;
}
.removeTask_disabled{
	background-image:url(../../../images/NEW/button_delete_bw.gif);
	-webkit-print-color-adjust:exact;
}
.changeHistory{
	background: none;
	border: none;
	cursor:pointer;
	color:#0000FF;
	text-decoration:underline;
}

/* GENERIC CSS CLASSES STARTS */
.clearBoth{
	clear:both
}

.dynamicLabel {
	border:0px;
	font-family: Arial;
	font-size : 11px;
	color : #000000;
    text-align: right; vertical-align: middle; padding-right:0px;
}

.dynamicRequiredLabel {
	border:0px;
	font-family: Arial;
	font-size : 11px;
	color : #FF0000;
    text-align: right; vertical-align: middle; padding-right:0px;
}
/* borderless class */
.noborder{
	border: none;
}
/* GENERIC CSS CLASSES ENDS */


/* Change Control Advanced Relevant CSS */
.message{
	font: 9pt Arial;
	padding-left: 5px;
	padding-top: 4px;
}

.sectionData span.span3Adjusted{
	width:150px;
	float:left;
	padding-top:1px;
	padding-right:20px;
}

.sectionData span.spacer110x{
	width:110px;
	float:left;
	padding-top:1px;
}
/* New Field Formatting rules; bug 33487 */

.PinkShadow{
-webkit-appearance: none;
box-shadow: 0px 0px 5px #FF0000; 
-moz-box-shadow: 0px 0px 5px #FF0000;    
-webkit-box-shadow: 0px 0px 5px #FF0000;    
-o-box-shadow: 0px 0px 5px #FF0000;
}

.EditShadow{
/*background:white;*/
-webkit-appearance: none;
box-shadow: 0px 0px 5px #FFA500; 
-moz-box-shadow: 0px 0px 5px #FFA500;    
-webkit-box-shadow: 0px 0px 5px #FFA500;   
-o-box-shadow: 0px 0px 5px #FFA500;
}

.webkitEditShadow{

border-radius:1px;
 box-shadow: 0px 0px 4px 4px #FFE3B2;
-moz-box-shadow: 0px 0px 4px 4px #FFE3B2;    
-webkit-box-shadow: 0px 0px 4px 4px #FFE3B2;   
}

.webkitPinkShadow{

border-radius:1px;
 box-shadow: 0px 0px 4px 4px #FF0000;
-moz-box-shadow: 0px 0px 4px 4px #FF0000;    
-webkit-box-shadow: 0px 0px 4px 4px #FF0000;   
}

.webkitDisabledColor{

background-color:#EBEBE4;
}

.hide {
	display: none;
}

.DisabledFormat{
color:#808080;
background-color:#FFFFFF;
-webkit-text-fill-color:#808080;


}
/* Class Added, to show space between field and calendar icon */
img.ui-datepicker-trigger
{
	width:16px;
	height:14px;
	margin-left:5px;
}

.subfield img {
	position: relative;
	top: 0px;
	cursor:pointer;
}
/* Class Added, to show space between field and calendar icon ENDS */

/* Bug Ref 33469, 33707 */
span.riskmatrix
{
	color:#0000FF;
	font-family : Arial; 
	text-decoration:underline;
	cursor:pointer;
}
.redColortextfield
{ 
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color: #CC0000; 
}
.greenColortextfield
{ 
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color: #006600; 
}
.yellowColortextfield
{ 
	font-family: Arial, Helvetica, sans-serif;
	padding: 2px;
	font-size : 11px;
	color: #FF9900; 
}
.vSpacer{
	margin-top:10px;
	float:left;
}
.Spacer {
	margin-top:10px;
	float:left;
}
</style>
<!--[if IE ]>
<style type="text/css">
.sectionData input.longTextfield{
	width:710px;
	float:left;
}
.sectionData span.spacer110x{
	width:110px;
	float:left;
	padding-top:4px;
}
.sectionData span.span3Adjusted{
	width:150px;
	float:left;
	padding-top:4px;
	padding-right:20px;
}
</style>
<![endif]-->
<style media="print">
	.container{
		width:100%;
		zoom:110%;
	}
	.tabbernav,.tabbernav{
		display:none;
	}
	
	.tabberlive .tabbertabhide{
		display:block;
	}
	
	.tabberlive .tabbertab{
		border-width:0;
	}
	
	#tabHeading{
		display:block;
		font-weight:bold;
		font-size:14px;
	}
	.signatureTable {
		width:100%;
	}
	.button_icon{
		display:block;
	}
	.hide {
		display: block;
	}
	.print-hide {
		display: none;
	}
	.Slide {
		display: block;
	}
	* {
		position: static !important;
		box-sizing: border-box;
		line-height: normal;
	}
	body {
		margin: 0;
		overflow-y: visible;
	}
	.container {
		display: inline;
		float: none !important;
	}
	.print-div {
		border: solid 1px #A5C0dF;
		padding: 2px;
		page-break-inside: avoid;
		min-height: 1em;
	}
	.mcPage {
		padding: 3em;
		overflow-y: visible;
	}
	.vSpacer {
		float: none !important;
		clear: both;
		display: inline;
		page-break-inside: avoid;
	}
	.Spacer {
		float: none !important;
		clear: both;
		display: inline;
		page-break-inside: avoid;
	}
	.vSpacer * {
		float: none !important;
	}
	.sectionHeading {
		display: inline;
	}
	@page {
		size: A4;
		margin: 0.5in;
	}
</style>
<!--[if IE ]>
<style type="text/css" media="print">
.container{
		width:100%;
		zoom:130%;
	}
</style>
<![endif]-->
<!--[if IE 8]>
<style type="text/css">

.PinkShadow{
-webkit-appearance: none;
box-shadow: 0px 0px 5px #FF0000; 
-moz-box-shadow: 0px 0px 5px #FF0000;    
-webkit-box-shadow: 0px 0px 5px #FF0000;    
-o-box-shadow: 0px 0px 5px #FF0000;
behavior: url(../../../css/Forms_HTML/PIE.htc);
}

.EditShadow{
/*background:white;*/
-webkit-appearance: none;
box-shadow: 0px 0px 5px #FFA500; 
-moz-box-shadow: 0px 0px 5px #FFA500;    
-webkit-box-shadow: 0px 0px 5px #FFA500;   
-o-box-shadow: 0px 0px 5px #FFA500;
behavior: url(../../../css/Forms_HTML/PIE.htc);
}

</style>
<![endif]-->
<form id="Issue_Review" method="post" action="">
  <div class="container">
    <!-- Container Start -->
    <div class="formHeader">
      <!-- Form Header Start -->
      <div> <span class="cell">
        <label>#mastercontrol.translate.SP_TRANS_ISSUE.H_L1#</label>
        </span> <span class="cell">
        <label>#mastercontrol.translate.SP_TRANS_ISSUE.H_L2#</label>
        </span> <span class="cell">
        <label>#mastercontrol.translate.SP_TRANS_ISSUE.H_L3#</label>
        </span> </div>
      <div class="clearBoth"></div>
      <div id="mcPage_001">
        <!-- Page 1 Start -->
        <span class="cell">
        <input type="text" name="mastercontrol.form.number" id="mastercontrol.form.number" title="#mastercontrol.translate.SP_TRANS_ISSUE.H_L1#" alt="Form Number" class="textfield" disabled="true" maxlength="30"/>
        </span> <span class="cell">
        <input type="text" name="mastercontrol.route.stepname" id="mastercontrol.route.stepname" title="#mastercontrol.translate.SP_TRANS_ISSUE.H_L2#" alt="Current Step" class="textfield" disabled="true" maxlength="30"/>
        </span> <span class="cell">
        <input type="text" name="mastercontrol.route.stepduedate" id="mastercontrol.route.stepduedate" title="#mastercontrol.translate.SP_TRANS_ISSUE.H_L3#" alt="Step Due Date" class="textfield" disabled="true" maxlength="30"/>
        </span>
        <input type="button" name="mastercontrol.task.mapped.launch.ER" id="mastercontrol.task.mapped.launch.ER" title="#mastercontrol.translate.SP_TRANS_ISSUE.H_L4#" class="button_icon launchTask" value=""  onmouseup="LaunchExtensionRequest();"/>
        <input type="button" name="mastercontrol.links.view.Extension Request" id="mastercontrol.links.view.Extension Request" title="#mastercontrol.translate.SP_TRANS_ISSUE.H_L5#" class="button_icon viewTask" value=""/>
      </div>
      <!-- Page 1 End -->
      <div class="clearBoth"></div>
    </div>
    <!-- Form Header End -->
    <div class="clearBoth"></div>
    <div class="formBody">
      <!-- Form Body Start -->
      <div class="tabber" id="IRTabs">
        <!-- Tabber Start -->
        <div class="tabbertab" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1#" id="About">
          <!-- About (T1) Start -->
          <div id="mcPage_002" class="mcPage mcPageDiv">
            <!-- Page 2 Start -->
            <span id="tabHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T1#</span>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T1_S1#</div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T1_L1#</label>
              </span> <span class="spacer"> &nbsp;</span> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T1_L2#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_Source" class="selectfield" id="mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_Source" onchange="RefreshFieldProperties(this, 'T1');" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L1#" alt="T1 Source">
              </select>
              </span> <span class="spacer"> &nbsp;</span> <span class="cell" style="padding-right:10px;">
              <input name="mastercontrol.task.parentformid" type="text" class="textfield" id="mastercontrol.task.parentformid" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L2#" alt="T1 Linked Source" maxlength="30">
              </span> <span id="ViewSource" class="hide print-hide" style="padding-left:10px;">
              <input name="mastercontrol.links.view.source" type="button" class="button_icon viewTask" id="mastercontrol.links.view.source" title="T#mastercontrol.translate.SP_TRANS_ISSUE.T1_L3#" alt="View Source" value="">
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <label>&nbsp; </label>
              </span> <span class="spacer"> &nbsp;</span> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T1_L4#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">&nbsp;</span> <span class="spacer">&nbsp;</span> <span class="cell">
              <input name="txtOtherSource" type="text" class="textfield" id="txtOtherSource" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L4#" alt="T1 Other Source" maxlength="30">
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T1_S2#</div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T1_L5#</label>
              </span> <span class="spacer"> &nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <input type="text" class="textfield50px" name="txtNumberOfRecords_num" id="txtNumberOfRecords_num" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L5#" alt="T1 Number of Records" size="4" disabled="true" maxlength="4"/>
              <input name="mastercontrol.links.add.RelatedQERecords" type="button" class="button" id="mastercontrol.links.add.RelatedQERecords" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L3#" value="View / Link InfoCards" onmouseup="SP_CheckWin(SetNumOfRecords);" onfocus="SetNumOfRecords();"/>
              <select name="mastercontrol.links.RelatedQERecords" size="1" multiple="multiple" readonly="yes" id="mastercontrol.links.RelatedQERecords" title="Number of Records List" class="hide print-hide">
              </select>
              </span> <span class="spacer"> &nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionHeading"><span class="left">#mastercontrol.translate.SP_TRANS_ISSUE.T1_S3#</span><span class="right">
              <input type="button" name="mastercontrol.changehistory" id="mastercontrol.changehistory" value="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L7#" class="changeHistory"/>
              </span></div>
            <div class="sectionData">
              <!------------------------Sig1 Start-------------------------->
              <input type="text" id="mastercontrol.route.stepnameat.step1" name="mastercontrol.route.stepnameat.step1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L12#" alt="Step1 Esig Meaning" value="" size="100" class="noborder" readonly="yes" />
              <div class="signatureData">
                <table class="signatureTable" cellpadding="0" cellspacing="0">
                  <thead>
                    <tr>
                      <th scope="col" class="signatureName">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#</th>
                      <th scope="col" class="signatureDate">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#</th>
                      <th scope="col" class="signatureStatus">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><textarea id="mastercontrol.route.esig.users.step1" name="mastercontrol.route.esig.users.step1" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#" alt="Step1 Name" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.timestamps.step1" name="mastercontrol.route.esig.timestamps.step1" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#" alt="Step1 Date" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.sigstatus.step1" name="mastercontrol.route.esig.sigstatus.step1" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#" alt="Step1 Signoff Status" readonly="readonly"></textarea></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!------------------------Sig1 End-------------------------->
            <div class="clearBoth"></div>
            <div class="sectionData">
              <!------------------------Sig2 Start-------------------------->
              <input type="text" id="mastercontrol.route.stepnameat.step2" name="mastercontrol.route.stepnameat.step2" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L12#" alt="Step2 Esig Meaning"  value="" size="100" class="noborder" readonly="yes" />
              <div class="signatureData">
                <table class="signatureTable" cellpadding="0" cellspacing="0">
                  <thead>
                    <tr>
                      <th scope="col" class="signatureName">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#</th>
                      <th scope="col" class="signatureDate">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#</th>
                      <th scope="col" class="signatureStatus">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><textarea id="mastercontrol.route.esig.users.step2" name="mastercontrol.route.esig.users.step2" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#" alt="Step2 Name" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.timestamps.step2" name="mastercontrol.route.esig.timestamps.step2" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#" alt="Step2 Date" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.sigstatus.step2" name="mastercontrol.route.esig.sigstatus.step2" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#" alt="Step2 Signoff Status" readonly="readonly"></textarea></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!------------------------Sig2 End-------------------------->
            <div class="clearBoth"></div>
            <div class="sectionData">
              <!------------------------Sig3 Start-------------------------->
              <input type="text" id="mastercontrol.route.stepnameat.step3" name="mastercontrol.route.stepnameat.step3" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#3 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L12#" alt="Step3 Esig Meaning"  value="" size="100" class="noborder" readonly="yes" />
              <div class="signatureData">
                <table class="signatureTable" cellpadding="0" cellspacing="0">
                  <thead>
                    <tr>
                      <th scope="col" class="signatureName">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#</th>
                      <th scope="col" class="signatureDate">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#</th>
                      <th scope="col" class="signatureStatus">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><textarea id="mastercontrol.route.esig.users.step3" name="mastercontrol.route.esig.users.step3" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#3 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#" alt="Step3 Name" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.timestamps.step3" name="mastercontrol.route.esig.timestamps.step3" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#3 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#" alt="Step3 Date" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.sigstatus.step3" name="mastercontrol.route.esig.sigstatus.step3" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#3 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#" alt="Step3 Signoff Status" readonly="readonly"></textarea></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!------------------------Sig3 End-------------------------->
            <div class="clearBoth"></div>
            <div class="sectionData">
              <!------------------------Sig4_1 Start-------------------------->
              <input type="text" id="mastercontrol.route.stepnameat.step4_1" name="mastercontrol.route.stepnameat.step4_1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L12#" alt="Step4_1 Esig Meaning"  value="" size="100" class="noborder" readonly="yes" />
              <div class="signatureData">
                <table class="signatureTable" cellpadding="0" cellspacing="0">
                  <thead>
                    <tr>
                      <th scope="col" class="signatureName">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#</th>
                      <th scope="col" class="signatureDate">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#</th>
                      <th scope="col" class="signatureStatus">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><textarea id="mastercontrol.route.esig.users.step4_1" name="mastercontrol.route.esig.users.step4_1" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#" alt="Step4_1 Name" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.timestamps.step4_1" name="mastercontrol.route.esig.timestamps.step4_1" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#" alt="Step4_1 Date" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.sigstatus.step4_1" name="mastercontrol.route.esig.sigstatus.step4_1" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_1 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#" alt="Step4_1 Signoff Status" readonly="readonly"></textarea></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!------------------------Sig4_1 End-------------------------->
            <div class="clearBoth"></div>
            <div class="sectionData">
              <!------------------------Sig4_2 Start-------------------------->
              <input type="text" id="mastercontrol.route.stepnameat.step4_2" name="mastercontrol.route.stepnameat.step4_2" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L12#" alt="Step4_2 Esig Meaning"  value="" size="100" class="noborder" readonly="yes" />
              <div class="signatureData">
                <table class="signatureTable" cellpadding="0" cellspacing="0">
                  <thead>
                    <tr>
                      <th scope="col" class="signatureName">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#</th>
                      <th scope="col" class="signatureDate">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#</th>
                      <th scope="col" class="signatureStatus">#mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><textarea id="mastercontrol.route.esig.users.step4_2" name="mastercontrol.route.esig.users.step4_2" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L8#" alt="Step4_2 Name" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.timestamps.step4_2" name="mastercontrol.route.esig.timestamps.step4_2" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L9#" alt="Step4_2 Date" readonly="readonly"></textarea></td>
                      <td><textarea id="mastercontrol.route.esig.sigstatus.step4_2" name="mastercontrol.route.esig.sigstatus.step4_2" class="signatureField" rows="1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L11#4_2 #mastercontrol.translate.SP_TRANS_ISSUE.T1_L10#" alt="Step4_2 Signoff Status" readonly="readonly"></textarea></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!------------------------Sig4_2 End-------------------------->
            <div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T1_S4#</div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T1_L13#</label>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T1_L14#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <input type="text" name="mastercontrol.template.number" id="mastercontrol.template.number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L13#" alt="Template Number" class="textfield" disabled="disabled" maxlength="60" />
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <input type="text" name="mastercontrol.template.revision" id="mastercontrol.template.revision" title="#mastercontrol.translate.SP_TRANS_ISSUE.T1_L14#" alt="Template Revision" class="textfield" disabled="disabled" maxlength="60" />
              </span> </div>
            <div class="clearBoth"></div>
            <div style="display:none;">
              <!-- DIV contains all hidden and keyword fields Start-->
              <input type="hidden" name="hlpExtReqApprovers" id="hlpExtReqApprovers" title="ER Approvers" alt="ER Approvers">
              <input id="txtDefaultTab" name="txtDefaultTab" type="hidden" value="1" title="Selected Defualt Tab" >
              <input name="mastercontrol.route.stepnumber" type="hidden" id="mastercontrol.route.stepnumber" title="Step Number" >
              <input name="mastercontrol.route.stepid" type="hidden" id="mastercontrol.route.stepid" title="Step ID" >
              <input name="mastercontrol.form.title" type="hidden" id="mastercontrol.form.title" title="Form Title">
              <input name="mastercontrol.form.creator" type="hidden" id="mastercontrol.form.creator" title="Creator Name">
              <input name="mastercontrol.form.creatorname" type="hidden" id="mastercontrol.form.creatorname" title="Creator ID">
              <select name="mastercontrol.route.stepstatus.step1" size="1" multiple id="mastercontrol.route.stepstatus.step1" title="Step1 Statuses" style="display:none">
              </select>
              <select name="mastercontrol.route.stepstatus.step2" size="1" multiple id="mastercontrol.route.stepstatus.step2" title="Step2 Statuses" style="display:none">
              </select>
              <select name="mastercontrol.route.stepstatus.step3" size="1" multiple id="mastercontrol.route.stepstatus.step3" title="Step3 Statuses" style="display:none">
              </select>
              <select name="mastercontrol.route.stepstatus.step4" size="1" multiple id="mastercontrol.route.stepstatus.step4" title="Step4 Statuses" style="display:none">
              </select>
              <select id="mastercontrol.links.CAPA Adv" multiple  size="2" name="mastercontrol.links.CAPA Adv" title="CAPA Reference" style="display:none">
              </select>
              <input name="mastercontrol.task.mapped.launch.AI" type="button" id="mastercontrol.task.mapped.launch.AI" title="Launch Action Item Task" >
              <select id="mastercontrol.task.mapped.routes.AI"  name="mastercontrol.task.mapped.routes.AI" title="Available Routes for Action Item" style="display:none">
              </select>
              <select id="mastercontrol.task.mapped.routes.CAPA"  name="mastercontrol.task.mapped.routes.CAPA" title="Available Routes for CAPA" style="display:none">
              </select>
              <select id="mastercontrol.task.mapped.routes.ER"  name="mastercontrol.task.mapped.routes.ER" title="Available Routes for Extension Request" style="display:none">
              </select>
              <!------------Mapping Fields to Extension Request; Bug Ref: 26489; Dated: 02-Apr-2010-------------->
              <select id="mastercontrol.role.SP_CAPA_ExtReqApprovers"  name="mastercontrol.role.SP_CAPA_ExtReqApprovers" title="Extension Request Approvers" style="display:none" >
              </select>
              <input name="txtSource" type="hidden" id="txtSource" title="Source"  alt="Source" maxlength="30" value="Issue Review">
              <input name="txtSourceTitle" type="hidden" class="textfield readonly" id="txtSourceTitle" title="Source Title" alt="Source Title" maxlength="80">
              <!------------Mapping Field to Action Item; Bug Ref: 32203; Dated: 01-Aug-2011-------------->
              <input name="hlpAItaskType" type="hidden" id="hlpAItaskType" title="Action Item Task Type"  alt="Action Item Task Type" value="Containment" />
              <input name="hlpAItitle" type="hidden" id="hlpAItitle" title="Action Item Task Title"  alt="Action Item Task Title" value="Containment Action Items" />
              <select id="mastercontrol.links.Extension Request" multiple name="mastercontrol.links.Extension Request" title="Extension Request Reference" style="display:none">
              </select>
              <!--26185-->
              <select id="mastercontrol.links.source" multiple  size="1" name="mastercontrol.links.source" title="Source Reference" style="display:none">
              </select>
              <input type="hidden" name="hlpAnalyzerName" id="hlpAnalyzerName" title="Agent Analyzer Name"/>
			  <input type="text" name="hlpAgentAnalyzerSource" id="hlpAgentAnalyzerSource" title="Agent Analyzer Source"/>
              <input name="txtIssueNumber" type="hidden"  id="txtIssueNumber" title="Issue Number" alt="Issue Number">
              <input name="txtIRDateCreated_date" type="hidden"  id="txtIRDateCreated_date" title="Date Created" alt="Issue Created Date">
              <input type="text" name="Containment_Task_Count" id="Containment_Task_Count" title="T4 Containment Task Counter" value="1" />
              <input name="IsContAILaunched" type="text" id="IsContAILaunched" title="Is Containment AI Launched" value="">
              <select id="mastercontrol.links.Action Item" multiple  size="1" name="mastercontrol.links.Action Item" title="Action Item Reference" style="display:none">
              </select>
              <input name="hlpLaunchingFormUsersList" type="hidden" id="hlpLaunchingFormUsersList" title="Task Owners List" value="">
              <input name="hlpAssignees" type="hidden" id="hlpAssignees" title="Assignees" value="">
              <input type="text" name="mastercontrol.user.language" id="mastercontrol.user.language" title="User Language"/>
              <input type="text" name="ERCounter_num" id="ERCounter_num" class="textfield readonly" title="Request Counter" alt="Request Counter" value="0" readonly="true" />
              <input name="mastercontrol.form.created" type="text" class="textfield readonly" id="mastercontrol.form.created" title="Date Created" alt="Date Created" readonly="yes" />
              <input name="CAPALaunched" type="text" id="CAPALaunched" title="Launch CAPA Cause" value="">
              <input name="IsCAPALaunched" type="text" id="IsCAPALaunched" title="Is CAPA Launched">
              <input name="mastercontrol.dataset.show.Products" type="button" class="button" id="mastercontrol.dataset.show.Products" title="Retrieve Product Information" value="Refresh">
            </div>
            <!-- DIV contains all hidden and keyword fields End-->
          </div>
          <!-- Page 2 End -->
        </div>
        <!-- About (T1) End -->
        <div class="tabbertab" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2#" id="Issue_Details">
          <!-- Issue Details (T2) Start -->
          <div id="mcPage_003" class="mcPage mcPageDiv">
            <!-- Page 3 Start -->
            <span id="tabHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T2#</span>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T2_S1#</div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L1#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtIssueStatement" class="longtextfield" id="txtIssueStatement" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L1#" alt="T2 Issue Statement" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);" ></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L2#</label>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="mastercontrol.dataset.recordids.Products" class="selectfield" id="mastercontrol.dataset.recordids.Products" onchange="RefreshFieldProperties(this, 'T2');" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L2#" alt="T2 Product">
              </select>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L3#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <input type="text" name="mastercontrol.dataset.Products.product description" class="longtextfield" id="mastercontrol.dataset.Products.product description" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L3#" alt="T2 Product Description" readonly="readonly" maxlength="80">
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L4#</label>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <input name="txtReference" type="text" class="textfield" id="txtReference" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L4#" alt="T2 Reference" maxlength="30">
              </span> <span class="spacer">&nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T2_S2#</div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L5#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtWhat" class="longtextfield" id="txtWhat" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L5#" alt="T2 What" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);" onblur="RefreshFieldProperties(this, 'T2');"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L6#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtWhere" class="longtextfield" id="txtWhere" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L6#" alt="T2 Where" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L7#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtWhen" id="txtWhen" class="longtextfield" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L7#" alt="T2 When" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L8#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtWeight" id="txtWeight" class="longtextfield" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L8#" alt="T2 Weight" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L9#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtWho" id="txtWho" class="longtextfield" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L9#" alt="T2 Who" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T2_L10#</label>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_FailureCode" class="selectfield" id="mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_FailureCode" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L10#" alt="T2 Failure Code">
              </select>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T2_S3#</div>
            <div class="sectionData">
              <div class="subSectionDataLeft">
                <input name="mastercontrol.attachments.add.issuereview" type="button" class="button" id="mastercontrol.attachments.add.issuereview" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L3#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L1#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
              <span class="spacer">&nbsp;</span>
              <div class="subSectionDataLeft">
                <input name="mastercontrol.links.add.issuereview" type="button" class="button" id="mastercontrol.links.add.issuereview" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L4#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L2#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
            </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="mastercontrol.attachments.issuereview" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.attachments.issuereview" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L11#" alt="Attachments">
              </select>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <select name="mastercontrol.links.issuereview" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.links.issuereview" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L12#" alt="Links">
              </select>
              </span> </div>
            <div class="clearBoth"></div>
          </div>
          <!-- Page 3 End -->
        </div>
        <!-- Issue Details (T2) End -->
        <div class="tabbertab" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3#" id="Risk_Assessment">
          <!-- Risk Assessment (T3) Start -->
          <div id="mcPage_004" class="mcPage mcPageDiv">
            <!-- Page 4 Start -->
            <span id="tabHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T3#</span>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T3_S1#</div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T3_L1#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtRefinedIssueStatement" class="longtextfield" id="txtRefinedIssueStatement" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L1#" alt="T3 Refined Issue Statement" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T3_L2#</label>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T3_L3#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="cmbFrequency" class="selectfield" id="cmbFrequency" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L2#" alt="T3 Frequency" onchange="RefreshFieldProperties(this, 'T3');">
                <option value="0"></option>
                <option value="1">Rarely</option>
                <option value="2">Occasionally</option>
                <option value="3">Frequently</option>
                <option value="5">Continually</option>
              </select>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <select name="cmbImpact" class="selectfield" id="cmbImpact" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L3#" alt="T3 Impact" onchange="RefreshFieldProperties(this, 'T3');">
                <option value="0"></option>
                <option value="1">Negligible</option>
                <option value="3">Minor</option>
                <option value="5">Important</option>
                <option value="10">Critical</option>
              </select>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T3_L4#</label>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">&nbsp;</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell" style="width:50px;">
              <input name="txtFXI_num" type="text" class="textfield" style="text-align:center" id="txtFXI_num" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L4#" alt="T3 FxI Score" size="5" readonly="true">
              </span> <span style="width:10px; float:left;">&nbsp;</span> <span class="riskmatrix" id="RiskMatrix" onclick="RiskMatrix();" title="Click to view Risk Matrix Details">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L5#</span> </div>
            <div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T3_S2#</div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T3_L6#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtWhatToDo" class="longtextfield" id="txtWhatToDo" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L6#" alt="T3 What to do" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);" readonly="readonly"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <input name="chbInitiateCAPA" type="checkbox" class="checkboxfield" id="chbInitiateCAPA" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L7#" alt="T3 Initiate CAPA" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L7#</span>
              <input name="chbNCMR" type="checkbox" class="checkboxfield" id="chbNCMR" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L8#" alt="T3 Write NCMR and Investigate" value="Yes">
              <span class="spacer110x" style="width:150px;">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L8#</span> </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <input name="chbFixDoc" type="checkbox" class="checkboxfield" id="chbFixDoc" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L9#" alt="T3 Fix and Document" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L9#</span>
              <input name="chbTrackTrend" type="checkbox" class="checkboxfield" id="chbTrackTrend" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L10#" alt="T3 Track and Trend" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L10#</span> </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <input name="chbContain" type="checkbox" class="checkboxfield" id="chbContain" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L11#" alt="T3 Contain" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L11#</span>
              <input name="chbNotificationReq" type="checkbox" onclick="RefreshFieldProperties(this, 'T3');" class="checkboxfield" id="chbNotificationReq" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L12#" alt="T3 Notification Required" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L12#</span> </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <input name="chbOther" type="checkbox" onclick="RefreshFieldProperties(this, 'T3');" class="checkboxfield" id="chbOther" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L13#" alt="T3 Other" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T3_L13#</span> </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T3_L14#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtNotificationDetails" class="longtextfield" id="txtNotificationDetails" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L14#" alt="T3 Notification Req Detail" disabled="disabled" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T3_L15#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtOtherRcmd" class="longtextfield" id="txtOtherRcmd" title="#mastercontrol.translate.SP_TRANS_ISSUE.T3_L15#" alt="T3 Other Recommendation" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);" disabled="disabled"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T3_S3#</div>
            <div class="sectionData">
              <div class="subSectionDataLeft">
                <input name="mastercontrol.attachments.add.riskassessment" type="button" class="button" id="mastercontrol.attachments.add.riskassessment" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L3#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L1#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
              <span class="spacer">&nbsp;</span>
              <div class="subSectionDataLeft">
                <input name="mastercontrol.links.add.riskassessment" type="button" class="button" id="mastercontrol.links.add.riskassessment" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L4#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L2#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
            </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="mastercontrol.attachments.riskassessment" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.attachments.riskassessment" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L11#" alt="T3 Attachments">
              </select>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <select name="mastercontrol.links.riskassessment" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.links.riskassessment" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L12#" alt="T3 Links">
              </select>
              </span> </div>
            <div class="clearBoth"></div>
          </div>
          <!-- Page 4 End -->
        </div>
        <!-- Risk Assessment (T3) End -->
        <div class="tabbertab" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4#" id="Containment">
          <!-- Containment (T4) Start -->
          <div id="mcPage_005" class="mcPage mcPageDiv">
            <!-- Page 5 Start -->
            <span id="tabHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T4#</span>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S1#</div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L1#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <input name="chbWorkReDone" type="checkbox" id="chbWorkReDone" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L2#" alt="T4 Work ReDone" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L2#</span>
              <input name="chbWorkRecalled" type="checkbox" id="chbWorkRecalled" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L3#" alt="T4 Work Recalled" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L3#</span>
              <input name="chbProductHeld" type="checkbox" class="checkboxfield" id="chbProductHeld" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L4#" alt="T4 Product Held" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L4#</span>
              <input name="chbCustomerContacted" type="checkbox" class="checkboxfield" id="chbCustomerContacted" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L5#" alt="T4 Customer Contacted" value="Yes">
              <span class="spacer110x">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L5#</span> </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L6#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtDescContainmentAct" class="longtextfield" id="txtDescContainmentAct" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L6#" alt="T4 Describe Containment Actions" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L7#</label>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="longcell">
              <textarea name="txtMitigateRisk" class="longtextfield" id="txtMitigateRisk" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L7#" alt="T4 How Does This Mitigate Risk" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
              </span> </div>
            <div class="clearBoth"></div>
            <div class="sectionHeading vSpacer"> <span style="float:left;">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S2# </span> <span style="float:right;  margin-top:-5px;" id="Add_Task_Button">
              <input name="btnAddContainmentTask" type="button" class="button_icon addTask" id="btnAddContainmentTask" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L8#" onclick="RefreshFieldProperties(this, 'T4');" />
              <input type="button" name="mastercontrol.links.view.Action Item" id="mastercontrol.links.view.Action Item" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L18#" class="button_icon viewTask" value="" style="width:125"/>
              </span> </div>
            <div class="clearBoth"></div>
            <div id="Containment_Task_1" class="vSpacer hide">
              <!-- Containment Task 1 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 1</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask1" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc1" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc1" id="txtContTaskDesc1" type="text" class="longtextfield" alt="T4 Containment Action Item 1 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner1" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont1" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont1" alt="T4 Containment Action Item 1 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue1_date" name="txtContTaskDateDue1_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 1 Date Due"  mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete1_date" name="txtContDateComplete1_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 1 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef1" type="text" class="textfield" disabled="disabled" id="txtContAIRef1" alt="T4 Containment Action Item 1 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch1" type="button" id="btnContAILaunch1" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 1" value="" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 1 End-->
            <div id="Containment_Task_2" class="vSpacer hide">
              <!-- Containment Task 2 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 2</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask2" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask2" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc2" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc2" id="txtContTaskDesc2" type="text" class="longtextfield" alt="T4 Containment Action Item 2 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner2" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont2" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont2" alt="T4 Containment Action Item 2 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue2_date" name="txtContTaskDateDue2_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 2 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete2_date" name="txtContDateComplete2_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 2 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef2" type="text" class="textfield" disabled="disabled" id="txtContAIRef2" alt="T4 Containment Action Item 2 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch2" type="button" id="btnContAILaunch2" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 2" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 2 End-->
            <div id="Containment_Task_3" class="vSpacer hide">
              <!-- Containment Task 3 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 3</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask3" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask3" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc3" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc3" id="txtContTaskDesc3" type="text" class="longtextfield" alt="T4 Containment Action Item 3 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner3" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont3" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont3" alt="T4 Containment Action Item 3 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue3_date" name="txtContTaskDateDue3_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 3 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete3_date" name="txtContDateComplete3_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 3 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef3" type="text" class="textfield" disabled="disabled" id="txtContAIRef3" alt="T4 Containment Action Item 3 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch3" type="button" id="btnContAILaunch3" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 3" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 3 End-->
            <div id="Containment_Task_4" class="vSpacer hide">
              <!-- Containment Task 4 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 4</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask4" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask4" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc4" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc4" id="txtContTaskDesc4" type="text" class="longtextfield" alt="T4 Containment Action Item 4 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner4" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont4" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont4" alt="T4 Containment Action Item 4 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue4_date" name="txtContTaskDateDue4_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 4 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete4_date" name="txtContDateComplete4_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 4 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef4" type="text" class="textfield" disabled="disabled" id="txtContAIRef4" alt="T4 Containment Action Item 4 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch4" type="button" id="btnContAILaunch4" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 4" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 4 End-->
            <div id="Containment_Task_5" class="vSpacer hide">
              <!-- Containment Task 5 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 5</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask5" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask5" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc5" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc5" id="txtContTaskDesc5" type="text" class="longtextfield" alt="T4 Containment Action Item 5 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner5" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont5" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont5" alt="T4 Containment Action Item 5 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue5_date" name="txtContTaskDateDue5_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 5 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete5_date" name="txtContDateComplete5_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 5 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef5" type="text" class="textfield" disabled="disabled" id="txtContAIRef5" alt="T4 Containment Action Item 5 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch5" type="button" id="btnContAILaunch5" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 5" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 5 End-->
            <div id="Containment_Task_6" class="vSpacer hide">
              <!-- Containment Task 6 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 6</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask6" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask6" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc6" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc6" id="txtContTaskDesc6" type="text" class="longtextfield" alt="T4 Containment Action Item 6 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner6" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont6" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont6" alt="T4 Containment Action Item 6 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue6_date" name="txtContTaskDateDue6_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 6 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete6_date" name="txtContDateComplete6_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 6 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef6" type="text" class="textfield" disabled="disabled" id="txtContAIRef6" alt="T4 Containment Action Item 6 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch6" type="button" id="btnContAILaunch6" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 6" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 6 End-->
            <div id="Containment_Task_7" class="vSpacer hide">
              <!-- Containment Task 7 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 7</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask7" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask7" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc7" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc7" id="txtContTaskDesc7" type="text" class="longtextfield" alt="T4 Containment Action Item 7 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner7" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont7" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont7" alt="T4 Containment Action Item 7 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue7_date" name="txtContTaskDateDue7_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 7 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete7_date" name="txtContDateComplete7_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 7 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef7" type="text" class="textfield" disabled="disabled" id="txtContAIRef7" alt="T4 Containment Action Item 7 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch7" type="button" id="btnContAILaunch7" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 7" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 7 End-->
            <div id="Containment_Task_8" class="vSpacer hide">
              <!-- Containment Task 8 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 8</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask8" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask8" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc8" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc8" id="txtContTaskDesc8" type="text" class="longtextfield" alt="T4 Containment Action Item 8 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner8" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont8" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont8" alt="T4 Containment Action Item 8 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue8_date" name="txtContTaskDateDue8_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 8 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete8_date" name="txtContDateComplete8_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 8 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef8" type="text" class="textfield" disabled="disabled" id="txtContAIRef8" alt="T4 Containment Action Item 8 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch8" type="button" id="btnContAILaunch8" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 8" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 8 End-->
            <div id="Containment_Task_9" class="vSpacer hide">
              <!-- Containment Task 9 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 9</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask9" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask9" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc9" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc9" id="txtContTaskDesc9" type="text" class="longtextfield" alt="T4 Containment Action Item 9 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner9" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont9" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont9" alt="T4 Containment Action Item 9 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue9_date" name="txtContTaskDateDue9_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 9 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete9_date" name="txtContDateComplete9_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 9 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef9" type="text" class="textfield" disabled="disabled" id="txtContAIRef9" alt="T4 Containment Action Item 9 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch9" type="button" id="btnContAILaunch9" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 9" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 9 End-->
            <div id="Containment_Task_10" class="vSpacer hide">
              <!-- Containment Task 10 Start-->
              <div class="sectionHeading"> <span style="float:left">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# 10</span> <span style="float:right; margin-top:-5px;">
                <input name="btnRemoveContainmentTask10" type="button" class="button_icon removeTask" id="btnRemoveContainmentTask10" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L9#" onclick="RefreshFieldProperties(this, 'T4');" />
                </span> </div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContTaskDesc10" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <input name="txtContTaskDesc10" id="txtContTaskDesc10" type="text" class="longtextfield" alt="T4 Containment Action Item 10 Title" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L10#" maxlength="80">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <label id="lblContTaskOwner10" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#</label>
                <br />
                <select name="mastercontrol.role.SP_CAPA_Owners.Cont10" class="selectfield" id="mastercontrol.role.SP_CAPA_Owners.Cont10" alt="T4 Containment Action Item 10 Assignee" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_S3# #mastercontrol.translate.SP_TRANS_ISSUE.T4_L11#" >
                </select>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <mcdatePicker id="txtContTaskDateDue10_date" name="txtContTaskDateDue10_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L12#" alt="T4 Containment Action Item 10 Date Due" mindate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L8#"/>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <mcdatePicker id="txtContDateComplete10_date" name="txtContDateComplete10_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" label="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L20#" alt="T4 Containment Action Item 10 Date Complete" maxdate="0" onkeydown="SP_ContinueAutoSave(false);" onchange="RefreshFieldProperties(this,'T4');" dateRangeErrorText="#mastercontrol.translate.SP_TRANS_ISSUE.C_L9#"/>
                </span> <span class="spacer">&nbsp;</span> <span class="cell" style="width:270px;">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#</label>
                <br />
                <input name="txtContAIRef10" type="text" class="textfield" disabled="disabled" id="txtContAIRef10" alt="T4 Containment Action Item 10 Number" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L16#"/>
                </span> <span class="btn_icon">
                <input name="btnContAILaunch10" type="button" id="btnContAILaunch10" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L17# 10" onclick="RefreshFieldProperties(this, 'T4');" class="button_icon launchTask">
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment Task 10 End-->
            <div id="Containment_Tasks" class="Spacer hide">
              <!-- Containment_Tasks Start -->
              <hr style="color:#D9D9D9; width:720px; float:left;" />
              <div class="sectionData"> <span class="cell">
                <label>#mastercontrol.translate.SP_TRANS_ISSUE.T4_L15#</label>
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <label id="lblContOACompletionDate" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L19#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="cell">
                <input name="txtContOADueDate_date" type="text" class="textfield" id="txtContOADueDate_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L15#" alt="T4 Containment Overall Due Date" disabled="true">
                </span> <span class="spacer">&nbsp;</span> <span class="cell">
                <input name="txtContOACompletion_date" type="text" id="txtContOACompletion_date" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L19#" alt="T4 Containment Overall Completion Date" disabled="true" class="textfield">
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <label id="lblContCompletionSummary" class="dynamicLabel">#mastercontrol.translate.SP_TRANS_ISSUE.T4_L21#</label>
                </span> </div>
              <div class="clearBoth"></div>
              <div class="sectionData"> <span class="longcell">
                <textarea name="txtContCompletionSummary" class="longtextfield" id="txtContCompletionSummary" title="#mastercontrol.translate.SP_TRANS_ISSUE.T4_L21#" alt ="T4 Containment Completion Summary" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);"></textarea>
                </span> </div>
              <div class="clearBoth"></div>
            </div>
            <!-- Containment_Tasks End -->
			<div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T4_S4#</div>
            <div class="sectionData">
              <div class="subSectionDataLeft">
                <input name="mastercontrol.attachments.add.containment" type="button" class="button" id="mastercontrol.attachments.add.containment" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L3#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L1#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
              <span class="spacer">&nbsp;</span>
              <div class="subSectionDataLeft">
                <input name="mastercontrol.links.add.containment" type="button" class="button" id="mastercontrol.links.add.containment" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L4#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L2#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
            </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="mastercontrol.attachments.containment" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.attachments.containment" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L11#" alt="T4 Attachments">
              </select>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <select name="mastercontrol.links.containment" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.links.containment" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L12#" alt="T4 Links">
              </select>
              </span> </div>
            <div class="clearBoth"></div>
          </div>
          <!-- Page 5 End -->
        </div>
        <!-- Containment (T4) End -->
        <div class="tabbertab" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5#" id="Disposition">
          <!-- Disposition (T5) Start -->
          <div id="mcPage_006" class="mcPage mcPageDiv">
            <!-- Page 6 Start -->
            <span id="tabHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T5#</span>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T5_S1#</div>
            <div class="sectionData"> <span class="longcell">
              <label>#mastercontrol.translate.SP_TRANS_ISSUE.T5_L1#</label>
              </span> </div>
            <div class="clearBoth"></div>
            
 			 <div class="sectionData">

         	<span class="longcell">  <input type="radio" id="chbIssueDisposition" name="chbIssueDisposition" class="checkboxfield" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L1#" alt="T5 Issue Disposition" value="Record and Close" onclick="RefreshFieldProperties(this, 'T5');" /><span class="span3Adjusted">#mastercontrol.translate.SP_TRANS_ISSUE.T5_L2#</span> </span> <br />

		

             <span class="longcell"> <input type="radio" id="chbIssueDisposition" name="chbIssueDisposition" class="checkboxfield" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L1#" alt="T5 Issue Disposition" value="Close, Track and Trend" onclick="RefreshFieldProperties(this, 'T5');" /><span class="span3Adjusted">#mastercontrol.translate.SP_TRANS_ISSUE.T5_L3#</span></span> <br />
			 
			 <span class="mediumcell">
			 		<label for="txtTracknTrendNotes" class="dynamicLabel" id="lblTracknTrendNotes">#mastercontrol.translate.SP_TRANS_ISSUE.T5_L11#</label> <br />
                   <textarea name="txtTracknTrendNotes" class="longtextfield" id="txtTracknTrendNotes" alt="T5 Track and Trend Notes" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L11#" onkeydown="SP_GrowUP(this);" onkeyup="SP_GrowUP(this);" ></textarea>
              
			 </span><br />
			 
			 <span id="AnalyzerAgentFields" class="cell mleft25top3">
			 		
					<mcanalyzerAgentLink id="txtAnalyzerNumber" name="txtAnalyzerNumber" label="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L12#" labelPosition="top" readOnly="true" alt="T5 Analyzer Agent Number"/>             
			 </span><br />

     <span class="longcell"> <input type="radio" id="chbIssueDisposition" name="chbIssueDisposition" class="checkboxfield" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L1#" alt="T5 Issue Disposition" value="CAPA Escalation" onclick="RefreshFieldProperties(this, 'T5');" /><span class="span3Adjusted">#mastercontrol.translate.SP_TRANS_ISSUE.T5_L4#</span></span>

		

             </div>

            <div class="clearBoth"></div>

			 <!-- issueDispositionSelection Start -->
            <div class="sectionData" id="issueDispositionSelection">
		  
		  	<span class="mediumcell">

				<label>#mastercontrol.translate.SP_TRANS_ISSUE.T5_L5#</label>

			</span> 
				
			<span class="mediumcell">

				<input name="chbCause" type="radio" class="checkboxfield" id="chbCause" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L5#" alt="T5 Cause" value="Known proceed to root cause" />
	
				<span class="span3Adjusted" style="width:180px;">#mastercontrol.translate.SP_TRANS_ISSUE.T5_L6#</span>
	
				<input name="chbCause" type="radio" class="checkboxfield" id="chbCause" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L5#" alt="T5 Cause" value="Unknown  proceed to investigation" />
	
				<span class="span3Adjusted" style="width:180px;">#mastercontrol.translate.SP_TRANS_ISSUE.T5_L7#</span> 
			
			</span>
			<br />
				
		<span class="mediumcell">
			 	<span class="cell">
						<label>#mastercontrol.translate.SP_TRANS_ISSUE.T5_L8#</label>
						<br />
                 		<input name="txtCAPARef" type="text" class="textfield" id="txtCAPARef" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L8#" alt="T5 CAPA Reference" maxlength="30" disabled="disabled"/>

                </span> 
				
				<span id="LaunchCAPA" class="btn_icon">

               			 <input name="mastercontrol.task.mapped.launch.CAPA" type="button" class="button_icon launchTask" id="mastercontrol.task.mapped.launch.CAPA" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L9#" value=""  onmouseup="RefreshFieldProperties(this, 'T5');">

                </span> 
				<span id="ViewCAPA" class="btn_icon hide print-hide">

              			 <input type="button" name="mastercontrol.links.view.CAPA Adv" id="mastercontrol.links.view.CAPA Adv" title="#mastercontrol.translate.SP_TRANS_ISSUE.T5_L10#" class="button_icon viewTask" value="" alt="View CAPA"/>

                </span> 
				<span class="hide dynamicLabel" id="lblCAPALaunchMandatory"></span>
				  
		</span>
		</div>
            
            <!-- issueDispositionSelection End -->
			<div class="clearBoth"></div>
            <div class="sectionHeading">#mastercontrol.translate.SP_TRANS_ISSUE.T5_S2#</div>
            <div class="sectionData">
              <div class="subSectionDataLeft">
                <input name="mastercontrol.attachments.add.issuedisposition" type="button" class="button" id="mastercontrol.attachments.add.issuedisposition" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L3#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L1#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
              <span class="spacer">&nbsp;</span>
              <div class="subSectionDataLeft">
                <input name="mastercontrol.links.add.issuedisposition" type="button" class="button" id="mastercontrol.links.add.issuedisposition" title="#mastercontrol.translate.SP_TRANS_ISSUE.C_L4#" value="#mastercontrol.translate.SP_TRANS_ISSUE.C_L2#" onfocus="SetSize();" onmouseup="SP_CheckWin(SetSize);" />
              </div>
            </div>
            <div class="clearBoth"></div>
            <div class="sectionData"> <span class="cell">
              <select name="mastercontrol.attachments.issuedisposition" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.attachments.issuedisposition" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L11#" alt="T5 Attachments">
              </select>
              </span> <span class="spacer">&nbsp;</span> <span class="cell">
              <select name="mastercontrol.links.issuedisposition" size="1" multiple readonly="yes" class="selectfield" id="mastercontrol.links.issuedisposition" title="#mastercontrol.translate.SP_TRANS_ISSUE.T2_L12#" alt="T5 Links">
              </select>
              </span> </div>
            <div class="clearBoth"></div>
          </div>
          <!-- Page 6 End -->
        </div>
        <!-- Disposition (T5) End -->
      </div>
      <!-- Tabber End -->
    </div>
    <!-- Form Body End -->
  </div>
  <!-- Container End -->
</form>
<!--Bug 29433; Including JS file that contains common JS functions to be used across all SP's -->
<script type="text/javascript" src="#mastercontrol.javascript(SPLib-1.0.0.js)#"> </script>
<!--Javascript block effected under bug 28926, dated: 14-Oct-2010-->
<script language="javascript" type="text/javascript">
// Global Variables

var stepNumber;
var stepId;
var sFormStatus="";
var decisionVariable;

/* Alert Message Object */
var message = {date_format:"#mastercontrol.translate.SP_TRANS_ISSUE.C_L5#",task_launch:"#mastercontrol.translate.SP_TRANS_ISSUE.C_L6#"};

// Startup Script
function StartupScript()
{
	
	stepNumber = document.getElementById("mastercontrol.route.stepnumber").value*1;
	stepId = document.getElementById("mastercontrol.route.stepid").value*1;
	
	try
	{	
		sFormStatus = document.getElementById("mastercontrol.hidden.event").value.toLowerCase();
		decisionVariable = stepId > 0 ? stepId: sFormStatus;

		setUpPrintingAndPublishing();
		
		/* This function acll will add Blank Option to all role dropdowns */
		SP_InsertBlank();
		
		/* This function call will put reference of launched CAPA and Action Item in relevant fields*/
		PutLaunchedRef();	
		
		/* This function call will disaplay View CAPA button after FTFL */
		SP_SwapButtonAfterLaunch("txtCAPARef","LaunchCAPA","ViewCAPA","mastercontrol.links.view.CAPA Adv");
			
		/* This function call is used to program onclick event of signoff button */
		SP_ProgramMenuButton(ApproveData,"signoff");
		
		/*This function call will maintain state of Action Item Task Table*/
		TaskTableFunctionality("btnAddContainmentTask","VOID","Containment_Task_Count","Containment_Task_","Containment_Tasks","Maintain State",10);
		
		/* This function call will set size of Attachemt and Links list fields */
		SetSize();
		
		/* This function call will retain height width of all text-areas */
		SP_RetainHeightWidth();
		
		SetCurrentStepName(); //28207
			
		/*This function call will expnad signature fields to show all signatures*/
		SP_AdjustSignFieldSize();
		
		/*This function call will set T1 Number of Records*/
		SetNumOfRecords();
		
		/*This function call will add an asterik with the labels of required fields*/
		SetDynamicallyFieldLabel();
		
		/*This function call will set state of fields in Related Records section*/
		SP_SetRelatedRecords("mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_Source","txtOtherSource","ViewSource");
	}
	catch(ex){}
	
	EnableDisableExtensionFields();
	RefreshFieldProperties();
	SetCurrentStep();
	try{SP_ManipulateButtonClasses();}catch(e){};
}

function setUpPrintingAndPublishing() {
	window.onbeforeprint = function() {
		$('textarea').each(function() {
			var $this = $(this);
			var text = ($this.val() === '')?'<br />':$this.val().replace(/\n/gi,'<br />');
			var div = $('<div></div>')
				.html(text)
				.addClass('print-div');
			if($this.hasClass('signatureField')) {
				div
					.css('border',0)
					.addClass('signatureField');
			}
			$this
				.addClass('print-hide')
				.after(div);
		});
	}


	window.onafterprint = function() {
		$('.print-div').remove();
		$('textarea.print-hide').removeClass('print-hide');
	}
}

// It is meant to manipulate properties of inter-related fields, it is designed to be called at field level with passing two parameters (field Object(this), TabLabel) and at Startup/Reset without parameters.
//debugged under bug 39374; 29-Jan-2013
function RefreshFieldProperties(obj,tabName)
{
	if(obj != null && tabName != null)
	{
		switch(decisionVariable)
		{
			case 1:
			case 2:
			case "editform":
				if(tabName == "T1")
				{
					SetT1FieldProperties(obj);
				}
				else if(tabName == "T2")
				{
					SetT2FieldProperties(obj);
				}
				else if(tabName == "T3")
				{
					SetT3FieldProperties(obj);
				}
			if(decisionVariable != "editform")
				break;
				
			case 3:
			case "editform":
				if(tabName == "T4")
				{
					SetT4FieldProperties(obj);
				}
			if(decisionVariable != "editform")
				break;
				
			case 4.1:
			case 4.2:
			case "editform":
				if(tabName == "T5")
				{
					SetT5FieldProperties(obj);
				}
			break;
		}
	}
	else
	{
		switch(decisionVariable)
		{
			case 1:
			case "editform":
				SetT2FieldProperties();
				SetT1FieldProperties();
			if(decisionVariable != "editform")
				break;
				
			case 2:
			case "editform":
				SetT2FieldProperties();
				SetT3FieldProperties();
			if(decisionVariable != "editform")
				break;
				
			case 3:
			case "editform":
				CalcRiskScore();
				SetT4FieldProperties();
			if(decisionVariable != "editform")
				break;
				
			case 4.1:
			case 4.2:
			case "editform":
				CalcRiskScore();
				SetT5FieldProperties();
			break;
		}
		
	}
}

function SetT1FieldProperties(obj)
{
	if(obj != null)
	{
		if(obj.name == "mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_Source")
		{
			SP_SetRelatedRecords("mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_Source","txtOtherSource","ViewSource");
		}
	}
	else
	{
		/*If Issue Review was launched from Analyzer Agent, set source*/
		if(SP_Trim(document.getElementById("hlpAnalyzerName").value) != "")
		{
			document.getElementById("mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_Source").value = "Analyzer Agent";
			SP_PerformAction("mastercontrol.task.parentformid,mastercontrol.dataset.recordids.SP_CFG_CAPA_Adv_Source,txtOtherSource","disabled",true);
		}
	}
}
function SetT2FieldProperties(obj)
{
	if(obj != null)
	{
		switch(obj.name)
		{
			case 'mastercontrol.dataset.recordids.Products':
				RetrieveProductMCData();
			break;
			
			case 'txtWhat':
				SetTaskTitle();
			break;
		}
	}
	else
	{
		SetTaskTitle();
		CopyKeywords();
		MapExtensionRequestData();
	}
}

function SetT3FieldProperties(obj)
{
	if(obj != null)
	{
		switch(obj.name)
		{
			case 'chbNotificationReq':
				setNotificationReq();
			break;
			
			case 'chbOther':
				setChbOther();
			break;
			
			case 'cmbFrequency':
				CalcRiskScore(obj.name);
			break;
			
			case 'cmbImpact':
				CalcRiskScore(obj.name);
			break;
		}
	}
	else
	{
		setNotificationReq();
		setChbOther();
		CalcRiskScore();
	}
}

//Updated under bug 40490; Date: 4-Apr-2013
//Updated under bug 40709; Date: 29-Apr-2013
function SetT4FieldProperties(obj)
{
	if(obj != null)
	{
		var oFieldName = arguments[0].name;
		if(oFieldName.indexOf('txtContTaskDateDue') != -1)
		{
			SetDueDate("txtContTaskDateDue","txtContOADueDate_date",10);
			SP_ContinueAutoSave(true);
		}
		else if(oFieldName.indexOf('txtContDateComplete') != -1)
		{
			SetDueDate("txtContDateComplete","txtContOACompletion_date",10);
			SP_ContinueAutoSave(true);
		}
		else if(oFieldName == "btnAddContainmentTask")
		{
			TaskTableFunctionality("btnAddContainmentTask","VOID","Containment_Task_Count","Containment_Task_","Containment_Tasks","Add Task",10);
			SetDynamicallyFieldLabel();
		}
		else if(oFieldName.indexOf('btnRemoveContainmentTask') != -1 )
		{
			var BtnSrNum = oFieldName.match(/\d+/);
			var arrFields = ['txtContTaskDesc','mastercontrol.role.SP_CAPA_Owners.Cont','txtContTaskDateDue','ContDateDue','txtContDateComplete','txtContAIRef','btnContAILaunch','btnRemoveContainmentTask'];
			SP_RemoveTask("btnAddContainmentTask","Containment_Task_Count","Containment_Task_","Containment_Tasks",10,"Action Item ",arrFields,BtnSrNum);
			SP_DisableLaunchedTasks(arrFields, "Containment_Task_Count","EnableOrDisable");
			SetDueDate("txtContTaskDateDue","txtContOADueDate_date",10);
			SetDueDate("txtContDateComplete","txtContOACompletion_date",10);
		}
		else if(oFieldName.indexOf('btnContAILaunch') != -1)
		{
			var BtnSrNum = oFieldName.match(/\d+/);
			LaunchActionItem("txtContAIRef",BtnSrNum);
		}
	}
	else
	{
		var arrFields = ['txtContTaskDesc','mastercontrol.role.SP_CAPA_Owners.Cont','txtContTaskDateDue','ContDateDue','txtContDateComplete','txtContAIRef','btnContAILaunch','btnRemoveContainmentTask'];
		SP_DisableLaunchedTasks(arrFields, "Containment_Task_Count");
	}
}


function SetT5FieldProperties(obj)
{
	if(obj != null)
	{
		switch(obj.name)
		{
			case 'mastercontrol.task.mapped.launch.CAPA':
				LaunchCAPA();
			break;
			
			case "chbIssueDisposition":
				DecideDisposition();
			break;
		}
	}
	else
	{
		
		if(SP_GetRGValue("chbCause") == "")
		{
			SP_MakeRadioChecked("chbCause","Unknown  proceed to investigation",true);
		}
		
		//Setting up Disposition fields
		try{DecideDisposition();}catch(exx){}
	}
}

function setNotificationReq()
{
	if(document.getElementById("chbNotificationReq").disabled == false)
	{
		if(document.getElementById("chbNotificationReq").checked == true)
		{
			SP_PerformAction("txtNotificationDetails","disabled",false);
			$("#txtNotificationDetails").removeClass("DisabledFormat");
		}
		else
		{
			SP_PerformAction("txtNotificationDetails","disabled empty",true);
			$("#txtNotificationDetails").addClass("DisabledFormat");
		}
	}
}

function setChbOther()
{
	if(document.getElementById("chbOther").disabled == false)
	{
		if(document.getElementById("chbOther").checked == true)
		{
			SP_PerformAction("txtOtherRcmd","disabled",false);
			$("#txtOtherRcmd").removeClass("DisabledFormat");
		}
		else
		{
			SP_PerformAction("txtOtherRcmd","disabled empty",true);
			$("#txtOtherRcmd").addClass("DisabledFormat");
		}
	}
}

//updated under bug 39408; Date: 30-Jan-2013
function CalcRiskScore()
{
 	var cbCAPADisp = document.getElementsByName('chbIssueDisposition');
	var frequency = document.getElementById("cmbFrequency").value;
	var impect = document.getElementById("cmbImpact").value;
	var	FxIScore = document.getElementById("txtFXI_num");
	var whatToDo = document.getElementById("txtWhatToDo");
	FxIScore.value = frequency * impect;
	
	if(FxIScore.value == 0)
	{
		whatToDo.value = "#mastercontrol.translate.SP_TRANS_ISSUE.C_L10#";
	}
	else if(FxIScore.value > 0 && FxIScore.value <= 3)
	{
		whatToDo.value = "#mastercontrol.translate.SP_TRANS_ISSUE.C_L10#";
		whatToDo.className = "longtextfield greenColortextfield";
	}
	else if(FxIScore.value > 3 && FxIScore.value <= 8)
	{
		whatToDo.value = "#mastercontrol.translate.SP_TRANS_ISSUE.C_L11#";
		whatToDo.className = "longtextfield yellowColortextfield";		
	}
	else if(FxIScore.value > 8 && FxIScore.value <= 10)
	{
		whatToDo.value = "#mastercontrol.translate.SP_TRANS_ISSUE.C_L12#";
		whatToDo.className = "longtextfield yellowColortextfield";		
	}
	else if(FxIScore.value > 10 && FxIScore.value <= 15)
	{
		whatToDo.value = "#mastercontrol.translate.SP_TRANS_ISSUE.C_L13#";
		whatToDo.className = "longtextfield redColortextfield";
	}
	else if(FxIScore.value > 15 && FxIScore.value <= 25)
	{
		whatToDo.value = "#mastercontrol.translate.SP_TRANS_ISSUE.C_L14#";
		whatToDo.className = "longtextfield redColortextfield";
	}
	else if(FxIScore.value > 25)
	{
		whatToDo.value = "#mastercontrol.translate.SP_TRANS_ISSUE.C_L15#";
		whatToDo.className = "longtextfield redColortextfield";
	}
	
	if(FxIScore.value > 10)
	{  
		document.getElementById("chbInitiateCAPA").disabled = true;    
		document.getElementById("chbInitiateCAPA").checked = true; 
		cbCAPADisp[2].checked=true;
	}
	else
	{
		if(decisionVariable == 2 || decisionVariable == "editform")
		{
			document.getElementById("chbInitiateCAPA").disabled = false;    
			document.getElementById("chbInitiateCAPA").checked = false; 
			cbCAPADisp[2].checked=false;
		}
	}	
}


//Created by ZASLAM under bug 43152; 07-Aug-2013; Last updated: 22-Aug-2013
function DecideDisposition()
{	
	var oRadioDisposition = document.getElementsByName("chbIssueDisposition"); 
	var	FxIScore = document.getElementById("txtFXI_num");
	var oCAPALinks = document.getElementById("mastercontrol.links.CAPA Adv");
	
	//Disabling
	DisableEnableAnalyzerFields(true, "none");
	
	//Disabling
	DisableEnableCAPAEscalationFields(true);
	
	if(FxIScore.value < 10 && oCAPALinks.length == 0)
	{
		if (SP_GetRGValue("chbIssueDisposition") == "CAPA Escalation")
		{
			//Disabling
			DisableEnableAnalyzerFields(true,"none");
			
			//Enabling
			DisableEnableCAPAEscalationFields(false);
		}
		else if(SP_GetRGValue("chbIssueDisposition") == "Close, Track and Trend")
		{
				//Enabling
				DisableEnableAnalyzerFields(false,"inline");
			
				//Disabling
				DisableEnableCAPAEscalationFields(true);
		}
	
	}
	else if(FxIScore.value > 10 || oCAPALinks.length > 0)
	{
		SP_PerformAction("chbIssueDisposition","disabled",true);
		
		if(oCAPALinks.length == 0)
			DisableEnableCAPAEscalationFields(false); //Enabling
		
		/*This condition will disable Frequency,Impact fields in checked out state in case CAPA was launched on route*/
		if(decisionVariable == "editform")
		{
			document.getElementById("cmbFrequency").disabled = true;
			document.getElementById("cmbImpact").disabled = true;
		}
	}
	
	SetTabLabel();
	try{SP_ManipulateButtonClasses();}catch(ex){}
}

//Created under bug 43152; 21-Aug-2013;
function DisableEnableAnalyzerFields(Flag,displayAction)
{
	var oTTNotes = document.getElementById("txtTracknTrendNotes");
	oTTNotes.disabled = Flag;
	SP_DynamicRequireToggle("lblTracknTrendNotes", "txtTracknTrendNotes", !Flag);
	
	if(oTTNotes.disabled)
		$("#txtAnalyzerNumber").css("width","100%");
	else
		$("#txtAnalyzerNumber").css({"width":"60%","margin-right":"5px"});

	switch(displayAction)
	{
		case "inline":
			if(SP_Trim($("#txtAnalyzerNumber").val()) == "")
			{
				$("#AnalyzerAgentFields").find("div img#search_txtAnalyzerNumber").show();
				$("#AnalyzerAgentFields").find("div img#new_txtAnalyzerNumber").show();
			}
			else
			{
				$("#AnalyzerAgentFields").find("div img#view_txtAnalyzerNumber").show();
				$("#AnalyzerAgentFields").find("div img#delete_txtAnalyzerNumber").show();
			
			}
			break;
		case "none":
			$("#AnalyzerAgentFields").find("div img").each(function() {
				SP_AddClass(this,'hide');
			});

	}
	
}

//Created under bug 43152; 21-Aug-2013;
function DisableEnableCAPAEscalationFields(Flag)
{
	var oRadioCause = document.getElementsByName("chbCause"); 
	var oLaunchCAPA = document.getElementById("mastercontrol.task.mapped.launch.CAPA");
	
	oRadioCause[0].disabled = Flag;		
	oRadioCause[1].disabled = Flag;
	oLaunchCAPA.disabled = Flag;
	SP_RequiredLabelToggle("lblCAPALaunchMandatory", !Flag); 
}


//updated under bug 40490; Date: 4-Apr-2013;
function PutLaunchedRef()
{
	if(document.getElementById("IsCAPALaunched").value == 1 )
	{
		SP_PutLaunchedRef("mastercontrol.links.CAPA Adv","txtCAPARef");
	}
	
	if(document.getElementById("IsContAILaunched").value != "" )
	{
		var sRefFieldId = document.getElementById("IsContAILaunched").value;
		SP_PutLaunchedRef("mastercontrol.links.Action Item",sRefFieldId);
		
		document.getElementById("IsContAILaunched").value = "";
	}
}

//Modified; Bug 32203; Developer: ZASLAM
//updated under bug 43152; 7-Aug-2013
function SetTaskTitle()
{
	var TaskTitle = document.getElementById("mastercontrol.form.title");
	var FormNum = document.getElementById("mastercontrol.form.number");
	var whatField = document.getElementById("txtWhat");
	var hlpSourceTitle = document.getElementById("txtSourceTitle");
	var hlpAgentAnalyzerSource = document.getElementById("hlpAgentAnalyzerSource");
	
	TaskTitle.value = FormNum.value;
	hlpAgentAnalyzerSource.value = FormNum.value + " Track & Trend";
	if (SP_Trim(whatField.value)!="")
	{
		TaskTitle.value += ": " + (whatField.value).substring(0,20) + "...";
	}
	
	hlpSourceTitle.value = TaskTitle.value;
}

//bug 28207; 15-Jul-2010

function SetCurrentStepName()
{
	var StepId = document.getElementById("mastercontrol.route.stepid");
	var StepName = "mastercontrol.route.stepnameat.step";
	var oField = document.getElementById("txtCurrentStepName");
	
	try
	{
			if(SP_Trim(StepId.value) != "")
			{
				
				var sId = StepId.value;
				var isParallel = sId.indexOf(".");
		
				if(isParallel == -1)
				{
					sId = sId * 1;
					oField.value = document.getElementById(StepName+sId).value;
				}
				else
				{
					var SubStep = sId.split(".");
					var baseStepId = SubStep[0] * 1;
					var subStepId = SubStep[1] * 1;
					
					StepName = StepName + baseStepId + "_" + subStepId;
					oField.value = document.getElementById(StepName).value;	
				}
			}
			else
			{
				oField.value = "";
			}
		
	}
	catch(excp){}
}

//updated under bug 40490, 41155;
function ApproveData()
{	
	SetRequiredFields();
	if(SP_AreAllRequiredFieldsFilled() == true)
	{
		if(decisionVariable == "editform")
		{
			SP_EnableAllFields("Issue_Review",true);
		}
		else
		{
			SP_EnablePageFields(mcEditablePages);
		}
	}
}


//updated under bug 40490; Date: 5-Apr-2013
function TaskTableFunctionality()
{
	var btnAddTask = document.getElementById(arguments[0]);
	var oTaskCounter = document.getElementById(arguments[2]);
	var taskContainer = arguments[3];
	var refSecContainer = arguments[4];
	var action = SP_Trim(arguments[5]);
	var totalTasks = arguments[6]*1;
	
	
	switch(action)
	{
		case "Add Task":
			if (++oTaskCounter.value<= totalTasks)
			{
				SP_RemoveClass(document.getElementById(taskContainer+oTaskCounter.value),'hide');
			}
		break;
		
		case "Remove Task":
			if (oTaskCounter.value>0)
			{
				var oTaskContainer = document.getElementById(taskContainer+oTaskCounter.value);
				SP_AddClass(oTaskContainer,'hide');
				--oTaskCounter.value;
				var allInputs = $("#"+oTaskContainer.id+"").find("input");
				var allSelects = $("#"+oTaskContainer.id+"").find("select");
				var allLabels = $("#"+oTaskContainer.id+"").find("label");
				for(i=0; i<allInputs.length;i++)
				{
					allInputs[i].value = ""
					ApplyStandardBorder(allInputs[i]);
				}
				for(i=0; i<allSelects.length;i++)
				{
					allSelects[i].value = ""
					ApplyStandardBorder(allSelects[i]);
				}
				for(i=0; i<allLabels.length;i++)
				{
					SP_RequiredLabelToggle(allLabels[i].id,false);
				}
			}
		break;
		
		case "Maintain State":
			
			for(i=1; i<=oTaskCounter.value*1; i++)
			{
				SP_RemoveClass(document.getElementById(taskContainer+i),'hide');
			}
			for(j=(oTaskCounter.value*1)+1;j<=totalTasks;j++)
			{
				SP_AddClass(document.getElementById(taskContainer+j),'hide');
			}
		break;
		
		case "Reset Table":
			for(i=1; i<=oTaskCounter.value*1; i++)
			{
				SP_RemoveClass(document.getElementById(taskContainer+i),'hide');
			}
			for(j=(oTaskCounter.value*1)+1;j<=totalTasks;j++)
			{
				var oTaskContainer = document.getElementById(taskContainer+j);
				SP_AddClass(oTaskContainer,'hide');
				
				var allInputs = $("#"+oTaskContainer.id+"").find("input");
				var allSelects = $("#"+oTaskContainer.id+"").find("select");
				var allLabels = $("#"+oTaskContainer.id+"").find("label");
				for(i=0; i<allInputs.length;i++)
				{
					ApplyStandardBorder(allInputs[i]);
				}
				for(i=0; i<allSelects.length;i++)
				{
					ApplyStandardBorder(allSelects[i]);
				}
				for(i=0; i<allLabels.length;i++)
				{
					SP_RequiredLabelToggle(allLabels[i].id,false);
				}
			}
		break;
	}
	
	switch(oTaskCounter.value*1)
	{
		case 0:
			if(decisionVariable == 3 || decisionVariable == "editform")
			btnAddTask.disabled = false;
			SP_AddClass(document.getElementById(refSecContainer),'hide');
		break;
		
		case totalTasks:
			SP_RemoveClass(document.getElementById(refSecContainer),'hide');
			btnAddTask.disabled = true;
		break;
		
		default:
			if(decisionVariable == 3 || decisionVariable == "editform")
			btnAddTask.disabled = false;
			SP_RemoveClass(document.getElementById(refSecContainer),'hide');
		break;
	}
}

function ManageAddRemoveButtons()
{
	if(stepId == 3)
	{
		document.getElementById("btnAddContainmentTask").disabled = false;
		document.getElementById("btnRemoveContainmentTask").disabled = false;
	}
	else
	{
		document.getElementById("btnAddContainmentTask").disabled = true;
		document.getElementById("btnRemoveContainmentTask").disabled = true;
	}
}
	

function SetCurrentStep()
{
	if(decisionVariable == "showform")
	{
		document.getElementById("mastercontrol.route.stepname").value = "Complete";
	}
	/*This is done to apply formating when form is checked out*/
	else if(decisionVariable == "editform")
	{
		SP_SetFieldsFormat('0,1,2,3,4,5');
	}
	if(sFormStatus == "")
	{
		document.getElementById('IRTabs').style.width = "1400px";
	}
}

function SetNumOfRecords()
{
	var noOfRecords = document.getElementById("txtNumberOfRecords_num");
	var noOfRecordsList = document.getElementById("mastercontrol.links.RelatedQERecords");
	noOfRecords.value = noOfRecordsList.options.length;
}
/****************************************************************************
Following functions are exceptional, they are meant to be executed on "SignOff"
button event. 
Implemented under bug ref: 26904; Developer: Dated: 10-May-2010
******************************************************************************/
//Improved under bug 27741; 28-May-2010
//This function will be triggering as soon as SignOff button clicked 
function mcPreSubmit() 
{
	if(SP_AreAllRequiredFieldsFilled())
	{
		document.getElementsByName('chbIssueDisposition').disabled = false;
		SP_EnablePageFields(mcEditablePages);
	}
	SP_ValidateTextFields(); //bug 34964 fixed 
	return true;
}

function mcPreSave() // Implemented under bug 35222
{
	if(SP_AreAllRequiredFieldsFilled())
	{
		SP_EnablePageFields(mcEditablePages);
	}
	SP_ValidateActiveElement();
	return AllowAutoSave;
}


function mcAfterReset() 
{
	StartupScript();
}

//This function will get trigger in responce to Sign Off Confirmation message event (Ok/Cancel)
function mcConfirmSignOff(didConfirm) 
{
	if(didConfirm)
	{
		SP_EnablePageFields(mcEditablePages);
	}
	else
	{
		if(decisionVariable > 3 || decisionVariable == "editform")
		LaunchCAPARequired();
	}
}

//**********************************************************************************

<!-- Added by SABBASI -->
function CopyKeywords()
{
	  
  var txtIssueNo = document.getElementById("txtIssueNumber");
  var txtFormNo = document.getElementById("mastercontrol.form.number");
      txtIssueNo.value = txtFormNo.value;
  var txtFormCreated = document.getElementById("mastercontrol.form.created");
  var txtIRCreated = document.getElementById("txtIRDateCreated_date");
      txtIRCreated.value = txtFormCreated.value;
}

///////////////////////////////////////////////////////////////////
function LaunchCAPARequired()
{
	if(SP_GetRGValue("chbIssueDisposition") == "CAPA Escalation" && SP_Trim(document.getElementById("IsCAPALaunched").value) == "")
	{
		alert("#mastercontrol.translate.SP_TRANS_ISSUE.C_L7#");
	}
}

function LaunchCAPA()
{
	SP_UnrequireFields();
	SP_SelectRouteLaunched("CAPA Adv","mastercontrol.task.mapped.routes.CAPA"); 
	if(SP_IsRouteSelected("CAPA Adv","mastercontrol.task.mapped.routes.CAPA"))
	{
		if(decisionVariable == "editform")
			SP_EnableAllFields("Issue_Review",true);
		else
			SP_EnablePageFields(mcEditablePages);
		document.getElementById("IsCAPALaunched").value = 1;
		document.getElementById("txtDefaultTab").value = 4;
		document.getElementById("mastercontrol.task.mapped.launch.CAPA").click();
		document.getElementById("mastercontrol.task.mapped.launch.CAPA").disabled = true;
	}
}

/*Bug ref #23446*/
function RetrieveProductMCData()
{
	var productId = document.getElementById("mastercontrol.dataset.recordids.Products").value;

	if( SP_Trim(productId) != "")
	{
		document.getElementById("mastercontrol.dataset.show.Products").click();
	}
	else
	{
		 document.getElementById("mastercontrol.dataset.Products.product description").value = "";
	}
}

// adding wrokaround to execute StartupScript() because body tag is removed.
function addLoadEvent(func)
{
	var oldonload = window.onload;
	if (typeof window.onload != 'function')
	{
		window.onload = func;
	}
	else
	{
		window.onload = function() 
		{
			if (oldonload)
			{
				oldonload();
			}
			func();
		}
	}
}

//updated under bug 40709; Date: 24-Apr-2013;
function RiskMatrix() 
{
	var cssPath = "#mastercontrol.css(Calender.css)#";
	var PathAid = cssPath.split("css/",2);
	var location = PathAid[0]+"images/Solution Packages/Gateway.JPG"; 
	window.open(location,'Matrix','width=575,height=270,resizable=yes');
}
//Added By Dated: 02-Apr-2010; Bug ref: 26489
function MapExtensionRequestData()
{
	SetTaskTitle(); 
	SP_MapERapprovers('mastercontrol.role.SP_CAPA_ExtReqApprovers','hlpExtReqApprovers');
}
//Bug 26489, 05 April, 2010
//fixing bug 27131; Dated: 22-Apr-2010
//fixing bug 27193; 28-Apr-2010
function LaunchExtensionRequest()
{
	SP_UnrequireFields();
	MapExtensionRequestData();
	SP_SelectRouteLaunched("Extension Request","mastercontrol.task.mapped.routes.ER");
	runExtReqCounter();
}
/**************FUNCTIONS ARE MEANT TO SET EXTENSION REQUEST COUNTER******************/
//Bug 27299; 27-Jul-2010
function runExtReqCounter()
{
	var nStepId = document.getElementById("mastercontrol.route.stepid");
	if(nStepId.value != "")
	{
		var ERCounter = document.getElementById("ERCounter_num");
		var isLaunching = SP_IsRouteSelected("Extension Request" , "mastercontrol.task.mapped.routes.ER");
		
		if(isLaunching)
		{
			  SP_EnablePageFields(mcEditablePages);
			   if(ERCounter.disabled)
			   {
			   		ERCounter.disabled = false;
			   }
			   ERCounter.value = (ERCounter.value * 1) + 1;
		}
	}
     

}
/***********************************************************************/
function EnableDisableExtensionFields()//26489
{
	var ERLinks = document.getElementById("mastercontrol.links.Extension Request");
	var btnERLaunch = document.getElementById("mastercontrol.task.mapped.launch.ER");
	var btnViewRequests = document.getElementById("mastercontrol.links.view.Extension Request");
	var ERCounter = document.getElementById("ERCounter_num");
	
	if(document.getElementById("mastercontrol.route.stepduedate").value != "" )
	 {
		btnERLaunch.disabled = false;
	 }
	else
	 {
		btnERLaunch.disabled = true;
	 }
	 if(ERCounter.value > 0)
	 {
		btnViewRequests.disabled = false;
	 }
	else
	{
		btnViewRequests.disabled = true;
	}
}

//Bug 29137; Developer: Dated: 30 Nov 2010
//updated under bug 39373; Dated: 21-Jan-2013
function SetSize()
{	
	SP_SetAttachLinkFieldSize("mastercontrol.attachments.issuereview");
	SP_SetAttachLinkFieldSize("mastercontrol.links.issuereview");
	
	SP_SetAttachLinkFieldSize("mastercontrol.attachments.riskassessment");
	SP_SetAttachLinkFieldSize("mastercontrol.links.riskassessment");
	
	SP_SetAttachLinkFieldSize("mastercontrol.attachments.containment");
	SP_SetAttachLinkFieldSize("mastercontrol.links.containment");
	
	SP_SetAttachLinkFieldSize("mastercontrol.attachments.issuedisposition");
	SP_SetAttachLinkFieldSize("mastercontrol.links.issuedisposition");
	
}


addLoadEvent(StartupScript);
</script>
<script language="javascript" type="text/javascript">
/*==================================================
  $Id: tabber.js,v 1.9 2006/04/27 20:51:51 pat Exp $
  tabber.js by Patrick Fitzgerald pat@barelyfitz.com

  Documentation can be found at the following URL:
  http://www.barelyfitz.com/projects/tabber/

  License (http://www.opensource.org/licenses/mit-license.php)

  Copyright (c) 2006 Patrick Fitzgerald

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  ==================================================*/

function tabberObj(argsObj)
{
  var arg; /* name of an argument to override */

  /* Element for the main tabber div. If you supply this in argsObj,
     then the init() method will be called.
  */
  this.div = null;

  /* Class of the main tabber div */
  this.classMain = "tabber";

  /* Rename classMain to classMainLive after tabifying
     (so a different style can be applied)
  */
  this.classMainLive = "tabberlive";

  /* Class of each DIV that contains a tab */
  this.classTab = "tabbertab";

  /* Class to indicate which tab should be active on startup */
  this.classTabDefault = "tabbertabdefault";

  /* Class for the navigation UL */
  this.classNav = "tabbernav";

  /* When a tab is to be hidden, instead of setting display='none', we
     set the class of the div to classTabHide. In your screen
     stylesheet you should set classTabHide to display:none.  In your
     print stylesheet you should set display:block to ensure that all
     the information is printed.
  */
  this.classTabHide = "tabbertabhide";

  /* Class to set the navigation LI when the tab is active, so you can
     use a different style on the active tab.
  */
  this.classNavActive = "tabberactive";

  /* Elements that might contain the title for the tab, only used if a
     title is not specified in the TITLE attribute of DIV classTab.
  */
  this.titleElements = ['h2','h3','h4','h5','h6'];

  /* Should we strip out the HTML from the innerHTML of the title elements?
     This should usually be true.
  */
  this.titleElementsStripHTML = true;

  /* If the user specified the tab names using a TITLE attribute on
     the DIV, then the browser will display a tooltip whenever the
     mouse is over the DIV. To prevent this tooltip, we can remove the
     TITLE attribute after getting the tab name.
  */
  this.removeTitle = true;

  /* If you want to add an id to each link set this to true */
  this.addLinkId = true;

  /* If addIds==true, then you can set a format for the ids.
     <tabberid> will be replaced with the id of the main tabber div.
     <tabnumberzero> will be replaced with the tab number
       (tab numbers starting at zero)
     <tabnumberone> will be replaced with the tab number
       (tab numbers starting at one)
     <tabtitle> will be replaced by the tab title
       (with all non-alphanumeric characters removed)
   */
  this.linkIdFormat = '<tabberid>nav<tabnumberone>';

  /* You can override the defaults listed above by passing in an object:
     var mytab = new tabber({property:value,property:value});
  */
  for (arg in argsObj) { this[arg] = argsObj[arg]; }

  /* Create regular expressions for the class names; Note: if you
     change the class names after a new object is created you must
     also change these regular expressions.
  */
  this.REclassMain = new RegExp('\\b' + this.classMain + '\\b', 'gi');
  this.REclassMainLive = new RegExp('\\b' + this.classMainLive + '\\b', 'gi');
  this.REclassTab = new RegExp('\\b' + this.classTab + '\\b', 'gi');
  this.REclassTabDefault = new RegExp('\\b' + this.classTabDefault + '\\b', 'gi');
  this.REclassTabHide = new RegExp('\\b' + this.classTabHide + '\\b', 'gi');

  /* Array of objects holding info about each tab */
  this.tabs = new Array();

  /* If the main tabber div was specified, call init() now */
  if (this.div) {

    this.init(this.div);

    /* We don't need the main div anymore, and to prevent a memory leak
       in IE, we must remove the circular reference between the div
       and the tabber object. */
    this.div = null;
  }
}


/*--------------------------------------------------
  Methods for tabberObj
  --------------------------------------------------*/


tabberObj.prototype.init = function(e)
{
  /* Set up the tabber interface.

     e = element (the main containing div)

     Example:
     init(document.getElementById('mytabberdiv'))
   */

  var
  childNodes, /* child nodes of the tabber div */
  i, i2, /* loop indices */
  t, /* object to store info about a single tab */
  defaultTab=0, /* which tab to select by default */
  DOM_ul, /* tabbernav list */
  DOM_li, /* tabbernav list item */
  DOM_a, /* tabbernav link */
  aId, /* A unique id for DOM_a */
  headingElement; /* searching for text to use in the tab */

  /* Verify that the browser supports DOM scripting */
  if (!document.getElementsByTagName) { return false; }

  /* If the main DIV has an ID then save it. */
  if (e.id) {
    this.id = e.id;
  }

  /* Clear the tabs array (but it should normally be empty) */
  this.tabs.length = 0;

  /* Loop through an array of all the child nodes within our tabber element. */
  childNodes = e.childNodes;
  for(i=0; i < childNodes.length; i++) {

    /* Find the nodes where class="tabbertab" */
    if(childNodes[i].className &&
       childNodes[i].className.match(this.REclassTab)) {
      
      /* Create a new object to save info about this tab */
      t = new Object();
      
      /* Save a pointer to the div for this tab */
      t.div = childNodes[i];
      
      /* Add the new object to the array of tabs */
      this.tabs[this.tabs.length] = t;

      /* If the class name contains classTabDefault,
	 then select this tab by default.
      */
      if (childNodes[i].className.match(this.REclassTabDefault)) {
	defaultTab = this.tabs.length-1;
      }
    }
  }

  /* Create a new UL list to hold the tab headings */
  DOM_ul = document.createElement("ul");
  DOM_ul.className = this.classNav;
  
  /* Loop through each tab we found */
  for (i=0; i < this.tabs.length; i++) {

    t = this.tabs[i];

    /* Get the label to use for this tab:
       From the title attribute on the DIV,
       Or from one of the this.titleElements[] elements,
       Or use an automatically generated number.
     */
    t.headingText = t.div.title;
	t.name = t.div.id;
    /* Remove the title attribute to prevent a tooltip from appearing */
    if (this.removeTitle) { t.div.title = ''; }

    if (!t.headingText) {

      /* Title was not defined in the title of the DIV,
	 So try to get the title from an element within the DIV.
	 Go through the list of elements in this.titleElements
	 (typically heading elements ['h2','h3','h4'])
      */
      for (i2=0; i2<this.titleElements.length; i2++) {
	headingElement = t.div.getElementsByTagName(this.titleElements[i2])[0];
	if (headingElement) {
	  t.headingText = headingElement.innerHTML;
	  if (this.titleElementsStripHTML) {
	    t.headingText.replace(/<br>/gi," ");
	    t.headingText = t.headingText.replace(/<[^>]+>/g,"");
	  }
	  break;
	}
      }
    }

    if (!t.headingText) {
      /* Title was not found (or is blank) so automatically generate a
         number for the tab.
      */
      t.headingText = i + 1;
    }

    /* Create a list element for the tab */
    DOM_li = document.createElement("li");

    /* Save a reference to this list item so we can later change it to
       the "active" class */
    t.li = DOM_li;

    /* Create a link to activate the tab */
    DOM_a = document.createElement("a");
    DOM_a.appendChild(document.createTextNode(t.headingText));
    DOM_a.href = "javascript:void(null);";
    DOM_a.title = t.headingText;
    DOM_a.onclick = this.navClick;
	DOM_a.name = t.name; // specially added to insert tab label dynamically
	DOM_a.setAttribute('role','tab');
	
    /* Add some properties to the link so we can identify which tab
       was clicked. Later the navClick method will need this.
    */
    DOM_a.tabber = this;
    DOM_a.tabberIndex = i;

    /* Do we need to add an id to DOM_a? */
    if (this.addLinkId && this.linkIdFormat) {

      /* Determine the id name */
      aId = this.linkIdFormat;
      aId = aId.replace(/<tabberid>/gi, this.id);
      aId = aId.replace(/<tabnumberzero>/gi, i);
      aId = aId.replace(/<tabnumberone>/gi, i+1);
      aId = aId.replace(/<tabtitle>/gi, t.headingText.replace(/[^a-zA-Z0-9\-]/gi, ''));

      DOM_a.id = aId;
    }

    t.a = DOM_a;
    /* Add the link to the list element */
    DOM_li.appendChild(DOM_a);

    /* Add the list element to the list */
    DOM_ul.appendChild(DOM_li);
  }

  /* Add the UL list to the beginning of the tabber div */
  e.insertBefore(DOM_ul, e.firstChild);

  /* Make the tabber div "live" so different CSS can be applied */
  e.className = e.className.replace(this.REclassMain, this.classMainLive);

  /* Activate the default tab, and do not call the onclick handler */
    var defaultTab = document.getElementById("txtDefaultTab").value*1;
	//this.tabShow(1);
	
   this.tabShow(defaultTab);
   document.getElementById("txtDefaultTab").value = 1;

  /* If the user specified an onLoad function, call it now. */
  if (typeof this.onLoad == 'function') {
    this.onLoad({tabber:this});
  }

  return this;
};


tabberObj.prototype.navClick = function(event)
{
  /* This method should only be called by the onClick event of an <A>
     element, in which case we will determine which tab was clicked by
     examining a property that we previously attached to the <A>
     element.

     Since this was triggered from an onClick event, the variable
     "this" refers to the <A> element that triggered the onClick
     event (and not to the tabberObj).

     When tabberObj was initialized, we added some extra properties
     to the <A> element, for the purpose of retrieving them now. Get
     the tabberObj object, plus the tab number that was clicked.
  */

  var
  rVal, /* Return value from the user onclick function */
  a, /* element that triggered the onclick event */
  self, /* the tabber object */
  tabberIndex, /* index of the tab that triggered the event */
  onClickArgs; /* args to send the onclick function */

  a = this;
  if (!a.tabber) { return false; }

  self = a.tabber;
  tabberIndex = a.tabberIndex;

  /* Remove focus from the link because it looks ugly.
     I don't know if this is a good idea...
  */
  a.blur();

  /* If the user specified an onClick function, call it now.
     If the function returns false then do not continue.
  */
  if (typeof self.onClick == 'function') {

    onClickArgs = {'tabber':self, 'index':tabberIndex, 'event':event};

    /* IE uses a different way to access the event object */
    if (!event) { onClickArgs.event = window.event; }

    rVal = self.onClick(onClickArgs);
    if (rVal === false) { return false; }
  }

  self.tabShow(tabberIndex);

  return false;
};


tabberObj.prototype.tabHideAll = function()
{
  var i; /* counter */

  /* Hide all tabs and make all navigation links inactive */
  for (i = 0; i < this.tabs.length; i++) {
    this.tabHide(i);
  }
};


tabberObj.prototype.tabHide = function(tabberIndex)
{
  var div;

  if (!this.tabs[tabberIndex]) { return false; }

  /* Hide a single tab and make its navigation link inactive */
  div = this.tabs[tabberIndex].div;

  /* Hide the tab contents by adding classTabHide to the div */
  if (!div.className.match(this.REclassTabHide)) {
    div.className += ' ' + this.classTabHide;
  }
  this.navClearActive(tabberIndex);

  return this;
};


tabberObj.prototype.tabShow = function(tabberIndex)
{
  /* Show the tabberIndex tab and hide all the other tabs */

  var div;

  if (!this.tabs[tabberIndex]) { return false; }

  /* Hide all the tabs first */
  this.tabHideAll();

  /* Get the div that holds this tab */
  div = this.tabs[tabberIndex].div;

  /* Remove classTabHide from the div */
  div.className = div.className.replace(this.REclassTabHide, '');

  /* Mark this tab navigation link as "active" */
  this.navSetActive(tabberIndex);

  /* If the user specified an onTabDisplay function, call it now. */
  if (typeof this.onTabDisplay == 'function') {
    this.onTabDisplay({'tabber':this, 'index':tabberIndex});
  }

  return this;
};

tabberObj.prototype.navSetActive = function(tabberIndex)
{
  /* Note: this method does *not* enforce the rule
     that only one nav item can be active at a time.
  */

  /* Set classNavActive for the navigation list item */
  this.tabs[tabberIndex].li.className = this.classNavActive;
  this.tabs[tabberIndex].a.setAttribute('aria-selected',true);

  return this;
};


tabberObj.prototype.navClearActive = function(tabberIndex)
{
  /* Note: this method does *not* enforce the rule
     that one nav should always be active.
  */

  /* Remove classNavActive from the navigation list item */
  this.tabs[tabberIndex].li.className = '';
  this.tabs[tabberIndex].a.removeAttribute('aria-selected');

  return this;
};


/*==================================================*/


function tabberAutomatic(tabberArgs)
{
  /* This function finds all DIV elements in the document where
     class=tabber.classMain, then converts them to use the tabber
     interface.

     tabberArgs = an object to send to "new tabber()"
  */
  var
    tempObj, /* Temporary tabber object */
    divs, /* Array of all divs on the page */
    i; /* Loop index */

  if (!tabberArgs) { tabberArgs = {}; }

  /* Create a tabber object so we can get the value of classMain */
  tempObj = new tabberObj(tabberArgs);

  /* Find all DIV elements in the document that have class=tabber */

  /* First get an array of all DIV elements and loop through them */
  divs = document.getElementsByTagName("div");
  for (i=0; i < divs.length; i++) {
    
    /* Is this DIV the correct class? */
    if (divs[i].className &&
	divs[i].className.match(tempObj.REclassMain)) {
      
      /* Now tabify the DIV */
      tabberArgs.div = divs[i];
      divs[i].tabber = new tabberObj(tabberArgs);
    }
  }
  
  return this;
}


/*==================================================*/


function tabberAutomaticOnLoad(tabberArgs)
{
  /* This function adds tabberAutomatic to the window.onload event,
     so it will run after the document has finished loading.
  */
  var oldOnLoad;

  if (!tabberArgs) { tabberArgs = {}; }

  /* Taken from: http://simon.incutio.com/archive/2004/05/26/addLoadEvent */

  oldOnLoad = window.onload;
  if (typeof window.onload != 'function') 
  {
    window.onload = function() 
	{
      tabberAutomatic(tabberArgs);
    };
  } 
  else 
  {
    window.onload = function() 
	{
      oldOnLoad();
      tabberAutomatic(tabberArgs);
	  SetTabLabel("TabLoading");
    };
  }
}

/* Run tabberAutomaticOnload() unless the "manualStartup" option was specified */
if (typeof tabberOptions == 'undefined') 
{

    tabberAutomaticOnLoad();

} 
else 
{

  if (!tabberOptions['manualStartup']) 
  {
    tabberAutomaticOnLoad(tabberOptions);
  }

}
</script>
<!-- 
*********************************************
Start Script to Setup dynamic Tab formatting
Bug Ref: 24845, Dated: 01-Dec-2009
*********************************************
-->
<script type="text/javascript">
function SetTabLabel()
{
	try
	{
		var TabLabelText = "";	
		$("ul.tabbernav li a").each(function(anchorIndex){
			TabLabelText = $(this).attr("name");								 
			if($("#"+TabLabelText+"").find(".dynamicRequiredLabel").attr("id") != null || $("#"+TabLabelText+"").find(".dynamicRequiredLabel").hasClass("inputLabel"))
			{	
					if($(this).html().indexOf('*') == -1)
					$(this).html("* "+$(this).html());
			}
			else if($("#"+TabLabelText+"").find(".dynamicRequiredLabel").attr("id") == null)
			{
				$(this).html(SP_Trim ($(this).html().replace('*','')))
			}
		});
		if(arguments[0])
		{
			SP_SetTabsFormat();
			SP_SetFieldsFormat(mcEditablePages);
			SP_RemoveCalendarClass();
		}
	 }catch(e){}
}
/**********************************************************************
Following Function will Decide Format(required/non-required) for Dynamic 
required fields under Task Section. 
Bug Ref: 25720, Dated: 05-Feb-2010,

updated under bug 40709; Date: 25-Apr-2013; 
************************************************************************/
function SetTaskFieldsLabel(tFieldsList, tFieldsLabelList)
{

	var tFieldValue;
	var tField;

	tFieldsList = new String(tFieldsList).split(",");
	tFieldsLabelList = new String(tFieldsLabelList).split(",");

	for(i = 0; i<tFieldsList.length; i++)
	{
		tField = document.getElementById(tFieldsList[i]);
		tFieldValue = SP_Trim(tField.value);
		if(tFieldValue != "")
		{
			if(i == 1)
			{SP_RequiredLabelToggle(tFieldsLabelList[i],false,"newLabel");}
			else
			{SP_RequiredLabelToggle(tFieldsLabelList[i],false);}
		}
		else
		{
			if(i == 1)
			{SP_RequiredLabelToggle(tFieldsLabelList[i],true,"newLabel");}
			else
			{SP_RequiredLabelToggle(tFieldsLabelList[i], true);}
		}
	}
	SetTabLabel();
}

</script>
<!--- 
	/////// STANDARD ACTION ITEM MATRIX FUNCTIONALITY //////////
	  Developed Under bug 40490; Date: 3-Apr-2013
---->
<script type="text/javascript">

//updated under bug 40490; Date: 3-April-2013
function LaunchActionItem(refField, n) {
	var validDate = '',
		aiDate = 'txtContTaskDateDue' + n + '_date',
		dueDate = 'mastercontrol.route.stepduedate';

	validDate = SP_CompareDates(aiDate, dueDate);

	if (validDate === 1 || validDate === '') {
		alert('#mastercontrol.translate.SP_TRANS_CINITIATION.C_L32#');
		document.getElementById(dueDate).value = '';
		return;
	}

	SP_SelectRouteLaunched('Action Item', 'mastercontrol.task.mapped.routes.AI');

	if (SP_IsRouteSelected('Action Item', 'mastercontrol.task.mapped.routes.AI')) {
		SP_UnrequireFields();
		
		if (SetRequiredOnLaunch(n)) {
			var oAssignee = document.getElementById('mastercontrol.role.SP_CAPA_Owners.Cont' + n);

           	document.getElementById('hlpAssignees').value =  oAssignee.options[oAssignee.selectedIndex].text;
			document.getElementById('hlpLaunchingFormUsersList').value = SP_GetUserID(oAssignee.value);
			document.getElementById('IsContAILaunched').value = refField + n;
			document.getElementById('txtDefaultTab').value = 3;
			
			if (decisionVariable === 'editform') {
				SP_EnableAllFields('Issue_Review', true);
			}
			else {
				SP_EnablePageFields(mcEditablePages);
			}
		}
	}

	document.getElementById('mastercontrol.task.mapped.launch.AI').click();
}

//Created under bug 40490; Date: 3-Apr-2013
//updated under bug 40709; Date: 25-Apr-2013
function SetRequiredOnLaunch(n)
{
	var flag = false;
	var allreqfields;
	var allreqLabels;
	
	allreqfields = 'txtContTaskDesc'+n+',txtContTaskDateDue'+n+'_date,mastercontrol.role.SP_CAPA_Owners.Cont'+n;
	allreqLabels = 'lblContTaskDesc'+n+',txtContTaskDateDue'+n+'_date,lblContTaskOwner'+n;
	
	var tf1 = document.getElementById('txtContTaskDesc'+n).value; 
	var tf2 = document.getElementById('txtContTaskDateDue'+n+'_date').value;
	var tf3 = document.getElementById('mastercontrol.role.SP_CAPA_Owners.Cont'+n).value;
	
	mcRequireToggle(allreqfields,true);  
	SetTaskFieldsLabel(allreqfields,allreqLabels);
	
	if(SP_Trim(tf1)!= "" && SP_Trim(tf2)!= "" && SP_Trim(tf3)!= "")
	{
		flag = true;
	}
	if(SP_Trim(tf2) == "")
	{
		$('#txtContTaskDateDue'+n+'_date').css('width','83%');
	}
	return flag;
}

function SP_RemoveTask()
{
	var oAddTaskButton = document.getElementById(arguments[0]);
	var oTaskCounter = document.getElementById(arguments[1]);
	var taskContainer = arguments[2];
	var refSecContainer = arguments[3];
	var totalTasks = arguments[4]*1;
	var taskHeading = SP_Trim(arguments[5]);
	var arrFieldsId = arguments[6];
	
			if (oTaskCounter.value>0)
			{
				var flag = true;
				var index = arguments[7]*1;
		
				if(DoesTaskContainData(taskContainer+index))
				{
					var result = confirm("#mastercontrol.translate.SP_TRANS_ISSUE.C_L16# \'"+"#mastercontrol.translate.SP_TRANS_ISSUE.C_L17# "+index+"\' #mastercontrol.translate.SP_TRANS_ISSUE.C_L18#");
					if(!result)
					{
						flag = false;
					}
				}
			
				if(flag == true)
				{	
					
						
					if(index == oTaskCounter.value)
					{
						RemoveDataFromTask(taskContainer+index);
						SP_AddClass($("#"+taskContainer+index).get(0),'hide');
					}
					else 
					{
						var nCount = 0;
						var nStartFrom = index;
						var nLastIndex = oTaskCounter.value;
						
						RemoveDataFromTask(taskContainer+index);
							
						for(nCount = index; nCount<oTaskCounter.value; nCount++)
						{				
							nStartFrom++;	
							CopyTasksFieldValue(nStartFrom,nCount,arrFieldsId);
						}
						SP_AddClass($("#"+taskContainer+nLastIndex).get(0),'hide');
						SP_PerformAction(arrFieldsId[0]+nLastIndex,"disabled",false);
						SP_PerformAction(arrFieldsId[1]+nLastIndex,"disabled",false);
						SP_PerformAction(arrFieldsId[2]+nLastIndex+"_date","disabled",false);
						document.getElementById(arrFieldsId[6]+nLastIndex).disabled = false;
						document.getElementById(arrFieldsId[7]+nLastIndex).disabled = false;
						
						if(arrFieldsId.length > 8)
						SP_PerformAction(arrFieldsId[8]+nLastIndex,"disabled",false);
												
					}
						
						oTaskCounter.value = oTaskCounter.value - 1;
				}
			}	
			
			
			if(oTaskCounter.value >= 10)
			{oAddTaskButton.disabled = true;}
			else
			{
				oAddTaskButton.disabled = false;
				
				if(oTaskCounter.value == 0 || oTaskCounter.value == "")
				{
					SP_AddClass($("#"+refSecContainer).get(0),'hide');
					$("#"+refSecContainer+"").find("input:not(input[type=hidden]),textarea").attr("value","");	
				}	
			}

}

function SP_DisableLaunchedTasks()
{
	var arrFields = arguments[0];
	var oTaskCounter = document.getElementById(arguments[1]);
	var nNumofTasks = oTaskCounter.value * 1;
	var oTaskNumField = "";
	var oTaskCompleteDate = "";

	if(nNumofTasks >= 1)
	for(var i=1; i <= nNumofTasks; i++)
	{ 
		oTaskNumField = document.getElementById(arrFields[5]+i);	
		if(oTaskNumField.value !="")
		{
					
			SP_PerformAction(arrFields[0]+i,"disabled",true);
			SP_PerformAction(arrFields[1]+i,"disabled",true);
			SP_PerformAction(arrFields[2]+i+"_date","disabled",true);
			SP_PerformAction(arrFields[6]+i,"disabled",true);
			SP_PerformAction(arrFields[7]+i,"disabled",true);
			
			if(arrFields.length > 8)
			SP_PerformAction(arrFields[8]+i,"disabled",true);
			
		}
		else
		{
			if(arguments[2])
			{
				
				SP_PerformAction(arrFields[0]+i,"disabled",false);
				
				SP_PerformAction(arrFields[1]+i,"disabled",false);
				SP_PerformAction(arrFields[2]+i+"_date","disabled",false);
				document.getElementById(arrFields[6]+i).disabled = false;
				document.getElementById(arrFields[7]+i).disabled = false;
				
				if(arrFields.length > 8)
				SP_PerformAction(arrFields[8]+i,"disabled",false);
			}
		}
		SP_ShowHideCalendar(arrFields[2]+i+"_date");
	}
	SP_ManipulateButtonClasses();
	
}

function DoesTaskContainData()
{
	var flag = false;
	$("#"+arguments[0]+"").find("input:not(input[type=button]), select").each(function()
	{
		if(SP_Trim($(this).val()) != "")
		{
			flag = true; 
			return false;
		}
	});
	return flag;
}

//Improved under Bug 40709; Date: 30-Apr-2013
function RemoveDataFromTask(containerID)
{
	$("#"+containerID+"").find("input:not(input[type=button]), select").each(function()
	{
		$(this).val("");
		ApplyStandardBorder($(this));
	});
	$("#"+containerID+"").find("label").each(function()
	{
		if(SP_Trim($(this).attr("id")) != "undefined")
		{SP_RequiredLabelToggle($(this).attr("id"),false);}
		else if(SP_Trim($(this).attr("for")) != "undefined")
		{	
			var dtFid = SP_Trim($(this).attr("for"));
			
			if(dtFid.indexOf("_date") != -1)
			SP_RequiredLabelToggle(dtFid,false,"newLabel");
		}
	});
}

//Improved under bug 40490; Date: 8-Apr-2013
function ApplyStandardBorder()
{
	var sFId = arguments[0].attr("id");
	var oField = document.getElementById(sFId);
	
	if(oField != null)
	{
		if(oField.type == "select-one")
		{
			if(oField.parentNode.style.border == "thick solid red"  || oField.parentNode.style.border == "red thick solid")
			{
				oField.parentNode.style.border = "none";
			}
		}
		else if(oField.type == "text")
		{
			if(oField.style.border == "thick solid red" || oField.style.border == "red thick solid")
			{
				oField.style.border = "1px solid #A5C0dF";
			}
		}
	}
}


function CopyTasksFieldValue(from,to,sFieldsId)
{
	
	if(to > 0 && to< from)
	{
		var sTaskDescrption = document.getElementById(sFieldsId[0]+from);
		var sTaskOwner =  document.getElementById(sFieldsId[1]+from);
		var sTaskDueDate =  document.getElementById(sFieldsId[2]+from+"_date");
		var sTaskDateComplete =  document.getElementById(sFieldsId[4]+from+"_date");
		var sTaskReference =  document.getElementById(sFieldsId[5]+from);
			
		document.getElementById(sFieldsId[0]+to).value = SP_Trim(sTaskDescrption.value);
		document.getElementById(sFieldsId[1]+to).value = sTaskOwner.value;
		document.getElementById(sFieldsId[2]+to+"_date").value =  SP_Trim(sTaskDueDate.value);
		document.getElementById(sFieldsId[4]+to+"_date").value =  SP_Trim(sTaskDateComplete.value);
		document.getElementById(sFieldsId[5]+to).value =  SP_Trim(sTaskReference.value);
				
		sTaskDescrption.value = "";
		sTaskOwner.selectedIndex = 0;
		sTaskDueDate.value = "";
		sTaskDateComplete.value = "";
		sTaskReference.value = "";
		
		if(sFieldsId.length > 8)
		{
			var oTaskType =  document.getElementById(sFieldsId[8]+from);
			document.getElementById(sFieldsId[8]+to).value = oTaskType.value;
			oTaskType.selectedIndex = 0;
		}
	}
}

//Bug 41155
function SetDynamicallyFieldLabel()
{
	switch(decisionVariable)
	{
		case 3:
		case "editform":
			var taskCounter = document.getElementById("Containment_Task_Count").value*1;
			if(taskCounter >0)
			{
				for(ic=1;ic<=taskCounter;ic++)
				{
					SP_RequiredLabelToggle("txtContDateComplete"+ic+"_date",true,"newLabel");
				}
			}
			if(SP_Trim(document.getElementById("txtContOACompletion_date").value) != "")
			{
				SP_RequiredLabelToggle('lblContCompletionSummary',true);
			}
			else
			{
				SP_RequiredLabelToggle('lblContCompletionSummary',false);
			}
		if(decisionVariable != "editform")
			break;
		
		case 4.1:
		case 4.2:
		case "editform":
		if (SP_GetRGValue("chbIssueDisposition") == "CAPA Escalation")
		{
			if(document.getElementById("IsCAPALaunched").value != 1)
			{
				SP_RequiredLabelToggle("lblCAPALaunchMandatory",true);
			}
		}
		break;
	}
	SetRequiredFields();
	SP_MakeRequiredFieldsReadable();
	SP_ApplyPinkShadow();
	SetTabLabel();
}

function SetRequiredFields()
{
	SP_UnrequireFields();	
	switch(decisionVariable)
	{
		case 3:
		case "editform":
			var taskCounter = document.getElementById("Containment_Task_Count").value*1;
			if(taskCounter >0)
			{
				var fields = "";
				for(ic=1;ic<=taskCounter;ic++)
				{
					fields = fields+"txtContDateComplete"+ic+"_date,";
				}
				mcRequireToggle(fields,true);
			}
			if(SP_Trim(document.getElementById("txtContOACompletion_date").value) != "")
			{
				mcRequireToggle("txtContCompletionSummary",true);
			}
			else
			{
				mcRequireToggle("txtContCompletionSummary",false);
			}
		if(decisionVariable != "editform")
			break;
		
		case 4.1:
		case 4.2:
		case "editform":
		if (SP_GetRGValue("chbIssueDisposition") == "CAPA Escalation")
		{
			if(document.getElementById("IsCAPALaunched").value != 1)
			{
				mcRequireToggle("CAPALaunched", true);
			}
		}
		else if(SP_GetRGValue("chbIssueDisposition") == "Close, Track and Trend")
		{
			mcRequireToggle("txtTracknTrendNotes", true);
		}
		break;
	}
}

/*
* @author: jvanwagenen
* @param: {string} stepDueDate - ID for the step due date that the new task can't be later than
* @param: {string} targetActionDate - ID for the due date for the task that's going to be launched. Cannot be later than the stepDueDate.
* @param: {string} overallDueDate - ID for the overall due date which is the field that's automatically updated. Passed in so we can clear it out if there's an error with the dates
*/
function CompareWithApprovalDate(stepDueDate, targetActionDate, overallDueDate) {
	if (SP_CompareDates(targetActionDate, stepDueDate) === 1) {
		alert('#mastercontrol.translate.SP_TRANS_CINITIATION.C_L32#');

		if (overallDueDate) {
			document.getElementById(overallDueDate).value = '';
		}
		else {
			document.getElementById(targetActionDate).value = '';
		}

		return false;
	}

	return true;
}

/*
* @author: jvanwagenen
* @param: {string} partialId - partial ID of an element (i.e. 'txtContnmntTaskDue')
* @param: {Number} fieldsCount - the number of elements to iterate over (if there are 5, pass 5)
*/
function getLatestDate(partialId, fieldsCount) {
	var fieldID = "",
		value = new Date(),
		i = 1,
		maxIndex = 1,
		max = new Date(1970, 0, 1);
	
	for(; i <= fieldsCount; ++i) {
		fiedID = '#' + partialId + i + '_date';

		if ($(fiedID).val() != '') {
			value = $(fiedID).datepicker('getDate');

			if (value > max) {
				maxIndex = i;
				max = value;
			}
		}
	}

	return {
		index: maxIndex,
		value: max
	};
}

function SetDueDate(duDt, targetField, totalTasks) {
	var LatestDate = getLatestDate(duDt, totalTasks),
		dateString = '',
		stepDueDate = 'mastercontrol.route.stepduedate';

	if (LatestDate != '') {
		dateString = LatestDate.value.getFullYear() + '-' + (LatestDate.value.getMonth() + 1) + '-' + LatestDate.value.getDate();
		
		switch (targetField) {
			case 'txtContOADueDate_date':
				MC.Utils.Date.Parse({ 
					date: dateString, //Your date string here
					successCallback: function (result) { 
						document.getElementById('txtContOADueDate_date').value = result.date;
						CompareWithApprovalDate(stepDueDate, duDt + LatestDate.index + '_date', targetField);
					}
				});
			break;
			case 'txtContOACompletion_date':
				MC.Utils.Date.Parse({ 
					date: dateString, //Your date string here
					successCallback: function (result) { 
						document.getElementById('txtContOACompletion_date').value = result.date;
						SetDynamicallyFieldLabel();
					}
				});
			break;
		}
	}
	else {
		document.getElementById(targetField).value = '';
		SetDynamicallyFieldLabel();
	}
}

$(document).ready(function() 
{
	SP_ProgramCalendarEvents();
});
</script>