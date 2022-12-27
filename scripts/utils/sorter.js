    
    
    // Dropdown DOM ///////////////////////

    const sorterDropdown = document.getElementsByClassName("dropdown")[0];

    const sorterDropdowTitle = document.createElement("div");
    sorterDropdowTitle.classList.add("dropdown__title");
    sorterDropdowTitle.textContent = "Trier par";
    sorterDropdown.appendChild(sorterDropdowTitle);

    const sorterDropdownMenu = document.createElement("div");
    sorterDropdownMenu.classList.add("dropdown__menu");
    sorterDropdown.appendChild(sorterDropdownMenu);

    const sorterDropdownBtn = document.createElement("div");
    sorterDropdownBtn.classList.add("dropdown__button");
    sorterDropdownBtn.setAttribute("role", "button");
    sorterDropdownBtn.setAttribute("aria-expanded", "false");
    sorterDropdownBtn.textContent = "Popularité";
    sorterDropdownMenu.appendChild(sorterDropdownBtn);

    const sorterDropdownBtnIcon = document.createElement("div");
    sorterDropdownBtnIcon.classList.add("dropdown__icon");
    sorterDropdown.appendChild(sorterDropdownBtnIcon);

    const sorterDropdownIconChevron = document.createElement("i");
    sorterDropdownIconChevron.classList.add("fa-solid", "fa-chevron-down");
    sorterDropdownBtnIcon.appendChild(sorterDropdownIconChevron);

    const sorterDropdownContent = document.createElement("ul");
    sorterDropdownContent.classList.add("dropdown__content", "hidden");
    sorterDropdownMenu.appendChild(sorterDropdownContent);

    const dropdownSortByFamous = document.createElement("li");
    dropdownSortByFamous.textContent = "Popularité";
    dropdownSortByFamous.classList.add("hidden");
    sorterDropdownContent.appendChild(dropdownSortByFamous);

    const dropdownSortByDate = document.createElement("li");
    dropdownSortByDate.textContent = "Date";
    sorterDropdownContent.appendChild(dropdownSortByDate);

    const dropdownSortByTitle = document.createElement("li");
    dropdownSortByTitle.textContent = "Titre";
    sorterDropdownContent.appendChild(dropdownSortByTitle);
    
    const dropdownContent = document.getElementsByClassName("dropdown__content")[0];


    // DropdowMenu ///////////////////////

sorterDropdownBtn.addEventListener("click", () => dropdownMenu());

function dropdownMenu() {
    //const dropdownContent = document.getElementsByClassName("dropdown__content")[0];
    dropdownContent.classList.toggle("hidden");
    //sorterDropdownBtnIcon.classList.toggle("arrow-animation-down");
    sorterDropdownBtnIcon.classList.toggle("arrow-animation-up");
};

/*dropdownSortByFamous.addEventListener("click", () => {
    dropdownMenu();
    sorterDropdownBtn.textContent = "Popularité";
});*/

dropdownSortByDate.addEventListener("click", (e) => {
    dropdownMenu();
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByDate.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    //mediaArray.sort((a, b) => a.likes - b.likes);
    //console.log("mediaArraySortByLikes", mediaArray);
    sortMedias(e.target);
    //console.log("e.target.date", e.target);
});

dropdownSortByTitle.addEventListener("click", (e) => {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sortMedias(e.target);
});

dropdownSortByFamous.addEventListener("click", (e) => {
    dropdownMenu();
    dropdownSortByDate.classList.remove("selected", "hidden");
    dropdownSortByTitle.classList.remove("selected", "hidden");
    dropdownSortByFamous.classList.add("selected", "hidden");
    sorterDropdownBtn.textContent = document.getElementsByClassName("selected")[0].textContent;
    sortMedias(e.target);
});

// Sort Media ///////////////////////

function valueCompare (a, b) {
    return b - a;
};

