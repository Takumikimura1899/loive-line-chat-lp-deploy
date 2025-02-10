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
  const chatDotFlame = document.createElement('div');
  const chatDot1 = document.createElement('div');
  const chatDot2 = document.createElement('div');
  const chatDot3 = document.createElement('div');

  chatDotContainer.classList.add('chat-dot-container');
  chatDotFlame.classList.add('chat-dot-flame');
  chatDot1.classList.add('chat-dot');
  chatDot2.classList.add('chat-dot');
  chatDot3.classList.add('chat-dot');

  chatDotContainer.append(chatDotFlame);
  chatDotFlame.append(chatDot1);
  chatDotFlame.append(chatDot2);
  chatDotFlame.append(chatDot3);

  return chatDotContainer;
}

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

showChatList('q1');
programCardSplide.mount();
programLessonCardSplide.mount();
