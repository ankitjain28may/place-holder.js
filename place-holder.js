/* 
 * Get all imput and replace placeholder value (if exists) by a nicer one
 */	
var ele = $(":input"); // get imput variables
var len = ele.length;
var i = 0;
var type = ""; 
for (i = 0; i < len; i++) { // foreach of them
  type = ele[i].type;  // get the type
  if (!ele[i].placeholder) {
    switch(type) { // finally replace placeholder with one corresponding to type
		case "text":
			ele[i].placeholder = "Enter the Text";
			break;
		case "email":
			ele[i].placeholder = "Enter the Email Address";
			break;
		case "number":
			ele[i].placeholder = "Enter the Number";
			break;
		case "password":
			ele[i].placeholder = "Enter the Password";
			break;
		case "tel":
			ele[i].placeholder = "Enter the Mobile No.";
			break;
		case "url":
			ele[i].placeholder = "Enter the URL";
			break;
    }
  }
}

$("textarea").attr("placeholder", "Enter the message");