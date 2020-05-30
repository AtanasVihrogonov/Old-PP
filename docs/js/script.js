const portfolioData = [ 
  {
    id: "1",
    projectName: 'Project',
    projectType: 'Front-End',
    projectDescription: 'Description',
    projectImageURL: '/img/projects/rsz_lighthouse.jpg',
    projectliveURL: 'https://www.google.com/',
    projectSourceCodeURL: 'https://github.com/',
  },
  {
    id: "2",
    projectName: 'roject',
    projectType: 'Front-End',
    projectDescription: 'description',
    projectImageURL: '/img/projects/rsz_lighthouse.jpg',
    projectliveURL: 'https://www.google.com/',
    projectSourceCodeURL: 'https://github.com/',
  },
  {
    id: "3",
    projectName: 'project-name',
    projectType: 'Front-End',
    projectDescription: 'description',
    projectImageURL: '/img/projects/rsz_lighthouse.jpg',
    projectliveURL: 'https://www.google.com/',
    projectSourceCodeURL: 'https://github.com/',
  },
  {
    id: "4",
    projectName: 'project-name',
    projectType: 'Front-End',
    projectDescription: 'description',
    projectImageURL: '/img/projects/rsz_lighthouse.jpg',
    projectliveURL: 'https://www.google.com/',
    projectSourceCodeURL: 'https://github.com/',
  },
  {
    id: "5",
    projectName: 'project-name',
    projectType: 'Front-End',
    projectDescription: 'description',
    projectImageURL: '/img/projects/rsz_lighthouse.jpg',
    projectliveURL: 'https://www.google.com/',
    projectSourceCodeURL: 'https://github.com/',
  },
  {
    id: "6",
    projectName: 'project-name',
    projectType: 'Front-End',
    projectDescription: 'description',
    projectImageURL: '/img/projects/rsz_lighthouse.jpg',
    projectliveURL: 'https://www.google.com/',
    projectSourceCodeURL: 'https://github.com/',
  }
];

const closeModal = () => {
  const body = document.querySelector('body')
  const modal =  document.querySelector('.modal');
  body.removeChild(modal)
}


const onClickPortfolioItem = event => {
 
  const body = document.querySelector('body');
  const overlayElem = event.target.closest('.overlay');
  const clickedProjectData = portfolioData.find(item => item.id == overlayElem.id);
  const modal = document.createElement("div");
  modal.setAttribute('class', 'modal');
  
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
          <a class="effect" href="${clickedProjectData.projectSourceCodeURL}">source code</a>
          <i class="fas fa-angle-right"></i>
        </span>
      </div>
      <div class="popup-buttons">
        <button onclick='window.location.href="${clickedProjectData.projectliveURL}"' class="btn btn-view">View</button>
        <button id="closeModalButton" class="btn btn-dismiss">Close</button>         
      </div>
    </div>
  `;
  modal.innerHTML = template;
  body.appendChild(modal);
  const closeModalButton = document.querySelector('#closeModalButton');
  closeModalButton.addEventListener('click', closeModal);
}

const onPageLoad = () => {
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

window.addEventListener('DOMContentLoaded', onPageLoad);
