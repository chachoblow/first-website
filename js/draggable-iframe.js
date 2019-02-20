$(document).on('ready', function(){
  $('#draggable1,#draggable2,#draggable3,#draggable4,#draggable5').draggable({
     start: function(){
        // Temporarily disable mouse events for IFRAME for smooth dragging
        $('#draggable1 iframe').css('pointer-events', 'none');
        $('#draggable2 iframe').css('pointer-events', 'none');
        $('#draggable3 iframe').css('pointer-events', 'none');
        $('#draggable4 iframe').css('pointer-events', 'none');
        $('#draggable5 iframe').css('pointer-events', 'none');
        $('#draggable6 iframe').css('pointer-events', 'none');
     },
     stop: function(){
        // Re-enable mouse events for IFRAME
        $('#draggable1 iframe').css('pointer-events', 'auto');
        $('#draggable2 iframe').css('pointer-events', 'auto');
        $('#draggable3 iframe').css('pointer-events', 'auto');
        $('#draggable4 iframe').css('pointer-events', 'auto');
        $('#draggable5 iframe').css('pointer-events', 'auto');
        $('#draggable6 iframe').css('pointer-events', 'auto');
     }
   });

   $('#dragzone div').mousedown(function() {
      $(this).addClass('top').removeClass('bottom');
      $(this).siblings().removeClass('top').addClass('bottom');
      $(this).css("z-index", a++);
   });
});
