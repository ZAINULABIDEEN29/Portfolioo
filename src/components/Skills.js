
export default function Skills() {
  return `
    <section id="skills" class="section px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-14 tracking-tight section-title animate-fade-in">Skills</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px);">
            <i class="fab fa-js-square text-yellow-400 text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">JavaScript</span>
          </div>
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px); animation-delay: 0.1s;">
            <i class="fab fa-react text-blue-400 text-5xl mb-4 animate-spin-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">React</span>
          </div>
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px); animation-delay: 0.2s;">
            <i class="fab fa-node-js text-green-500 text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">Node.js</span>
          </div>
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px); animation-delay: 0.3s;">
            <i class="fab fa-html5 text-orange-500 text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">HTML5</span>
          </div>
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px); animation-delay: 0.4s;">
            <i class="fab fa-css3-alt text-blue-500 text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">CSS3</span>
          </div>
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px); animation-delay: 0.5s;">
            <i class="fab fa-sass text-pink-400 text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">Sass</span>
          </div>
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px); animation-delay: 0.6s;">
            <i class="fab fa-git-alt text-red-500 text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">Git</span>
          </div>
          <div class="skill-card flex flex-col items-center bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300 group animate-slide-up" style="backdrop-filter: blur(6px); animation-delay: 0.7s;">
            <i class="fab fa-figma text-purple-500 text-5xl mb-4 animate-bounce-slow group-hover:scale-110 transition-transform"></i>
            <span class="text-gray-800 dark:text-white font-semibold text-lg">Figma</span>
          </div>
        </div>
      </div>
      <style>
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-slide-up:nth-child(1) { animation-delay: 0.1s; }
        .animate-slide-up:nth-child(2) { animation-delay: 0.2s; }
        .animate-slide-up:nth-child(3) { animation-delay: 0.3s; }
        .animate-slide-up:nth-child(4) { animation-delay: 0.4s; }
        .animate-slide-up:nth-child(5) { animation-delay: 0.5s; }
        .animate-slide-up:nth-child(6) { animation-delay: 0.6s; }
        .animate-slide-up:nth-child(7) { animation-delay: 0.7s; }
        .animate-slide-up:nth-child(8) { animation-delay: 0.8s; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        @media (max-width: 640px) {
          .section-title { font-size: 2rem; }
          .skill-card { padding: 1.5rem; }
          .grid { gap: 1rem; }
        }
      </style>
    </section>
  `;
}
