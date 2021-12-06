$('.mo_btn').on('click', function () {
  if (!$('.header').hasClass('open_mo')) {
    $('.header').addClass('open_mo');
  } else {
    $('.header').removeClass('open_mo');
  }
});