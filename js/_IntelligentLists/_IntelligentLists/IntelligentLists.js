var jQ = jQuery.noConflict();//remove conflict with MasterControl added jquery library

jQ(function() {
    jQ('#mastercontrol\\.dataset\\.recordids\\.Item1\\.Item1').change(function() {
        setItem2Combo();
    });

    jQ('#cmbItem2').change(function() {
        setItem3Combo();
    });
});

function setItem2Combo() {
    var item1 = document.getElementById("mastercontrol.dataset.recordids.Item1.Item1");
    var selItem1;
    var defects;
    var fldName = "cmbItem2";
    var item2Options = document.getElementById(fldName);
    var opt;
    var i;
    if (item1 != null && item2Options != null)
    {
        selItem1 = item1.options[item1.options.selectedIndex].value;
        if (selItem1 != "")
        {
            var Url = document.getElementById("txtMCUrl").value + "/Main/NOC/html_forms/query.cfm?dataset=getItem2FromItem1&Item1=" + selItem1;
            cmbClear(fldName);
            defects = xmlQuery(Url);
            opt = document.createElement('option');
            opt.text = "";
            opt.value = "";

            item2Options.options.add(opt, (item2Options.options.length + 1));

            for (i = 0; i < defects.length; i++)
            {
                opt = document.createElement('option');
                opt.text = opt.value = defects[i].Item2;
                item2Options.options.add(opt, (item2Options.options.length + 1));
            }
        }
    }
}

function setItem3Combo() {
    var item2 = document.getElementById("cmbItem2");
    var selItem2;
    var defects;
    var fldName = "cmbItem3";
    var item3Options = document.getElementById(fldName);
    var opt;
    var i;
    if (item2 != null && item3Options != null)
    {
        selItem2 = item2.options[item2.options.selectedIndex].value;
        if (selItem2 != "")
        {
            var Url = document.getElementById("txtMCUrl").value + "/Main/NOC/html_forms/query.cfm?dataset=getItem3FromItem2&Item2=" + selItem2;
            cmbClear(fldName);
            defects = xmlQuery(Url);
            opt = document.createElement('option');
            opt.text = "";
            opt.value = "";

            item3Options.options.add(opt, (item3Options.options.length + 1));

            for (i = 0; i < defects.length; i++)
            {
                opt = document.createElement('option');
                opt.text = opt.value = defects[i].Item3;
                item3Options.options.add(opt, (item3Options.options.length + 1));
            }
        }
    }
}

function xmlQuery(queryURL)
{
    var Url = queryURL;
    var i;
    var queryResults = Array();
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", Url, false );
    xmlHttp.send( null );
    var results = eval ( "(" + xmlHttp.responseText + ")" );
    for (i = 0; i < results.result.length; i++)
    {
        queryResults.push(results.result[i]);
    }
    return queryResults;
}

function cmbClear(id)
{
    var cmb = document.getElementById(id);
    var i;
    if (cmb != null)
    {
        cmb.options.length = 0;
    }
}