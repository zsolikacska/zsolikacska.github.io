// Enhanced Gaming Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

function highlightNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // 🔥 Ha nincs href (pl. Macros button), kihagyjuk
    if (!href || !href.startsWith("#")) return;

    const sectionId = href.slice(1);
    const section = document.getElementById(sectionId);

    if (!section) return;

    const rect = section.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


    window.addEventListener('scroll', highlightNavigation);

    // Parallax effect for hero section
    const hero = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Animated counters for stats
    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const target = stat.textContent;
            const numericValue = parseInt(target.replace(/[^\d]/g, ''));
            const suffix = target.replace(/[\d]/g, '');
            
            let current = 0;
            const increment = numericValue / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 20);
        });
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate stats when they come into view
                if (entry.target.classList.contains('stats-section')) {
                    animateStats();
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.category-block, .ui-card, .stats-section').forEach(el => {
        observer.observe(el);
    });

    // Enhanced button interactions
    document.querySelectorAll('.btn, .btn-card').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Card hover effects
    document.querySelectorAll('.ui-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Dynamic background particles
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00f5ff;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.7;
            animation: particleFloat 10s linear infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        document.querySelector('.floating-particles').appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000);

    // Glitch effect for hero title
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.animation = 'none';
            setTimeout(() => {
                glitchText.style.animation = 'glitch 3s infinite';
            }, 10);
        }, 5000);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('click', function() {
        document.body.classList.remove('keyboard-nav');
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
        }
        90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded {
        animation: fadeIn 0.5s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .keyboard-nav *:focus {
        outline: 2px solid #00f5ff;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);


    // --- Copy WA buttons ---
const copyButtons = document.querySelectorAll(".btn-copy");

copyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const fileUrl = btn.dataset.file;

        fetch(fileUrl)
            .then(res => {
                if (!res.ok) throw new Error("Nem sikerült betölteni a fájlt");
                return res.text();
            })
            .then(text => navigator.clipboard.writeText(text))
            .then(() => {
                btn.textContent = "Copied! ✅";
                setTimeout(() => {
                    btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy WA';
                }, 1500);
            })
            .catch(err => {
                console.error("Hiba a másolás során:", err);
                alert("Nem sikerült a fájl tartalmát másolni.");
            });
    });
});

// --- Download buttons ---
const downloadButtons = document.querySelectorAll(".btn-download");

downloadButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const fileUrl = btn.href;

        fetch(fileUrl)
            .then(res => res.blob())
            .then(blob => {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = fileUrl.split("/").pop();
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(err => console.error("Letöltési hiba:", err));
    });
});

// --- MENU Switch ---
  const select = document.getElementById('menuSelect');
  const contents = document.querySelectorAll('.category-block');

  // MENU sections mapping
  const menuMap = {
    ClassicMenu: ['ClassicMenuGeneral', 'ClassicMenuRaids'],
    TBCMenu: ['TBCMenuGeneral', 'TBCMenuRaids'],
    WotLKMenu: ['WotLKMenuGeneral', 'WotLKMenuRaids']
  };

  function showContent() {
    // All block hide
    contents.forEach(div => (div.style.display = 'none'));

    // The selected menu show
    const selectedSections = menuMap[select.value];
    if (selectedSections) {
      selectedSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
      });
    }
  }

  select.addEventListener('change', showContent);
  showContent(); // Default appear

  // ===== MACROS MODAL =====
const modal = document.getElementById("macrosModal");
const openBtn = document.getElementById("openMacros");
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// COPY MACRO BUTTONS
document.querySelectorAll(".btn-copy-macro").forEach(button => {
  button.addEventListener("click", async () => {
    const file = button.getAttribute("data-file");
    const originalText = button.textContent; // 🔥 eredeti szöveg mentése

    try {
      const response = await fetch(file);
      const text = await response.text();

      await navigator.clipboard.writeText(text);

      button.textContent = "Copied! ✅";

      setTimeout(() => {
        button.textContent = originalText; // 🔥 visszaállítja az eredetire
      }, 1500);

    } catch (error) {
      alert("Failed to copy macro.");
    }
  });
});

// ESC close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
