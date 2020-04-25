var user = JSON.parse(localStorage.getItem("ThisUser"))
//one user jobs 

renderUserjobs(user.jobsPosted)
var users = JSON.parse(localStorage.getItem("users"))
$("#job-btn").click(function() {
	var date = new Date;
	var newjob = {
		id: uuidv4(),
		jobTitle: $('#job-name-input').val(),
		jobDescrib: $('#job-about-input').val(),
		salary: $("#job-salary-input").val(),
		date: date.getDate() + " / " + (date.getMonth() + 1 )+ " / " +date.getFullYear()
		
}
	user.jobsPosted.push(newjob)
var jobsArray = JSON.parse(localStorage.getItem("alljobs"));
if(jobsArray === null)
	jobsArray = [];
jobsArray.push(newjob)
localStorage.setItem("alljobs", JSON.stringify(jobsArray))

localStorage.setItem("ThisUser", JSON.stringify(user))
updateUser(user);
renderUserjobs(user.jobsPosted)	
		$(".job-form-container").dialog("close")

})
function updateUser(user){
	for(var i = 0; i < users.length; i++){
		if(users[i].id === user.id)
			users[i] = user;
	}
	localStorage.setItem("users", JSON.stringify(users))
}

function renderUserjobs(jobsArray){
	$("#user-posted-jobs").html("");
	for(var i = 0; i < jobsArray.length; i++) {
		var container = $("<div></div>")
		container.attr("class", "everyjobcontainer")
		var title = $("<h3>" + jobsArray[i].jobTitle + "</h3>")
		title.attr("class", "job-titles")
		var descrip = $("<p>" + jobsArray[i].jobDescrib + "</p>")
		descrip.attr("class", "job-descriptions")
		var salary = $("<p>" + jobsArray[i].salary + "</p>")
		salary.attr("class", "job-salaries")
		var date = $("<p>" + jobsArray[i].date + "</p>")
		date.attr("class", "job-dates")
		container.append(title)
		container.append(salary)
		container.append(descrip)
		container.append(date)
		$("#user-posted-jobs").prepend(container)
	}

}

