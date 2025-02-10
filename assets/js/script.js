const q1ChatRefreshButtonElement = document.querySelector('#chat-refresh-button');
const q1ChatDietButtonElement = document.querySelector('#chat-diet-button');
const q1ChatListRefreshElement = document.querySelector('#chat-list-refresh');
const q1ChatListDietElement = document.querySelector('#chat-list-diet');

q1ChatRefreshButtonElement.addEventListener('click', () => {
  q1ChatListRefreshElement.classList.remove('hidden');
  q1ChatDietButtonElement.disabled = true;
});

q1ChatDietButtonElement.addEventListener('click', () => {
  q1ChatListDietElement.classList.remove('hidden');
  q1ChatRefreshButtonElement.disabled = true;
});

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
