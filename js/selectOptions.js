import { constants } from "/constants.js";

export function populateSelectOptions() {
  if (window.location.pathname.includes("preferences.html")) {
    const { courseList, edLevelList } = constants;

    const courseSelect = document.getElementById("course");
    if (courseSelect && courseSelect.options.length <= 1) {
      courseList.forEach((course) => {
        const option = document.createElement("option");
        option.textContent = course;
        courseSelect.appendChild(option);
      });
    }

    const edLevelSelect = document.getElementById("level");
    if (edLevelSelect && edLevelSelect.options.length <= 1) {
      edLevelList.forEach((level) => {
        const option = document.createElement("option");
        option.textContent = level;
        edLevelSelect.appendChild(option);
      });
    }
  }
}

export function setupOptions() {
  populateSelectOptions();
}
