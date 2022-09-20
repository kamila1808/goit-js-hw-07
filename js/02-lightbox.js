import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup (images) {
    return images.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join("");
}
var lightbox = new SimpleLightbox('.gallery a', {  captionsData: "alt",
captionDelay: 250,
captionsPosition: "bottom", });

   

console.log(galleryItems);
