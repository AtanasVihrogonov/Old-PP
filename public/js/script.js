// Portfolio data
const portfolioData = [ 
  {
    id: "1",
    projectName: 'Personal Portfolio',
    projectType: 'Front-End',
    projectDescription: 'This is my Portfolio Website. It does not only showcase my previous samples of work but also itself is an example of what I can do!',
    projectImageURL: './img/projects/personal-portfolio.jpg',
    projectliveURL: 'https://avihrogonov.co.uk/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/Personal-Portfolio',
  },
  {
    id: "2",
    projectName: 'Project Name',
    projectType: 'Front-End',
    projectDescription: 'description',
    projectImageURL: './img/projects/rsz_lighthouse.jpg',
    projectliveURL: 'https://www.google.com/',
    projectSourceCodeURL: 'https://github.com/',
  },
  {
    id: "3",
    projectName: 'Vanilla JS Projects',
    projectType: 'Front-End',
    projectDescription: 'Mini projects built with HTML5, CSS & JavaScript. No frameworks or libraries',
    projectImageURL: './img/projects/vanilajs.png',
    projectliveURL: 'https://dreamy-pare-efdd98.netlify.app/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/vanilawebprojects',
  },
  {
    id: "4",
    projectName: 'Calorie Tracker',
    projectType: 'Front-End',
    projectDescription: 'Simple Tracalorie | Meal & Calorie Tracker',
    projectImageURL: './img/projects/cal.png',
    projectliveURL: 'https://atanasvihrogonov.github.io/Calorie-Tracker/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/Calorie-Tracker',
  },
  {
    id: "5",
    projectName: 'Fork Recipes',
    projectType: 'Front-End',
    projectDescription: 'Recipe searching app. A starter pack to build JavaScript applications. It uses webpack, Babel and webpack-dev-server to compile and serve. The data come from own API based on the food2fork API, which is simply called forkify-api.',
    projectImageURL: './img/projects/fork-recipes.jpg',
    projectliveURL: 'https://atanasvihrogonov.github.io/Fork-recipes/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/Fork-recipes',
  },
  {
    id: "6",
    projectName: 'Budget App',
    projectType: 'Front-End',
    projectDescription: 'Budget app with javascript module pattern using few different controller.',
    projectImageURL: './img/projects/budget-app.png',
    projectliveURL: 'https://atanasvihrogonov.github.io/Budget-App/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/Budget-App',
  }
];

// Button close functionality
const closeModal = () => {
  const body = document.querySelector('body')
  const modal =  document.querySelector('.modal');
  body.removeChild(modal)
}

// Portfolio Item
const onClickPortfolioItem = event => {
 
  const body = document.querySelector('body');
  const overlayElem = event.target.closest('.overlay');
  const clickedProjectData = portfolioData.find(item => item.id == overlayElem.id);
  const modal = document.createElement("div");
  modal.setAttribute('class', 'modal');
  
  // Create modal template
  const template = `
    <div class="popup-modal">
      <div class="media">
        <img src=${clickedProjectData.projectImageURL} alt="" />
      </div>
      <div class="description-box">
        <h4>${clickedProjectData.projectName}</h4>
        <p>
        ${clickedProjectData.projectDescription}
        </p>
        <span class="categories">
          <a class="effect" href="${clickedProjectData.projectSourceCodeURL}" target="_blank">source code</a>
          <i class="fas fa-angle-right"></i>
        </span>
      </div>
      <div class="popup-buttons">
        <a href="${clickedProjectData.projectliveURL}" target="_blank" class="btn btn-view">View</a>
        <button id="closeModalButton" class="btn btn-dismiss">Close</button>         
      </div>
    </div>
  `;
  modal.innerHTML = template;
  body.appendChild(modal);
  const closeModalButton = document.querySelector('#closeModalButton');
  closeModalButton.addEventListener('click', closeModal);
}

const renderPortfolioSectionHandler = () => {
  const portfolioSection = document.querySelector('#portfolio');

  const portfolioContent = portfolioData.map(item => {
    return `
      <div class="portfolio__wrapper-item" data-test="portfolio-item">
        <img src="${item.projectImageURL}" alt="" />
        <div id="${item.id}" class="overlay">
          <div class="portfolio__item-meta">
            <h5>${item.projectName}</h5>
            <p>${item.projectType}</p>
          </div>
          <div class="link-icon">
            <i class="fa fa-plus"></i>
          </div> 
        </div>
      </div>
    `;
  }).join('');

  portfolioSection.innerHTML = portfolioContent;

  const portfolioItem = document.querySelectorAll('[data-test="portfolio-item"]');

  portfolioItem.forEach(item => 
    item.addEventListener('click', onClickPortfolioItem)
  );
}

// Showmap & info
const toogleMapInfoHandler = () => {
  const contact = document.querySelector('.contact');
  const iframe = document.querySelector('.resp-iframe');
  const showMap = document.querySelector('.show-map');
  const showInfo = document.querySelector('.show__info-link');
  showMap.addEventListener('click', (e) => {
    contact.classList.add('active');
    iframe.classList.remove('resp-iframe');
    iframe.classList.add('show-resp-iframe');
  });
  showInfo.addEventListener('click', (e) => {
    contact.classList.remove('active');
    iframe.classList.add('resp-iframe');
    iframe.classList.remove('show-resp-iframe');
  });
 }

const onPageLoad = () => {
  renderPortfolioSectionHandler();
  toogleMapInfoHandler()
}

window.addEventListener('DOMContentLoaded', onPageLoad);

