var prefix = "Enter the";

var type = {
  "text": " Text",
  "tel": " Telephone Number",
  "password":" Password",
  "url":" URL",
  "number": " Number",
  "email": " Email Address"
};

var ele = $(":input");
var len = ele.length;
var i = 0;
var type = "";
for (i = 0; i < len; i++) {
  type = ele[i].type;
  if (!ele[i].placeholder) {
    ele[i].placeholder = prefix + type[ele[i].type].text;
  }
}

$("textarea").attr("placeholder", "Enter the message");
