window.addEventListener("DOMContentLoaded", () => {
  const deadline1 = new Date("August 30, 2025 23:59:59").getTime();
  const deadline2 = new Date("August 30, 2025 23:59:59").getTime();

  function updateCountdown1() {
    const now = new Date().getTime();
    const distance = deadline1 - now;
    document.getElementById("days1").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours1").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes1").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds1").innerText = Math.floor((distance % (1000 * 60)) / 1000);
  }

  function updateCountdown2() {
    const now = new Date().getTime();
    const distance = deadline2 - now;
    document.getElementById("days2").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours2").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes2").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds2").innerText = Math.floor((distance % (1000 * 60)) / 1000);
  }

  updateCountdown1();
  updateCountdown2();
  setInterval(() => {
    updateCountdown1();
    updateCountdown2();
  }, 1000);
});
