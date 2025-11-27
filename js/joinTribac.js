// Confetti
function launchConfetti() {
  const duration = 3000;
  const animationEnd = Date.now() + duration;

  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 9999,
  };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random(), y: Math.random() * 0.2 },
    });
  }, 250);
}

// Form
const form = document.querySelector("form");
const proceedBtn = document.querySelector("button[type='submit']");

// Inputs
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const genderInput = document.getElementById("gender");
const ageInput = document.getElementById("age");

// Errors
const reqField = document.getElementById("reqField");
const errorPhone = document.getElementById("errorPhone");
const errorEmail = document.getElementById("errorEmail");
const genderError = document.getElementById("genderError");

// Validation handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  // Required fields
  if (
    nameInput.value.trim() === "" ||
    ageInput.value.trim() === "" ||
    addressInput.value.trim() === ""
  ) {
    reqField.classList.remove("hidden");
    reqField.classList.add("flex");
    hasError = true;
  } else {
    reqField.classList.add("hidden");
  }

  // Email validation
  const email = emailInput.value.trim();
  const validEmail = email.includes(".") && email.includes("@");

  if (!validEmail) {
    errorEmail.classList.remove("hidden");
    errorEmail.classList.add("flex");
    hasError = true;
  } else {
    errorEmail.classList.add("hidden");
  }

  // Phone validation
  const phone = phoneInput.value.trim();

  if (phone.length < 10) {
    errorPhone.classList.remove("hidden");
    errorPhone.classList.add("flex");
    hasError = true;
  } else {
    errorPhone.classList.add("hidden");
  }

  // Gender validation
  const gender = genderInput.value.trim().toLowerCase();

  if (!(gender === "male" || gender === "female")) {
    genderError.classList.remove("hidden");
    genderError.classList.add("flex");
    hasError = true;
  } else {
    genderError.classList.add("hidden");
  }

  // Success
  if (!hasError) {
    launchConfetti();
    form.submit();
  }
});
