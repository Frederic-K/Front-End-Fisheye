/* eslint-disable no-unused-vars, eqeqeq, no-undef */

// Media ///////////////////////

function getPhotographerMediaDOM (data, i) {
  const { title, image, video, likes, date } = data
  const index = i
  const picture = `../assets/sample/${image}`
  const movie = `../assets/sample/${video}`
  const mediaTitle = `Le titre du media est ${title}`
  const linkLightboxMediaTitle = `Lien vers la vue rapprochée de ${title}`

  // Photographer media card ///////////////////////

  const mediaCard = document.createElement('article')
  mediaCard.classList.add('mediaCard')
  mediaCard.setAttribute('role', 'article')
  mediaCard.setAttribute('aria-label', mediaTitle)
  mediaCard.setAttribute('date', Date.parse(date))
  mediaCard.setAttribute('likes', likes)
  mediaCard.setAttribute('title', title)

  // Picture - video ///////////////////////

  const mediaCardSample = document.createElement('div')
  mediaCardSample.classList.add('mediaCard__sample')
  mediaCardSample.setAttribute('role', 'link')
  //mediaCardSample.setAttribute('tabindex', '0')
  mediaCardSample.setAttribute('aria-label', linkLightboxMediaTitle)

  function getMediaByFileTypeDOM () {
    if (image) {
      const mediaCardImg = document.createElement('img')
      mediaCardImg.classList.add('mediaCard__sample--img', 'media')
      mediaCardImg.setAttribute('src', picture)
      mediaCardImg.setAttribute('href', picture)
      mediaCardImg.setAttribute('alt', mediaTitle)
      mediaCardImg.setAttribute('aria-label', mediaTitle)
      mediaCardImg.setAttribute('date', Date.parse(date))
      mediaCardImg.setAttribute('likes', likes)
      mediaCardImg.setAttribute('title', title)
      mediaCardImg.setAttribute('data-index', index)
      mediaCardImg.setAttribute('filetype', 'img')
      mediaCardImg.setAttribute('datatype', 'media')
      mediaCardImg.setAttribute('tabindex', '0')
      mediaCardSample.appendChild(mediaCardImg)
    } else if (video) {
      const mediaCardVideo = document.createElement('video')
      mediaCardVideo.classList.add('mediaCard__sample--video', 'media')
      mediaCardVideo.setAttribute('src', movie)
      //mediaCardVideo.setAttribute('controls', '')
      mediaCardVideo.setAttribute('date', Date.parse(date))
      mediaCardVideo.setAttribute('likes', likes)
      mediaCardVideo.setAttribute('title', title)
      mediaCardVideo.setAttribute('alt', title)
      mediaCardVideo.setAttribute('aria-label', title)
      mediaCardVideo.setAttribute('data-index', index)
      mediaCardVideo.setAttribute('filetype', 'vid')
      mediaCardVideo.setAttribute('datatype', 'media')
      mediaCardVideo.setAttribute('tabindex', '0')
      mediaCardSample.appendChild(mediaCardVideo)
    } else {
      console.log("le type de fichier n'est pas reconnu")
    }
  };
  getMediaByFileTypeDOM()

  // Caption ///////////////////////

  const mediaCardCaption = document.createElement('div')
  mediaCardCaption.classList.add('mediaCard__caption')

  // Caption title ///////////////////////

  const mediaCardTitle = document.createElement('h2')
  mediaCardTitle.classList.add('mediaCard__caption--title')
  mediaCardTitle.setAttribute('aria-label', mediaTitle)
  mediaCardTitle.textContent = title

  // Caption like container ///////////////////////

  const mediaCardLikesContainer = document.createElement('div')
  mediaCardLikesContainer.classList.add('mediaCard__caption--likeContainer')

  // Caption like ///////////////////////

  const mediaCardLikes = document.createElement('p')
  mediaCardLikes.classList.add('mediaCard__caption--likes')
  mediaCardLikes.setAttribute('aria-label', 'Likes')
  mediaCardLikes.textContent = likes

  // Caption like heart button ///////////////////////

  const mediaCardLikeBtnContainer = document.createElement('div')
  mediaCardLikeBtnContainer.classList.add('mediaCard__caption--likeBtnContainer')

  const mediaCardLikeBtn = document.createElement('button')
  mediaCardLikeBtn.classList.add('mediaCard__caption--likeBtnIcon')
  mediaCardLikeBtn.setAttribute('type', 'button')
  mediaCardLikeBtn.setAttribute('role', 'button')
  mediaCardLikeBtn.setAttribute('aria-label', 'Likes')

  const mediaCardLikeBtnEmptyHeart = document.createElement('i')
  mediaCardLikeBtnEmptyHeart.classList.add('fa-regular')
  mediaCardLikeBtnEmptyHeart.classList.add('fa-heart')
  mediaCardLikeBtnEmptyHeart.classList.add('empty-heart')

  const mediaCardLikeBtnFullHeart = document.createElement('i')
  mediaCardLikeBtnFullHeart.classList.add('fa-sharp', 'fa-solid', 'fa-heart', 'full-heart', 'invisible')

  // Get likes from medias ///////////////////////

  const photographerLikes = document.getElementsByClassName('photographerPage__insert--SumLikes')[0]
  const photographerTotalNumbLikes = parseInt(photographerLikes.textContent)
  const photographerSumLikes = photographerTotalNumbLikes + likes
  photographerLikes.textContent = photographerSumLikes

  // Media likes ///////////////////////

  mediaCardLikeBtn.addEventListener('click', function (e) {
    const photographerTotalLikes = document.getElementsByClassName('photographerPage__insert--SumLikes')[0]
    if (likes == mediaCardLikes.textContent) {
      mediaCardLikes.textContent = parseInt(mediaCardLikes.textContent) + 1
      photographerTotalLikes.textContent = parseInt(photographerTotalLikes.textContent) + 1
      mediaCardLikeBtnEmptyHeart.classList.add('invisible')
      mediaCardLikeBtnFullHeart.classList.remove('invisible')
    } else {
      mediaCardLikes.textContent = parseInt(mediaCardLikes.textContent) - 1
      photographerTotalLikes.textContent = parseInt(photographerTotalLikes.textContent) - 1
      mediaCardLikeBtnEmptyHeart.classList.remove('invisible')
      mediaCardLikeBtnFullHeart.classList.add('invisible')
    }
  })

  // Lightbox launcher ///////////////////////

  mediaCardSample.addEventListener('click', function (e) {
    displayLightbox(e.target)
    console.log('e.target clic souris', e.target);
  })

  mediaCardSample.addEventListener('keydown', keyboardSelection)

  function keyboardSelection (e) {
    if (e.key === 'Enter') {
      displayLightbox(e.target)
      console.log('e.taget keybord', e.target);
    }
  };

  // Indent ///////////////////////

  mediaCard.appendChild(mediaCardSample)
  mediaCard.appendChild(mediaCardCaption)
  mediaCardCaption.appendChild(mediaCardTitle)
  mediaCardCaption.appendChild(mediaCardLikesContainer)
  mediaCardLikesContainer.appendChild(mediaCardLikes)
  mediaCardLikesContainer.appendChild(mediaCardLikeBtnContainer)
  mediaCardLikeBtnContainer.appendChild(mediaCardLikeBtn)
  mediaCardLikeBtn.appendChild(mediaCardLikeBtnEmptyHeart)
  mediaCardLikeBtn.appendChild(mediaCardLikeBtnFullHeart)

  return (mediaCard)
};
