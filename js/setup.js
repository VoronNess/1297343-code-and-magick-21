'use strict';

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);


const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COATCOLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYESCOLOR = [`black`, `red`, `blue`, `yellow`, `green`];


const getRandom = (arr) => {
  let i = Math.floor(Math.random() * arr.length);
  let random = arr[i];
  return random;
};

const getWizards = (names, surnames, colors1, colors2) =>{
  let wizards = [];
  for (let k = 0; k < 4; k++) {
    let nameRandom = getRandom(names) + ` ` + getRandom(surnames);
    let coatColorRandom = getRandom(colors1);
    let eyesColorRandom = getRandom(colors2);

    wizards.push({name: nameRandom, coatColor: coatColorRandom, eyesColor: eyesColorRandom});
  }
  return wizards;
};
const renderWizards = (names, surnames, colors1, colors2) => {
  for (let i = 0; i < names.length; i++) {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    const wizardsRandom = getWizards(names, surnames, colors1, colors2);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizardsRandom[i].name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizardsRandom[i].coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizardsRandom[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
};
renderWizards(WIZARD_NAMES, SURNAMES, COATCOLOR, EYESCOLOR);
