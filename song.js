document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("doorContainer");
  const left = document.getElementById("leftDoor");
  const right = document.getElementById("rightDoor");
  const video = document.getElementById("doorVideo");
  const label = document.querySelector(".label");
  const playBtn = document.getElementById("playBtn");

  container.addEventListener("click", async (e) => {
    // Avoid clicking play button or video
    if (e.target.tagName === "VIDEO" || e.target.tagName === "BUTTON") return;

    left.classList.add("open-left");
    right.classList.add("open-right");
    label.style.opacity = "0";

    setTimeout(async () => {
      video.classList.add("show");

      // Attempt fullscreen
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }

      try {
        await video.play();
      } catch {
        playBtn.style.display = "block"; // Show button if blocked
      }
    }, 1500);
  });
});

function enableSound() {
  const video = document.getElementById("doorVideo");
  const playBtn = document.getElementById("playBtn");
  video.muted = false;
  video.play();
  playBtn.style.display = "none";
}
