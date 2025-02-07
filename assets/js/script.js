// Button
const chatRefreshButtonElement = document.querySelector('#chat-refresh-button');
const chatDietButtonElement = document.querySelector('#chat-diet-button');

// ChatList
const chatListRefreshElement = document.querySelector('#chat-list-refresh');
const chatListDietElement = document.querySelector('#chat-list-diet');

// ButtonEvent
chatRefreshButtonElement.addEventListener('click', () => {
  chatListRefreshElement.classList.remove('hidden');
});

chatDietButtonElement.addEventListener('click', () => {
  chatListDietElement.classList.remove('hidden');
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
