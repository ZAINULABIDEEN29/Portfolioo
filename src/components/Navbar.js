// src/components/Navbar.js
export default function Navbar() {
  return `
    <nav class="navbar fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" class="flex items-center space-x-2">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <span class="text-white font-bold text-lg">A</span>
          </div>
          <span class="text-xl font-bold text-gray-800 dark:text-white">Areesh</span>
        </a>

        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Home</a>
          <a href="#about" class="nav-link text-gray-600 dark:text-gray-300 font-medium">About</a>
          <a href="#skills" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Skills</a>
          <a href="#experience" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Experience</a>
          <a href="#projects" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Projects</a>
          <a href="#blog" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Blog</a>
          <a href="#education" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Education</a>
          <a href="#contact" class="nav-link text-gray-600 dark:text-gray-300 font-medium">Contact</a>
          <label class="theme-switch ml-4">
            <input type="checkbox" id="theme-toggle">
            <span class="theme-slider"></span>
          </label>
        </div>

        <!-- Hamburger for mobile -->
        <button id="menu-toggle" class="md:hidden hamburger focus:outline-none">
          <div class="w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5 transition-all"></div>
          <div class="w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5 transition-all"></div>
          <div class="w-6 h-0.5 bg-gray-800 dark:bg-white transition-all"></div>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div id="mobile-menu" class="mobile-menu md:hidden absolute left-0 top-full w-full bg-white dark:bg-gray-800 py-4 px-6 shadow-lg">
        <button id="mobile-menu-close" class="absolute top-4 right-4 text-gray-800 dark:text-white text-3xl focus:outline-none" aria-label="Close menu">&times;</button>
        <a href="#" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">Home</a>
        <a href="#about" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">About</a>
        <a href="#skills" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">Skills</a>
        <a href="#experience" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">Experience</a>
        <a href="#projects" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">Projects</a>
        <a href="#blog" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">Blog</a>
        <a href="#education" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">Education</a>
        <a href="#contact" class="block py-3 text-gray-800 dark:text-white font-medium border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded">Contact</a>
        <div class="flex items-center justify-between pt-4">
          <span class="text-gray-800 dark:text-white font-medium">Dark Mode</span>
          <label class="theme-switch">
            <input type="checkbox" id="mobile-theme-toggle">
            <span class="theme-slider"></span>
          </label>
        </div>
        <a href="#contact" class="mt-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-medium block text-center hover:shadow-lg transition-all">Hire Me</a>
      </div>
    </nav>
  `;
}