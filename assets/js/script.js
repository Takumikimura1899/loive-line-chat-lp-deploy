/* Q1 */
const chatAButtonElement = document.getElementById('chat-a-button');
const chatBButtonElement = document.getElementById('chat-b-button');

chatAButtonElement.addEventListener('click', () => {
  chatBButtonElement.disabled = true;
  showChatList('chat-list-a');
});

chatBButtonElement.addEventListener('click', () => {
  chatAButtonElement.disabled = true;
  showChatList('chat-list-b');
});

/* Q2 */
const chatA1ButtonElement = document.getElementById('chat-a1-button');
const chatA2ButtonElement = document.getElementById('chat-a2-button');
const chatB1ButtonElement = document.getElementById('chat-b1-button');
const chatB2ButtonElement = document.getElementById('chat-b2-button');

chatA1ButtonElement.addEventListener('click', () => {
  chatA2ButtonElement.disabled = true;
  showChatList('chat-list-a1');
});

chatA2ButtonElement.addEventListener('click', () => {
  chatA1ButtonElement.disabled = true;
  showChatList('chat-list-a2');
});

chatB1ButtonElement.addEventListener('click', () => {
  chatB2ButtonElement.disabled = true;
  showChatList('chat-list-b1');
});

chatB2ButtonElement.addEventListener('click', () => {
  chatB1ButtonElement.disabled = true;
  showChatList('chat-list-b2');
});

/* Q3 */
const chatA11ButtonElement = document.getElementById('chat-a11-button');
const chatA12ButtonElement = document.getElementById('chat-a12-button');
const chatA21ButtonElement = document.getElementById('chat-a21-button');
const chatA22ButtonElement = document.getElementById('chat-a22-button');
const chatB11ButtonElement = document.getElementById('chat-b11-button');
const chatB12ButtonElement = document.getElementById('chat-b12-button');
const chatB21ButtonElement = document.getElementById('chat-b21-button');
const chatB22ButtonElement = document.getElementById('chat-b22-button');
const chatListResultElement = document.getElementById('chat-list-result');
const chatA1TextElement = '<br />汗を流して心身共にリフレッシュしたいあなたには…';
const chatA2TextElement = '<br />しなやかな美しいボディラインを目指すあなたには…';
const chatB1TextElement = '<br />最新エクササイズで健康美を目指すあなたには…';
const chatB2TextElement = '<br />自分史上最高の引き締まったボディライン目指すあなたには…';

chatA11ButtonElement.addEventListener('click', () => {
  chatA12ButtonElement.disabled = true;
  addChatText(chatA1TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-lolve');
});

chatA12ButtonElement.addEventListener('click', () => {
  chatA12ButtonElement.disabled = true;
  addChatText(chatA1TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-lolve');
});

chatA21ButtonElement.addEventListener('click', () => {
  chatA22ButtonElement.disabled = true;
  addChatText(chatA2TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-pilatesk');
});

chatA22ButtonElement.addEventListener('click', () => {
  chatA21ButtonElement.disabled = true;
  addChatText(chatA2TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-pilatesk');
});

chatB11ButtonElement.addEventListener('click', () => {
  chatB12ButtonElement.disabled = true;
  addChatText(chatB1TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-surffit');
});

chatB12ButtonElement.addEventListener('click', () => {
  chatB11ButtonElement.disabled = true;
  addChatText(chatB1TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-surffit');
});

chatB21ButtonElement.addEventListener('click', () => {
  chatB22ButtonElement.disabled = true;
  addChatText(chatB2TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-radysgym');
});

chatB22ButtonElement.addEventListener('click', () => {
  chatB21ButtonElement.disabled = true;
  addChatText(chatB2TextElement);
  showChatList('chat-list-result');
  showChatResult('chat-result-radysgym');
});

/* function */
function addChatText(targetText) {
  const chatThanksAnswerElement = document.getElementById('chat-thanks-answer');
  chatThanksAnswerElement.innerHTML += targetText;
}

function showChatList(targetId) {
  const targetElement = document.getElementById(targetId);
  const chatListItemElementList = targetElement.querySelectorAll('.chat-list-item');
  const chatAdvisorElementList = targetElement.querySelectorAll('.chat-advisor');
  const chatMessageContainerElementList = targetElement.querySelectorAll('.chat-message-container');

  targetElement.classList.remove('hidden');
  chatListItemElementList.forEach((listItem, index) => {
    setTimeout(() => {
      setTimeout(() => {
        listItem.classList.remove('hidden');
        chatAdvisorElementList[index].classList.remove('hidden');
        scrollToLatestChat(chatAdvisorElementList[index]);
      }, 300);

      let chatMessageContainerElement = chatMessageContainerElementList[index];
      let chatDotContainerElement = createChatDotContainer();
      setTimeout(() => {
        chatMessageContainerElement.parentNode.insertBefore(
          chatDotContainerElement,
          chatMessageContainerElement,
        );
      }, 500);

      setTimeout(() => {
        chatDotContainerElement.remove();
        chatMessageContainerElementList[index].classList.remove('hidden');
        scrollToLatestChat(chatMessageContainerElementList[index]);
      }, 1000);
    }, index * 1500);
  });
}

function scrollToLatestChat(targetElement) {
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

function showChatResult(targetId) {
  const targetElement = document.getElementById(targetId);
  const resultElement = targetElement.querySelector('.chat-result-wrapper');
  const leadSectionWrapperElement = document.querySelector('.lead-section-wrapper');
  const footerElement = document.querySelector('footer');
  setTimeout(() => {
    leadSectionWrapperElement.classList.remove('hidden');
    resultElement.classList.remove('hidden');
    footerElement.classList.remove('hidden');
    initializeSplide(targetId);
    initializeCTA(targetId);
  }, 3000);
}

function initializeCTA(targetId) {
  const targetElement = document.getElementById(targetId);
  const fixedButtonContainerElement = targetElement.querySelector('.fixed-button-container');
  const startElement = targetElement.querySelector('.what-header');
  const endElement = targetElement.querySelector('.detail-banner');

  window.addEventListener('scroll', () => {
    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    const inView = startRect.top < window.innerHeight && endRect.bottom > window.innerHeight;
    console.log(endRect.bottom);
    if (inView) {
      fixedButtonContainerElement.classList.remove('hidden');
    } else {
      fixedButtonContainerElement.classList.add('hidden');
    }
  });
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

showChatList('chat-list-start');
