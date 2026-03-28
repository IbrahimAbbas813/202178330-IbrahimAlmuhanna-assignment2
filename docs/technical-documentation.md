# Technical Documentation

**Student:** Ibrahim Abbas Almuhanna  
**Assignment:** Assignment 2 – Interactive Features

---

## 1. Project Overview

This project is an updated version of my Assignment 1 personal portfolio website. The main goal of Assignment 2 was to improve the website by adding dynamic behavior, better user interaction, clearer feedback, and smoother visual transitions.

The final website includes:

- a personalized greeting in the About section
- saved visitor name using localStorage
- live project search and category filtering
- improved contact form validation
- smooth animations and hover transitions
- saved dark/light theme preference

---

## 2. File and Folder Structure

```text
assignment-2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

### Main File Roles

- **index.html**: page structure and content
- **css/styles.css**: layout, responsive design, theme styles, transitions, and animations
- **js/script.js**: theme toggle, greeting logic, localStorage handling, filtering, form validation, and reveal animation
- **docs/**: assignment documentation and AI usage report

---

## 3. Features Added in Assignment 2

### A) Dynamic Content Feature

The main dynamic feature is the **project search and filter system**.

#### What it does
- lets the user search projects while typing
- lets the user filter projects by category using buttons
- updates the visible project cards immediately
- shows an empty-state message if no projects match

#### Why it was chosen
This feature fits a portfolio website well because it makes browsing projects easier and demonstrates real JavaScript interactivity.

---

### B) Data Handling

This project demonstrates data handling in two ways:

#### 1. localStorage
Used to save:
- the selected theme (dark or light)
- the visitor name entered in the About section

This allows the site to remember the user's preference even after refreshing the page.

#### 2. Form Validation
The contact form checks:
- name length
- valid email format
- minimum message length

If the input is invalid, an error message appears under the related field. If valid, a success message is displayed.

---

### C) Animations and Transitions

Simple animations were added to improve the experience without making the page distracting.

Implemented effects include:
- hover transitions on buttons, cards, and navigation links
- fade-in reveal effect when sections appear on screen
- animated form status messages

These effects make the website feel more modern and responsive.

---

### D) Error Handling and User Feedback

User feedback is provided in several areas:

- form field error messages explain what needs to be fixed
- a success message appears after valid form submission
- a message appears when the visitor name is saved
- an empty-state message appears when no projects match the filter

This makes the website easier to use and more informative.

---

## 4. JavaScript Logic Summary

### Theme Toggle
- toggles the `dark` class on the `<body>`
- stores the selected theme in `localStorage`
- restores the saved theme on page load

### Personalized Greeting
- checks the current time using `Date()`
- shows “Good morning,” “Good afternoon,” or “Good evening”
- adds the saved visitor name if one exists

### Project Filtering
- reads search input with an `input` event listener
- reads selected category using button click events
- compares user input with each project's title, category, and keywords
- hides or shows cards depending on the match

### Contact Form Validation
- prevents default submission using `event.preventDefault()`
- validates each field using JavaScript functions
- shows inline error messages for invalid values
- shows a success message and resets the form when valid

### Reveal Animation
- uses `IntersectionObserver`
- adds a `visible` class when sections enter the viewport
- CSS transitions handle the final animation effect

---

## 5. Design and UX Decisions

### Why keep the original structure?
Keeping the Assignment 1 layout made the project easier to expand without rebuilding everything from the beginning.

### Why add search/filter instead of tabs?
A project filter is practical for a portfolio site and clearly demonstrates user-driven dynamic content.

### Why use simple animations?
The assignment asks for smooth and helpful effects. Small transitions improve the interface without hurting readability or performance.

---

## 6. Responsiveness and Compatibility

The responsive design from Assignment 1 was kept and improved.

Breakpoints:
- Mobile: up to 600px
- Tablet: 601px to 900px
- Desktop: above 900px

Adjustments include:
- stacked layout for smaller screens
- one-column project grid on mobile
- flexible controls for filter buttons and name input area

The website is designed to work in modern browsers with standard HTML, CSS, and JavaScript.

---

## 7. Limitations

- the contact form is still front-end only and does not send real messages
- project items are static and not loaded from an external database or API
- images are placeholders and can be replaced with future project screenshots

These limitations are acceptable for this stage and can be improved in later assignments.

---

## 8. Conclusion

Assignment 2 builds clearly on Assignment 1 by adding meaningful interactivity, better user feedback, and a more polished experience. The project remains simple and maintainable while showing real progress in front-end development.
