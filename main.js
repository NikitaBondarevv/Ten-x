(function () {
  const portfolio = document.querySelector('.portfolio')
  const portfolioUl = portfolio.querySelector('.portfolio ul');
  const servicesUl = document.querySelector('.services ul');
  const classClickedElement = 'clicked-element';
  const classHiddenButton = 'hidden-button';
  const classActiveButton = '.active-button';
  const classActive = 'active';
  const classActiveTwo = '.active';
  const classButtonGalleryHidden = '.button-gallery-hidden';
  const images = document.getElementById('images');
  let currentActiveElement;

  document.querySelector('.button-gallery').addEventListener('click', () => {
    if (images.querySelector(classActiveTwo).nextElementSibling === null) {
      return;
    }

    document.querySelector(classButtonGalleryHidden).classList.add('show-button');
    images.querySelector(classActiveTwo).nextElementSibling.classList.add(classActive);
    images.querySelector(classActiveTwo).classList.remove(classActive);
  });

  document.querySelector(classButtonGalleryHidden).addEventListener('click', () => {
    if (images.querySelectorAll('li')[1].classList.contains(classActive) === true) {
      document.querySelector(classButtonGalleryHidden).classList.remove('show-button');
    }

    if (images.querySelector(classActiveTwo).previousElementSibling === null) {
      return;
    }
      
    images.querySelector(classActiveTwo).previousElementSibling.classList.add(classActive);
      
    if (images.querySelector(classActiveTwo).nextElementSibling.classList.contains(classActive) === true) {
      images.querySelector(classActiveTwo).nextElementSibling.classList.remove(classActive);
    }
      
    images.lastElementChild.classList.remove(classActive);
  });
})();
