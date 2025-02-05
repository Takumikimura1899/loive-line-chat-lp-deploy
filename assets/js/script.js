const programCardSlideElement = document.querySelector('.program-card-slide');

const programCardSplide = new Splide(programCardSlideElement,{
    perPage: 1,
    type: 'loop',
    padding: '3rem',
    gap: '1rem',
    arrows: false,
    pagination: false,
})

programCardSplide.mount();
