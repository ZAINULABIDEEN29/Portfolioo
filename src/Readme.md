<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Areesh Ali Abdullah - Portfolio</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: '#6366f1',
            primaryDark: '#4f46e5',
            secondary: '#8b5cf6',
            dark: '#1f2937',
            light: '#f9fafb'
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
          }
        }
      }
    }
  </script>
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #f9fafb;
      color: #1f2937;
      min-height: 100vh;
      overflow-x: hidden;
      transition: all 0.3s ease;
    }

    body.dark {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #f9fafb;
    }

    .navbar {
      background: rgba(249, 250, 251, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    body.dark .navbar {
      background: rgba(15, 23, 42, 0.9);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .navbar.scrolled {
      background: rgba(249, 250, 251, 0.95);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    body.dark .navbar.scrolled {
      background: rgba(15, 23, 42, 0.95);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }

    .nav-link {
      position: relative;
      padding: 0.5rem 0;
      color: #4b5563;
    }

    body.dark .nav-link {
      color: #e5e7eb;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .hero {
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
    }

    body.dark .hero {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    }

    #particles-js {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 20;
    }

    .floating-shapes {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 2;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      opacity: 0.5;
      filter: blur(40px);
    }

    .shape-1 {
      width: 400px;
      height: 400px;
      background: rgba(99, 102, 241, 0.3);
      top: 10%;
      left: 5%;
      animation: float 15s ease-in-out infinite;
    }

    .shape-2 {
      width: 300px;
      height: 300px;
      background: rgba(139, 92, 246, 0.3);
      bottom: 10%;
      right: 5%;
      animation: float 18s ease-in-out infinite reverse;
    }

    .shape-3 {
      width: 200px;
      height: 200px;
      background: rgba(79, 70, 229, 0.3);
      top: 50%;
      left: 80%;
      animation: float 12s ease-in-out infinite;
    }

    .hero-card {
      border-radius: 24px;
      transform-style: preserve-3d;
      transform: perspective(1000px);
      transition: all 0.5s ease;
    }

    .hero-card:hover {
      transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02);
      box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.1);
    }

    body.dark .hero-card:hover {
      box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.6);
    }

    .profile-image {
      position: relative;
      transform-style: preserve-3d;
      transform: translateZ(20px);
      transition: all 0.5s ease;
    }

    .profile-image:hover {
      transform: translateZ(30px) rotateY(10deg);
    }

    .profile-image::before {
      content: '';
      position: absolute;
      width: 110%;
      height: 110%;
      top: -5%;
      left: -5%;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border-radius: 50%;
      z-index: -1;
      animation: pulse 4s infinite;
    }

    .typing-text {
      position: relative;
      display: inline-block;
    }

    .typing-text::after {
      content: '|';
      position: absolute;
      right: -8px;
      animation: blink 0.7s infinite;
    }

    @keyframes blink {

      0%,
      100% {
        opacity: 1;
      }

      50% {
        opacity: 0;
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0px) rotate(0deg);
      }

      50% {
        transform: translateY(-20px) rotate(5deg);
      }

      100% {
        transform: translateY(0px) rotate(0deg);
      }
    }

    @keyframes pulse {
      0% {
        opacity: 0.7;
        transform: scale(1);
      }

      50% {
        opacity: 0.5;
        transform: scale(1.05);
      }

      100% {
        opacity: 0.7;
        transform: scale(1);
      }
    }

    .btn-hover-effect {
      position: relative;
      overflow: hidden;
      transition: all 0.3s;
      transform: translateZ(0);
    }

    .btn-hover-effect::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.6s;
    }

    .btn-hover-effect:hover::before {
      left: 100%;
    }

    .social-icon {
      transition: all 0.3s ease;
      transform: translateZ(0);
    }

    .social-icon:hover {
      transform: translateY(-5px) translateZ(10px);
    }

    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
      z-index: 20;
    }

    @keyframes bounce {

      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0) translateX(-50%);
      }

      40% {
        transform: translateY(-20px) translateX(-50%);
      }

      60% {
        transform: translateY(-10px) translateX(-50%);
      }
    }

    .grid-pattern {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:
        linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 0;
      transform: perspective(500px) rotateX(60deg);
      transform-origin: center top;
    }

    .section {
      padding: 100px 0;
    }

    .section-title {
      position: relative;
      display: inline-block;
      margin-bottom: 60px;
      font-size: 2.5rem;
      font-weight: 700;
    }

    .section-title::after {
      content: '';
      position: absolute;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }

    .about-content {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    body.dark .about-content {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .project-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
      height: 100%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    body.dark .project-card {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    body.dark .project-card:hover {
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    .project-image {
      height: 200px;
      overflow: hidden;
      position: relative;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(99, 102, 241, 0.9), transparent);
      opacity: 0;
      transition: all 0.3s ease;
      display: flex;
      align-items: flex-end;
      padding: 1.5rem;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .tech-tag {
      display: inline-block;
      background: rgba(99, 102, 241, 0.1);
      color: #6366f1;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      margin-right: 8px;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .contact-form {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 24px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    body.dark .contact-form {
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .form-input {
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 14px 18px;
      width: 100%;
      color: #1f2937;
      transition: all 0.3s ease;
      font-size: 16px;
    }

    body.dark .form-input {
      background: rgba(15, 23, 42, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #f9fafb;
    }

    .form-input:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }

    .theme-switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 30px;
    }

    .theme-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .theme-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #d1d5db;
      transition: .4s;
      border-radius: 34px;
    }

    .theme-slider:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }

    input:checked+.theme-slider {
      background-color: #6366f1;
    }

    input:checked+.theme-slider:before {
      transform: translateX(30px);
    }

    body.dark .theme-slider {
      background-color: #4b5563;
    }

    .stat-card {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    body.dark .stat-card {
      background: rgba(15, 23, 42, 0.7);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    body.dark .stat-card:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 768px) {
      .hero-card {
        transform: none !important;
      }

      .hero-card:hover {
        transform: none !important;
      }

      .shape {
        display: none;
      }

      .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        transition: right 0.3s ease;
        z-index: 50;
        padding: 80px 30px 30px;
      }

      body.dark .nav-menu {
        background: rgba(15, 23, 42, 0.95);
      }

      .nav-menu.active {
        right: 0;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  </style>
</head>

<body class="bg-gray-50">
  <!-- Navigation -->
  <nav class="navbar fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-2">
        <div class="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <span class="text-white font-bold text-lg">A</span>
        </div>
        <span class="text-xl font-bold text-gray-800 dark:text-white">Areesh</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Home</a>
        <a href="#about" class="nav-link text-gray-600 dark:text-gray-300 font-medium">About</a>
        <a href="#skills" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Skills</a>
        <a href="#experience" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Experience</a>
        <a href="#projects" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Projects</a>
        <a href="#blog" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Blog</a>
        <a href="#education" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Education</a>
        <a href="#contact" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Contact</a>

        <!-- Theme Toggle -->
        <label class="theme-switch ml-4">
          <input type="checkbox" id="theme-toggle">
          <span class="theme-slider"></span>
        </label>
      </div>

      <!-- Mobile Menu Button -->
      <button id="menu-toggle" class="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div id="nav-menu" class="nav-menu md:hidden">
      <button id="menu-close" class="absolute top-6 right-6 text-gray-600 dark:text-gray-300">
        <i class="fas fa-times text-2xl"></i>
      </button>
      <div class="flex flex-col space-y-6 mt-12">
        <a href="#" class="text-gray-600 dark:text-gray-300 text-lg font-medium">Home</a>
        <a href="#about" class="text-gray-600 dark:text-gray-300 text-lg font-medium">About</a>
        <a href="#skills" class="text-gray-600 dark:text-gray-300 text-lg font-medium">Skills</a>
        <a href="#experience" class="text-gray-600 dark:text-gray-300 text-lg font-medium">Experience</a>
        <a href="#projects" class="text-gray-600 dark:text-gray-300 text-lg font-medium">Projects</a>
        <a href="#blog" class="text-gray-600 dark:text-gray-300 text-lg font-medium">Blog</a>
        <a href="#education" class="text-gray-600 dark:text-gray-300 text-lg font-medium">Education</a>
        <a href="#contact" class="text-gray-600 dark:text-gray-300 text-lg font-medium">Contact</a>

        <div class="flex items-center justify-between pt-4">
          <span class="text-gray-600 dark:text-gray-300 font-medium">Dark Mode</span>
          <label class="theme-switch">
            <input type="checkbox" id="mobile-theme-toggle">
            <span class="theme-slider"></span>
          </label>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero flex items-center justify-center px-6 md:px-12 relative">
    <!-- Particle Background -->
    <div id="particles-js"></div>

    <!-- Grid Pattern -->
    <div class="grid-pattern"></div>

    <!-- Floating Shapes -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center hero-content">
      <!-- Hero Content -->
      <div class="text-center md:text-left">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Alex</span>
        </h1>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 mb-4">
          <span class="typing-text">Creative Developer</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-xl">
          I create immersive digital experiences with cutting-edge technologies. Let's transform your ideas into
          reality.
        </p>

        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#projects"
            class="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 btn-hover-effect">
            View Projects
          </a>
          <a href="#contact"
            class="border-2 border-primary text-primary dark:text-white dark:border-white px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 btn-hover-effect">
            Contact Me
          </a>
        </div>

        <div class="flex mt-12 space-x-6 justify-center md:justify-start">
          <a href="#"
            class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:shadow-lg">
            <i class="fab fa-github text-xl"></i>
          </a>
          <a href="#"
            class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg">
            <i class="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="#"
            class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 hover:shadow-lg">
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a href="#"
            class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-lg">
            <i class="fab fa-dribbble text-xl"></i>
          </a>
        </div>
      </div>

      <!-- Hero Card with 3D Effect -->
      <div class="hero-card p-8 flex justify-center">
        <div class="profile-image">
          <div
            class="w-64 h-64 md:w-80 md:h-80 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-xl flex items-center justify-center">
            <!-- Lottie animation as fallback -->
            <div id="lottie-container" class="w-full h-full flex items-center justify-center">
              <!-- <div class="text-5xl text-primary">🚀</div> -->
              <dotlottie-wc src="https://lottie.host/63c1f87e-c3d6-4a0b-9260-a595f7a6d392/lKoMYgfWg3.lottie"
                style="width: 300px;height: 300px" speed="1" autoplay loop></dotlottie-wc>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator hidden md:block">
      <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section px-6 md:px-12 bg-white dark:bg-slate-900">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 section-title">About Me</h2>

      <div class="about-content">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Crafting Digital Experiences</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate fullstack developer with expertise in creating modern, responsive web applications.
              With over 5 years of experience, I specialize in JavaScript, React, Node.js, and various other
              technologies.
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              My approach combines technical expertise with creative problem-solving to deliver solutions that
              not only meet but exceed client expectations. I believe in writing clean, maintainable code and
              creating intuitive user experiences.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#contact"
                class="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Hire Me
              </a>
              <a href="#"
                class="border-2 border-primary text-primary dark:text-white dark:border-white px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
                Download CV
              </a>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="stat-card">
              <div class="text-4xl font-bold text-primary mb-2">5+</div>
              <div class="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div class="stat-card">
              <div class="text-4xl font-bold text-primary mb-2">24+</div>
              <div class="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div class="stat-card">
              <div class="text-4xl font-bold text-primary mb-2">18+</div>
              <div class="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div class="stat-card">
              <div class="text-4xl font-bold text-primary mb-2">12+</div>
              <div class="text-gray-600 dark:text-gray-300">Awards Received</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section px-6 md:px-12 bg-gray-50 dark:bg-slate-800">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 section-title">My Projects</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Project 1 -->
        <div class="project-card">
          <div class="project-image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt="E-Commerce Project">
            <div class="project-overlay">
              <div class="text-white">
                <h3 class="text-xl font-bold">E-Commerce Website</h3>
                <p class="text-sm">React, Node.js, MongoDB</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Modern E-Commerce Platform</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">A full-featured e-commerce solution with product
              management, cart, checkout, and payment processing.</p>
            <div class="mb-4">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">Stripe</span>
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-primary dark:text-primaryDark font-medium flex items-center">
                View Project <i class="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                <i class="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-card">
          <div class="project-image">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
              alt="Finance Dashboard">
            <div class="project-overlay">
              <div class="text-white">
                <h3 class="text-xl font-bold">Finance Dashboard</h3>
                <p class="text-sm">Vue.js, Express, PostgreSQL</p>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Financial Analytics Dashboard</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">An interactive dashboard for financial data visualization
              with real-time updates and reporting.</p>
            <div class="mb-4">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Express</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">D3.js</span>
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-primary dark:text-primaryDark font-medium flex items-center">
                View Project <i class="fas fa-arrow-right ml-2 text-xs"></i>
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                <i class="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section px-6 md:px-12 bg-white dark:bg-slate-900">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 section-title">Get In Touch</h2>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="contact-form">
          <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Send me a message</h3>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Your
                  Name</label>
                <input type="text" id="name" class="form-input" placeholder="Enter your name">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Your
                  Email</label>
                <input type="email" id="email" class="form-input" placeholder="Enter your email">
              </div>
            </div>
            <div>
              <label for="subject"
                class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Subject</label>
              <input type="text" id="subject" class="form-input" placeholder="Enter subject">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Your
                Message</label>
              <textarea id="message" rows="5" class="form-input" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit"
              class="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div>
          <div class="bg-gray-100 dark:bg-slate-800 rounded-xl p-8 mb-8">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i class="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800 dark:text-white">Location</h4>
                  <p class="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i class="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800 dark:text-white">Email</h4>
                  <p class="text-gray-600 dark:text-gray-300">hello@example.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i class="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800 dark:text-white">Phone</h4>
                  <p class="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-100 dark:bg-slate-800 rounded-xl p-8">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Follow Me</h3>
            <div class="flex space-x-4">
              <a href="#"
                class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:shadow-lg">
                <i class="fab fa-github text-xl"></i>
              </a>
              <a href="#"
                class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg">
                <i class="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#"
                class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 hover:shadow-lg">
                <i class="fab fa-twitter text-xl"></i>
              </a>
              <a href="#"
                class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-lg">
                <i class="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Particles.js Library -->
  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js" type="module"></script>
  <script>
    // Initialize particles.js
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#6366f1"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6366f1",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });

    // Text typing effect
    const texts = ['Fullstack Developer', 'Software Engineer', 'UI/UX Designer', 'Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeText() {
      const currentText = texts[textIndex];
      const typingElement = document.querySelector('.typing-text');

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }

      setTimeout(typeText, typingSpeed);
    }

    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
      navMenu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

    function setTheme(isDark) {
      if (isDark) {
        document.body.classList.add('dark');
        document.documentElement.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
        document.documentElement.classList.remove('dark');
      }

      // Sync both toggles
      themeToggle.checked = isDark;
      mobileThemeToggle.checked = isDark;

      // Save preference to localStorage
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    themeToggle.addEventListener('change', () => {
      setTheme(themeToggle.checked);
    });

    mobileThemeToggle.addEventListener('change', () => {
      setTheme(mobileThemeToggle.checked);
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setTheme(true);
    } else if (savedTheme === 'light') {
      setTheme(false);
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Start typing effect when page loads
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(typeText, 1000);
    });
  </script>
</body>

</html>