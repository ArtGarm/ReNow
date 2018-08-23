$(document).ready(function(){

      $('.slicker').slick({
      	
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: '<img src="images/icons/arrow-left.svg" class="arrow-prev">',
        nextArrow: '<img src="images/icons/arrow-right.svg" class="arrow-next">',
  		rtl: true
    });


      $(".txtDate").datepicker({
        showOn: 'button',
        buttonText: 'Show Date',
        buttonImageOnly: true,
        buttonImage: 'images/icons/calendar.svg'
    });

})


