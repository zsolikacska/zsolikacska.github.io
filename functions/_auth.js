const password = "Outlaws2026";

const userPass = prompt("Add meg a jelszót:");

if (userPass === password) {
    document.getElementById("content").style.display = "block";
} else {
    alert("Hibás jelszó!");
    window.location.href = "https://zsolikacska.github.io/wrongpw.html";
}