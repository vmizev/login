      $('.dropdown-toggle').click(function(e) {
        e.preventDefault();
        if ($('.sidebar').hasClass('sidebar-mini')) {
          return false;
        }
        else {
          $('.submenu').slideToggle();
          $('.dropdown-toggle').toggleClass('open');
          $('.submenu').toggleClass('open-menu');
        }
        
      })
         $('.btn-navbar').click(function (){
            $('.submenu.open-menu').css('display','none');
         })

    $('body').click(function (e) {
        if($(e.target).is($('.dropdown-wrapper')) || $(e.target).closest('.dropdown-wrapper').length > 0 ) return;

        var drop = $('.dropmenu'),
            btnDrop = $('.dropdown-wrapper > a');

        drop.hide();
        btnDrop.removeClass('open');
        drop.removeClass('open-menu');
    });

        $('.dropdown-wrapper > a').click(function(e) {
            e.preventDefault();

            var drop = $($(this).attr('href'));
            drop.toggle();
            drop.toggleClass('open');
            drop.toggleClass('open-menu');
        })

       $('.btn-navbar').click(function (){
          
          if ($('.sidebar').hasClass('sidebar-mini')) {
            $('.container-change').addClass('margin-change');
            $('.sidebar').removeClass('sidebar-mini')
          }
          else{
            $('.sidebar').addClass('sidebar-mini');
            $('.container-change').removeClass('margin-change');
          }
        });
        var testResize;
        function getSize(){
            if (testResize && testResize === $(window).width()) return;

          devWidth = $( window ).width();

            if (devWidth <= 1024){

                $('.container-change').removeClass('margin-change');
                $('.sidebar').addClass('sidebar-mini');
                $('.container-change').removeClass('fix-margin');
                $('.sidebar').removeClass('fix-width');
            } else{
               $('.container-change').addClass('margin-change');
               $('.sidebar').removeClass('sidebar-mini');

            }

            testResize = $(window).width();
        }
        getSize();
        $(window).on('resize', getSize);

        