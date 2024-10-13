<script>
$(document).ready(function() {
  // Array of invalid domains
  const invalidDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'msn.com', 'googlemail.com'];

  // Get the submit button
  const submitBtn = $('#continue_submit');
  
  // On submit button click
  submitBtn.click(function(event) {
    // Get the email field
    const email = $('#t_email_address');
    // Split email at '@' character to get domain
    const domainPart = email.val().split('@')[1];
    
    // Get the error message element
    const errorMessage = $('.error');
    // If the domain exists in the invalidDomains array
    if (invalidDomains.indexOf(domainPart) !== -1) {
      email.addClass('input-error');
      // Show error message
      errorMessage.addClass('show-error');
      // Prevent form submission
      event.preventDefault();
    } else {
      // Hide error message
      errorMessage.removeClass('show-error');
      email.removeClass('input-error');
    }
  });
});
</script>