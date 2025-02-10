const q1ChatRefreshButtonElement = document.getElementById('chat-refresh-button');
const q1ChatDietButtonElement = document.getElementById('chat-diet-button');
const q1ChatListRefreshElement = document.getElementById('chat-list-refresh');
const q1ChatListDietElement = document.getElementById('chat-list-diet');

q1ChatRefreshButtonElement.addEventListener('click', () => {
  q1ChatListRefreshElement.classList.remove('hidden');
  q1ChatDietButtonElement.disabled = true;
  showQ2ChatList();
});

q1ChatDietButtonElement.addEventListener('click', () => {
  q1ChatListDietElement.classList.remove('hidden');
  q1ChatRefreshButtonElement.disabled = true;
  showQ3ChatList();
});

function showQ1ChatList() {
  const q1Element = document.getElementById('q1');
  const q1ChatListItemElementList = q1Element.querySelectorAll('.chat-list-item');
  const q1ChatAdvisorElementList = q1Element.querySelectorAll('.chat-advisor');
  const q1ChatMessageContainerElementList = q1Element.querySelectorAll('.chat-message-container');

  q1ChatListItemElementList.forEach((listItem, index) => {
    setTimeout(function () {
      setTimeout(function () {
        listItem.classList.remove('hidden');
        q1ChatAdvisorElementList[index].classList.remove('hidden');
      }, 300);

      let q1ChatMessageContainerElement = q1ChatMessageContainerElementList[index];
      let ChatDotContainerElement = createChatDotContainer();
      setTimeout(function () {
        q1ChatMessageContainerElement.parentNode.insertBefore(
          ChatDotContainerElement,
          q1ChatMessageContainerElement,
        );
      }, 500);

      setTimeout(function () {
        ChatDotContainerElement.remove();
        q1ChatMessageContainerElementList[index].classList.remove('hidden');
      }, 1000);
    }, index * 1500);
  });
}

function showQ2ChatList() {
  const q2Element = document.getElementById('q2');
  const q2ChatListItemElementList = q2Element.querySelectorAll('.chat-list-item');
  const q2ChatAdvisorElementList = q2Element.querySelectorAll('.chat-advisor');
  const q2ChatMessageContainerElementList = q2Element.querySelectorAll('.chat-message-container');

  q2ChatListItemElementList.forEach((listItem, index) => {
    setTimeout(function () {
      setTimeout(function () {
        listItem.classList.remove('hidden');
        q2ChatAdvisorElementList[index].classList.remove('hidden');
      }, 300);

      let q2ChatMessageContainerElement = q2ChatMessageContainerElementList[index];
      let ChatDotContainerElement = createChatDotContainer();
      setTimeout(function () {
        q2ChatMessageContainerElement.parentNode.insertBefore(
          ChatDotContainerElement,
          q2ChatMessageContainerElement,
        );
      }, 500);

      setTimeout(function () {
        ChatDotContainerElement.remove();
        q2ChatMessageContainerElementList[index].classList.remove('hidden');
      }, 1000);
    }, index * 1500);
  });
}

function showQ3ChatList() {
  const q3Element = document.getElementById('q3');
  const q3ChatListItemElementList = q3Element.querySelectorAll('.chat-list-item');
  const q3ChatAdvisorElementList = q3Element.querySelectorAll('.chat-advisor');
  const q3ChatMessageContainerElementList = q3Element.querySelectorAll('.chat-message-container');

  q3ChatListItemElementList.forEach((listItem, index) => {
    setTimeout(function () {
      setTimeout(function () {
        listItem.classList.remove('hidden');
        q3ChatAdvisorElementList[index].classList.remove('hidden');
      }, 300);

      let q3ChatMessageContainerElement = q3ChatMessageContainerElementList[index];
      let ChatDotContainerElement = createChatDotContainer();
      setTimeout(function () {
        q3ChatMessageContainerElement.parentNode.insertBefore(
          ChatDotContainerElement,
          q3ChatMessageContainerElement,
        );
      }, 500);

      setTimeout(function () {
        ChatDotContainerElement.remove();
        q3ChatMessageContainerElementList[index].classList.remove('hidden');
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

showQ1ChatList();
programCardSplide.mount();
programLessonCardSplide.mount();
