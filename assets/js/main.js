const toggle = document.getElementById("toggleBtn");
const body = document.body;

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    body.classList.toggle("active");
});
