// Progress Animation
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-fill");

  progressBars.forEach((bar) => {
    let value = bar.getAttribute("data-progress");
    bar.style.width = value + "%";
  });
});

// Lesson Click Alert
function playLesson(name) {
  alert("Now Playing Lesson: " + name);
}
