// Simple interaction code
document.addEventListener('DOMContentLoaded', function () {
  const viewLarge = document.getElementById('view-large');
  const lightbox = document.getElementById('lightbox');
  const lbClose = document.getElementById('lbClose');
  const lbImage = document.getElementById('lbImage');
  const inviteImage = document.getElementById('inviteImage');
  const enterFull = document.getElementById('enterFull');
  const video = document.getElementById('inviteVideo');
  
  // Create floating background hearts
  createBackgroundHearts();
  
  // open lightbox
  viewLarge.addEventListener('click', function () {
    lbImage.src = inviteImage.src;
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden','false');
  });

  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  function closeLightbox(){
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden','true');
  }

  // fullscreen video (works in browsers that support requestFullscreen)
  enterFull.addEventListener('click', function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else {
      alert('Full screen not supported in this browser — play in the video controls.');
    }
  });
  
  // Function to create background floating hearts
  function createBackgroundHearts() {
    const numberOfHearts = 30;
    
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement('div');
      heart.classList.add('bg-heart');
      
      // Random positioning
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDelay = Math.random() * 15 + 's';
      heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
      
      // Random size variation
      const size = Math.random() * 15 + 10;
      heart.style.width = size + 'px';
      heart.style.height = size + 'px';
      
      // Random color variation
      const hue = Math.random() * 30 + 330; // Red to pink range
      heart.style.backgroundColor = `hsl(${hue}, 100%, 75%)`;
      
      // Add to body
      document.body.appendChild(heart);
    }
  }
});
