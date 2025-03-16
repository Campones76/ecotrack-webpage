document.addEventListener('DOMContentLoaded', () => {
   const preloader = document.getElementById('preloader');
   let opacity = 0.9186;

   // Show the preloader
   preloader.style.display = 'flex';

   // Start the text animation
   startTextAnimation();

   // Start the fade-out after a delay (e.g., 5 seconds)
   setTimeout(() => {
      const fadeOutInterval = setInterval(() => {
         if (opacity > 0) {
            opacity -= 0.01; // Decrease opacity gradually
            preloader.style.opacity = opacity;
         } else {
            clearInterval(fadeOutInterval); // Stop the fade-out interval
            preloader.style.display = 'none'; // Hide the preloader after fade-out
         }
      }, 15); // Adjust the interval timing for smoother or faster fade-out
   }, 500); // Delay before starting the fade-out (5 seconds)

   // Text animation logic
   function startTextAnimation() {
      const textVariations = [
         "Procrastinating Ooo",
         "Procrastinating oOo",
         "Procrastinating ooO",
         "Procrastinating Ooo",
         "Procrastinating OOo",
         "Procrastinating OOO"
      ];

      let currentIndex = 0;

      function updateText() {
         const textElement = document.getElementById('procrastinateText');
         if (textElement) {
            textElement.textContent = textVariations[currentIndex];
            currentIndex = (currentIndex + 1) % textVariations.length;
         }
      }

      // Update text every 250ms
      setInterval(updateText, 300);
   }
});