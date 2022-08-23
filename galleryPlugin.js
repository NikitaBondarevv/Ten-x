const animationPanding = () => {
  const currentPaging = $('.pointer.active');
  const currentPagingIndex = $('.pointer.active').index();
  const nextPagingIndex = currentPagingIndex + 1;
  const nextPaging = $('.pointer').eq(nextPagingIndex);

  currentPaging.removeClass('active');

  if (nextPagingIndex === ($('.pointer:last').index() + 1)) {
    $('.pointer').eq(0).addClass('active');
  } else {
    nextPaging.addClass('active')
  }
}

$('.button-gallery').click(() => {
  const currentImage = $('.img.active');
  const currentImageIndex = $('.img.active').index();
  const nextImageIndex = currentImageIndex + 1;
  const nextImage = $('.img').eq(nextImageIndex);

  currentImage.fadeOut(200);
  currentImage.removeClass('active');

  if (nextImageIndex === ($('.img:last').index() + 1)) {
    $('.img').eq(0).fadeIn(1500);
    $('.img').eq(0).addClass('active');
  } else {
    nextImage.fadeIn(1500);
    nextImage.addClass('active')
  }

  animationPanding();
});

$('.gallery .paging').click((e) => {
  if (e.target.tagName !== 'LI') return;

  const target = $(e.target);
  const currentPointer = $('.gallery .pointer.active');
  const pointerIndex = $('.gallery .pointer').index(target);
  const currentImage = $('.img.active');
  const nextImage = $('.img').eq(pointerIndex);

  currentPointer.removeClass('active');
  target.addClass('active');

  if (currentPointer !== currentImage) {
    currentImage.fadeOut(200);
    currentImage.removeClass('active');
    nextImage.fadeIn(1500);
    nextImage.addClass('active');
  }
});
