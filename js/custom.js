$(document).ready(function(){
	$("#userReg_btn").click( function(){

		var username 	= $("#username").val();
		var pass1 		= $("#pass1").val();
		var pass2 		= $("#pass2").val();

		var validReg 	= validateUserReg( username, pass1, pass2 );

		if( validReg ){
			var dataSrc = "userRegistration";
			var data = { "username": username, "password": pass1 }

			sendData( dataSrc, data );

		}
	} );

	$("#logoutLink").click( function(){
		var dataSrc = "logout";
		var data 	= "";

		sendData( dataSrc, data );

	});

	$("#userLogin_btn").click( function(){
		console.log("logging in");
		var username 	= $("#login_username").val();
		var pass1 		= $("#login_pass1").val();

		//Add validation step
		
		var dataSrc = "userLogin";
		var data = { "username": username, "password": pass1 }

			sendData( dataSrc, data );
	} );

	$("#profile_btn").click( function(){
		console.log("TEST SUCCESS");

		var u_name 	= $("#u_name").val();

		//Preparing the data for back end
		var dataSrc = "userProfile";
		//This is a JSON
		var data 	= { "u_name" : u_name };

			sendData( dataSrc, data );

	});



	function sendData( dataSrc, data ){
		console.log( "sendData() initialized...")
		
		$.post("api/", { "dataSource": dataSrc, "data": data }).done( function( data ){
			//This below executes when the server has responded
			console.log( data )
		});
	}

	function loginHandler(){
		location.reload();
	}

	function logoutHandler();
		location.reload();

	function validateUserReg( username, pass1, pass2 ){
		console.log( "validateUserReg() initialized...")
		var result = false;

		if( username != "" && pass1 != "" && pass2 != "" ){
			if( pass1 == pass2 ){
				if( pass1.length > 5 ){

					result = true;

				}else{
					alert("Password must be at least 6 characters long")
				}
			}else{
				alert("Passwords do not match");
			}
		}else{
			alert("All fields are required!");
		}

		return result;
	}
});