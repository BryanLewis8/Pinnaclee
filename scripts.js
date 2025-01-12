// ========== LOGIN-FUNKTION ==========
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Dummy-Login-Überprüfung
    if (username === "admin" && password === "1234") {
        document.getElementById("login-feedback").textContent = "Erfolgreich eingeloggt!";
        document.getElementById("login-feedback").style.color = "green";
    } else {
        document.getElementById("login-feedback").textContent = "Falscher Benutzername oder Passwort.";
        document.getElementById("login-feedback").style.color = "red";
    }
}

// ========== REGISTER-FUNKTION ==========
function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;

    if (password !== confirmPassword) {
        document.getElementById("register-feedback").textContent = "Die Passwörter stimmen nicht überein.";
        document.getElementById("register-feedback").style.color = "red";
        return;
    }

    // Erfolgreiche Registrierung
    document.getElementById("register-feedback").textContent = "Registrierung erfolgreich!";
    document.getElementById("register-feedback").style.color = "green";
}

// ========== QUIZ-FUNKTION ==========
function checkAnswer(category, questionNumber, answer) {
    const correctAnswers = {
        math: { 1: 14, 2: 18 }, // Mathematik
        info: { 1: "HyperText Markup Language" }, // Informatik
        tech: { 1: "Metall", 2: "Windkraft" }, // Technik
        nature: { 1: "Sauerstoff", 2: "Wasser" }, // Naturwissenschaft
    };

    const feedbackElement = document.getElementById(`${category}-feedback-${questionNumber}`);
    if (correctAnswers[category][questionNumber] === answer) {
        feedbackElement.textContent = "Richtig! Gut gemacht!";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "Leider falsch. Versuche es erneut.";
        feedbackElement.style.color = "red";
    }
}

// ========= EVENT-LISTENER HINZUFÜGEN =========
document.getElementById("loginForm")?.addEventListener("submit", handleLogin);
document.getElementById("registerForm")?.addEventListener("submit", handleRegister);
