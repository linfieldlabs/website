// Simple AI Animation - Right Side Only
function createRandomDot() {
  const container = document.querySelector('.ai-processing');
  const dot = document.createElement('div');
  dot.className = 'ai-dot';
  dot.style.top = Math.random() * 60 + 20 + '%';
  dot.style.left = Math.random() * 40 + 10 + '%';
  dot.style.animationDelay = Math.random() * 2 + 's';
  container.appendChild(dot);
  
  // Remove after animation completes
  setTimeout(() => {
    if (dot.parentNode) {
      dot.parentNode.removeChild(dot);
    }
  }, 3000);
}

// Create occasional dots
setInterval(createRandomDot, 4000);
