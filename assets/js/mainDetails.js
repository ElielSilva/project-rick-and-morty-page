const urlParams = new URLSearchParams(window.location.search)

function setInformacion(data) {
    document.getElementById('name').innerText = characterData.name;
        document.getElementById('image').src = characterData.image;
        document.getElementById('gender').innerText = characterData.gender;
        document.getElementById('species').innerText = characterData.species;
        document.getElementById('status').innerText = characterData.status;
        document.getElementById('type').innerText = characterData.type || "(None)";
        document.getElementById('origin-name').innerText = characterData.origin.name;
        document.getElementById('origin-url').href = characterData.origin.url;
        document.getElementById('location-name').innerText = characterData.location.name;
        document.getElementById('location-url').href = characterData.location.url;
        document.getElementById('character-url').href = characterData.url;
        document.getElementById('created').innerText = characterData.created;

        const episodeList = document.getElementById('episode-list');
        characterData.episode.forEach((episodeUrl, index) => {
            const listItem = document.createElement('li');
            const episodeLink = document.createElement('a');
            episodeLink.href = episodeUrl;
            episodeLink.innerText = `Episode ${index + 1}`;
            listItem.appendChild(episodeLink);
            episodeList.appendChild(listItem);
        });
}



window.onload = function () {
    setInformacion(getOneCharaterAPI(urlParams.get('id')))
}