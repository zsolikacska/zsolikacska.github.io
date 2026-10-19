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


// --- VERSION MENU SWITCH + encrypted Forever tab ---
const menuButtons = document.querySelectorAll('.content-menu-item');
const contents = document.querySelectorAll('.category-block');
const emptyMenuMessage = document.getElementById('emptyMenuMessage');
const foreverLockPanel = document.getElementById('foreverLockPanel');
const foreverContentMount = document.getElementById('foreverContentMount');
const foreverUnlockForm = document.getElementById('foreverUnlockForm');
const foreverPasswordInput = document.getElementById('foreverPassword');
const foreverUnlockButton = document.getElementById('foreverUnlockButton');
const foreverUnlockMessage = document.getElementById('foreverUnlockMessage');
let foreverUnlocked = false;

// Forever markup is intentionally absent from index.html. It is stored only as authenticated ciphertext.
const menuMap = {
    ClassicMenu: ['ClassicMenuGeneral', 'ClassicMenuRaids'],
    TBCMenu: ['TBCMenuGeneral', 'TBCMenuRaids'],
    WotLKMenu: []
};

function setForeverMessage(message, type = 'error') {
    if (!foreverUnlockMessage) return;
    foreverUnlockMessage.textContent = message;
    foreverUnlockMessage.classList.toggle('success', type === 'success');
}

function clearForeverContent() {
    foreverUnlocked = false;
    if (foreverContentMount) {
        foreverContentMount.replaceChildren();
        foreverContentMount.hidden = true;
    }
    if (foreverLockPanel) foreverLockPanel.hidden = false;
    if (foreverPasswordInput) foreverPasswordInput.value = '';
    setForeverMessage('');
}

function base64ToBytes(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
}

async function decryptForeverHtml(password, payload) {
    if (!window.crypto || !window.crypto.subtle) {
        throw new Error('A böngésző nem támogatja a szükséges Web Crypto funkciót. Próbáld HTTPS-en, friss böngészővel.');
    }
    if (!payload || payload.format !== 'forever-encrypted-v1' || payload.algorithm !== 'AES-GCM-256' || payload.kdf !== 'PBKDF2-SHA-256') {
        throw new Error('A titkosított fájl formátuma nem megfelelő.');
    }
    const iterations = Number(payload.iterations);
    if (!Number.isInteger(iterations) || iterations < 100000 || iterations > 2000000) {
        throw new Error('A titkosított fájl PBKDF2 beállítása érvénytelen.');
    }

    const encoder = new TextEncoder();
    const salt = base64ToBytes(payload.salt);
    const iv = base64ToBytes(payload.iv);
    const ciphertext = base64ToBytes(payload.ciphertext);
    if (salt.length < 16 || iv.length !== 12 || ciphertext.length < 16) {
        throw new Error('A titkosított fájl hiányos vagy sérült.');
    }

    const material = await crypto.subtle.importKey(
        'raw', encoder.encode(password), { name: 'PBKDF2' }, false, ['deriveKey']
    );
    const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
        material,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
    );
    const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
    return new TextDecoder('utf-8', { fatal: true }).decode(plaintext);
}

function enableForeverFileButtons() {
    // These handlers are also needed for elements created dynamically after successful decryption.
    foreverContentMount.querySelectorAll('.btn-copy').forEach(button => {
        button.addEventListener('click', async event => {
            event.preventDefault();
            const fileUrl = button.dataset.file;
            try {
                const response = await fetch(fileUrl);
                if (!response.ok) throw new Error('HTTP ' + response.status);
                const text = await response.text();
                await navigator.clipboard.writeText(text);
                button.innerHTML = 'Copied! ✅';
                setTimeout(() => {
                    button.innerHTML = '<i class="fa-solid fa-copy"></i> Copy WA';
                }, 1500);
            } catch (error) {
                console.error('Forever Copy WA error:', error);
                alert('Nem sikerült a fájl tartalmát másolni. Ellenőrizd a fájlt és a böngésző vágólapengedélyét.');
            }
        });
    });

    foreverContentMount.querySelectorAll('.btn-download').forEach(button => {
        button.addEventListener('click', async event => {
            event.preventDefault();
            const fileUrl = button.getAttribute('href');
            try {
                const response = await fetch(fileUrl);
                if (!response.ok) throw new Error('HTTP ' + response.status);
                const blob = await response.blob();
                const objectUrl = URL.createObjectURL(blob);
                const anchor = document.createElement('a');
                anchor.href = objectUrl;
                anchor.download = decodeURIComponent(new URL(fileUrl, document.baseURI).pathname.split('/').pop()) || 'download';
                document.body.appendChild(anchor);
                anchor.click();
                anchor.remove();
                setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
            } catch (error) {
                console.error('Forever download error:', error);
                alert('Nem sikerült letölteni a fájlt. Ellenőrizd a kapcsolatot és a fájl elérési útját.');
            }
        });
    });
}

