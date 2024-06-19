const sectionCharacters = document.getElementById("container__characters");
const buttonProx = document.getElementById("control__pages__prox");
const buttonAnt = document.getElementById("control__pages__ant");

buttonProx.addEventListener("click", () => {
  const number = parseInt(document.getElementById("number__page").innerText);
  if (number <= 91) {
    clearCharacterDiv()
    getCharaterAll(rangeNumbers((number + 1)))
    document.getElementById("number__page").innerText = number + 1
  }
})

buttonAnt.addEventListener("click", () => {
  const number = parseInt(document.getElementById("number__page").innerText);
  if (number > 1) {
    clearCharacterDiv()
    getCharaterAll(rangeNumbers((number - 1)))
    document.getElementById("number__page").innerText = number - 1
  }
})

async function getCharaterAll(characters) {
  const dataCharaters = await utils.getCharaterAPI(characters)

  for (const { id, name, status, species, image } of dataCharaters) {
    const divs = createdCharactersElement(id, name, status, species, image );
    console.log(id, name, status, species, image )
    addElementSection(divs);
  }
}

function addElementSection(child) {
  sectionCharacters.appendChild(child)
}

function createCharacterImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'character__image';
  img.src = imageSource;
  return img;
}

function createdCharactersElement(id, name, status, species , image){
  const divCharacter = document.createElement("div");
  divCharacter.className = 'character__div';
  
  const divCharacterInternalLeft = document.createElement("div");
  const divCharacterInternalRigth = document.createElement("div");
  divCharacterInternalRigth.className = 'div__rigth';
  divCharacter.appendChild(divCharacterInternalLeft)
  divCharacter.appendChild(divCharacterInternalRigth)
  
  
  const imgCharacter = createCharacterImageElement(image)
  
  const ACharacter = createCustomElement('a', 'character__link', 'Detalhes')
  ACharacter.href = `./index.html/${id}`;

  

  const spanNameCharater = createCustomElement('span', 'character__name', `${name}`);
  const spanStatusCharater = createCustomElement('span', 'character__status', `Status: ${status}`);
  const spanSpeciesCharater = createCustomElement('span', 'character__species', `Specie: ${species}`);
  divCharacterInternalLeft.appendChild(imgCharacter)
  divCharacterInternalRigth.appendChild(spanNameCharater)
  divCharacterInternalRigth.appendChild(spanStatusCharater)
  divCharacterInternalRigth.appendChild(spanSpeciesCharater)
  divCharacterInternalRigth.appendChild(ACharacter)
  sectionCharacters.appendChild(divCharacter)
  return divCharacter;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function clearCharacterDiv () {
  sectionCharacters.innerHTML = "";
}


window.onload = function () {
  getCharaterAll([1,2,3,4,5,6,7,8,9])
}