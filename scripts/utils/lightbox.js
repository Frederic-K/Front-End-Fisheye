
let currentIndex = "";

const lightboxBg = document.getElementsByClassName("lightbox__bg")[0];
const lightboxCurrentImg = document.getElementsByClassName("lightbox__modal--cardIMG")[0];
const lightboxCurrentVideo = document.getElementsByClassName("lightbox__modal--cardVideo")[0];
const lightboxCurrentCaption = document.getElementsByClassName("lightbox__modal--caption")[0];
const lightboxEscBtn = document.getElementsByClassName("lightbox__modal--imgESC")[0];
const lightboxPrevMedia = document.getElementsByClassName("lightbox__modal--PrevIconBtn")[0];
const lightboxNextMedia = document.getElementsByClassName("lightbox__modal--NextIconBtn")[0];

function openLightbox(data) {

    currentIndex = "";

    console.log("data", data);

    lightboxBg.classList.remove("hidden");
    
    currentIndex = parseInt(data.dataset.index);
    console.log("dataSet", data.dataset.index);
    console.log("currentIndex", currentIndex);

    const lightboxMediaSource = data.src;
    console.log("lightboxMediaSource", lightboxMediaSource);

    const lightboxMediaClass = data.classList.value;
    console.log("lightboxMediaClass", lightboxMediaClass);

   if (lightboxMediaClass === "mediaCard__sample--img") {
        console.log("lightboxMediaClass = img");
    } else {
        console.log("lightboxMediaClass = video");
    }


    lightboxCurrentImg.setAttribute("src", lightboxMediaSource);

    // Alternative : récupérer le titre à partir du "alt=" de l'img
    const lightboxCurrentImgTitleSource = data.parentElement.parentElement.getElementsByClassName("mediaCard__caption--title")[0];

    lightboxCurrentCaption.textContent = lightboxCurrentImgTitleSource.textContent;

    lightboxPrevMedia.addEventListener("click", () => {
        moveLightboxSlide(-1);
        currentIndex = currentIndex - 1;
        console.log("newCurrentIndex1", currentIndex);
    });
    
    lightboxNextMedia.addEventListener("click", () => {
        moveLightboxSlide(1);
        currentIndex = currentIndex + 1;
        console.log("newCurrentIndex2", currentIndex);
    });
    
        // TODO : remettre à zéro le compteur "currentIndex"
    
    function moveLightboxSlide(direction) {
        console.log("direction", direction);
     
        const mediaArrayOrigin = localStorage.getItem("mediaArray");
        const mediaArray = JSON.parse(mediaArrayOrigin);
        const newLightboxSlideIndex = mediaArray[currentIndex + direction];

        console.log("mediaArray", mediaArray);    
        console.log("newLightboxSlideIndex", newLightboxSlideIndex); 

        const newlightboxSlidePicture = newLightboxSlideIndex.image;
        console.log("newlightboxSlidePicture", newlightboxSlidePicture); 

        const newlightboxSlideTitle = newLightboxSlideIndex.title;

        console.log("newlightboxSlideTitle", newlightboxSlideTitle);

        const newLightboxSlideSource = `../assets/sample/${newlightboxSlidePicture}`;
        console.log("newLightboxSlideSource", newLightboxSlideSource);

        lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");

        lightboxCurrentImg.setAttribute("src", newLightboxSlideSource);
        console.log("lightboxCurrentImg", lightboxCurrentImg);

        lightboxCurrentCaption.textContent = newlightboxSlideTitle; 
    };
};

lightboxEscBtn.addEventListener("click", () => {
    closeLightbox();
});

function closeLightbox() {
    lightboxBg.classList.add("hidden");
    lightboxCurrentImg.removeAttribute("src", "alt", "aria-label");
    console.log("lastCurrentIndex", currentIndex);
};