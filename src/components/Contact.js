export default function Contact() {
  return `
    <section id="contact" class="section px-6 md:px-12 bg-white dark:bg-slate-900">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 section-title">Get In Touch</h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div class="contact-form">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-6">Send me a message</h3>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Your Name</label>
                  <input type="text" id="name" class="form-input" placeholder="Enter your name">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Your Email</label>
                  <input type="email" id="email" class="form-input" placeholder="Enter your email">
                </div>
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" class="form-input" placeholder="Enter subject">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Your Message</label>
                <textarea id="message" rows="5" class="form-input" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
          
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
                    <p class="text-gray-600 dark:text-gray-300">Islamabad, PK</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i class="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800 dark:text-white">Email</h4>
                    <p class="text-gray-600 dark:text-gray-300">zk438256@gmail.com</p>
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
                <a href="https://github.com/ZAINULABIDEEN29" class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:shadow-lg">
                  <i class="fab fa-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/zain-ul-abideen-38a921229/" class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg">
                  <i class="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="#" class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300 hover:shadow-lg">
                  <i class="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" class="social-icon w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-lg">
                  <i class="fab fa-dribbble text-xl"></i>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}