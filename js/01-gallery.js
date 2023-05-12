import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markupGallery = galleryItems.map(({original, preview, description}) =>
	`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

galleryEl.insertAdjacentHTML('beforeend', markupGallery);

galleryEl.addEventListener('click', selectImage);

function selectImage(evt) {
	evt.preventDefault()
	
	if (evt.target.nodeName !== "IMG") {
		return;
	} 

	const instance = basicLightbox.create(
		` <img src="${evt.target.dataset.source}" width="800" height="600">`
	);

	instance.show(document.addEventListener('keydown', closeModal));

	function closeModal(evt) {
		if (evt.code === 'Escape') {
			instance.close(document.removeEventListener('keydown', closeModal));
		}
	}
};
















// console.log(galleryItems);
