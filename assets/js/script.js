const programCardSlideElement = document.querySelector('.program-card-slide');
const programLessonCardSlideElement = document.querySelector('.program-lesson-card-slide');

const programCardSplide = new Splide(programCardSlideElement, {
  perPage: 1,
  type: 'loop',
  padding: '4rem',
  gap: '0.6rem',
  arrows: false,
  pagination: false,
});
const programLessonCardSplide = new Splide(programLessonCardSlideElement, {
  perPage: 1,
  type: 'loop',
  padding: '1rem',
  gap: '1rem',
  pagination: false,
});

programCardSplide.mount();
programLessonCardSplide.mount();
