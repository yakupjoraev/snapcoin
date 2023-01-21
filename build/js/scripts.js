// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


//Toggle theme
const themeBtn = document.querySelector('.js-theme-btn');
themeBtn.addEventListener('click', () => {
  let element = document.body;
  element.classList.toggle('light-mode')
  themeBtn.classList.toggle('light-mode')
})


// Аккордеон
function accordion() {
  const container = document.querySelector('.help')

  if (!container) {
    return null
  }

  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode
      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active')
      } else {
        document
          .querySelectorAll('.accordion__item')
          .forEach(child => child.classList.remove('accordion__item-active'))
        parent.classList.add('accordion__item-active')
      }
    })
  })
}
accordion();

//tabs

function tabs() {
  const container = document.querySelector('.help')

  if (!container) {
    return null
  }

  let tabsSections = document.querySelectorAll('.help__section');
  let sectionElements = document.querySelectorAll('.help__element');

  const sectionOne = document.querySelector('.questions')
  const sectionTwo = document.querySelector('.faq')
  const elementOne = document.querySelector('.element-1')
  const elementTwo = document.querySelector('.element-2')


  sectionOne.addEventListener('click', () => {
    elementOne.classList.add('js-active-element')
    elementTwo.classList.remove('js-active-element')
  })

  sectionTwo.addEventListener('click', () => {
    elementTwo.classList.add('js-active-element')
    elementOne.classList.remove('js-active-element')
  })


  const clearActivesSection = () => {
    tabsSections.forEach(tabsSection => tabsSection.classList.remove('js-active-section'));
  }

  // const clearActiveselement = () => {
  //   sectionElements.forEach(sectionElement => sectionElement.classList.remove('js-active-element'));
  // }

  // const setActiveElement = () => {
  //   clearActiveselement()

  //   sectionElements.forEach(sectionElement => sectionElement.classList.add('js-active-element'));
  // }



  const setActive = (e) => {
    clearActivesSection()
    e.target.classList.add('js-active-section');
  }

  console.log(sectionElements);
  tabsSections.forEach(tabsSection => {
    tabsSection.addEventListener('click', setActive)
  })

}

tabs()

function sliderReviews() {
  const container = document.querySelector('.about')

  if (!container) {
    return null
  }

  let swiper = new Swiper(".reviews__slider-swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".reviews__slider-next",
      prevEl: ".reviews__slider-prev",
    },

    breakpoints: {

      993: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

  });
}

sliderReviews();

function filterSend() {
  const list = document.querySelector('.js-send-filters'),
    items = document.querySelectorAll('.js-send-list'),
    listItems = document.querySelectorAll('.js-send-filter')

  function filter() {
    list.addEventListener('click', event => {
      const targetId = event.target.dataset.id
      const target = event.target

      if (target.classList.contains('js-send-filter')) {
        listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')
      }


      switch (targetId) {
        case 'send-all':
          getItems('js-send-list')
          break
        case 'send-banks':
          getItems(targetId)
          break
        case 'send-cryptocurrency':
          getItems(targetId)
          break
        case 'send-ps':
          getItems(targetId)
          break
      }
    })
  }
  filter()

  function getItems(className) {
    items.forEach(item => {
      if (item.classList.contains(className)) {
        item.style.display = 'grid'
      } else {
        item.style.display = 'none'
      }
    })
  }
}

filterSend();

function filterReceive() {
  const list = document.querySelector('.js-receive-filters'),
    items = document.querySelectorAll('.js-receive-list'),
    listItems = document.querySelectorAll('.js-receive-filter')

  function filter() {
    list.addEventListener('click', event => {
      const targetId = event.target.dataset.id
      const target = event.target

      if (target.classList.contains('js-receive-filter')) {
        listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')
      }


      switch (targetId) {
        case 'receive-all':
          getItems('js-receive-list')
          break
        case 'receive-banks':
          getItems(targetId)
          break
        case 'receive-cryptocurrency':
          getItems(targetId)
          break
        case 'receive-ps':
          getItems(targetId)
          break
      }
    })
  }
  filter()

  function getItems(className) {
    items.forEach(item => {
      if (item.classList.contains(className)) {
        item.style.display = 'grid'
      } else {
        item.style.display = 'none'
      }
    })
  }
}

filterReceive();

function sendSlection() {
  const container = document.querySelector('.send-selection')
  const containerList = document.querySelector('.send-selection ul')

  if (!container) {
    return null
  }

  container.addEventListener('click', () => {
    containerList.classList.toggle('active')
  })
}

sendSlection();

function receiveSlection() {
  const container = document.querySelector('.receive-selection')
  const containerList = document.querySelector('.receive-selection ul')

  if (!container) {
    return null
  }

  container.addEventListener('click', () => {
    containerList.classList.toggle('active')
  })
}

receiveSlection();

function sendSelect() {
  const container = document.querySelector('.send-select')
  const containerList = document.querySelector('.send-select ul')

  if (!container) {
    return null
  }

  container.addEventListener('click', () => {
    containerList.classList.toggle('active')
  })
}

sendSelect();

function receiveSelect() {
  const container = document.querySelector('.receive-select');
  const containerList = document.querySelector('.receive-select ul');

  if (!container) {
    return null
  }

  container.addEventListener('click', () => {
    containerList.classList.toggle('active')
  })
}

receiveSelect();

function chooseSelect() {
  const container = document.querySelector('.calculator');

  if (!container) {
    return null
  }

  const chooseDouble = document.querySelector('.calculator__choose-double');
  const chooseTriple = document.querySelector('.calculator__choose-triple');

  chooseDouble.addEventListener('click', () => {
    chooseDouble.classList.add('active')
    chooseTriple.classList.remove('active')
  })

  chooseTriple.addEventListener('click', () => {
    chooseTriple.classList.add('active')
    chooseDouble.classList.remove('active')
  })
}

chooseSelect()
