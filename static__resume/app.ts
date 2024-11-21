// Select the button and the skills list
const toggleButton = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLUListElement;


toggleButton.addEventListener("click", () => {
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block";
  } else {
    skillsList.style.display = "none";
  }
});
