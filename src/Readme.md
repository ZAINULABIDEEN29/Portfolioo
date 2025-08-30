# Portfolio Project

A handcrafted, visually engaging portfolio website built with Vite, Tailwind CSS, and JavaScript. This project is more than just a digital resume—it's a personal showcase of my work, skills, and creativity, designed to leave a lasting impression. With smooth GSAP animations, a modern UI, and thoughtful details throughout, this site is both a playground for my front-end skills and a welcoming place for visitors to get to know me.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Code Index](#code-index)
- [Customization](#customization)
- [Assets](#assets)
- [License](#license)

## Features
- **Fully Responsive:** Looks great on any device, from mobile to desktop.
- **GSAP Animations:** Subtle, smooth transitions and effects that bring the site to life.
- **Component-Based:** Each section is modular, making it easy to update or expand.
- **Dark & Light Mode:** Instantly switch between themes for a personalized experience.
- **Project Gallery:** Showcases my best work with images and descriptions.
- **Skills Grid:** A visual overview of my technical abilities.
- **Contact Form:** Easy way for visitors to reach out directly.
- **Downloadable Resume:** PDF available for quick access.

## Project Structure
```
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   ├── one.jpeg
│   ├── project-two.jpeg
│   └── zainCV.pdf
├── src/
│   ├── main.js
│   ├── Readme.md
│   ├── style.scss
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   └── utils/
│       ├── animations.js
│       ├── gsap.js
│       ├── particles.js
│       └── theme.js
```

## Getting Started
Ready to make it your own? Here’s how you can get up and running in just a few steps:

1. **Install dependencies:**
	```sh
	npm install
	```
2. **Start the development server:**
	```sh
	npm run dev
	```
	Your site will be live at [http://localhost:5173](http://localhost:5173) (or the port Vite chooses).
3. **Build for production:**
	```sh
	npm run build
	```
	The optimized site will be in the `dist/` folder, ready to deploy.

## Available Scripts
- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Code Index
Here’s a quick tour of the codebase so you can find your way around:

### Main Entry
- **`src/main.js`** — The heart of the app. Imports global styles and mounts the main components.
- **`src/style.scss`** — Where Tailwind meets your own custom flair. Add or tweak styles here.

### Components (`src/components/`)
- **`Navbar.js`** — Responsive navigation bar with theme toggle. Always visible, always useful.
- **`Hero.js`** — The first thing visitors see: your intro, tagline, and a call-to-action.
- **`About.js`** — Tell your story! Add your background, interests, or a fun fact.
- **`Projects.js`** — Show off your best work with images, links, and descriptions.
- **`Skills.js`** — A grid or list of your top skills, tools, and technologies.
- **`Contact.js`** — Simple form for visitors to send you a message (customize as needed).
- **`Footer.js`** — Social links, copyright, and a friendly sign-off.

### Utilities (`src/utils/`)
- **`animations.js`** — Custom animation helpers for unique effects.
- **`gsap.js`** — GSAP setup and triggers for smooth, professional animations.
- **`particles.js`** — Add a dynamic particle background for extra flair.
- **`theme.js`** — Handles dark/light mode switching and persistence.

### Config Files
- **`vite.config.js`** — Vite’s build and dev server settings.
- **`tailwind.config.js`** — Tailwind’s theme and plugin configuration.
- **`postcss.config.js`** — PostCSS plugins for processing your CSS.

### Public Assets (`public/`)
- Images and your downloadable resume (PDF) live here. Swap them out for your own!

## Customization
Make it yours! Here are some tips:
- **Edit Components:** Update the files in `src/components/` to reflect your own story, projects, and skills.
- **Swap Images:** Replace the images in `public/` with your own photos, project screenshots, or artwork.
- **Tweak Styles:** Adjust colors, fonts, or layouts in `src/style.scss` or `tailwind.config.js` to match your vibe.
- **Add More Sections:** Want a blog, testimonials, or something else? Add new components and link them in the navbar.

## License
This project is open source and available under the [MIT License](../LICENSE). Feel free to use, remix, or build on it—just give credit where it’s due!
