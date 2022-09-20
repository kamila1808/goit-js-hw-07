import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup (images) {
    return images.map(({preview, original, description}) => {
        return `<div class = gallery__item>
        <a class = gallery__link href = "${original.value}">
        <img 
        class = gallery__image 
        src = "${preview}" 
        data-source = "${original}" 
        alt = "${description}">
        </a> 
        </div>`;
    }).join("");
}

const onGalleryClick = (event) => {
    event.preventDefault();

    if (event.target.classList.contains("gallery")) 
        return;
    
    const source = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`)

instance.show()
}
  

galleryEl.addEventListener("click", onGalleryClick);

console.log(galleryItems);




