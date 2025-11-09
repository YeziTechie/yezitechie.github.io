document.getElementById('whatsapp-btn').addEventListener('click', function() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !phone || !email || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  const text = `Hello, my name is ${name}.%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

  const phoneNumber = "YOUR_WHATSAPP_NUMBER"; // e.g. 971500000000
  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, "_blank");
});
