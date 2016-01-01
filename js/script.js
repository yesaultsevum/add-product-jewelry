(function(){
    $("input[type=checkbox]").click(function () {
    	if($(this).prop('checked')){
    		$(this).next().slideDown(300);
        } else {
        	$(this).next().slideUp(300);
        	$(this).next().find("input[type=checkbox]").removeAttr('checked');
        }
    });
    
}());