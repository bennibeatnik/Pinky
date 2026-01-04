(function () {
  'use strict';

  if (window.stashMaterialEffectsEnhancerLoaded) return;
  window.stashMaterialEffectsEnhancerLoaded = true;
  console.log('✨💖 Bubbly Pinky Effects Initialized! 🎀✨');

  function applyRippleEffect() {
    document.body.addEventListener('click', function (e) {
      const el = e.target.closest('button, .btn, .ripple-container');
      if (!el) return;

      const ripple = document.createElement('span');
      ripple.className = 'bubbly-ripple';

      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
      ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

      el.appendChild(ripple);
      setTimeout(function () {
        ripple.remove();
      }, 800);
    });
  }

  function createFloatingBubbles() {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'floating-bubbles-container';
    bubbleContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    `;

    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'floating-bubble';
      const size = Math.random() * 60 + 20;
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 10 + 15;
      
      bubble.style.cssText = `
        position: absolute;
        bottom: -100px;
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle at 30% 30%, rgba(255, 111, 168, 0.3), rgba(255, 165, 216, 0.1));
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
        animation: float-up ${duration}s ease-in-out ${delay}s infinite;
        box-shadow: 0 4px 20px rgba(255, 111, 168, 0.2);
      `;
      bubbleContainer.appendChild(bubble);
    }

    document.body.appendChild(bubbleContainer);
  }

  function addSparkleEffect() {
    document.body.addEventListener('mousemove', function(e) {
      if (Math.random() > 0.9) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
      }
    });
  }

  function elevateCardsOnHover() {
    var elevate = function (el) {
      el.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      el.addEventListener('mouseenter', function () {
        el.style.transform = 'translateY(-8px) scale(1.02)';
        el.style.boxShadow = '0 12px 40px rgba(255, 111, 168, 0.3), 0 0 20px rgba(255, 165, 216, 0.2)';
        el.style.borderColor = 'rgba(255, 111, 168, 0.4)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = 'translateY(0) scale(1)';
        el.style.boxShadow = '0 8px 32px rgba(255, 105, 180, 0.15)';
        el.style.borderColor = 'rgba(255, 255, 255, 0.15)';
      });
    };

    var selectors = '.card, .scene-card, .tag-card, .performer-card, .studio-card, .gallery-card, .image-card';
    document.querySelectorAll(selectors).forEach(function (el) {
      elevate(el);
    });
  }

  function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .bubbly-ripple {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 111, 168, 0.3) 50%, transparent 100%);
        animation: bubbly-ripple-animation 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        transform: scale(0);
        box-shadow: 0 0 20px rgba(255, 111, 168, 0.5);
      }

      @keyframes bubbly-ripple-animation {
        to {
          transform: scale(3);
          opacity: 0;
        }
      }

      @keyframes float-up {
        0% {
          bottom: -100px;
          opacity: 0;
          transform: translateX(0) rotate(0deg);
        }
        10% {
          opacity: 0.5;
        }
        90% {
          opacity: 0.5;
        }
        100% {
          bottom: 110vh;
          opacity: 0;
          transform: translateX(100px) rotate(360deg);
        }
      }

      .sparkle {
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, #fff 0%, rgba(255, 111, 168, 0.8) 50%, transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        animation: sparkle-twinkle 1s ease-out forwards;
        z-index: 9999;
        box-shadow: 0 0 10px rgba(255, 111, 168, 0.8);
      }

      @keyframes sparkle-twinkle {
        0% {
          transform: scale(0) rotate(0deg);
          opacity: 1;
        }
        50% {
          transform: scale(1.5) rotate(180deg);
          opacity: 1;
        }
        100% {
          transform: scale(0) rotate(360deg);
          opacity: 0;
        }
      }

      /* Cute pulse animation for active elements */
      @keyframes cute-pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      button, .btn, .ripple-container {
        position: relative;
        overflow: hidden;
      }

      /* Add glow to focused elements */
      button:focus, .btn:focus, input:focus, textarea:focus {
        animation: cute-pulse 2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }

  function init() {
    elevateCardsOnHover();
    applyRippleEffect();
    addRippleStyles();
    createFloatingBubbles();
    addSparkleEffect();
  }

  const lazyObserver = new MutationObserver(function () {
    elevateCardsOnHover(); // for dynamically inserted cards
  });
  lazyObserver.observe(document.body, { childList: true, subtree: true });

  document.addEventListener('DOMContentLoaded', init);
})();
