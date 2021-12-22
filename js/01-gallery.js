import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divEl = document.querySelector(".gallery");
divEl.addEventListener("click", selectImage);
const createGallery = createArrayImage(galleryItems);
divEl.insertAdjacentHTML("afterbegin", createGallery);


/*----------Создание карточек картинок и перебор массива обьектов с картинками*/ 
function createArrayImage(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}


function selectImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return;
    }
    const maxImage = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img src="${maxImage}" width="800" height="600">`
    );
        instance.show();
  console.log(maxImage);
}
console.log(galleryItems);




