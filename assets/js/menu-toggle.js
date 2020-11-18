$('.toggle').click(function(e) {

  var duration = 180;
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
    $this.next().removeClass('show');
    $this.next().slideUp(duration);
  } else {
    $this.parent().parent().find('li .inner').removeClass('show');
    $this.parent().parent().find('li .inner').slideUp(duration);
    $this.next().toggleClass('show');
    $this.next().slideToggle(duration);
  }

});