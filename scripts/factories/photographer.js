
function photographerCardFactory(data) {

    const {name, id, city, country, tagline, price, portrait} = data;
    const photographerPageLink = `Lien vers la page du photographe ${name}`;
    const photographerProfilePicture = `Photo du profil du photographe ${name}`;
    const link = `./photographer.html?id=${id}`;
    const location = `${city}, ${country}`;
    const photographerMessage = `Message du photographe ${name}`;
    const photographerPricePerDay = `Tarif journalier du photographe ${name}`;
    const pricePerDay = `${price} €/jour`;
    const picture = `assets/photographers/${portrait}`;

    // Card
    const photographerArticleCard = document.createElement("article");
    photographerArticleCard.classList.add("photographer__article");

    // Link 
    const photographerLink = document.createElement("a");
    photographerLink.classList.add("photographer__article--link");
    photographerLink.setAttribute("href", link);
    photographerLink.setAttribute("role", "link");
    photographerLink.setAttribute("arial-label", photographerPageLink);

    // Img link 
    const photographerImgLinkCard = document.createElement("div");
    photographerImgLinkCard.classList.add("photographer__article--linkImg");

    // Img 
    const photographerImgCard = document.createElement("img");
    photographerImgCard.classList.add("photographer__article--img");
    photographerImgCard.setAttribute("src", picture);
    photographerImgCard.setAttribute("alt", photographerProfilePicture);
    photographerImgCard.setAttribute("arial-label", photographerProfilePicture);

    // Name 
    const photographerNameCard = document.createElement("h2");
    photographerNameCard.classList.add("photographer__article--linkTitle");
    photographerNameCard.textContent = name;
    
    // Caption 
    const photographerArticleCaption = document.createElement("div");
    photographerArticleCaption.classList.add("photographer__article--caption");

    // Location
    const photographerlocation = document.createElement("p");
    photographerlocation.classList.add("photographer__article--captionLocation");
    photographerlocation.textContent = location;

    // Tagline
    const photographTagLine = document.createElement("p");
    photographTagLine.classList.add("photographer__article--captionTagLine");
    photographTagLine.setAttribute("arial-label", photographerMessage);
    photographTagLine.textContent = tagline;

    // Price per day
    const photographerPrice = document.createElement("p");
    photographerPrice.classList.add("photographer__article--captionPrice");
    photographerPrice.setAttribute("arial-label", photographerPricePerDay);
    photographerPrice.textContent = pricePerDay;

    // Indent
    photographerArticleCard.appendChild(photographerLink);
    photographerLink.appendChild(photographerImgLinkCard)
    photographerImgLinkCard.appendChild(photographerImgCard);
    photographerLink.appendChild(photographerNameCard);
    photographerArticleCard.appendChild(photographerArticleCaption)
    photographerArticleCaption.appendChild(photographerlocation);
    photographerArticleCaption.appendChild(photographTagLine);
    photographerArticleCaption.appendChild(photographerPrice);

    return (picture, photographerArticleCard);
};