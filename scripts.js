// right navbar
var sidenav=document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0"
}

function closeNavbar()
{
    sidenav.style.left="-60%"
}
// left navbar
var leftnav=document.querySelector(".left-navbar-menu")

function openNavbar()
{
    leftnav.style.left="0"
}

function hideNavbar()
{
    leftnav.style.left="-60%"
}

// newspaper
function handleClick() {
    const inputBox = document.getElementById('inputBox');
    const output = document.getElementById('output');
    
    if (inputBox.value.trim() === '') {
      // If input is empty, alert the user and do nothing
      alert('Enter your email address!');
      return;
    }
    
    // If input is not empty, perform the desired action
    output.innerHTML = "<h1>Thanks for subcribed Us</h1>";
}

// contact us
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Grab input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validate mobile number
    const mobilePattern = /^[0-9]{10}$/;
  
    if (!mobilePattern.test(mobile)) {
      document.getElementById('responseMessage').textContent = "Please enter a valid 10-digit mobile number.";
      return;
    }
  
    // Ensure all fields are filled
    if (name && email && mobile && message) {
      document.getElementById('responseMessage').textContent = "Thank you for contacting us! We'll get back to you soon.";
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('responseMessage').textContent = "Please fill out all fields.";
    }
});
//customized tshirts
document.getElementById("customForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents actual form submission
  alert("Form submitted successfully!");
});