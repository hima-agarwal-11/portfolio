// document.addEventListener('DOMContentLoaded', () => {
//   // --- MOBILE NAVIGATION TOGGLE ---
//   const hamburger = document.getElementById('hamburger');
//   const navMenu = document.getElementById('nav-menu');
//   const navLinks = document.querySelectorAll('.nav-link');
//   if (hamburger && navMenu) {
//     hamburger.addEventListener('click', () => {
//       navMenu.classList.toggle('open');
//       const icon = hamburger.querySelector('i');
//       if (icon) {
//         icon.classList.toggle('fa-bars');
//         icon.classList.toggle('fa-xmark');
//       }
//     });
//     // Close menu when clicking navigation links
//     navLinks.forEach(link => {
//       link.addEventListener('click', () => {
//         navMenu.classList.remove('open');
//         const icon = hamburger.querySelector('i');
//         if (icon) {
//           icon.classList.add('fa-bars');
//           icon.classList.remove('fa-xmark');
//         }
//       });
//     });
//   }
//   // --- HEADER SCROLL ACTION ---
//   const header = document.querySelector('header');
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
//   });
//   // --- THEME TOGGLE (LIGHT / DARK) ---
//   const themeToggle = document.getElementById('theme-toggle');
//   const htmlElement = document.documentElement;
//   // Retrieve saved theme preference, default to dark
//   const currentTheme = localStorage.getItem('theme') || 'dark';
//   htmlElement.setAttribute('data-theme', currentTheme);
//   updateThemeIcon(currentTheme);
//   if (themeToggle) {
//     themeToggle.addEventListener('click', () => {
//       const activeTheme = htmlElement.getAttribute('data-theme');
//       const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
//       htmlElement.setAttribute('data-theme', newTheme);
//       localStorage.setItem('theme', newTheme);
//       updateThemeIcon(newTheme);
//       showToast(`Switched to ${newTheme} theme!`, 'success');
//     });
//   }
//   function updateThemeIcon(theme) {
//     if (!themeToggle) return;
//     const icon = themeToggle.querySelector('i');
//     if (icon) {
//       if (theme === 'light') {
//         icon.className = 'fa-solid fa-moon';
//       } else {
//         icon.className = 'fa-solid fa-sun';
//       }
//     }
//   }
//   // --- TYPEWRITER EFFECT ---
//   const typewriterElement = document.getElementById('typewriter');
//   if (typewriterElement) {
//     const words = [
//       'B.Tech CSE Student',
//       'Problem Solver',
//       'Full Stack Developer',
//       'DSA Enthusiast'
//     ];
//     let wordIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     let typingSpeed = 100;
//     function type() {
//       const currentWord = words[wordIndex];
      
//       if (isDeleting) {
//         typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
//         charIndex--;
//         typingSpeed = 50; // Deleting is faster
//       } else {
//         typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
//         charIndex++;
//         typingSpeed = 100;
//       }
//       if (!isDeleting && charIndex === currentWord.length) {
//         // Pause at completion
//         isDeleting = true;
//         typingSpeed = 1500; 
//       } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         wordIndex = (wordIndex + 1) % words.length;
//         typingSpeed = 500; // Pause before typing next word
//       }
//       setTimeout(type, typingSpeed);
//     }
//     type();
//   }
//   // --- SCROLL REVEAL ANIMATION & SCROLL SPY ---
//   const revealElements = document.querySelectorAll('.reveal');
//   const sections = document.querySelectorAll('section');
//   const revealObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('active');
        
