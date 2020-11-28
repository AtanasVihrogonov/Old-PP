// Portfolio data
const portfolioData = [
  {
    id: '1',
    projectName: 'Personal Portfolio',
    projectType: 'Front-End',
    projectDescription:
      'This is my Portfolio Website. It does not only showcase my previous samples of work but also itself is an example of what I can do!',
    projectImageURL: './img/projects/personal-portfolio.jpg',
    projectliveURL: 'https://avihrogonov.co.uk/',
    projectSourceCodeURL:
      'https://github.com/AtanasVihrogonov/Personal-Portfolio',
  },
  {
    id: '2',
    projectName: 'VStore',
    projectType: 'Full-Stack',
    projectDescription:
      'Fully-function website using Vanilla JavaScript, HTML5 and CSS3 in frontend and Node.js, MongoDB in the backend.',
    projectImageURL: './img/projects/VStore.jpg',
    projectliveURL: 'https://vstoreapp.herokuapp.com/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/VStore',
  },
  {
    id: '3',
    projectName: 'Vanilla JS Projects',
    projectType: 'Front-End',
    projectDescription:
      'Mini projects built with HTML5, CSS & JavaScript. No frameworks or libraries',
    projectImageURL: './img/projects/vanilajs.png',
    projectliveURL: 'https://dreamy-pare-efdd98.netlify.app/',
    projectSourceCodeURL:
      'https://github.com/AtanasVihrogonov/vanilawebprojects',
  },
  {
    id: '4',
    projectName: 'AvistOne',
    projectType: 'Front-End',
    projectDescription:
      'AvistOne is a fake cloud hosting platform website created with custom CSS like Bootstrap.',
    projectImageURL: './img/projects/AvistOne.jpg',
    projectliveURL: 'https://distracted-golick-6ede48.netlify.app/index.html',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/AvistOne',
  },
  {
    id: '5',
    projectName: 'Fork Recipes',
    projectType: 'Front-End',
    projectDescription:
      'Recipe searching app. A starter pack to build JavaScript applications. It uses webpack, Babel and webpack-dev-server to compile and serve. The data come from own API based on the food2fork API, which is simply called forkify-api.',
    projectImageURL: './img/projects/fork-recipes.jpg',
    projectliveURL: 'https://atanasvihrogonov.github.io/Fork-recipes/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/Fork-recipes',
  },
  {
    id: '6',
    projectName: 'Budget App',
    projectType: 'Front-End',
    projectDescription:
      'Budget app with javascript module pattern using few different controller.',
    projectImageURL: './img/projects/budget-app.png',
    projectliveURL: 'https://atanasvihrogonov.github.io/Budget-App/',
    projectSourceCodeURL: 'https://github.com/AtanasVihrogonov/Budget-App',
  },
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
    <div class="popup-modal ">
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
  const submitButtun = document.querySelector('#submit-button');
  submitButtun.addEventListener("click", (e) => {
    const form =  document.querySelector('#gform')
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    // Show alert 
    if(name && email && message){
      setTimeout(function(){
        //Reset form
        document.querySelector('.alert').style.display = 'block';
        form.reset();
      });
      // Hide alert after 4s
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      }, 4000);
    }
  });
}

window.addEventListener('DOMContentLoaded', onPageLoad);

