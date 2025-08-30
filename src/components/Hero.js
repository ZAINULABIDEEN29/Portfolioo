export default function Hero() {
  return `
    <section class="hero flex items-center justify-center px-6 md:px-12 relative">
      <div id="particles-js"></div>
      <div class="grid-pattern"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center hero-content">
        <div class="text-center md:text-left">
          <h1 class="text-4xl mt-20 md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
           Zain Ul<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> Abideen</span>
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
            <a href="https://github.com/ZAINULABIDEEN29"
              class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:shadow-lg">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/zain-ul-abideen-38a921229/"
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
        
        <div class="hero-card p-8 flex justify-center">
          <div class="profile-image">
            <div class="w-64 h-64 md:w-80 md:h-80 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-xl flex items-center justify-center">
              <div id="lottie-container" class="w-full h-full flex items-center justify-center">
                  <dotlottie-wc src="https://lottie.host/63c1f87e-c3d6-4a0b-9260-a595f7a6d392/lKoMYgfWg3.lottie"
                style="width: 300px;height: 300px" speed="1" autoplay loop></dotlottie-wc>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator hidden md:block">
        <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  `;
}