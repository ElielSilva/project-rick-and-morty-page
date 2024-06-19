
// const sectionCharacters = document.getElementById("container__characters");

// function addElementSection(child) {
//   sectionCharacters.appendChild(child)
// }

// function createCharacterImageElement(imageSource) {
//   const img = document.createElement('img');
//   img.className = 'character__image';
//   img.src = imageSource;
//   return img;
// }

// function createdCharactersElement(id, name, status, species , image){
//   const divCharacter = document.createElement("div");
//   divCharacter.className = 'character__div';
  
//   const imgCharacter = createCharacterImageElement(image)
  
//   const ButtomCharacter = createCustomElement('button', 'character__Buttom', 'Detalhes')
//   ButtomCharacter.valueQuery = id;
  

//   const spanNameCharater = createCustomElement('span', 'character__name', `${name}`);
//   const spanStatusCharater = createCustomElement('span', 'character__status', `Status: ${status}`);
//   divCharacter.appendChild(imgCharacter)
//   divCharacter.appendChild(spanNameCharater)
//   divCharacter.appendChild(spanStatusCharater)
//   divCharacter.appendChild(ButtomCharacter)
//   sectionCharacters.appendChild(divCharacter)
//   return divCharacter;
// }

// function createCustomElement(element, className, innerText) {
//   const e = document.createElement(element);
//   e.className = className;
//   e.innerText = innerText;
//   return e;
// }

// function clearCharacterDiv () {
//   sectionCharacters.innerHTML = "";
// }

// const buttonProx = document.getElementById("control__pages__prox");
// buttonProx.addEventListener("click", () => {
//   const number = parseInt(document.getElementById("number__page").innerText);
//   if (number <= 91) {
//     clearCharacterDiv()
//     getCharaterAll(rangeNumbers((number + 1)))
//     document.getElementById("number__page").innerText = number + 1
//   }
// })

// const buttonAnt = document.getElementById("control__pages__ant");
// buttonAnt.addEventListener("click", () => {
//   const number = parseInt(document.getElementById("number__page").innerText);
//   if (number > 1) {
//     clearCharacterDiv()
//     getCharaterAll(rangeNumbers((number - 1)))
//     document.getElementById("number__page").innerText = number - 1
//   }
// })

// window.dom = {
//   addElementSection,
//   createCharacterImageElement,
//   createdCharactersElement,
//   clearCharacterDiv,
  
// }