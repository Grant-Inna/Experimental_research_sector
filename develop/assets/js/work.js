$(document).ready(function () {
   /* читать о продукте */
   
   if ($('.product__holder').length > 0) {
      
      let $element__more = $('.trigger'),
          $hide = $('.hidden'),
          $arrow = $('.trigger__icon');
      
      $element__more.on('click', openAnswer);
      
      function openAnswer() {
         let parent = $(this).closest('.product__holder');
         
         if (!parent.hasClass('open')) {
            
            parent.find($hide).slideDown(400); // ради чего всё затевалось - показать скрытое
            $('.product__holder').removeClass('open');
            parent.find($arrow).addClass('rotate-sm');
            
            parent.addClass('open');
            
         } else {
            parent.find($hide).slideUp(400);
            parent.removeClass('open');
            parent.find($arrow).removeClass('rotate-sm');
         }
      }
      
   }
   
   /* плавный скрол */
   
   if ($('#totop').length > 0) {
    
      $('#totop').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 600); // плавно переходим наверх
      });
      
   }


});
