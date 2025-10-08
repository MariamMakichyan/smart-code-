// document.addEventListener("DOMContentLoaded", () => {
//   const playBtn = document.querySelector(".but-play");
//   const popup = document.getElementById("videoPopup");
//   const closeBtn = document.getElementById("closePopup");
//   const myVideo = document.getElementById("myVideo");

//   playBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     popup.style.display = "flex";
//     myVideo.play();
//   });
//   closeBtn.addEventListener("click", () => {
//     popup.style.display = "none";
//     myVideo.pause();
//     myVideo.currentTime = 0;
//   });
//   popup.addEventListener("click", (e) => {
//     if (e.target === popup) {
//       popup.style.display = "none";
//       myVideo.pause();
//       myVideo.currentTime = 0;
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const dots = document.querySelectorAll(".section-info > ul > li");
//   const boxes = document.querySelectorAll(".section-info .courses-box");

//   if (!dots.length || !boxes.length) return;

//   dots.forEach((dot, idx) => {
//     dot.addEventListener("click", (e) => {
//       e.preventDefault();
//       dots.forEach((d) => d.classList.remove("active"));
//       boxes.forEach((b) => b.classList.remove("active"));
//       dot.classList.add("active");
//       const boxToShow = boxes[idx] || boxes[boxes.length - 1];
//       boxToShow.classList.add("active");
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("myModal");
//   const openBtns = document.querySelectorAll(".but-main");
//   const closeBtn = document.getElementById("closeBtn");

//   if (!modal || !openBtns.length || !closeBtn) return;

//   openBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();
//       modal.style.display = "flex";
//     });
//   });
//   closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
//   });
//   window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const typeButtons = document.querySelectorAll(".type-btn");
//   const hiddenInput = document.getElementById("courseType");

//   if (!typeButtons.length || !hiddenInput) return;

//   typeButtons.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       typeButtons.forEach((b) => b.classList.remove("active"));
//       btn.classList.add("active");
//       hiddenInput.value = btn.dataset.value;
//     });
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const allLinks = document.querySelectorAll("a"); 
  
//   allLinks.forEach(link => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault(); 
//     });
//   });
// });