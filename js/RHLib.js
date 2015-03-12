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
    if (disableClass != false) {
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