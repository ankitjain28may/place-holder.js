// Loop through all inputs
$('input').each(function() {
  // Get type
  var type = $(this)[0].type;
  // Run switch when placeholder isn't set
  if (!$(this)[0].placeholder) {
    // Use a switch to find type and set the placeholder based on it
    switch (type) {
      case 'text':
        $(this)[0].placeholder = 'Enter the Text';
        break;
      case 'email':
        $(this)[0].placeholder = 'Enter the Email Address';
        break;
      case 'number':
        $(this)[0].placeholder = 'Enter the Number';
        break;
      case 'password':
        $(this)[0].placeholder = 'Enter the Password';
        break;
      case 'tel':
        $(this)[0].placeholder = 'Enter the Mobile No.';
        break;
      case 'url':
        $(this)[0].placeholder = 'Enter the URL';
        break;
      default:
        $(this)[0].placeholder = 'Enter the Data';
    }
  }
});
// Loop through all textareas
$('textarea').each(function() {
  // Check if current textarea already has a placeholder. If not, set the placeholder to 'Enter the message'
  if (!$(this)[0].placeholder) {
    $(this).attr('placeholder', 'Enter the Message');
  }
});