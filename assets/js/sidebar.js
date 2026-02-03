// Sidebar toggle functionality - Phantom style
(function() {
  'use strict';

  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const submenuToggles = document.querySelectorAll('.submenu-toggle');

  // Toggle sidebar on mobile
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      sidebar.classList.toggle('active');
      if (sidebarOverlay) {
        sidebarOverlay.classList.toggle('active');
      }
      document.body.classList.toggle('sidebar-open');
    });
  }

  // Close sidebar when clicking overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    });
  }

  // Toggle submenus
  submenuToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const menuItem = this.closest('.menu-item');
      const submenu = menuItem.querySelector('.submenu');
      
      menuItem.classList.toggle('active');
      
      if (submenu) {
        if (submenu.style.maxHeight && submenu.style.maxHeight !== '0px') {
          submenu.style.maxHeight = '0px';
        } else {
          submenu.style.maxHeight = submenu.scrollHeight + 'px';
        }
      }
    });
  });

  // Close sidebar when clicking a link on mobile
  if (sidebar) {
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 980) {
          sidebar.classList.remove('active');
          if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
          }
          document.body.classList.remove('sidebar-open');
        }
      });
    });
  }

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 980) {
        sidebar.classList.remove('active');
        if (sidebarOverlay) {
          sidebarOverlay.classList.remove('active');
        }
        document.body.classList.remove('sidebar-open');
      }
    }, 250);
  });
})();
