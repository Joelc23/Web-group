// Form Validation
document.getElementById("submitButton").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const amount = document.getElementById("amount").value.trim();

  // Validate fields
  if (!name || !email || !amount || isNaN(amount) || Number(amount) <= 0) {
    alert("Please fill out all fields correctly!");
    return;
  }

  // Show thank-you message and reset form
  document.getElementById("thankYouMessage").style.display = "block";
  document.getElementById("donationForm").reset();
});

// Random Motivational Message
const messages = [
  "Together, we can make a difference!",
  "Your donation will inspire change!",
  "Thank you for supporting climate action!",
  "Every dollar counts toward a better future!",
  "You're helping build a sustainable world!"
];

// Display a random motivational message
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
const thankYouMessage = document.getElementById("thankYouMessage");
thankYouMessage.textContent = randomMessage;

// Highlight Donation Form Border on Hover
const donationForm = document.getElementById("donationForm");
donationForm.addEventListener("mouseover", () => {
  donationForm.style.borderColor = "#28a745"; // Green border on hover
});

donationForm.addEventListener("mouseout", () => {
  donationForm.style.borderColor = "#ccc"; // Reset border color
});
