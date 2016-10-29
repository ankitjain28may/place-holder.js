function getPlaceholderText(type) {
    switch (type) {
        case "email":
          return "Enter the Email Address";
        case "number":
          return "Enter the Number";
        case "password":
          return "Enter the Password";
        case "tel":
          return "Enter the Mobile No.";
        case "url":
          return "Enter the URL";
        case "text":
        default: 
          return "Enter the Text";
    }
}

var ele = $(":input"),
    len = ele.length,
    i = 0;
for (i = 0; i < len; i++) {
  if (!ele[i].placeholder) {
      ele[i].placeholder = getPlaceholderText(ele[i].type);
  }
}

$("textarea").attr("placeholder", "Enter the message");