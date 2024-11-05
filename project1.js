// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Display a success message (simulated for this example)
    const formResponse = document.getElementById("form-response");
    formResponse.textContent = "Thank you for your message!";
    formResponse.style.color = "green";

    // Reset the form fields
    document.getElementById("contactForm").reset();
});
