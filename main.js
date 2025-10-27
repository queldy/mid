document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;
  const terms = document.getElementById('terms').checked;
  let valid = true;
  
  if(!fullName || !email || !password || !confirm || !terms || password !== confirm) valid = false;
  
  if(valid) {
    document.getElementById('regFeedback').innerHTML = '<div class="alert alert-success">Registration successful!</div>';
    this.reset();
  } else {
    document.getElementById('regFeedback').innerHTML = '<div class="alert alert-danger">Please fix errors before submitting.</div>';
  }
});
