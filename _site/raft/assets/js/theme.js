// Simple theme.js - Light mode only
const THEME_ATTR = "data-theme";

// Always set light theme
document.documentElement.setAttribute(THEME_ATTR, "light");

// Remove theme toggle functionality - no dark mode
function toggleTheme() {
  // Do nothing - theme toggle disabled
}

// Initialize with light theme only
function initTheme() {
  document.documentElement.setAttribute(THEME_ATTR, "light");
}

// Initialize on load
initTheme();
