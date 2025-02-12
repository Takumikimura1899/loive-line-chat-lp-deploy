const q1ChatRefreshButtonElement = document.getElementById('chat-refresh-button');
const q1ChatDietButtonElement = document.getElementById('chat-diet-button');
const q1ChatListRefreshElement = document.getElementById('chat-list-refresh');
const q1ChatListDietElement = document.getElementById('chat-list-diet');

q1ChatRefreshButtonElement.addEventListener('click', () => {
  q1ChatListRefreshElement.classList.remove('hidden');
  q1ChatDietButtonElement.disabled = true;
  showChatList('q2');
});

q1ChatDietButtonElement.addEventListener('click', () => {
  q1ChatListDietElement.classList.remove('hidden');
  q1ChatRefreshButtonElement.disabled = true;
  showChatList('q3');
});

const resultLolveButtonElement = document.getElementById('result-lolve-button');
resultLolveButtonElement.addEventListener('click', () => {
  const resultLolveElement = document.getElementById('chat-result-lolve');
  showChatResult(resultLolveElement);
});

const resultPilateskButtonElement = document.getElementById('result-pilatesk-button');
resultPilateskButtonElement.addEventListener('click', () => {
  const resultPilateskElement = document.getElementById('chat-result-pilatesk');
  showChatResult(resultPilateskElement);
});

function showChatList(targetId) {
  const targetElement = document.getElementById(targetId);
  const chatListItemElementList = targetElement.querySelectorAll('.chat-list-item');
  const chatAdvisorElementList = targetElement.querySelectorAll('.chat-advisor');
  const chatMessageContainerElementList = targetElement.querySelectorAll('.chat-message-container');

  chatListItemElementList.forEach((listItem, index) => {
    setTimeout(() => {
      setTimeout(() => {
        listItem.classList.remove('hidden');
        chatAdvisorElementList[index].classList.remove('hidden');
      }, 300);

      let chatMessageContainerElement = chatMessageContainerElementList[index];
      let ChatDotContainerElement = createChatDotContainer();
      setTimeout(() => {
        chatMessageContainerElement.parentNode.insertBefore(
          ChatDotContainerElement,
          chatMessageContainerElement,
        );
      }, 500);

      setTimeout(() => {
        ChatDotContainerElement.remove();
        chatMessageContainerElementList[index].classList.remove('hidden');
      }, 1000);
    }, index * 1500);
  });
}

function createChatDotContainer() {
  const chatDotContainer = document.createElement('div');
  chatDotContainer.classList.add('chat-dot-container');

  const chatDotFlame = document.createElement('div');
  chatDotFlame.classList.add('chat-dot-flame');

  [...Array(3)].forEach(() => {
    const chatDot = document.createElement('div');
    chatDot.classList.add('chat-dot');
    chatDotFlame.append(chatDot);
  });

  chatDotContainer.append(chatDotFlame);
  return chatDotContainer;
}

function showChatResult(targetElement) {
  const resultElement = targetElement.querySelector('.chat-result-wrapper');
  resultElement.classList.remove('hidden');
}

function initializeSplide(targetId) {
  programCardSplide(targetId).mount();
  programLessonCardSplide(targetId).mount();
}

function programCardSplide(targetId) {
  const targetElement = document.getElementById(targetId);
  const programCardSlideElement = targetElement.querySelector('.program-card-slide');
  return new Splide(programCardSlideElement, {
    perPage: 1,
    type: 'loop',
    padding: '4rem',
    arrows: false,
    pagination: false,
  });
}

function programLessonCardSplide(targetId) {
  const targetElement = document.getElementById(targetId);
  const programLessonCardSlideElement = targetElement.querySelector('.program-lesson-card-slide');
  return new Splide(programLessonCardSlideElement, {
    perPage: 1,
    type: 'loop',
    autoplay: 'true',
    padding: '1rem',
    gap: '1rem',
    pagination: false,
    interval: 4000,
  });
}

showChatList('q1');
initializeSplide('chat-result-lolve');
initializeSplide('chat-result-pilatesk');
initializeSplide('chat-result-radysgym');
initializeSplide('chat-result-surffit');