function sortMedias(data) {

    const photographerMedia = document.getElementsByClassName("photographer__media")[0];
    const mediaCardsNodeList = document.querySelectorAll(".mediaCard");
    const mediaCardSampleItem = document.querySelectorAll(".media");
    console.log('mediaCardSampleItem', mediaCardSampleItem);
    //console.log("mediaCardsNodeList", mediaCardsNodeList);

    // si date n'est pas parsed par Date.parse(2011-08-11) alors :
    /*const mediaDatesArray = Array.from(cards).map(d => parseInt(d.getAttribute("date"), 10));
    console.log("mediaDatesArray", mediaDatesArray);*/

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

    const mediaDatesArray = Array.from(mediaCardsNodeList).map(n => n.getAttribute("date"));
    //console.log("mediaDatesArray", mediaDatesArray);

    const mediaTitlesArray = Array.from(mediaCardsNodeList).map(n => n.getAttribute("title"));
    //console.log("mediaTitlesArray", mediaTitlesArray);

    // Si la parse est nécessaire
    /*const mediaLikesArray = Array.from(mediaCardsNodeList).map(n => parseInt(n.getAttribute("likes"), 10)); with parseInt, 10 is the base
    console.log("mediaLikesArray", mediaLikesArray);*/

    const mediaLikesArray = Array.from(mediaCardsNodeList).map(n => n.getAttribute("likes"));
    //console.log("mediaLikesArray", mediaLikesArray);

    let selectedSorter = data.textContent;
    //console.log("selectedSorter", selectedSorter);

    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...of

    if (selectedSorter === "Date") {
        mediaDatesArraySorted = mediaDatesArray.sort(valueCompare);
        console.log("mediaDatesArraySorted", mediaDatesArraySorted);

        /*for (const element of mediaDatesArraySorted) {
            //console.log('element', element);
            for (const card of mediaCardsNodeList) {
                if (card.getAttribute("date") === element) {
                    photographerMedia.appendChild(card);
                }
            }
        }*/  
       for (let i = 0; i < mediaDatesArraySorted.length; i++) {
            console.log('i', i);
            const date = mediaDatesArraySorted[i];
            for (const card of mediaCardsNodeList) {
                if (card.getAttribute("date") === date) {
                    card.firstChild.firstChild.setAttribute("data-index", i)
                    photographerMedia.appendChild(card);
                }
            }
        }    
            /*const date = mediaDatesArraySorted[i];
            console.log('date', date);
            const card = mediaCardsNodeList[i];
            console.log('card', card);
            const cardDate = card.getAttribute("date");
            //console.log('cardDate', cardDate);
            if (cardDate === date) {
                photographerMedia.appendChild(card);
            };
            //console.log("mediaDatesArraySortedLength", mediaDatesArraySorted.length);
        } */   
    } else if (selectedSorter === "Titre") {
        mediaTitlesArraySorted = mediaTitlesArray.sort();
        console.log("mediaTitlesArraySorted", mediaTitlesArraySorted);

        for (let i = 0; i < mediaTitlesArraySorted.length; i++) {
            console.log('i', i);
            const title = mediaTitlesArraySorted[i];
            for (const card of mediaCardsNodeList) {
                if (card.getAttribute("title") === title) {
                    card.firstChild.firstChild.setAttribute("data-index", i)
                    photographerMedia.appendChild(card);
                }
            }
        } 
    } else if (selectedSorter === "Popularité") {
        mediaLikesArraySorted = mediaLikesArray.sort(valueCompare);
        console.log("mediaLikesArraySorted", mediaLikesArraySorted);

        for (let i = 0; i < mediaLikesArraySorted.length; i++) {
            console.log('i', i);
            const like = mediaLikesArraySorted[i];
            for (const card of mediaCardsNodeList) {
                if (card.getAttribute("likes") === like) {
                    card.firstChild.firstChild.setAttribute("data-index", i)
                    photographerMedia.appendChild(card);
                }
            }
        } 
    }

};