//         // Trigger skill progress bars specifically if skill panel becomes visible
//         if (entry.target.classList.contains('skills-panel')) {
//           animateSkillBars(entry.target);
//         }
//       }
//     });
//   }, {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
//   });
//   revealElements.forEach(el => revealObserver.observe(el));
//   // Scroll Spy to highlight Nav Links
//   window.addEventListener('scroll', () => {
//     let current = '';
//     const scrollPosition = window.scrollY + 150; // Offset for header
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//         current = section.getAttribute('id');
//       }
//     });
//     navLinks.forEach(link => {
//       link.classList.remove('active');
//       if (link.getAttribute('href') === `#${current}`) {
//         link.classList.add('active');
//       }
//     });
//   });
//   // --- SKILLS TAB SYSTEM & PROGRESS BARS ANIMATION ---
//   const skillTabs = document.querySelectorAll('.skills-tab-btn');
//   const skillPanels = document.querySelectorAll('.skills-panel');
//   skillTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//       const targetPanel = tab.getAttribute('data-target');
      
//       // Update Tab state
//       skillTabs.forEach(t => t.classList.remove('active'));
//       tab.classList.add('active');
//       // Update Panel state
//       skillPanels.forEach(panel => {
//         panel.classList.remove('active');
//         if (panel.id === targetPanel) {
//           panel.classList.add('active');
//           animateSkillBars(panel);
//         }
//       });
//     });
//   });
//   // Animate skill bar widths
//   function animateSkillBars(panel) {
//     const bars = panel.querySelectorAll('.skill-bar-inner');
//     bars.forEach(bar => {
//       const targetPercent = bar.getAttribute('data-percent');
//       bar.style.width = `${targetPercent}%`;
//     });
//   }
//   // Trigger animation for the initially active skill panel
//   const activePanel = document.querySelector('.skills-panel.active');
//   if (activePanel) {
//     setTimeout(() => animateSkillBars(activePanel), 300);
//   }
//   // --- PROJECTS FILTER SYSTEM ---
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const projectCards = document.querySelectorAll('.project-card-wrapper');
//   filterButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const filterValue = btn.getAttribute('data-filter');
//       // Active button styling
//       filterButtons.forEach(b => b.classList.remove('active'));
//       btn.classList.add('active');
//       // Filter project cards
//       projectCards.forEach(card => {
//         if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
//           card.style.display = 'block';
//           setTimeout(() => {
//             card.style.opacity = '1';
//             card.style.transform = 'scale(1)';
//           }, 50);
//         } else {
//           card.style.opacity = '0';
//           card.style.transform = 'scale(0.8)';
//           setTimeout(() => {
//             card.style.display = 'none';
//           }, 300);
//         }
//       });
//     });
//   });
//   // --- CONTACT FORM VALIDATION & INTERACTIVE HANDLERS ---
//   const contactForm = document.getElementById('contactForm');
//   const formInputs = document.querySelectorAll('.form-input');
//   // Input validation utility
//   function validateInput(input) {
//     const value = input.value.trim();
//     let isValid = true;
//     let errorMessage = '';
//     if (value === '') {
//       isValid = false;
//       errorMessage = 'This field is required.';
//     } else if (input.type === 'email') {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(value)) {
//         isValid = false;
//         errorMessage = 'Please enter a valid email address.';
//       }
//     } else if (input.id === 'phone' && value !== '') {
//       const phonePattern = /^\+?[0-9\s-]{10,15}$/;
//       if (!phonePattern.test(value)) {
//         isValid = false;
//         errorMessage = 'Please enter a valid phone number.';
//       }
//     }
//     const errorDisplay = input.parentElement.querySelector('.form-error');
//     if (!isValid) {
//       input.classList.add('invalid');
//       if (errorDisplay) {
//         errorDisplay.textContent = errorMessage;
//         errorDisplay.style.display = 'block';
//       }
//     } else {
//       input.classList.remove('invalid');
//       if (errorDisplay) {
//         errorDisplay.style.display = 'none';
//       }
//     }
//     return isValid;
//   }
//   // Real-time validation on blur and input
//   formInputs.forEach(input => {
//     input.addEventListener('blur', () => validateInput(input));
//     input.addEventListener('input', () => {
//       if (input.classList.contains('invalid')) {
//         validateInput(input);
//       }
//     });
//   });
//   if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       let isFormValid = true;
//       formInputs.forEach(input => {
//         const isInputValid = validateInput(input);
//         if (!isInputValid) {
//           isFormValid = false;
//         }
//       });
//       if (isFormValid) {
//         // Collect form data (simulation)
//         const formData = {
//           name: document.getElementById('name').value,
//           email: document.getElementById('email').value,
//           subject: document.getElementById('subject').value,
//           message: document.getElementById('message').value
//         };
//         // Simulated submit behavior
//         const submitBtn = contactForm.querySelector('button[type="submit"]');
//         const originalBtnHTML = submitBtn.innerHTML;
        
