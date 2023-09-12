document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const OTP = document.getElementById("OTP").value;

  
    alert(`Thank you, ${name}! Your registration is submitted.\nEmail: ${email}\nPhone: ${phone}\nOTP: ${OTP}`);
});
