// =========================
// Theme Toggle + localStorage
// =========================
const themeToggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

function updateThemeButton() {
  if (!themeToggleBtn) return;
  themeToggleBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
}

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
updateThemeButton();

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeButton();
  });
}

// =========================
// Personalized Greeting + saved visitor name
// =========================
const greetingElement = document.getElementById("personalGreeting");
const visitorNameInput = document.getElementById("visitorName");
const saveNameBtn = document.getElementById("saveNameBtn");
const nameFeedback = document.getElementById("nameFeedback");

function getGreetingByTime() {
  const currentHour = new Date().getHours();

  if (currentHour < 12) return "Good morning";
  if (currentHour < 18) return "Good afternoon";
  return "Good evening";
}

function renderGreeting() {
  if (!greetingElement) return;

  const savedName = localStorage.getItem("visitorName");
  const greeting = getGreetingByTime();

  greetingElement.textContent = savedName
    ? `${greeting}, ${savedName}! Welcome to my portfolio.`
    : `${greeting}! Welcome to my portfolio.`;
}

renderGreeting();

if (visitorNameInput) {
  const savedName = localStorage.getItem("visitorName");
  if (savedName) {
    visitorNameInput.value = savedName;
  }
}

if (saveNameBtn) {
  saveNameBtn.addEventListener("click", () => {
    const nameValue = visitorNameInput.value.trim();

    if (!nameValue) {
      nameFeedback.textContent = "Please enter your name before saving.";
      nameFeedback.style.color = "#c62828";
      return;
    }

    localStorage.setItem("visitorName", nameValue);
    nameFeedback.textContent = "Your name has been saved successfully.";
    nameFeedback.style.color = "#1b7f3b";
    renderGreeting();
  });
}

// =========================
// Dynamic Project Search + Filter
// =========================
const projectSearchInput = document.getElementById("projectSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyProjectsMessage = document.getElementById("emptyProjectsMessage");
const projectFeedback = document.getElementById("projectFeedback");

let activeCategory = "all";

function filterProjects() {
  const searchText = projectSearchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const categories = card.dataset.category.toLowerCase();
    const keywords = card.dataset.keywords.toLowerCase();

    const matchesCategory = activeCategory === "all" || categories.includes(activeCategory);
    const matchesSearch =
      title.includes(searchText) ||
      categories.includes(searchText) ||
      keywords.includes(searchText);

    if (matchesCategory && matchesSearch) {
      card.classList.remove("hidden-card");
      visibleCount += 1;
    } else {
      card.classList.add("hidden-card");
    }
  });

  emptyProjectsMessage.hidden = visibleCount !== 0;

  if (visibleCount === 0) {
    projectFeedback.textContent = "No matching projects were found.";
  } else if (activeCategory === "all" && searchText === "") {
    projectFeedback.textContent = `Showing all projects (${visibleCount}).`;
  } else {
    const label = activeCategory === "all" ? "all categories" : activeCategory;
    projectFeedback.textContent = `Showing ${visibleCount} project(s) for ${label}.`;
  }
}

if (projectSearchInput) {
  projectSearchInput.addEventListener("input", filterProjects);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.filter;
    filterProjects();
  });
});

filterProjects();

// =========================
// Contact Form Validation + Feedback
// =========================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

const formFields = {
  name: {
    input: document.getElementById("name"),
    error: document.getElementById("nameError"),
    validate: (value) => value.trim().length >= 2,
    message: "Please enter at least 2 characters for your name."
  },
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("emailError"),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: "Please enter a valid email address."
  },
  message: {
    input: document.getElementById("message"),
    error: document.getElementById("messageError"),
    validate: (value) => value.trim().length >= 10,
    message: "Please enter a message with at least 10 characters."
  }
};

function validateField(fieldConfig) {
  const value = fieldConfig.input.value;
  const isValid = fieldConfig.validate(value);
  fieldConfig.error.textContent = isValid ? "" : fieldConfig.message;
  return isValid;
}

Object.values(formFields).forEach((field) => {
  field.input.addEventListener("input", () => {
    validateField(field);
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const allValid = Object.values(formFields).every((field) => validateField(field));

    if (!allValid) {
      formStatus.textContent = "Please correct the highlighted fields and try again.";
      formStatus.className = "status-message error";
      return;
    }

    formStatus.textContent = "Message sent successfully (demo only). Thank you!";
    formStatus.className = "status-message success";
    contactForm.reset();
  });
}

// =========================
// Footer Year
// =========================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// =========================
// Reveal-on-scroll animation
// =========================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => revealObserver.observe(element));
