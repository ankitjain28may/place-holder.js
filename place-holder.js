var prefix = "Enter the";

var type = {
    "text": " Text",
    "tel": " Mobile Number",
    "password": " Password",
    "url": " URL",
    "number": " Number",
    "email": " Email Address"
};

var naming = {
    "name": "Enter your Name",
    "contact": "Enter your Contact Details",
    "tel": "Enter your Mobile Number",
    "mobile": "Enter your Mobile Number",
    "age": "Enter your Age",
    "email": "Enter your Email",
    "dob": "Enter your Date of Birth",
};

var ele = $(":input");
var len = ele.length;
var i = 0;
for (i = 0; i < len; i += 1) {
    if (!ele[i].placeholder)
    {
        if (ele[i].name)
        {
            ele[i].placeholder = naming[ele[i].name];
        }
        else
        {
            ele[i].placeholder = prefix + type[ele[i].type];
        }
    }
}
$("textarea").attr("placeholder", "Enter the Message");