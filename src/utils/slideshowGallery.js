class SlideshowGallery {
    previousGallery = () => {
        let currentPos = document.querySelector('.gallery').getAttribute('data-pos');
        currentPos--;
        const gallery = document.querySelector('.gallery');
        const galleryContainer = document.querySelector('.gallery__container');
        galleryContainer.style.transition = 'transform 0.5s ease-in-out';
        gallery.setAttribute('data-pos', currentPos);
    };
    
    nextGallery = () => {
        let currentPos = document.querySelector('.gallery').getAttribute('data-pos');
        currentPos++;
        const gallery = document.querySelector('.gallery');
        const galleryContainer = document.querySelector('.gallery__container');
        galleryContainer.style.transition = 'transform 0.5s ease-in-out';
        gallery.setAttribute('data-pos', currentPos);
    };
}

export default new SlideshowGallery();