function 
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