//         submitBtn.disabled = true;
//         submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
//         setTimeout(() => {
//           showToast(`Thanks for your message, ${formData.name}! I will get back to you soon.`, 'success');
//           contactForm.reset();
          
//           // Reset labels position styling by forcing blur check
//           formInputs.forEach(input => input.dispatchEvent(new Event('blur')));
          
//           submitBtn.disabled = false;
//           submitBtn.innerHTML = originalBtnHTML;
//         }, 1500);
//       } else {
//         showToast('Please fill in all required fields correctly.', 'error');
//       }
//     });
//   }
//   // --- TOAST NOTIFICATION SYSTEM ---
//   function showToast(message, type = 'success') {
//     let toastContainer = document.getElementById('toast-container');
//     if (!toastContainer) {
//       toastContainer = document.createElement('div');
//       toastContainer.id = 'toast-container';
//       toastContainer.className = 'toast-container';
//       document.body.appendChild(toastContainer);
//     }
//     const toast = document.createElement('div');
//     toast.className = `toast glass-card ${type}`;
    
//     const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark';
//     toast.innerHTML = `
//       <i class="fa-solid ${iconClass}"></i>
//       <span>${message}</span>
//     `;
//     toastContainer.appendChild(toast);
//     // Fade out and remove toast after 4 seconds
//     setTimeout(() => {
//       toast.style.opacity = '0';
//       toast.style.transform = 'translateX(50px)';
//       toast.style.transition = 'all 0.5s ease';
//       setTimeout(() => {
//         toast.remove();
//       }, 500);
//     }, 4000);
//   }
// });

    document.addEventListener('DOMContentLoaded', () => {
      // --- MOBILE NAVIGATION TOGGLE ---
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');
      const navLinks = document.querySelectorAll('.nav-link');
      if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
          navMenu.classList.toggle('open');
          const icon = hamburger.querySelector('i');
          if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
          }
        });
        // Close menu when clicking navigation links
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            const icon = hamburger.querySelector('i');
            if (icon) {
              icon.classList.add('fa-bars');
              icon.classList.remove('fa-xmark');
            }
          });
        });
      }
      // --- HEADER SCROLL ACTION ---
      const header = document.querySelector('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      // --- THEME TOGGLE (LIGHT / DARK) ---
      const themeToggle = document.getElementById('theme-toggle');
      const htmlElement = document.documentElement;
      // Retrieve saved theme preference, default to dark
      const currentTheme = localStorage.getItem('theme') || 'dark';
      htmlElement.setAttribute('data-theme', currentTheme);
      updateThemeIcon(currentTheme);
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const activeTheme = htmlElement.getAttribute('data-theme');
          const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
          
          htmlElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
          updateThemeIcon(newTheme);
          showToast(`Switched to ${newTheme} theme!`, 'success');
        });
      }
      function updateThemeIcon(theme) {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (icon) {
          if (theme === 'light') {
            icon.className = 'fa-solid fa-moon';
          } else {
            icon.className = 'fa-solid fa-sun';
          }
        }
      }
      // --- TYPEWRITER EFFECT ---
      const typewriterElement = document.getElementById('typewriter');
      if (typewriterElement) {
        const words = [
          'B.Tech CSE Student',
          'Problem Solver',
          'Full Stack Developer',
          'DSA Enthusiast'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        function type() {
          const currentWord = words[wordIndex];
          
          if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting is faster
          } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
          }
          if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of word
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next word
          }
          setTimeout(type, typingSpeed);
        }
        type();
      }
      // --- SCROLL REVEAL & SCROLL SPY ---
      const revealElements = document.querySelectorAll('.reveal');
      const sections = document.querySelectorAll('section');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.classList.contains('skills-panel')) {
              animateSkillBars(entry.target);
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      revealElements.forEach(el => revealObserver.observe(el));
      // Scroll Spy to highlight Nav Links
      window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 160;
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      });
      // --- SKILLS TAB SYSTEM & PROGRESS BARS ANIMATION ---
      const skillTabs = document.querySelectorAll('.skills-tab-btn');
      const skillPanels = document.querySelectorAll('.skills-panel');
      skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const targetPanel = tab.getAttribute('data-target');
          
          skillTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          skillPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === targetPanel) {
              panel.classList.add('active');
              animateSkillBars(panel);
            }
          });
        });
      });
      function animateSkillBars(panel) {
        const bars = panel.querySelectorAll('.skill-bar-inner');
        bars.forEach(bar => {
          const targetPercent = bar.getAttribute('data-percent');
          bar.style.width = `${targetPercent}%`;
        });
      }
      const activePanel = document.querySelector('.skills-panel.active');
      if (activePanel) {
        setTimeout(() => animateSkillBars(activePanel), 300);
      }
      // --- PROJECTS FILTER SYSTEM ---
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.project-card-wrapper');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const filterValue = btn.getAttribute('data-filter');
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
              card.style.display = 'block';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
              }, 50);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'scale(0.8)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 300);
            }
          });
        });
      });
      // --- CONTACT FORM VALIDATION ---
      const contactForm = document.getElementById('contactForm');
      const formInputs = document.querySelectorAll('.form-input');
      function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';
        if (value === '') {
          isValid = false;
          errorMessage = 'This field is required.';
        } else if (input.type === 'email') {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
          }
        } else if (input.id === 'phone' && value !== '') {
          const phonePattern = /^\+?[0-9\s-]{10,15}$/;
          if (!phonePattern.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
          }
        }
        const errorDisplay = input.parentElement.querySelector('.form-error');
        if (!isValid) {
          input.classList.add('invalid');
          if (errorDisplay) {
            errorDisplay.textContent = errorMessage;
            errorDisplay.style.display = 'block';
          }
        } else {
          input.classList.remove('invalid');
          if (errorDisplay) {
            errorDisplay.style.display = 'none';
          }
        }
        return isValid;
      }
      formInputs.forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
        input.addEventListener('input', () => {
          if (input.classList.contains('invalid')) {
            validateInput(input);
          }
        });
      });
      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          let isFormValid = true;
          formInputs.forEach(input => {
            const isInputValid = validateInput(input);
            if (!isInputValid) {
              isFormValid = false;
            }
          });
          if (isFormValid) {
            const formData = {
              name: document.getElementById('name').value,
              email: document.getElementById('email').value,
              subject: document.getElementById('subject').value,
              message: document.getElementById('message').value
            };
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            setTimeout(() => {
              showToast(`Thanks for your message, ${formData.name}! I will get back to you soon.`, 'success');
              contactForm.reset();
              
              formInputs.forEach(input => input.dispatchEvent(new Event('blur')));
              
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalBtnHTML;
            }, 1500);
          } else {
            showToast('Please fill in all required fields correctly.', 'error');
          }
        });
      }
      // --- TOAST NOTIFICATION SYSTEM ---
      function showToast(message, type = 'success') {
        let toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
          toastContainer = document.createElement('div');
          toastContainer.id = 'toast-container';
          toastContainer.className = 'toast-container';
          document.body.appendChild(toastContainer);
        }
        const toast = document.createElement('div');
        toast.className = `toast glass-card ${type}`;
        
        const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark';
        toast.innerHTML = `
          <i class="fa-solid ${iconClass}"></i>
          <span>${message}</span>
        `;
        toastContainer.appendChild(toast);
        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(50px)';
          toast.style.transition = 'all 0.5s ease';
          setTimeout(() => {
            toast.remove();
          }, 500);
        }, 4000);
      }
    });
