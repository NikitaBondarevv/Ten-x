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
})
