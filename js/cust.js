function startup()
{
		jQ("#btnLaunchSimple").click(function () {
		selectRouteLaunched("simplert", "mastercontrol.task.routes");
		jQ("#mastercontrol\\.task\\.launch").click();
	alert("Hey Ya");
	});
}