$(document).ready(function(){
    $("#popup-button").click(function(){
        $(".popup-window").toggleClass("open");
    });
});

$(document).ready(function(){
    $("#main-content").click(function(){
    $(this).data('clicked', true);
     
	});
});

$(document).ready(function(){
    $("#side-area").click(function(){
    	if($('#main-content').data('clicked')) {
   		   // alert('can not close');
		}else{
			 $(".popup-window").removeClass("open");
		}
        $("#main-content").data('clicked', false);
    });
});

