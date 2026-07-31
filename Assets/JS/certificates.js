/*==========================================
CERTIFICATE LIGHTBOX
==========================================*/

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".close");

// Open Lightbox
galleryItems.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        document.body.style.overflow = "hidden";

    });

});

// Close Button
closeBtn.addEventListener("click", closeLightbox);

// Close When Clicking Background
lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){

        closeLightbox();

    }

});

// ESC Key
document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeLightbox();

    }

});

function closeLightbox(){

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

}