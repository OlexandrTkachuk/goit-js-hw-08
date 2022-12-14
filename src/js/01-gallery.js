import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', markup);
console.log(galleryContainerRef);

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}">
              </a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});
