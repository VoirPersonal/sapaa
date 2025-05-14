document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(function() {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
            // Start animations and music after loading
            startAnimations();
            playBackgroundMusic();
        }, 500);
    }, 2000);
    
    // Explore button click event
    document.getElementById('exploreBtn').addEventListener('click', function() {
        anime({
            targets: this,
            scale: [1, 0.9, 1],
            duration: 500,
            easing: 'easeInOutQuad'
        });
        
        document.querySelector('.wishes-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Create magic sparkles in message image
    createMagicSparkles();
    
    // Add scroll animations
    setupScrollAnimations();
    
    // Add floating elements animation
    animateFloatingElements();
    
    // Magic wand cursor effect
    setupMagicCursor();
    
    // Surprise button effect
    setupSurpriseButton();
});

function startAnimations() {
    // Animate hero section elements
    anime({
        targets: '.hero-title',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '.hero-subtitle',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 400,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '.cta-button',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 800,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '.floating-unicorn, .floating-crown, .floating-star',
        translateY: [150, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(300),
        easing: 'easeOutExpo'
    });
}

function createMagicSparkles() {
    const messageImage = document.querySelector('.message-image');
    const colors = ['#7b5a9d', '#c38d9e', '#e27d60', '#d4af37', '#ff9ff3', '#9b59b6'];
    
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-sparkles';
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 10;
        const animationDelay = Math.random() * 8;
        
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.backgroundColor = color;
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        sparkle.style.animation = `sparkle ${animationDuration}s linear ${animationDelay}s infinite`;
        sparkle.style.filter = `drop-shadow(0 0 5px ${color})`;
        
        messageImage.appendChild(sparkle);
    }
    
    // Add CSS for sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0%, 100% {
                opacity: 0;
                transform: scale(0.5);
            }
            50% {
                opacity: 1;
                transform: scale(1.5);
            }
        }
    `;
    document.head.appendChild(style);
}

function playBackgroundMusic() {
    const audio = document.getElementById('birthdayAudio');
    
    // Enable audio on first interaction
    function enableAudio() {
        audio.volume = 0.2;
        audio.play().catch(e => console.log('Auto-play prevented:', e));
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('keydown', enableAudio);
    }
    
    document.addEventListener('click', enableAudio);
    document.addEventListener('keydown', enableAudio);
}

function setupScrollAnimations() {
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('wish-card')) {
                    anime({
                        targets: entry.target,
                        translateY: [80, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutExpo'
                    });
                } else if (entry.target.classList.contains('gallery-item')) {
                    anime({
                        targets: entry.target,
                        translateY: [80, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        delay: anime.stagger(150),
                        easing: 'easeOutExpo'
                    });
                } else if (entry.target.classList.contains('message-content')) {
                    anime({
                        targets: entry.target,
                        translateX: [-80, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutExpo'
                    });
                } else if (entry.target.classList.contains('message-image')) {
                    anime({
                        targets: entry.target,
                        translateX: [80, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutExpo'
                    });
                } else if (entry.target.classList.contains('section-header')) {
                    anime({
                        targets: entry.target.querySelector('h2'),
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                    anime({
                        targets: entry.target.querySelector('.divider'),
                        scaleX: [0, 1],
                        opacity: [0, 1],
                        duration: 800,
                        delay: 300,
                        easing: 'easeOutExpo'
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.wish-card, .gallery-item, .message-content, .message-image, .section-header').forEach(el => {
        observer.observe(el);
    });
}

function animateFloatingElements() {
    // Animate floating elements with more dynamic movement
    anime({
        targets: '.floating-heart',
        translateX: {
            value: ['-50px', '150px', '50px', '-50px'],
            duration: 20000,
            easing: 'easeInOutSine'
        },
        translateY: {
            value: ['-50px', '100px', '50px', '-50px'],
            duration: 25000,
            easing: 'easeInOutQuad'
        },
        rotate: {
            value: [0, 360],
            duration: 30000,
            easing: 'linear'
        },
        opacity: {
            value: [0.3, 0.8, 0.5, 0.3],
            duration: 20000,
            easing: 'easeInOutSine'
        },
        scale: {
            value: [0.8, 1.2, 1, 0.8],
            duration: 25000,
            easing: 'easeInOutSine'
        },
        loop: true
    });
    
    anime({
        targets: '.floating-star',
        translateX: {
            value: ['100px', '-100px', '50px', '100px'],
            duration: 22000,
            easing: 'easeInOutSine'
        },
        translateY: {
            value: ['50px', '-100px', '150px', '50px'],
            duration: 28000,
            easing: 'easeInOutQuad'
        },
        rotate: {
            value: [0, 360],
            duration: 35000,
            easing: 'linear'
        },
        opacity: {
            value: [0.4, 0.9, 0.6, 0.4],
            duration: 22000,
            easing: 'easeInOutSine'
        },
        scale: {
            value: [1, 1.3, 0.9, 1],
            duration: 30000,
            easing: 'easeInOutSine'
        },
        loop: true
    });
    
    anime({
        targets: '.floating-diamond',
        translateX: {
            value: ['-100px', '100px', '0px', '-100px'],
            duration: 28000,
            easing: 'easeInOutSine'
        },
        translateY: {
            value: ['100px', '-50px', '150px', '100px'],
            duration: 32000,
            easing: 'easeInOutQuad'
        },
        rotate: {
            value: [0, 360],
            duration: 40000,
            easing: 'linear'
        },
        opacity: {
            value: [0.5, 0.9, 0.7, 0.5],
            duration: 25000,
            easing: 'easeInOutSine'
        },
        scale: {
            value: [1.1, 0.8, 1.2, 1.1],
            duration: 35000,
            easing: 'easeInOutSine'
        },
        loop: true
    });
    
    anime({
        targets: '.floating-sparkle',
        translateX: {
            value: ['50px', '-150px', '100px', '50px'],
            duration: 30000,
            easing: 'easeInOutSine'
        },
        translateY: {
            value: ['-100px', '150px', '50px', '-100px'],
            duration: 35000,
            easing: 'easeInOutQuad'
        },
        rotate: {
            value: [0, 360],
            duration: 45000,
            easing: 'linear'
        },
        opacity: {
            value: [0.6, 0.9, 0.4, 0.6],
            duration: 30000,
            easing: 'easeInOutSine'
        },
        scale: {
            value: [0.9, 1.4, 1, 0.9],
            duration: 40000,
            easing: 'easeInOutSine'
        },
        loop: true
    });
}

function setupMagicCursor() {
    const cursor = document.querySelector('.magic-wand-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
    
    // Add sparkle trail effect
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {
            const sparkle = document.createElement('div');
            sparkle.className = 'cursor-sparkle';
            sparkle.style.left = `${e.clientX}px`;
            sparkle.style.top = `${e.clientY}px`;
            sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            document.body.appendChild(sparkle);
            
            anime({
                targets: sparkle,
                scale: [0.5, 2],
                opacity: [1, 0],
                duration: 1000,
                easing: 'easeOutExpo',
                complete: () => sparkle.remove()
            });
        }
    });
    
    // Add CSS for cursor sparkle
    const style = document.createElement('style');
    style.textContent = `
        .cursor-sparkle {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            transform: translate(-50%, -50%);
            filter: drop-shadow(0 0 5px currentColor);
        }
    `;
    document.head.appendChild(style);
}

function setupSurpriseButton() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const messageContent = document.querySelector('.message-content');
    
    surpriseBtn.addEventListener('click', function() {
        // Button animation
        anime({
            targets: this,
            scale: [1, 0.9, 1],
            duration: 500,
            easing: 'easeInOutQuad'
        });
        
        // Create burst of hearts
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            heart.style.position = 'absolute';
            heart.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.opacity = '0';
            heart.style.zIndex = '10';
            messageContent.appendChild(heart);
            
            anime({
                targets: heart,
                translateY: [0, -Math.random() * 100 - 50],
                translateX: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 1, 0],
                scale: [0.5, 1.5],
                duration: 2000,
                easing: 'easeOutExpo',
                complete: () => heart.remove()
            });
        }
        
        // Confetti effect
        const colors = ['#7b5a9d', '#c38d9e', '#e27d60', '#d4af37', '#ff9ff3', '#9b59b6'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 5}px`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            document.body.appendChild(confetti);
            
            anime({
                targets: confetti,
                translateY: [-20, window.innerHeight],
                translateX: [(Math.random() - 0.5) * 200],
                rotate: [0, Math.random() * 360],
                opacity: [1, 0],
                duration: 3000,
                easing: 'easeInOutQuad',
                complete: () => confetti.remove()
            });
        }
        
        // Play magical sound (would need an actual sound file)
        const audio = new Audio();
        audio.src = "magic.mp3"; // You would need to provide this file
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Sound prevented:', e));
    });
}