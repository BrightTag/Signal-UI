$(function() {
  var $window = $(window);

  // Navigation Positioning
  var $aside  = $('aside'),
      headerH = 70,
      lastScroll;

  var onScroll = function() {
    var scrollTop = $window.scrollTop();

    if(scrollTop < 0) {
      $aside.css('top', headerH);
    }
    else if(scrollTop < headerH) {
      $aside.css('top', headerH - scrollTop);
    }
    else {
      $aside.css('top', 0);
    }
  };

  $window.scroll(onScroll);
  onScroll();

  // Navigation Sizing
  var asideHeight = $aside.height();

  var onResize = function() {
    $aside.outerHeight($window.height());
  };

  $window.resize(onResize);
  onResize();

  // Active Link Selection
  var path        = window.location.pathname,
      $headings   = $('h2[id]'),
      $asideLinks = $('aside a');

  if(path === '/') {
    var onScroll = function() {
      // Get the current heading
      var hash,
          scrollTop = $window.scrollTop();

      $headings.each(function() {
        var $this = $(this),
            top   = $this.position().top;

        if(scrollTop > top) {
          hash = $(this).attr('id');
        }
      });

      // Highlight the link
      $asideLinks.removeClass('active');
      $('aside a[href="#'+hash+'"]').addClass('active');
    };

    $window.scroll(onScroll);

    onScroll();
  }
  else {
    var regex = new RegExp('^[^#].*'+path+'?$');

    $('aside a').each(function() {
      var $this = $(this),
          href  = $this.attr('href');

      if(regex.test(href)) {
        $this.addClass('active');
      }
    });
  }
});
