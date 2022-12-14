import { galleryItems } from './gallery-items';

const galleryContainerRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}">
              </a>`;
    })
    .join('');
}

galleryContainerRef.insertAdjacentHTML('beforeend', markup);

console.log(galleryContainerRef);
