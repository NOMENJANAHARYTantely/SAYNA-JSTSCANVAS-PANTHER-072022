const quizs = [
  {
    titre: "ENIGME NUMERO 1",
    question:
      "Prouve ton talent d’espion et déchiffre cette réplique d’Okoyéécrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje !",
    detail: "",
  },

  {
    titre: "ENIGME NUMERO 2",
    question:
      "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
    detail:
      "Le savais tu ? Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ? ",
  },
  {
    titre: "ENIGME NUMERO 3",
    question:
      "Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
    detail:
      "Le savais tu ? Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. Cest en quelque sorte lancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1",
  },
];

const buttonElement = document.getElementById("envoyer")
const titreElement = document.getElementById("titre");
const questionsElement = document.getElementById("questions");
const detailElement = document.getElementByID("questions");
const texteElement = document.getElementById("texte");
const contactElement = document.getElementById("contact");

// initial state
let quizID = -1;
let quiz = quizs[0];
const imagesPopup = ["../3_Page_Enigme/pop_up_fin_du_quiz.png"];

function displayQuiz() {
  //display question
  titreElement.innerHTML = `
    <h2>${quiz.titre}</h2> `;
  questionsElement = `
    <p>${quiz.question}</p> `;
  detailElement = `
    <p>${quiz.question}</p> `;
}

function setNextQuiz() {
  if (quizID < quizs.length - 1) {
    quizID++;
    quiz = quizs[quizID];
    displayQuiz();
  } else {
    const randomID = Math.round(2 * Math.random());
    sectionQuiz.innerHTML = `<a href="/enigme/index.html"><img src="${imagesPopup[randomID]}" alt="popup"/></a>`;
  }
}

contactElement.addEventListener("click", (e) => {
  contactElement.innerHTML = `
              ;
});

// Answer validation
buttonElement.addEventListener("click", (e) => {
  buttonElement.innerText = "QUESTION SUIVANTE";
  if (buttonElement.innerText.toUpperCase() == "QUESTION SUIVANTE")
    setNextQuiz();
});




//  <p>Alors, as tu la réponse ?</p>
//<form>
//<input name="reponse" id="reponse" placeholder="reponse" />
//<button>Envoyer</button>
//</form>