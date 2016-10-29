function isText(type) {
  if (type === "text") {
    return true;
  }
  return false;
}

function isCreditCard(name) {
  return name === "cardnumber";
}

function isCCName(name) {
  return name === "ccname";
}

function isCVC(name) {
  return name === "cvc";
}

function isCCExp(name) {
  return name === "cc-exp";
}

function isShipAddress(name) {
  return name === "ship-address";
}

function isShipCity(name) {
  return name === "ship-city";
}

function isShipState(name) {
  return name === "ship-state";
}

function isShipCountry(name) {
  return name === "ship-country";
}

function isShipZip(name) {
  return name === "ship-zip";
}

function isEmail(type) {
  if (type === "email") {
    return true;
  }
  return false;

}

function isNumber(type) {
  if (type === "number") {
    return true;
  }
  return false;

}

function isPassword(type) {
  if (type === "password") {
    return true;
  }
  return false;

}

function isTel(type) {
  if (type === "tel") {
    return true;
  }
  return false;

}

function isURL(type) {
  if (type === "url") {
    return true;
  }
  return false;

}

var ele = $(":input");
var len = ele.length;
var i = 0;
var type = "";
for (i = 0; i < len; i++) {
  type = ele[i].type;
  name = ele[i].name;
  if (!ele[i].placeholder) {
    if (isText(type)) {
      if (isCCName(name)) {
        ele[i].placeholder = "Enter the Name on Credit Card"
      } else if (isCreditCard(name)) {
        ele[i].placeholder = "Enter the Credit Card Number"
      } else if (isCVC(name)) {
        ele[i].placeholder = "Enter the CVC"
      } else if (isCCExp(name)) {
        ele[i].placeholder = "Enter the Expiration"
      } else if (isShipAddress(name)) {
        ele[i].placeholder = "Enter the Street Address"
      } else if (isShipCity(name)) {
        ele[i].placeholder = "Enter the City"
      } else if (isShipState(name)) {
        ele[i].placeholder = "Enter the State"
      } else if (isShipCountry(name)) {
        ele[i].placeholder = "Enter the Country"
      } else if (isShipZip(name)) {
        ele[i].placeholder = "Enter the Zip Code"
      } else {
        ele[i].placeholder = "Enter the Text";
      }
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

$("textarea")
  .attr("placeholder", "Enter the message");
