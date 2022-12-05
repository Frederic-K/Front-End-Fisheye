

/*async function getPhotographerId() {
    let params = (new URL(document.location)).searchParams;
    let photographerId = params.get("id");

    console.log("photographerID", photographerId);

    return (photographerId);
};*/


/*async function displayData(photographers) {
    const photographerPageHeader = document.querySelector(".header__photographer");

    photographers.forEach((photographer) => {
        const photographerPageDOM = getPhotographerPageDOM(photographer);
        photographerPageHeader.appendChild(photographerPageDOM);
    });
};

async function init() {
    const { photographers } = await getPhotographersData();
    console.log("photographers", photographers);

    const photographer = photographers.filter(d => d["photographerId"] == getPhotographerId());
    console.log('photographer', photographer);

    getPhotographerPageDOM(photographer[0]);
    console.log("photographer[]", photographer[0]);
};


/*async function init() {
    const { photographers } = await getPhotographersData();
    console.log("photographers", photographers);
    const photographer = photographers.filter(d => d["id"] == getPhotographerId());
    console.log('photographer', photographer);
    displayData(photographer[0]);
};

init();*/

/*async function displayData(photographers) {
    const photographersSection = document.querySelector(".header__photographer");

    photographers.forEach((photographer) => {
        const photographerPageDOM = getPhotographerPageDOM(photographer);
        photographersSection.appendChild(photographerPageDOM);
    });
};

async function init() {
    const { photographers } = await getPhotographersData();
    console.log("photgrapher", photographers);

    displayData(photographers);
};

init();*/

async function getPhotographerId() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get("id");

    console.log("photographerID", id);

    return (id);
};

async function getSelectedPhotographer() {
    const {photographers} = await getPhotographersData();
    console.log("photographers", photographers);

    const photographerId  = await getPhotographerId();
    console.log("photographerID", photographerId);

    const choosenPhotographer = photographers.filter(photographer => photographer.id == photographerId);    
    console.log("choosenPhotographer", choosenPhotographer);

    return (choosenPhotographer);
};

async function displayPhotographerHeaderData() {
    const selectedPhotographer = await getSelectedPhotographer();
    console.log("selectedPhotographer", selectedPhotographer);

    
    const photographerPageDOM = getPhotographerPageDOM(selectedPhotographer[0]);
    console.log("photographerPageDOM", photographerPageDOM);

    const photographersSection = document.querySelector(".header__photographer");
    photographersSection.appendChild(photographerPageDOM);
};

displayPhotographerHeaderData();

// Media

async function displayData(media) {
    const photographersMediaSection = document.querySelector(".photographer__media");

    media.forEach((sample) => {
        const photographerMediaDOM = getPhotographerMediaDOM(sample);
        console.log("photographerMediaDOM", photographerMediaDOM);
        
        photographersMediaSection.appendChild(photographerMediaDOM);
        console.log("sample", sample);
    });
};

async function init() {
    const { media } = await getPhotographersData();
    displayData(media);
};

init();


//getSelectedPhotographer();

/*async function init() {
    const selectedPhotographer = await getSelectedPhotographer();
    displayData(selectedPhotographer);
};

init();*/

// Montre bien les élément du DOM mais vide ....