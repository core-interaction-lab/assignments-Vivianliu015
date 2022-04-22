const db = {
    id: 'appNi3MB1m3UHlrcy',
    table: 'Couture',
    apiKey: 'keyPEtf8vgBOzUiUH'
};

const fetchPrince = async () => {
    const response = await fetch('https://interactionlab.space/data/assignment-4-1.json').then(data => data.json());
console.log(response);

    const myObject = {
        title: 'Prince',
        release_date: '334824',
    }

    const myArray = ['movie', 348927, 'fdiosj'];

    const isReleased = true;

    console.log( myObject.release_date )
    console.log(myArray[2]);

    const container = document.getElementById('movies-container');

    response.records.forEach((Prince) => {
        console.log(Prince);
        if (Prince.fields.poster) {
            console.log(movie.fields.poster[0].url);
            const posterImg = document.createElement('img');
            posterImg.src = movie.fields.poster[0].url;
            //posterImg.setAttribute('src', movie.fields.poster[0].url);
            container.append(posterImg);
        }
        if (Prince.fields.album_group) {
            console.log(Prince.fields.album_group);
        }

        if (movie.fields.description) {
            const descriptionEl = document.createElement('p');
            descriptionEl.innerHTML = movie.fields.description;
            descriptionEl.classList.add('movie-description');
            container.append(descriptionEl);
        }
    });
};

fetchPrince();