export default function Projects() {
  return `
    <section id="projects" class="section px-6 md:px-12 bg-gray-50 dark:bg-slate-800">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 section-title">My Projects</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="project-card">
            <div class="project-image">
              <img src="../assets/one.jpeg" alt="E-Commerce Project">
              <div class="project-overlay">
                <div class="text-white">
                  <h3 class="text-xl font-bold">Zimli-Tech Website</h3>
                  <p class="text-sm">HTML, CSS, JavaScript, PHP, Laravel</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Zimli-Tech Website</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">The site features a clean, modern, and fully responsive design built with HTML, CSS, JavaScript, and Bootstrap. It highlights Zimlitech’s core services, including web development, software solutions, and IT consultancy, with a focus on user experience, fast performance, and cross-device compatibility. </p>
              <div class="mb-4">
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JAVASCRIPT</span>
                  <span class="tech-tag">BOOTSTRAP</span>
                <span class="tech-tag">PHP</span>
                <span class="tech-tag">LARAVEL</span>
              </div>
              <div class="flex items-center justify-between">
                <a href="https://www.zimlitech.com/" class="text-primary dark:text-primaryDark font-medium flex items-center">
                  View Project <i class="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
                <a href="https://github.com/ZAINULABIDEEN29" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                  <i class="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-image">
              <img src="../assets/project-two.jpeg">
              <div class="project-overlay">
                <div class="text-white">
                  <h3 class="text-xl font-bold">Hunny Bunny AI</h3>
                  <p class="text-sm">HTML, CSS, JavaScript, PHP, Laravel</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Financial Analytics Dashboard</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">A fully featured women’s health platform that helps users track ovulation cycles and plan pregnancies with confidence. The website features a modern, responsive, and user-friendly interface paired with an advanced ovulation calculator for accurate fertility predictions.Built with Laravel (backend) and HTML, CSS, JavaScript,</p>
              <div class="mb-4">
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JAVASCRIPT</span>
                <span class="tech-tag">BOOTSTRAP</span>
                <span class="tech-tag">PHP</span>
                <span class="tech-tag">LARAVEL</span>
              </div>
              <div class="flex items-center justify-between">
                <a href="https://hunnybunny.ai/" class="text-primary dark:text-primaryDark font-medium flex items-center">
                  View Project <i class="fas fa-arrow-right ml-2 text-xs"></i>
                </a>
                <a href="https://github.com/ZAINULABIDEEN29" class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                  <i class="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}