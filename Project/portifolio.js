const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal"); 
const form = document.getElementById('contact-form');
let nome = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");



form.addEventListener('submit', e => {
    e.preventDefault();
    modal.classList.add("open");
    nome.value = "";
    email.value = "";
    message.value = "";
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})