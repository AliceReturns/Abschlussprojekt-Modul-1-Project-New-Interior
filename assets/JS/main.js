document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let nameInput = document.getElementById("your-name").value.trim();
    let emailInput = document.getElementById("enter-email").value.trim();
    let messageInput = document.getElementById("Nachricht").value.trim();

    if (!nameInput || !emailInput || !messageInput) {
      showCustomModal("Please fill out all fields.");

      return;
    }

    this.submit();
  });
