	$(function(){
	$(".job-form-container").dialog({
		autoOpen: false, modal : true, show: "blind", hide: "blind", width: 700
	})

	$("#post-job-btn").click(function() {
		$(".job-form-container").dialog("open")
	})
		return false;
})