
<!-- JavaScript für die Roboter -->
    function showGallery() {
      document.getElementById("gallery").style.display = "block";
    }

    function simulateRobot() {
      document.getElementById("simulation").style.display = "block";
    }

    function moveForward() {
      document.getElementById("robot-result").textContent = "Der Roboter bewegt sich vorwärts.";
    }

    function turnLeft() {
      document.getElementById("robot-result").textContent = "Der Roboter dreht sich nach links.";
    }


<!-- JavaScript für die Bilder der Roboter -->


// Tabelle für die Bilder
const images = [
  { src: "media/staubsauger.jpeg", caption: "Haushaltsroboter" },
  { src: "media/Industrie-Roboter-Herstellung.jpg", caption: "Industrieroboter" },
  { src: "media/b2e3a206-0001-0004-0000-000001071927_w1600_r1.499531396438613_fpx33.32_fpy49.96.jpg", caption: "Medizinischer Roboter" },
 
];


let currentIndex = 0;

// Récupérer les éléments HTML
const galleryImage = document.getElementById("galleryImage");
const imageCaption = document.getElementById("imageCaption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Funktion zum Updaten Bild in Titel
function updateImage() {
  // transition
  galleryImage.style.opacity = 0;

  // warte auf die Opacität auf 0
  setTimeout(() => {
    galleryImage.src = images[currentIndex].src;
    imageCaption.textContent = images[currentIndex].caption;
    galleryImage.style.opacity = 1;
  }, 500);

  // Activer ou désactiver les boutons
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
}

// Rück bild
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
}

// Nächste Bild
function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
}

// Initialisierung der Galerie
updateImage();


// Js für die Fragen von Erneubare
function checkAnswer(button, isCorrect) {
        // Entfernt alle bisherigen Statusklassen (grün/rot) von den Buttons
        const buttons = button.parentElement.querySelectorAll("button");
        buttons.forEach(btn => btn.classList.remove("correct", "incorrect"));

        // Fügt den aktuellen Button die entsprechende Klasse hinzu
        if (isCorrect) {
            button.classList.add("correct");
            button.parentElement.querySelector(".feedback").textContent = "Richtige Antwort!";
        } else {
            button.classList.add("incorrect");
            button.parentElement.querySelector(".feedback").textContent = "Falsche Antwort!";
        }
    }

// Fragen computer
    function checkAnswer(button, isCorrect) {
            if (isCorrect) {
                button.classList.add('correct');
                alert('Richtige Antwort!');
            } else {
                button.classList.add('incorrect');
                alert('Falsche Antwort. Versuch es nochmal!');
            }
            const buttons = button.parentElement.querySelectorAll('button');
            buttons.forEach(btn => btn.disabled = true);
        }
