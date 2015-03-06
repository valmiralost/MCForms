function startup()
{
		jQ("#btnLaunchSimple").click(function () {
		selectRouteLaunched("CAPA", "mastercontrol.task.routes");
		jQ("#mastercontrol\\.task\\.launch").click();
	//	document.getElementById("mastercontrol.task.launch").click(); 
	alert("Hey Ya");
	});		
}

function MapsimplertData()
{	
 //Setting Source Title
  var MapSourceTitle = document.getElementById("txtTitle");
  if(SP_Trim(document.getElementById("txtTitle").value) == "")
  {
  		MapSourceTitle.value = document.getElementById("mastercontrol.form.number").value;
  }
  else
  {
  		MapSourceTitle.value = document.getElementById("mastercontrol.form.title").value;
  }
//	document.getElementById("hlpSource").value = "Complaint";
  //Setting Extension Request Approvers to be passed
 // SP_MapERapprovers('mastercontrol.role.SP_COMP_ExtReqApprovers','hlpExtReqApprovers');
}
// Logic implemented related to Launch Extension Request
//Improved under bug 27133; 23-Apr-2010
function Launchsimplert()
{
	SP_UnrequireFields();
	MapsimplertData();
	selectRouteLaunched("simplert","mastercontrol.task.mapped.routes.simplert");
	RunSimpleCounter();
}

/**************FUNCTIONS ARE MEANT TO SET EXTENSION REQUEST COUNTER******************/
//Bug 27299; 27-Jul-2010
function RunSimpleCounter()
{
	if(stepId.value != "")
	{
		var SCounter = document.getElementById("SimpleCounter_num");
		var isLaunching = isRouteSelected("simplert" , "mastercontrol.task.mapped.routes.simplert");
		
		if(isLaunching)
		{

			   if(SCounter.disabled)
			   {
			   		SRCounter.disabled = false;
			   }
			   SCounter.value = (SCounter.value * 1) + 1;
		}
	}
}

//**********************************************************************************
// Logic implemented Related to enable/disable Extension Request Button
function EnableDisableExtensionFields()
{
	var ERLinks = document.getElementById("mastercontrol.links.simplert");
	var SimpleCounter_num = document.getElementById("mastercontrol.task.mapped.launch.simplert");
	var btnViewRequests = document.getElementById("mastercontrol.links.view.simplert");
	var SCounter = document.getElementById("SimpleCounter_num");

	
	if(document.getElementById("mastercontrol.route.stepduedate").value != "")
	{
		btnSLaunch.disabled = false;
	}
	else
	{
		btnSLaunch.disabled = true;
	}
	
	if(SCounter.value > 0)
	{
		btnViewRequests.disabled = false;
	}
	else
	{
		btnViewRequests.disabled = true;
	}
}

/*

function Launchsimple()
{
	SP_UnrequireFields();
	SP_SelectRouteLaunched("eMDR","mastercontrol.task.routes");
	if(SP_IsRouteSelected("eMDR","mastercontrol.task.routes"))
	{
		if(decisionVariable == "editform")
			SP_EnableAllFields("Customer_Complaint",true);
		else
			SP_EnablePageFields(mcEditablePages);
		document.getElementById("txtDefaultTab").value = 3;
		document.getElementById("hlpLaunchedForm").value = "eMDR";
		document.getElementById("hlpLaunchedFormRefField").value = "txteMDRRef";	
	}
	document.getElementById("mastercontrol.task.launch").click(); 
}


*/