# React Assignment: Food Pre-Order System

## Overview

This assignment is designed to evaluate your React skills, specifically regarding state management,
form validation, and UI/UX implementation. You are provided with a "base" repository built with \*
\*Vite + TypeScript\*\* that contains core logic and data, but with an intentionally minimal and
unpolished user interface.

Your goal is to complete the application logic and transform the UI into a professional,
production-ready product.

---

## Requirements

### Must-Have

- **React & TypeScript:** Use modern React (18/19) and maintain strict type safety throughout the
  project.
- **Step 4 Implementation:** Complete the "Review" step to display a clear summary of all selections
  made in previous steps.
- **Validation Logic:** \* User cannot proceed to the next step if inputs are invalid.
  - **Step 3 Constraint:** The total number of dishes (Sum of all servings) must be $\geq$ the
    number of people selected in Step 1, with a maximum of 10 servings allowed.
  - **Step 3 Constraint:** Users cannot select the same dish twice; they must increase the number
    of servings instead.
- **State Consistency:** Ensure that if a user goes back and changes a selection (e.g., changing the
  Meal Category), any dependent data in subsequent steps is updated or cleared appropriately.
- **Console Submission:** For the final "Submit" action, log the results as a structured JSON object
  to the console.

### Great-to-Have (Optional)

- **CSS Framework:** Use **Tailwind CSS** (preferred) or another CSS-in-JS library to refactor the
  UI.
- **Testing:** Write unit or integration tests for the core validation logic (e.g., total servings
  vs. headcount).

---

## The Challenge: From "Bad" to "Great"

The current repository is functional but has several issues you are expected to address:

1. **UI/UX:** The current design is rudimentary. We expect you to improve the layout, spacing, and
   overall user journey.
2. **Architecture:** The code currently uses basic prop drilling. Feel free to refactor this using **Context API**, **useReducer**, or a state management library.
3. **Data Handling:** The data is provided in `src/data/dishes.json` in Vietnamese. Ensure your
   filtering logic handles these records correctly.

---

## Setup & Development

1. **Install dependencies:**

```bash
   npm install
```

2. **Run development server:**

```bash
   npm run dev
```

---
