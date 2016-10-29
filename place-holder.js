function isText(type) {
  return type === "text";
}

function isEmail(type) {
  return type === "email";
}

function isNumber(type) {
  return type === "number";
}

function isPassword(type) {
  return type === "password";
}

function isTel(type) {
  return type === "tel";
}

function isURL(type) {
  return type === "url";
}

var ele = $(":input");
var len = ele.length;
var i = 0;
var type = "";
for (i = 0; i < len; i++) {
  type = ele[i].type;
  if (!ele[i].placeholder) {
    if (isText(type)) {
      ele[i].placeholder = "Enter the Text";
    } else if (isEmail(type)) {
      ele[i].placeholder = "Enter the Email Address";
    } else if (isNumber(type)) {
      ele[i].placeholder = "Enter the Number";
    } else if (isPassword(type)) {
      ele[i].placeholder = "Enter the Password";
    } else if (isTel(type)) {
      ele[i].placeholder = "Enter the Mobile No.";
    } else if (isURL(type)) {
      ele[i].placeholder = "Enter the URL";
    }
  }
}

$("textarea").attr("placeholder", "Enter the message");