<script>
// Random Tip Display
// Array of tips about climate action
const tips = [
  "Reduce, reuse, and recycle to minimize waste.",
  "Save energy by turning off lights and electronics.",
  "Plant a tree to absorb CO2 and improve air quality.",
  "Use public transport or cycle to reduce emissions.",
  "Conserve water by fixing leaks and using less."
];

// Function to display a random tip
function displayRandomTip() {
  const footer = document.querySelector("footer");
  const tip = tips[Math.floor(Math.random() * tips.length)];
  const tipElement = document.createElement("p");
  tipElement.textContent = `🌱 Climate Tip: ${tip}`;
  tipElement.style.fontStyle = "italic";
  footer.appendChild(tipElement); // Append the tip to the footer
}

// Call the function on page load
displayRandomTip();

// Highlight Key Points
// Function to highlight a random key point
function highlightRandomKeyPoint() {
  const keyPoints = document.querySelectorAll(".list-group-item");
  const randomIndex = Math.floor(Math.random() * keyPoints.length);
  keyPoints[randomIndex].style.backgroundColor = "#d4edda"; // Highlight color
  keyPoints[randomIndex].style.fontWeight = "bold"; // Make the text bold
}

// Call the function on page load
highlightRandomKeyPoint();
</script>
