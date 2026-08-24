const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;


// Open Lightbox

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        lightboxImg.src = image.src;

        lightbox.classList.add("active");

    });

});


// Close Lightbox

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


// Next Image

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    lightboxImg.src = galleryImages[currentIndex].src;

});


// Previous Image

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    lightboxImg.src = galleryImages[currentIndex].src;

});


// Category Filter

const filterButtons = document.querySelectorAll(".filter-buttons button");

const galleryItems = document.querySelectorAll(".gallery-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button change

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        const filter = button.getAttribute("data-filter");


        galleryItems.forEach(item => {

            if (filter === "all" ||
                item.classList.contains(filter)) {

                item.classList.remove("hide");

            }

            else {

                item.classList.add("hide");

            }

        });

    });

});