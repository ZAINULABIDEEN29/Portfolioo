
export default function Footer() {
  return `
  <footer class="w-full  bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-10 pb-4 ">
      <div class="max-w-7xl mx-auto md:px-12  px-8 ">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <!-- Left: Brand & Social -->
          <div class="flex-1 min-w-[220px]">
            <div class="flex items-center gap-3 mb-2">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg">Z</span>
              <span class="text-xl font-bold text-gray-900 dark:text-white">Zain Ul Abideen</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 max-w-xs">Transforming ideas into exceptional digital experiences with advanced technologies. Let’s create greatness together.</p>
            <div class="flex gap-4 mt-2">
              <a href="#" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" aria-label="GitHub"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg></a>
              <a href="#" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" aria-label="LinkedIn"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 8a6 6 0 01-12 0 6 6 0 0112 0z"/><rect width="20" height="12" x="2" y="12" rx="2"/></svg></a>
              <a href="#" class="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" aria-label="Email"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 7l10 6 10-6"/></svg></a>
            </div>
          </div>
          <!-- Center: Quick Links -->
          <div class="flex-1 min-w-[180px]">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Quick Links</h3>
            <ul class="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
              <li><a href="#" class="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
              <li><a href="#about" class="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
              <li><a href="#projects" class="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
              <li><a href="#skills" class="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
              <li><a href="#contact" class="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <!-- Right: Newsletter -->
          <div class=" flex-wrap min-w-[220px]">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Stay Updated</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">Subscribe to my newsletter for the latest updates and articles.</p>
            <form class="flex-wrap ">
              <input type="email" class="rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your email" required />
              <button type="submit" class="rounded-r-md bg-gray-900 dark:bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <!-- Scroll to top button -->
        <div class="flex justify-center mt-10 mb-4">
          <button onclick="window.scrollTo({top:0,behavior:'smooth'})" class="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
          </button>
        </div>
        <hr class="border-gray-200 dark:border-gray-800 my-2" />
        <div class="text-center text-gray-500 dark:text-gray-400 text-sm mt-2">
          Made with <span class="text-red-500">&#10084;&#65039;</span> by Zain &copy; ${new Date().getFullYear()}
        </div>
      </div>
    </footer>
  `;
}
