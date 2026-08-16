# NOVA — Creative Digital Studio

A modern, responsive animated landing page built with **React**, **Vite**, and **GSAP**.

NOVA is a creative digital studio landing page focused on bold typography, smooth animations, responsive layouts, and a clean dark visual style.

## Live Project

GitHub Repository: https://github.com/amitkumar-7393/animated-landing-page

## Preview

The landing page includes:

* Animated navigation bar
* Large hero typography
* GSAP entrance animations
* Interactive CTA buttons
* Animated creative card
* Selected Work section
* About section
* Smooth scrolling navigation
* Fully responsive layout

## Features

### Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries automatically adjust typography, spacing, navigation, buttons, and the hero layout for smaller screens.

### GSAP Animations

GSAP is used to create smooth entrance animations for:

* Navigation
* Hero label
* Hero heading
* Description
* CTA buttons
* Creative card

Animations are initialized when the React component mounts and are cleaned up properly using `gsap.context()`.

### Modern UI

The interface uses:

* Dark background
* Orange accent color
* Large typography
* Outline typography
* Gradient visual card
* Minimal navigation
* Modern spacing and layout

### Smooth Navigation

Navigation links use section anchors to move between:

* Home
* Work
* About

Smooth scrolling is enabled through CSS.

## Tech Stack

| Technology | Purpose                           |
| ---------- | --------------------------------- |
| React      | UI development                    |
| Vite       | Development server and build tool |
| GSAP       | Animations                        |
| JavaScript | Application logic                 |
| CSS3       | Styling and responsive design     |
| HTML5      | Page structure                    |
| Git        | Version control                   |
| GitHub     | Source code hosting               |

## Project Structure

```text
animated-landing-page/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/amitkumar-7393/animated-landing-page.git
```

### 2. Open the project

```bash
cd animated-landing-page
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display a local URL in the terminal, usually:

```text
http://localhost:5173/
```

If that port is already being used, Vite may automatically use another port such as `5174` or `5175`.

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Main Sections

### Home

The hero section introduces NOVA with large animated typography, supporting text, CTA buttons, and a visual creative card.

### Selected Work

A minimal section presenting the studio's creative philosophy and work-focused messaging.

### About

An introduction to NOVA's core approach:

**Strategy. Design. Technology.**

## Animation Flow

The hero animation follows this sequence:

```text
Navigation
    ↓
Hero Label
    ↓
Hero Heading
    ↓
Description
    ↓
CTA Buttons
    ↓
Creative Card
```

GSAP controls the timing, easing, stagger, scale, rotation, and opacity of the elements.

## Responsive Breakpoints

The project currently includes responsive layouts for:

```text
Desktop
    ↓
max-width: 800px
    ↓
Tablet / Mobile
    ↓
max-width: 480px
    ↓
Small Mobile
```

## Development

This project was created as part of a frontend development internship curriculum and demonstrates practical usage of:

* React component development
* Responsive CSS
* Modern landing page design
* GSAP animation
* Smooth navigation
* Git and GitHub workflow

## Future Improvements

Possible future improvements include:

* Mobile navigation menu
* More detailed project showcase cards
* Scroll-triggered animations
* Page transition animations
* Contact form
* Dark/light theme
* Additional portfolio sections
* SEO improvements
* Accessibility improvements
* Deployment with Vercel or Netlify

## Author

**Amit Kumar**

Frontend Development Intern

GitHub: https://github.com/amitkumar-7393

## License

This project is created for learning and portfolio purposes.

You are free to use the code for educational purposes and modify it for your own projects.
