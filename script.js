function updateClock() {
  const now = new Date();
  const timezone = document.getElementById("timezone").value;
  const format24Hour = JSON.parse(localStorage.getItem("format24Hour")) ?? true;

  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: !format24Hour,
    timeZone:
      timezone === "local"
        ? Intl.DateTimeFormat().resolvedOptions().timeZone
        : timezone,
  };

  let timeString = new Intl.DateTimeFormat(undefined, options).format(now);
  document.getElementById("time").textContent = timeString;

  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: options.timeZone,
  };
  document.getElementById("date").textContent = new Intl.DateTimeFormat(
    undefined,
    dateOptions
  ).format(now);
}

// Handle Time Format Toggle
const formatToggle = document.getElementById("format-toggle");
formatToggle.addEventListener("click", () => {
  let currentFormat = JSON.parse(localStorage.getItem("format24Hour")) ?? true;
  localStorage.setItem("format24Hour", JSON.stringify(!currentFormat));
  formatToggle.textContent = currentFormat
    ? "Switch to 24-Hour Format"
    : "Switch to 12-Hour Format";
  updateClock();
});

// Handle Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = JSON.parse(localStorage.getItem("darkMode")) ?? true;

function applyTheme() {
  if (isDarkMode) {
    document.body.style.backgroundColor = "#282c34";
    document.body.style.color = "white";
    themeToggle.textContent = "Switch to Light Mode";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#282c34";
    themeToggle.textContent = "Switch to Dark Mode";
  }
}

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  applyTheme();
});

// Handle Timezone Change
document.getElementById("timezone").addEventListener("change", updateClock);

// Auto Apply User Preferences
applyTheme();
updateClock();
setInterval(updateClock, 1000);
