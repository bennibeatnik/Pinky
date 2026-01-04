(async function () {
  'use strict';

  if (window.stashPinkyThemeSwitcherLoaded) return;
  window.stashPinkyThemeSwitcherLoaded = true;
  console.log('✨💖 Pinky Theme Switcher Initialized! 🎀✨');

  const themes = {
    default: {
      '--m3-primary': '#ff6fa8',
      '--m3-primary-glow': 'rgba(255, 111, 168, 0.4)',
      '--m3-on-primary': '#ffffff',
      '--m3-secondary': '#ffa5d8',
      '--m3-secondary-glow': 'rgba(255, 165, 216, 0.3)',
      '--m3-accent': '#ff85c1',
      '--m3-surface': 'rgba(30, 20, 30, 0.7)',
      '--m3-surface-glass': 'rgba(40, 30, 45, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #1a0d1f 0%, #2d1b3d 50%, #1f1028 100%)',
      '--m3-on-surface': '#ffe5f5',
      '--m3-outline': 'rgba(255, 111, 168, 0.2)',
      '--m3-error': '#ff6b9d',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(50, 35, 55, 0.6)',
      '--m3-on-surface-variant': '#ffd4eb',
      '--m3-inverse-surface': '#fce4ec',
      '--m3-inverse-on-surface': '#2d1b3d',
      '--m3-elevation-1': 'rgba(255, 255, 255, 0.08)',
      '--m3-elevation-2': 'rgba(255, 255, 255, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(255, 255, 255, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(255, 105, 180, 0.15)'
    },
    pinkRose: {
      '--m3-primary': '#ff2d75',
      '--m3-primary-glow': 'rgba(255, 45, 117, 0.5)',
      '--m3-on-primary': '#ffffff',
      '--m3-secondary': '#ff69b4',
      '--m3-secondary-glow': 'rgba(255, 105, 180, 0.4)',
      '--m3-accent': '#ff1493',
      '--m3-surface': 'rgba(25, 10, 20, 0.75)',
      '--m3-surface-glass': 'rgba(40, 20, 30, 0.65)',
      '--m3-background': 'linear-gradient(135deg, #1a0515 0%, #350a26 50%, #1f0720 100%)',
      '--m3-on-surface': '#ffe4f1',
      '--m3-outline': 'rgba(255, 45, 117, 0.25)',
      '--m3-error': '#ff4081',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(60, 25, 40, 0.65)',
      '--m3-on-surface-variant': '#ffc4dd',
      '--m3-inverse-surface': '#ffe4f1',
      '--m3-inverse-on-surface': '#350a26',
      '--m3-elevation-1': 'rgba(255, 105, 180, 0.1)',
      '--m3-elevation-2': 'rgba(255, 105, 180, 0.15)',
      '--m3-radius': '24px',
      '--glass-blur': '22px',
      '--glass-border': 'rgba(255, 105, 180, 0.2)',
      '--glass-shadow': '0 8px 32px rgba(255, 20, 147, 0.2)'
    },
    mintBubbles: {
      '--m3-primary': '#5ffbf1',
      '--m3-primary-glow': 'rgba(95, 251, 241, 0.4)',
      '--m3-on-primary': '#001a18',
      '--m3-secondary': '#a5f3fc',
      '--m3-secondary-glow': 'rgba(165, 243, 252, 0.3)',
      '--m3-accent': '#22d3ee',
      '--m3-surface': 'rgba(10, 30, 28, 0.7)',
      '--m3-surface-glass': 'rgba(15, 40, 38, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #041815 0%, #0a2e2b 50%, #052220 100%)',
      '--m3-on-surface': '#e0fffc',
      '--m3-outline': 'rgba(95, 251, 241, 0.2)',
      '--m3-error': '#f87171',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(20, 50, 48, 0.6)',
      '--m3-on-surface-variant': '#ccfff9',
      '--m3-inverse-surface': '#e0f2f1',
      '--m3-inverse-on-surface': '#0a2e2b',
      '--m3-elevation-1': 'rgba(95, 251, 241, 0.08)',
      '--m3-elevation-2': 'rgba(95, 251, 241, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(95, 251, 241, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(34, 211, 238, 0.15)'
    },
    peachDream: {
      '--m3-primary': '#ffab7a',
      '--m3-primary-glow': 'rgba(255, 171, 122, 0.4)',
      '--m3-on-primary': '#2d1a0f',
      '--m3-secondary': '#ffd4a3',
      '--m3-secondary-glow': 'rgba(255, 212, 163, 0.3)',
      '--m3-accent': '#ff9f6c',
      '--m3-surface': 'rgba(30, 20, 15, 0.7)',
      '--m3-surface-glass': 'rgba(40, 30, 20, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #1f0f0a 0%, #3d2415 50%, #28110e 100%)',
      '--m3-on-surface': '#ffe8d6',
      '--m3-outline': 'rgba(255, 171, 122, 0.2)',
      '--m3-error': '#ff6b6b',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(50, 35, 25, 0.6)',
      '--m3-on-surface-variant': '#ffd9bf',
      '--m3-inverse-surface': '#fff0e0',
      '--m3-inverse-on-surface': '#3d2415',
      '--m3-elevation-1': 'rgba(255, 171, 122, 0.08)',
      '--m3-elevation-2': 'rgba(255, 171, 122, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(255, 171, 122, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(255, 159, 108, 0.15)'
    },
    skyBlush: {
      '--m3-primary': '#7dd3fc',
      '--m3-primary-glow': 'rgba(125, 211, 252, 0.4)',
      '--m3-on-primary': '#0c1820',
      '--m3-secondary': '#bae6fd',
      '--m3-secondary-glow': 'rgba(186, 230, 253, 0.3)',
      '--m3-accent': '#38bdf8',
      '--m3-surface': 'rgba(12, 20, 30, 0.7)',
      '--m3-surface-glass': 'rgba(20, 30, 45, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #0a1420 0%, #1a2838 50%, #0f1b28 100%)',
      '--m3-on-surface': '#e0f2fe',
      '--m3-outline': 'rgba(125, 211, 252, 0.2)',
      '--m3-error': '#f87171',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(30, 45, 60, 0.6)',
      '--m3-on-surface-variant': '#cce7fd',
      '--m3-inverse-surface': '#e0f2fe',
      '--m3-inverse-on-surface': '#1a2838',
      '--m3-elevation-1': 'rgba(125, 211, 252, 0.08)',
      '--m3-elevation-2': 'rgba(125, 211, 252, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(125, 211, 252, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(56, 189, 248, 0.15)'
    },
    lavenderDream: {
      '--m3-primary': '#c084fc',
      '--m3-primary-glow': 'rgba(192, 132, 252, 0.4)',
      '--m3-on-primary': '#1e0f2e',
      '--m3-secondary': '#e9d5ff',
      '--m3-secondary-glow': 'rgba(233, 213, 255, 0.3)',
      '--m3-accent': '#a855f7',
      '--m3-surface': 'rgba(25, 15, 35, 0.7)',
      '--m3-surface-glass': 'rgba(35, 20, 50, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #1a0f28 0%, #2d1545 50%, #1f1030 100%)',
      '--m3-on-surface': '#f3e8ff',
      '--m3-outline': 'rgba(192, 132, 252, 0.2)',
      '--m3-error': '#f87171',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(50, 30, 65, 0.6)',
      '--m3-on-surface-variant': '#e9d5ff',
      '--m3-inverse-surface': '#f5f3ff',
      '--m3-inverse-on-surface': '#2d1545',
      '--m3-elevation-1': 'rgba(192, 132, 252, 0.08)',
      '--m3-elevation-2': 'rgba(192, 132, 252, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(192, 132, 252, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(168, 85, 247, 0.15)'
    },
    coralReef: {
      '--m3-primary': '#fb7185',
      '--m3-primary-glow': 'rgba(251, 113, 133, 0.4)',
      '--m3-on-primary': '#ffffff',
      '--m3-secondary': '#fda4af',
      '--m3-secondary-glow': 'rgba(253, 164, 175, 0.3)',
      '--m3-accent': '#f43f5e',
      '--m3-surface': 'rgba(30, 15, 20, 0.7)',
      '--m3-surface-glass': 'rgba(40, 25, 30, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #1f0a12 0%, #3d152a 50%, #280f1c 100%)',
      '--m3-on-surface': '#ffe4e8',
      '--m3-outline': 'rgba(251, 113, 133, 0.2)',
      '--m3-error': '#dc2626',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(55, 30, 38, 0.6)',
      '--m3-on-surface-variant': '#ffc9d0',
      '--m3-inverse-surface': '#ffe4e8',
      '--m3-inverse-on-surface': '#3d152a',
      '--m3-elevation-1': 'rgba(251, 113, 133, 0.08)',
      '--m3-elevation-2': 'rgba(251, 113, 133, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(251, 113, 133, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(244, 63, 94, 0.15)'
    },
    lemonSorbet: {
      '--m3-primary': '#fde047',
      '--m3-primary-glow': 'rgba(253, 224, 71, 0.4)',
      '--m3-on-primary': '#1a1808',
      '--m3-secondary': '#fef08a',
      '--m3-secondary-glow': 'rgba(254, 240, 138, 0.3)',
      '--m3-accent': '#facc15',
      '--m3-surface': 'rgba(25, 22, 10, 0.7)',
      '--m3-surface-glass': 'rgba(35, 32, 15, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #1a150a 0%, #332810 50%, #241a0d 100%)',
      '--m3-on-surface': '#fef9c3',
      '--m3-outline': 'rgba(253, 224, 71, 0.2)',
      '--m3-error': '#f87171',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(45, 40, 20, 0.6)',
      '--m3-on-surface-variant': '#fef3c7',
      '--m3-inverse-surface': '#fef9c3',
      '--m3-inverse-on-surface': '#332810',
      '--m3-elevation-1': 'rgba(253, 224, 71, 0.08)',
      '--m3-elevation-2': 'rgba(253, 224, 71, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(253, 224, 71, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(250, 204, 21, 0.15)'
    },
    cottonCandy: {
      '--m3-primary': '#f5a9d0',
      '--m3-primary-glow': 'rgba(245, 169, 208, 0.4)',
      '--m3-on-primary': '#28101d',
      '--m3-secondary': '#c4b5fd',
      '--m3-secondary-glow': 'rgba(196, 181, 253, 0.3)',
      '--m3-accent': '#f0abfc',
      '--m3-surface': 'rgba(25, 18, 30, 0.7)',
      '--m3-surface-glass': 'rgba(35, 25, 40, 0.6)',
      '--m3-background': 'linear-gradient(135deg, #1a1020 0%, #2d1b3d 50%, #201428 100%)',
      '--m3-on-surface': '#fce7f3',
      '--m3-outline': 'rgba(245, 169, 208, 0.2)',
      '--m3-error': '#fb7185',
      '--m3-on-error': '#ffffff',
      '--m3-surface-variant': 'rgba(45, 30, 50, 0.6)',
      '--m3-on-surface-variant': '#f9d5e7',
      '--m3-inverse-surface': '#fce7f3',
      '--m3-inverse-on-surface': '#2d1b3d',
      '--m3-elevation-1': 'rgba(245, 169, 208, 0.08)',
      '--m3-elevation-2': 'rgba(245, 169, 208, 0.12)',
      '--m3-radius': '24px',
      '--glass-blur': '20px',
      '--glass-border': 'rgba(245, 169, 208, 0.15)',
      '--glass-shadow': '0 8px 32px rgba(240, 171, 252, 0.15)'
    }
  };

  const themeOrder = Object.keys(themes);
  let currentThemeIndex = 0;

  const setMaterialTheme = (name) => {
    const root = document.documentElement;
    const theme = themes[name];
    if (!theme) return;

    Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));

    // Optional fallback aliases
    const aliasMap = {
      '--on-surface-color': '--m3-on-surface',
      '--primary-color': '--m3-primary',
      '--surface-color': '--m3-surface',
      '--background-color': '--m3-background',
      '--text-color': '--m3-on-surface',
      '--border-color': '--m3-outline',
      '--error-color': '--m3-error'
    };
    Object.entries(aliasMap).forEach(([alias, original]) => {
      const val = theme[original];
      if (val) root.style.setProperty(alias, val);
    });

    localStorage.setItem('pinky-theme', name);
    updateThemeIcon(name);
  };

  const updateThemeIcon = (theme) => {
    const icon = document.getElementById('pinky-theme-icon');
    if (!icon) return;
    const fill = themes[theme]?.['--m3-primary'] || '#bb86fc';
    icon.setAttribute('fill', fill);
  };

  const createThemeDropdown = (button) => {
    let menu = document.getElementById('theme-menu');
    if (menu) {
      menu.remove();
      return;
    }

    menu = document.createElement('div');
    menu.id = 'theme-menu';
    Object.assign(menu.style, {
      position: 'absolute',
      top: '100%',
      right: '0',
      marginTop: '4px',
      background: 'var(--m3-surface)',
      border: '1px solid var(--m3-outline)',
      padding: '4px 0',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: '9999',
      borderRadius: '8px',
      minWidth: '160px'
    });

    themeOrder.forEach(themeKey => {
      const item = document.createElement('div');
      item.textContent = themeKey;
      Object.assign(item.style, {
        padding: '8px 16px',
        cursor: 'pointer',
        color: 'var(--m3-on-surface)',
        fontSize: '14px',
        userSelect: 'none'
      });
      item.addEventListener('mouseenter', () => item.style.backgroundColor = 'var(--m3-surface-variant)');
      item.addEventListener('mouseleave', () => item.style.backgroundColor = 'transparent');
      item.addEventListener('click', () => {
        setMaterialTheme(themeKey);
        menu.remove();
      });
      menu.appendChild(item);
    });

    document.addEventListener('click', function closeMenu(e) {
      if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    });

    button.appendChild(menu);
  };

  const createThemeSwitcherButton = () => {
    const parent = document.querySelector('.navbar-buttons');
    if (!parent || document.getElementById('theme-switcher-btn')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'nav-utility nav-link';
    wrapper.style.position = 'relative';

    const button = document.createElement('button');
    button.id = 'theme-switcher-btn';
    button.className = 'btn btn-secondary';
    button.style.marginLeft = '8px';
    button.title = 'Theme Switcher';

    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('id', 'pinky-theme-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('fill', '#bb86fc');
    svg.innerHTML = `<path fill="currentColor" d="M12 3C7.03 3 3 6.58 3 11c0 2.15 1.39 3.86 3.43 4.91.33.17.57.49.61.87l.23 2.33c.05.48.61.73 1 .45l2.08-1.43c.3-.2.69-.26 1.05-.17.52.13 1.07.2 1.6.2 4.97 0 9-3.58 9-8s-4.03-7-9-7zm-4 8.5C7.17 11.5 6 10.33 6 9s1.17-2.5 2.5-2.5S11 7.67 11 9s-1.17 2.5-2.5 2.5zm6 1.5c-.83 0-1.5-.67-1.5-1.5S13.17 10 14 10s1.5.67 1.5 1.5S14.83 13 14 13zm2.5-4c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/>`;

    button.appendChild(svg);
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      createThemeDropdown(button);
    });
    wrapper.appendChild(button);

    const donate = parent.querySelector('a[href*="opencollective"]');
    if (donate) {
      parent.insertBefore(wrapper, donate);
    } else {
      parent.appendChild(wrapper);
    }

    const saved = localStorage.getItem('pinky-theme');
    if (saved && themeOrder.includes(saved)) {
      currentThemeIndex = themeOrder.indexOf(saved);
      setMaterialTheme(saved);
    } else {
      setMaterialTheme('default');
    }
  };
  
  

  const waitForNavbarAndInit = () => {
    const observer = new MutationObserver(() => {
      if (document.querySelector('.navbar-buttons')) {
        createThemeSwitcherButton();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  waitForNavbarAndInit();
})();
