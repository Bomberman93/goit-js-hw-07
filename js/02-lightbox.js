import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divEl = document.querySelector(".gallery");
const createGallery = createArrayImage(galleryItems);
divEl.insertAdjacentHTML("afterbegin", createGallery);

/*----------Создание карточек картинок и перебор массива обьектов с картинками*/
function createArrayImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
  </ul>`
    })
    .join(" ");
}


  
  const lightbox = new SimpleLightbox('.gallery a', {captionDelay: "250ms" , captionsData: "alt"});



console.log(galleryItems);

