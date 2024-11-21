document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills");
    const skillsList = document.getElementById("skills-list");
  
    if (toggleButton && skillsList) {
      toggleButton.addEventListener("click", () => {
        if (skillsList.style.display === "none") {
          skillsList.style.display = "block";
        } else {
          skillsList.style.display = "none";
        }
      });
    }
  });
  