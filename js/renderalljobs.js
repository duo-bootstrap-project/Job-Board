
function renderallJobs(jobs, filter) {
	var filterJob = $.grep(jobs, function(obj){
		return obj.jobTitle.toLowerCase().includes(filter.searchText.toLowerCase())
	})
	$('#jobsarea').empty();
	$.each(filterJob, function(index, value) { //array of objects
		var container = $("<div></div>")
		container.attr("class", "everyjobcontainer")
		var title = $("<h3>" + value.jobTitle + "</h3>")
		title.attr("class", "job-titles")
		var descrip = $("<p>" + value.jobDescrib + "</p>")
		descrip.attr("class", "job-descriptions")
		var salary = $("<p>" + value.salary + "</p>")
		salary.attr("class", "job-salaries")
		var date = $("<p>" + value.date + "</p>")
		date.attr("class", "job-dates")
		container.append(title)
		container.append(salary)
		container.append(descrip)
		container.append(date)
		$('#jobsarea').prepend(container)
	})
	localStorage.setItem("alljobs", JSON.stringify(filterJob))
}



var jobsArray = JSON.parse(localStorage.getItem("alljobs"));
var filter = {
	searchText: ""
}

renderallJobs(jobsArray, filter)
$("#searchbar").on('input', function(event){
	filter.searchText = $(this).val();
	renderallJobs(jobsArray, filter)
})
