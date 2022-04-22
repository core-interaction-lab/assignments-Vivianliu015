const albumContainer = document.getElementById('album-Container');


const fetchContent = async (fetchUrl) => {
    const response = await fetch(fetchUrl).then(data => data.json());
console.log(response.items);

response.items.forEach(item => {
   console.log(item);
   const imgEl= document.createElement('img')
   imgEl.setAttribute('src', item.images[0]     .url);
   albumContainer.append(imgEl);

});

};


const buildAlbums = albums=> {
    response.items.forEach(item => {
        console.log(item);
        const imgEl= document.createElement('img');
        imgEl.setAttribute('src', item.images[0]     .url);
        albumContainer.append(imgEl);

})

};

fetchContent('https://interactionlab.space/data/assignment-4-1.json');
