const db = {
    id: 'app5ZBP2qGQ363zeH',
    table: 'Haute Couture Collections of Flower Element',
    apiKey: 'keyPEtf8vgBOzUiUH'
};

const airtableUrl = `https://api.airtable.com/v0/app5ZBP2qGQ363zeH/couture?api_key=keyPEtf8vgBOzUiUH`

const fetchcouture = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const myObject = {
        title: 'couture',
        release_date: '334824',
    }

    const myArray = ['movie', 348927, 'fdiosj'];

    const isReleased = true;

    console.log( myObject.release_date )
    console.log(myArray[2]);

    const container = document.getElementById('couture-container');

    response.records.forEach((couture) => {
        console.log(couture);
        if (couture.fields.Image) {
            console.log(couture.fields.Image[0].url);
            const ImageImg = document.createElement('img');
            ImageImg.src = couture.fields.Image[0].url;
            //posterImg.setAttribute('src', movie.fields.poster[0].url);
            container.append(ImageImg);
            ImageImg.classList.add('img-name');
        }
        if (couture.fields.Name) {
            console.log(couture.fields.Name);
        }

        if (couture.fields.BrandName) {
            const BrandNameEl = document.createElement('p');
            BrandNameEl.innerHTML = couture.fields.BrandName;
            BrandNameEl.classList.add('brand-name');
            container.append( BrandNameEl);
        }
    

        if (couture.fields.Time) {
            const TimeEl = document.createElement('p');
            TimeEl.innerHTML = couture.fields.Time;
            TimeEl.classList.add('time-description');
            container.append(TimeEl);
        }

        if (couture.fields.AboutThisCollection) {
            const AboutThisCollectionEl = document.createElement('p');
            AboutThisCollectionEl.innerHTML = couture.fields.AboutThisCollection;
            AboutThisCollectionEl.classList.add('about-description');
            container.append( AboutThisCollectionEl);
        }
    

    });
};

fetchcouture();