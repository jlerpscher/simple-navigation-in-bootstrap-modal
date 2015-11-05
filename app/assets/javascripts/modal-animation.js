function animateModal() {
  $('.modal-content').addClass('flipInX');
  $('.modal-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('flipInX');
  });
}
