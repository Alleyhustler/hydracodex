// Optional: Add interactivity or animations
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseover', () => {
      logo.style.transform = 'scale(1.1)';
    });
    logo.addEventListener('mouseout', () => {
      logo.style.transform = 'scale(1)';
    });
  });