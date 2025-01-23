function updateClock() {
  const now = new Date();

  // Format time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero to minutes and seconds
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update time display
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").textContent = timeString;

  // Format date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString(undefined, options);

  // Update date display
  document.getElementById("date").textContent = dateString;
}

// Theme switcher functionality
const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = true;

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    document.body.style.backgroundColor = "#282c34";
    document.body.style.color = "white";
    themeToggle.textContent = "Switch to Light Mode";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#282c34";
    themeToggle.textContent = "Switch to Dark Mode";
  }
});

// Initialize clock
setInterval(updateClock, 1000);
updateClock();
