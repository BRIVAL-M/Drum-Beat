
function activateDrumButtons() {
  const drumButtons = document.querySelectorAll('.drum__btn');
  
  for (let i = 0; i < drumButtons.length; i++) {
    setTimeout(() => {
      drumButtons[i].classList.add('active');
   
      
      setTimeout(() => {
        drumButtons[i].classList.remove('active');
      }, 150);
    }, i * 150);
  }
}
activateDrumButtons()


///////////////////////////////////////////////////////// A voir.... 

// function activateDrumButtons() {
//   const drumButtons = document.querySelectorAll('.drum__btn');
//   const totalButtons = drumButtons.length;
//   const activeTime = 100; // Durée pendant laquelle le bouton reste "active"
//   const delay = 250; // Délai entre chaque activation de bouton
  
//   let lastButtonIndex = -1; // Index du dernier bouton activé
  
//   const activateButton = () => {
//     let buttonIndex = Math.floor(Math.random() * totalButtons);
//     while (buttonIndex === lastButtonIndex) {
//       buttonIndex = Math.floor(Math.random() * totalButtons);
//     }
    
//     drumButtons[buttonIndex].classList.add('active');
//     setTimeout(() => {
//       drumButtons[buttonIndex].classList.remove('active');
//     }, activeTime);
    
//     lastButtonIndex = buttonIndex;
//   };
  
//   setInterval(activateButton, delay);
// }


  /////////////////////////

  function getKeyBtnId(key) {
    switch (key) {
      case "7":
        return "kick_1";
      case "8":
        return "claps_1";
      case "9":
        return "snare_1";
      case "4":
        return "hats_1";
      case "5":
        return "fx_1";
      case "6":
        return "crash_1";
      case "1":
        return "fx_4";
      case "2":
        return "fx_3";
      case "3":
        return "fx_2";
      default:
        return null;
    }
  }
  
  // Récupérer tous les boutons avec la classe "drum__btn"
  const buttons = document.querySelectorAll('.drum__btn');
  
  // Pour chaque bouton, ajouter un écouteur d'événement "click"
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Récupérer l'ID du bouton cliqué
      const soundId = button.id;
 
      // Récupérer l'ID du fichier audio à jouer
      const audioId = getKeyBtnId(soundId);

      if (audioId) {
        // Jouer l'audio correspondant
        const audio = new Audio(`sounds/${audioId}.wav`);
        audio.play();
  
        // Ajouter la classe "drum__btn--active" au bouton
        button.classList.add('active');
  
        // Supprimer la classe "drum__btn--active" après un court délai
        setTimeout(() => {
          button.classList.remove('active');
        }, 100);
      }
    });
  });
  
  // Ajouter un écouteur d'événement "keydown" sur la fenêtre
// Définir un dictionnaire pour stocker l'état de chaque bouton
const buttonStates = {};

window.addEventListener('keydown', event => {
  // Récupérer l'ID correspondant à la touche pressée
  const soundId = event.key;

  // Récupérer l'ID du fichier audio à jouer
  const audioId = getKeyBtnId(soundId);

  if (audioId) {
    // Vérifier si l'audio est déjà en train d'être joué
    if (!buttonStates[audioId]) {
      // Jouer l'audio correspondant
      const audio = new Audio(`sounds/${audioId}.wav`);
      audio.play();

      // Mettre l'état du bouton à true
      buttonStates[audioId] = true;

      // Ajouter la classe "drum__btn--active" au bouton correspondant
      const button = document.getElementById(soundId);
      if (button) {
        button.classList.add('active');

        // Supprimer la classe "drum__btn--active" après un court délai
        setTimeout(() => {
          button.classList.remove('active');
          // Remettre l'état du bouton à false après la suppression de la classe
          buttonStates[audioId] = false;
        }, 100);
      }
    }
  }
});

  



  
  
  
 
  

  

  