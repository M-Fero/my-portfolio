/* ========================================
   MAIN PORTFOLIO JAVASCRIPT
   Navigation and UI Logic
   ======================================== */

// ========================================
// PAGE TEMPLATES
// ======================================== 
const pages = {
    home: () => `
        <div class="fade-in">
            <p class="text-gray-400 text-lg mb-2 tracking-wider uppercase text-sm font-semibold">${homeContent.subtitle}</p>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-3">${homeContent.greeting} <span class="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">${personalInfo.name}</span></h1>
            <h2 class="text-xl md:text-2xl text-gray-400 mb-8 font-light">${homeContent.tagline}</h2>
            
            <div class="flex flex-wrap gap-4 mb-12">
                <a href="#" onclick="document.querySelector('[data-page=projects]').click(); return false;" class="bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95 flex items-center">
                    View My Games <i class="fas fa-arrow-right ml-3"></i>
                </a>
                <a href="${personalInfo.cvFile}" target="_blank" class="bg-transparent border border-gray-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:border-orange-500 hover:text-orange-500 active:scale-95 flex items-center md:hidden">
                    <i class="fas fa-download mr-3"></i> Download CV
                </a>
            </div>
            
            <div class="bg-dark-surface rounded-2xl p-8 md:p-10 mb-12 shadow-2xl border border-dark-border relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-1 h-full bg-orange-500 transition-all duration-500 group-hover:w-2"></div>
                
                <h3 class="text-2xl font-bold text-white mb-6 flex items-center"><i class="fas fa-user-astronaut text-orange-500 mr-3"></i> Professional Summary</h3>
                <div class="space-y-4 text-gray-400 leading-relaxed text-lg">
                    ${homeContent.professionalSummary.map(para => `<p>${para}</p>`).join('')}
                </div>
            </div>
        </div>
    `,

    projects: () => `
        <div class="fade-in">
            <h2 class="text-4xl font-bold text-white mb-10 border-b border-dark-border pb-4"><span class="text-orange-500">Featured</span> Projects</h2>
            
            <div class="space-y-12">
                ${projects.map((project, index) => {
                    const isReversed = index % 2 === 1;
                    return `
                        <div class="bg-dark-surface rounded-2xl overflow-hidden border border-dark-border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] hover:border-orange-500/50 flex flex-col md:flex-row group">
                            <div class="md:w-5/12 relative overflow-hidden ${isReversed ? 'md:order-last' : ''}">
                                <img src="${project.image}" alt="${project.title}" class="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110">
                                <div class="absolute inset-0 bg-gradient-to-${isReversed ? 'l' : 'r'} from-transparent to-[#111] opacity-0 md:opacity-100"></div>
                            </div>
                            <div class="p-8 md:w-7/12 flex flex-col justify-center">
                                <h3 class="text-3xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">${project.title}</h3>
                                <p class="text-gray-400 text-lg leading-relaxed mb-4">${project.description}</p>
                                
                                <h4 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Technical Contributions</h4>
                                <ul class="text-gray-400 space-y-1 mb-6 list-disc list-inside">
                                    ${project.contributions.map(c => `<li>${c}</li>`).join('')}
                                </ul>

                                <div class="flex flex-wrap gap-2 mb-6">
                                    ${project.technologies.map(tech => `<span class="bg-[#1a1a1a] text-orange-400 text-xs font-bold px-3 py-1 rounded border border-[#333]">${tech}</span>`).join('')}
                                </div>
                                <div class="flex gap-4">
                                    ${project.links.demo ? `<a href="${project.links.demo}" class="bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-all hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95"><i class="fas fa-play mr-2"></i> Play Demo</a>` : ''}
                                    ${project.links.repo ? `<a href="${project.links.repo}" class="bg-transparent border border-gray-600 text-gray-300 font-bold py-2 px-6 rounded-lg transition-all hover:border-orange-500 hover:text-orange-500 active:scale-95"><i class="fab fa-github mr-2"></i> Repo</a>` : ''}
                                    ${project.links.playStore ? `<a href="${project.links.playStore}" class="bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-all hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95"><i class="fab fa-google-play mr-2"></i> Play Store</a>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `,

    skills: () => `
        <div class="fade-in">
            <h2 class="text-4xl font-bold text-white mb-10 border-b border-dark-border pb-4"><span class="text-orange-500">Technical</span> Skills</h2>
            
            <div class="bg-dark-surface p-8 md:p-10 rounded-2xl shadow-2xl border border-dark-border mb-12 relative overflow-hidden">
                <div class="absolute -right-10 -top-10 text-9xl text-[#1a1a1a] opacity-50 z-0"><i class="fas fa-laptop-code"></i></div>
                
                <div class="relative z-10">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center"><i class="fas fa-bolt text-orange-500 mr-3"></i> Core Strengths & Tech Stack</h3>
                    
                    <div class="flex flex-wrap gap-3 mb-10">
                        ${skills.technical.map(skill => 
                            `<span class="bg-[#1a1a1a] text-gray-300 text-sm font-semibold px-5 py-2.5 rounded-full border border-[#333] transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] cursor-default">${skill}</span>`
                        ).join('')}
                    </div>

                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center"><i class="fas fa-star text-orange-500 mr-3"></i> Key Specializations</h3>
                    <ul class="space-y-6 text-gray-400">
                        ${skills.specializations.map(spec => `
                            <li class="flex items-start group">
                                <i class="${spec.icon} text-orange-500 mt-1 mr-4 text-xl transition-transform duration-300 group-hover:translate-x-2"></i> 
                                <div><strong class="text-white">${spec.title}:</strong> ${spec.description}</div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <h3 class="text-3xl font-bold text-white mb-6 flex items-center"><i class="fas fa-graduation-cap text-orange-500 mr-3"></i> Education</h3>
            <div class="bg-dark-surface p-8 rounded-2xl shadow-xl border border-dark-border hover:border-orange-500/30 transition-colors duration-500 group">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h4 class="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">${education.institution} <span class="text-gray-500 font-normal text-lg block md:inline">| ${education.location}</span></h4>
                    <span class="bg-orange-900/20 text-orange-500 border border-orange-900/50 text-sm font-bold px-4 py-1.5 rounded-full mt-2 md:mt-0 inline-block w-max">Graduated ${education.graduationDate}</span>
                </div>
                <h5 class="text-xl text-gray-300 font-medium mb-6">${education.degree}</h5>
                <ul class="space-y-3 text-gray-400">
                    ${education.highlights.map(highlight => `<li class="flex items-start"><span class="text-orange-500 mr-3 mt-1">▹</span> ${highlight}</li>`).join('')}
                </ul>
            </div>
        </div>
    `,

    experience: () => `
        <div class="fade-in">
            <h2 class="text-4xl font-bold text-white mb-12 border-b border-dark-border pb-4"><span class="text-orange-500">Professional</span> Experience</h2>
            
            <div class="timeline-container mt-8">
                ${experience.map(job => {
                    const isPartTime = job.partTime || false;
                    const dotClass = isPartTime ? '!bg-[#222] !border-gray-600 group-hover:!bg-gray-500 group-hover:!border-white group-hover:!shadow-[0_0_15px_rgba(255,255,255,0.4)]' : '';
                    const dateClass = isPartTime ? 'text-sm font-bold text-gray-300 bg-[#222] border border-[#444] px-4 py-1.5 rounded-full mb-4 inline-block' : 'text-sm font-bold text-white bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.4)] px-4 py-1.5 rounded-full mb-4 inline-block transform transition duration-300 group-hover:scale-105';
                    const titleClass = isPartTime ? 'text-2xl font-bold text-gray-400 mt-2' : 'text-2xl font-bold text-white mt-2 group-hover:text-orange-500 transition-colors';
                    const companyClass = isPartTime ? 'text-xl text-gray-600 font-medium mt-1 mb-4' : 'text-xl text-gray-500 font-medium mt-1 mb-4';
                    const respClass = isPartTime ? 'space-y-2 text-gray-500' : 'space-y-3 text-gray-400';
                    const bulletClass = isPartTime ? 'text-gray-600 mr-3 mt-1' : 'text-orange-500 mr-3 mt-1 transition-transform group-hover:translate-x-1';
                    
                    return `
                        <div class="timeline-item group">
                            <div class="timeline-dot ${dotClass}"></div>
                            ${job.logo ? `<img src="${job.logo}" alt="${job.company}" class="company-logo mt-2">` : ''}
                            <span class="${dateClass}">${job.startDate} – ${job.endDate}</span>
                            <h3 class="${titleClass}">${job.position}</h3>
                            <h4 class="${companyClass}">${job.company}</h4>
                            <ul class="${respClass}">
                                ${job.responsibilities.map(resp => `<li class="flex items-start"><span class="${bulletClass}">▹</span><p>${resp}</p></li>`).join('')}
                            </ul>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `,

    contact: () => `
        <div class="fade-in">
            <h2 class="text-4xl font-bold text-white mb-2">Let's Get in <span class="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">Touch</span></h2>
            <p class="text-gray-400 mb-10 text-lg">Feel free to reach out for collaborations, project inquiries, or just to say hi!</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <!-- Email -->
                <div class="bg-dark-surface p-8 rounded-2xl border border-dark-border text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] group cursor-pointer">
                    <div class="w-16 h-16 bg-[#1a1a1a] text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-[#333] transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3 class="text-white font-bold mb-2 text-lg">Email Address</h3>
                    <a href="mailto:${personalInfo.email}" class="text-gray-400 group-hover:text-orange-400 transition-colors text-sm break-all">${personalInfo.email}</a>
                </div>

                <!-- Phone -->
                <div class="bg-dark-surface p-8 rounded-2xl border border-dark-border text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] group cursor-pointer">
                    <div class="w-16 h-16 bg-[#1a1a1a] text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-[#333] transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <h3 class="text-white font-bold mb-2 text-lg">Call Me</h3>
                    <a href="tel:${personalInfo.phone}" class="text-gray-400 group-hover:text-orange-400 transition-colors">${personalInfo.phone}</a>
                </div>

                <!-- Address -->
                <div class="bg-dark-surface p-8 rounded-2xl border border-dark-border text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] group cursor-pointer">
                    <div class="w-16 h-16 bg-[#1a1a1a] text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-[#333] transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3 class="text-white font-bold mb-2 text-lg">Address</h3>
                    <p class="text-gray-400 group-hover:text-orange-400 transition-colors">${personalInfo.location}</p>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-dark-surface p-8 md:p-10 rounded-2xl border border-dark-border shadow-2xl relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <h3 class="text-2xl font-bold text-white mb-8 flex items-center"><i class="fas fa-paper-plane text-orange-500 mr-3"></i> Send Message</h3>
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" class="w-full bg-[#111] text-white border border-[#333] rounded-xl p-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner">
                        <input type="email" placeholder="Your Email" class="w-full bg-[#111] text-white border border-[#333] rounded-xl p-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner">
                    </div>
                    <textarea placeholder="Your Message..." rows="6" class="w-full bg-[#111] text-white border border-[#333] rounded-xl p-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner resize-none"></textarea>
                    <button type="button" class="bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95 active:translate-y-0 w-full md:w-auto flex items-center justify-center">
                        Send Message <i class="fas fa-arrow-right ml-3 text-sm"></i>
                    </button>
                </form>
            </div>
        </div>
    `
};

// ========================================
// NAVIGATION LOGIC
// ========================================
let contentArea, navLinks, sidebar, mobileMenuBtn;

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    contentArea = document.getElementById('content-area');
    navLinks = document.querySelectorAll('.nav-link');
    sidebar = document.getElementById('sidebar');
    mobileMenuBtn = document.getElementById('mobile-menu-btn');

    // Setup event listeners
    setupNavigation();
    setupMobileMenu();
    
    // Load default page
    loadPage('home');
});

// Setup navigation event listeners
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.getAttribute('data-page');
            loadPage(page);
        });
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
}

