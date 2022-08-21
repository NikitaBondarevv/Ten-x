(function () {
  const portfolio = document.querySelector('.portfolio')
  const portfolioUl = portfolio.querySelector('.portfolio ul');
  const servicesUl = document.querySelector('.services ul');
  const classClickedElement = 'clicked-element';
  const classHiddenButton = 'hidden-button';
  const classActiveButton = '.active-button';
  const classActive = 'active';
  let currentActiveElement;

  portfolioUl.addEventListener('click', ({ target }) => {
    if (target.tagName !== 'FIGURE') return;

    portfolio.querySelectorAll('figure').forEach(element => element.classList.remove(classActive));
    portfolio.querySelectorAll('li').forEach(element => element.classList.remove(classClickedElement));
    portfolio.querySelectorAll('.button').forEach(element => element.classList.remove(classHiddenButton))
    portfolio.querySelectorAll(classActiveButton).forEach(element => element.classList.add(classHiddenButton))

    target.classList.add(classActive);
    target.parentNode.classList.add(classClickedElement);
    target.parentNode.querySelectorAll('a')[1].classList.add(classHiddenButton)
    target.parentNode.querySelector(classActiveButton).classList.remove(classHiddenButton)
  });

  servicesUl.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'LI') return;

  if (currentActiveElement === target) {
    currentActiveElement.classList.remove(classActive);
    currentActiveElement = undefined;

    return;
  }

  if (currentActiveElement) {
    currentActiveElement.classList.remove(classActive);
  }

  currentActiveElement = target;
  target.classList.add(classActive);
  });
})()