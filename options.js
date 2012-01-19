
$(function(){
	
//init UI state
//hide plain password box on page load	
$("#plain_password").hide();

if(localStorage["eid"] != undefined){
	$("#eid").val(localStorage["eid"]);
}

//fill in credentials if they are stored
if(localStorage["password"] != undefined){
	$("#password").val(localStorage["password"]);

}


$("#save_credentials").click(function(){
	var password = $("#password").val();
	var eid = $("#eid").val();

	localStorage["password"] = password;
	localStorage["eid"] = eid;

	$("#message").html("Your credentials have been saved.");
});

$("#password_plain").keypress(function(){
	//copy plain password to hidden
	$("#password").val($("#plain_password").val());
});	

$("#show_password").click(function(){

	if($(this).html() === "Show Password"){
		$(this).html("Hide Password");

		//copy hidden password to plain
		$("#plain_password").val($("#password").val());

		//hide hidden and show plain input
		$("#password").hide();
		$("#plain_password").show();

	//else the password has been shown and we give the option to hide it again.
	} else {
		//change text on button
		$(this).html("Show Password");

		//copy plain password to hidden
		$("#password").val($("#plain_password").val());

		//hide plain and show hidden password input
		$("#plain_password").hide();
		$("#password").show();
	}
	
});

});