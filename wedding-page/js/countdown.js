$(function () {
    /* =========================================
        COUNTDOWN 4
     ========================================= */
  function get15dayFromNow() {
    return new Date(new Date("2021-10-02T14:30:00").valueOf());
  }

  $('#clock-c').countdown(get15dayFromNow(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 text-center fancy-font-title display-3 d-none d-sm-block" style="color: #fefefa">%D</span><span class="h1 fancy-font-title display-3 d-none d-sm-block" style="color: #fefefa"> Day%!d Left</span>'
      + '<span class="h2 text-center fancy-font-title d-xs-block d-sm-none" style="color: #fefefa">%D</span><span class="h2 fancy-font-title d-xs-block d-sm-none" style="color: #fefefa"> Day%!d Left</span>'
      // + '<span class="h1 fancy-font-title">%H</span><span class="fancy-font-title">Hr</span>'
      // + '<span class="h1 fancy-font-title">%M</span><span class="fancy-font-title">Min</span>'
      // + '<span class="h1 fancy-font-title">%S</span><span class="fancy-font-title">Sec</span>'
      ));
  });
})