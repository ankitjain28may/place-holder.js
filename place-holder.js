var prefix = "Enter the";

var type = {
  'text' : ' Text',
  'tel' : ' Mobile Number',
  'password' : ' Password',
  'url' : ' URL',
  'number' : ' Number',
  'email' : ' Email Address'
};

var ele = $(":input");
var len = ele.length;
var i = 0;
for (i = 0; i < len; i+=1)
  if (!ele[i].placeholder)
    ele[i].placeholder = prefix + type[ele[i].type];

$("textarea").attr("placeholder", "Enter the message");