// Load a specific page
function loadPage(pageName) {
    // Update content
    const pageFunction = pages[pageName];
    if (pageFunction) {
        contentArea.innerHTML = pageFunction();
    } else {
        contentArea.innerHTML = '<h2 class="text-2xl text-white">Page not found</h2>';
    }
    
    // Scroll to top on page change
    window.scrollTo({top: 0, behavior: 'smooth'});
    
    // Update active state on nav links
    updateActiveNav(pageName);
    
    // On mobile, close sidebar after clicking
    if (window.innerWidth < 768 && !sidebar.classList.contains('hidden')) {
        sidebar.classList.add('hidden');
    }
}

// Update active navigation state
function updateActiveNav(pageName) {
    navLinks.forEach(link => {
        // Reset classes
        link.classList.remove('bg-orange-600', 'text-white', 'shadow-[0_0_15px_rgba(249,115,22,0.4)]', 'text-orange-500', 'bg-[#1a1a1a]');
        link.classList.add('text-gray-400', 'hover:bg-[#1a1a1a]', 'hover:text-orange-500');
        
        // Set active class
        if(link.getAttribute('data-page') === pageName) {
            link.classList.remove('text-gray-400', 'hover:bg-[#1a1a1a]', 'hover:text-orange-500');
            link.classList.add('bg-orange-600', 'text-white', 'shadow-[0_0_15px_rgba(249,115,22,0.4)]');
        }
    });
}
