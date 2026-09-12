# 🚀 Dev Stack Builder

Dev Stack Builder is a modern, interactive web application designed to help developers explore, select, and organize their ideal technology stack for upcoming projects.

---

## 🛠️ Technologies Used

* **React.js** (Frontend Framework)
* **Vite** (Build Tool)
* **Tailwind CSS** (Styling Framework)
* **JavaScript (ES6+)**
* **HTML5 & CSS3**

---

## ✨ Features

* **Interactive Stack Manager:** Effortlessly add technologies to your stack or remove them with a single click.
* **Real-time Duplicate Prevention:** Prevents users from adding the same technology twice and alerts them instantly.
* **Dynamic JSON Data Fetching:** Automatically loads technology categories, ratings, and details from a local JSON source.

---

## ❓ React Conceptual Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside React components. It is used because it makes component templates visually clear, intuitive, and easier to write compared to pure JavaScript.

### 2. What is the difference between props and state?
**Answer:** 
* **Props:** Read-only data passed down from a parent component to a child component.
* **State:** Internal data managed within a component that can change over time and triggers a re-render when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** `useState` is a React Hook that adds state management to functional components. In this project, I used `useState` in `App.jsx` to store the list of technologies, track selected items in the user's stack, and manage loading status.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` handles side effects in React, such as fetching data or setting up timers. In this project, it was used to fetch technology data from `technologies.json` once when the component initially mounted.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the `key` prop to identify which items have changed, been added, or removed. It helps React optimize rendering performance by avoiding unnecessary re-renders of unchanged list items.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means rendering different UI elements based on specific conditions (like `if` statements or ternary operators). 
* **Example from project:** Displaying the "Your stack is empty" message in `StackSidebar.jsx` when `stack.length === 0`, instead of rendering the item list.

### 7. How do you pass data from parent to child, and how does child send something back?
**Answer:** 
* **Parent to Child:** Data is passed down via `props`.
* **Child to Parent:** The parent passes a callback function down as a prop, and the child calls that function with data as an argument.