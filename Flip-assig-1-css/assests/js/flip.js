$(document).ready(function(){
	$("#container").hover(
  function () {
    $(this).addClass("result_hover");
  },
  function () {
    $(this).removeClass("result_hover");
  });
});
