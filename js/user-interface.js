function appendJobs(){
	$(".user-jobsarea").empty();
	var user =  JSON.parse(localStorage.getItem("ThisUser"))[0]
$.each(user.jobsPosted, function (index, value) {
		var title = $("<p><B>" + value.jobTitle + "</B></p>")
		title.attr('class', 'job-titles')
		var parg = $("<p>" + value.jobDescrib + "</p>")
		parg.attr('class', 'job-descriptions')
		var workinghours = $("<p>Working hours per week" + value.workinghours + "</p>");
		workinghours.attr("class", "work-hours");
		var date = $("<p>" + value.date + "</p>");
		date.attr("class", "date-posted");
		var container = $("<div></div>")
		container.attr("class, job-container")
		container.attr("id", value.id)
		container.append(title)
		container.append(date);
		container.append(parg)
		container.append(workinghours)
		$(".user-jobsarea").append(container)
})
}


// function appendInformation() {
// 	var user =  JSON.parse(localStorage.getItem("ThisUser"))[0]
// 	$(".user-logo").attr("src", user.img)
// 	$(".user-title").text(user.companyName)
// 	$(".user-about").text(user.companydescription)
// 	$(".user-services").text(user.services)
// 	$(".user-change-phone").text(user.phoneNumber);
// 	$(".user-change-address").text(user.address)

// }
