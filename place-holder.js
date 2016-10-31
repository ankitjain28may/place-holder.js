var ele = $(":input");
var len = ele.length;
var i = 0;
var type = "";
for (i = 0; i < len; i++) {
  type = ele[i].type;
  if (!ele[i].placeholder) {
	switch (type) {
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