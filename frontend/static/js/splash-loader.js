document.addEventListener("DOMContentLoaded", function () {
    const tickerWrapper = document.querySelector('.ticker-wrapper');
    const stickerContents = document.querySelectorAll('.sticker-content');

    // Clone each sticker-content and append to the wrapper
    stickerContents.forEach(content => {
        const clone = content.cloneNode(true);
        tickerWrapper.appendChild(clone);
    });
  fetch('static/splashes.txt')
    .then(response => response.text())
    .then(text => {
      let splashes = text.split('\n').filter(line => line.trim() !== "" && line.trim() !== "This message will never appear on the splash screen, isn't that weird?");
      let selectedSplashes = [];

      // Get current date
      let today = new Date();
      let month = today.getMonth() + 1; // Months are zero-based
      let day = today.getDate();
      let specialMessage = "";

      // Check for special dates
      if (month === 8 && day === 1) {
        specialMessage = "Happy birthday Dani <3";
      } else if (month === 6 && day === 24) {
        specialMessage = "Happy birthday Gabe!";
      } else if (month === 10 && day === 31) {
        specialMessage = "OOoooOOOoooo! Spooky!";
      } else if (month === 12 && (day === 24 || day === 25)) {
        specialMessage = "Merry Christmas!";
      } else if (month === 12 && (day === 31)) {
        specialMessage = "Happy New Year!";
      }

      if (specialMessage) {
        selectedSplashes = [specialMessage, specialMessage, specialMessage, specialMessage];
      } else {
        // Ensure we get 4 unique random splashes
        while (selectedSplashes.length < 4 && splashes.length > 0) {
          let randomIndex = Math.floor(Math.random() * splashes.length);
          selectedSplashes.push(splashes[randomIndex]);
          splashes.splice(randomIndex, 1); // Remove chosen splash to avoid duplicates
        }
      }



      // Assign to HTML
      document.getElementById("splash1").textContent = selectedSplashes[0] || "Missigno!";
      document.getElementById("splash2").textContent = selectedSplashes[1] || "Missigno!";
      document.getElementById("splash3").textContent = selectedSplashes[2] || "Missigno!";
      document.getElementById("splash4").textContent = selectedSplashes[3] || "Missigno!";
    })
    .catch(error => console.error("Error loading splash text: ", error, " <-- Something's fishing goin' on :/"));
});
