export default function About() {
  return `
    <section id="about" class="section opacity-0 px-6 md:px-12 bg-white dark:bg-slate-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center  text-gray-800 dark:text-white mb-12 section-title">About Me</h2>
        
        <div class="about-content">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Crafting Digital Experiences</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate fullstack developer with expertise in creating modern, responsive web applications. I specialize in JavaScript, React, Node.js, and various other
                technologies.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                My approach combines technical expertise with creative problem-solving to deliver solutions that
                not only meet but exceed client expectations. I believe in writing clean, maintainable code and
                creating intuitive user experiences.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="#contact" class="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Hire Me
                </a>
                <a href="/src/assets/zainCV.pdf" class="border-2 border-primary text-primary dark:text-white dark:border-white px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
                  Download CV
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="stat-card">
                <div class="text-4xl font-bold text-primary mb-2">1 +</div>
                <div class="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div class="stat-card">
                <div class="text-4xl font-bold text-primary mb-2">5+</div>
                <div class="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div class="stat-card">
                <div class="text-4xl font-bold text-primary mb-2">3+</div>
                <div class="text-gray-600 dark:text-gray-300">Happy Clients</div>
              </div>
              <div class="stat-card">
                <div class="text-4xl font-bold text-primary mb-2">2+</div>
                <div class="text-gray-600 dark:text-gray-300">Awards Received</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}