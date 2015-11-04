function animateModal() {
  $('.modal-content').addClass('swing');
  $('.modal-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('swing');
  });
}
