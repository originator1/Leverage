const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const user_email = document.querySelector('#email-login').value.trim();
    const user_password = document.querySelector('#password-login').value.trim();
  
    if (user_email && user_password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ user_email, user_password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        alert(response.statusText);
        console.log(response)
      }
    }
};

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user_first_name = document.querySelector('#first-name-signup').value.trim();
    const user_last_name = document.querySelector('#last-name-signup').value.trim();
    const user_email = document.querySelector('#email-signup').value.trim();
    const user_password = document.querySelector('#password-signup').value.trim();
  
    if (user_first_name && user_last_name && user_email && user_password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ user_first_name, user_last_name, user_email, user_password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/schedule');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#signInForm')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signUpForm')
    .addEventListener('submit', signupFormHandler);



    //COMPRESSED SCRIPT OF LOGIN.JS

    //const loginFormHandler=async a=>{a.preventDefault();const b=document.querySelector("#email-login").value.trim(),c=document.querySelector("#password-login").value.trim();if(b&&c){const a=await fetch("/api/user/login",{method:"POST",body:JSON.stringify({user_email:b,user_password:c}),headers:{"Content-Type":"application/json"}});a.ok?document.location.replace("/schedule"):(alert(a.statusText),console.log(a))}},signupFormHandler=async a=>{a.preventDefault();const b=document.querySelector("#first-name-signup").value.trim(),c=document.querySelector("#last-name-signup").value.trim(),d=document.querySelector("#email-signup").value.trim(),e=document.querySelector("#password-signup").value.trim();if(b&&c&&d&&e){const a=await fetch("/api/user",{method:"POST",body:JSON.stringify({user_first_name:b,user_last_name:c,user_email:d,user_password:e}),headers:{"Content-Type":"application/json"}});a.ok?document.location.replace("/schedule"):alert(a.statusText)}};document.querySelector("#signInForm").addEventListener("submit",loginFormHandler),document.querySelector("#signUpForm").addEventListener("submit",signupFormHandler);