async function unlockForever() {
    const password = foreverPasswordInput.value;
    if (!password) {
        setForeverMessage('Add meg a jelszót.');
        return;
    }

    foreverUnlockButton.disabled = true;
    foreverUnlockButton.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Visszafejtés…';
    setForeverMessage('');
    try {
        const response = await fetch(new URL('forever.enc.json', document.baseURI).toString(), { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(response.status === 404
                ? 'Nem található a forever.enc.json. Töltsd fel a GitHub repository gyökérkönyvtárába.'
                : 'Nem sikerült betölteni a titkosított fájlt (HTTP ' + response.status + ').');
        }
        const payload = await response.json();
        const decryptedHtml = await decryptForeverHtml(password, payload);
        if (!decryptedHtml.includes('ForeverMenuGeneral') || !decryptedHtml.includes('ForeverMenuRaids')) {
            throw new Error('A visszafejtett tartalom nem a várt Forever oldal. Ellenőrizd, hogy a megfelelő fájlt töltötted-e fel.');
        }

        foreverContentMount.innerHTML = decryptedHtml;
        enableForeverFileButtons();
        foreverUnlocked = true;
        foreverLockPanel.hidden = true;
        foreverContentMount.hidden = false;
        setForeverMessage('Sikeres feloldás.', 'success');
        // Remove the password from the field after use.
        foreverPasswordInput.value = '';
    } catch (error) {
        console.error('Forever decryption failed:', error);
        const likelyWrongPassword = error && (error.name === 'OperationError' || error.name === 'DataError');
        setForeverMessage(likelyWrongPassword ? 'Hibás jelszó, vagy sérült titkosított fájl.' : (error.message || 'A Forever tartalom nem nyitható meg.'));
    } finally {
        foreverUnlockButton.disabled = false;
        foreverUnlockButton.innerHTML = '<i class="fas fa-unlock-alt" aria-hidden="true"></i> Feloldás';
    }
}

function showContent(menuId) {
    // Hide the static version blocks.
    contents.forEach(div => { div.style.display = 'none'; });

    // Switching away from Forever removes the decrypted fragment from the DOM.
    if (menuId !== 'ForeverMenu') clearForeverContent();

    menuButtons.forEach(button => {
        const active = button.dataset.menu === menuId;
        button.classList.toggle('active', active);
        button.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    if (menuId === 'ForeverMenu') {
        if (emptyMenuMessage) emptyMenuMessage.hidden = true;
        if (foreverContentMount) foreverContentMount.hidden = !foreverUnlocked;
        if (foreverLockPanel) foreverLockPanel.hidden = foreverUnlocked;
        if (!foreverUnlocked && foreverPasswordInput) setTimeout(() => foreverPasswordInput.focus(), 0);
        return;
    }

    if (foreverLockPanel) foreverLockPanel.hidden = true;
    if (foreverContentMount) foreverContentMount.hidden = true;

    const selectedSections = menuMap[menuId] || [];
    let hasContent = false;
    selectedSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'block';
            hasContent = true;
        }
    });
    if (emptyMenuMessage) emptyMenuMessage.hidden = hasContent;
}

menuButtons.forEach(button => {
    button.addEventListener('click', () => showContent(button.dataset.menu));
});

if (foreverUnlockForm) {
    foreverUnlockForm.addEventListener('submit', event => {
        event.preventDefault();
        unlockForever();
    });
}

// Keep the site's existing startup behaviour: Forever is the selected tab, but content stays encrypted until unlocked.
showContent('ForeverMenu');


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
        const originalText = button.textContent;

        try {
            const response = await fetch(file);
            const text = await response.text();

            await navigator.clipboard.writeText(text);

            button.textContent = "Copied! ✅";

            setTimeout(() => {
                button.textContent = originalText;
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