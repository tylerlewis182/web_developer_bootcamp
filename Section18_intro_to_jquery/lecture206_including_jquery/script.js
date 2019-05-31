// jquery example

// when a user clicks the button with id 'trigger'
$('#trigger').click(function()
{
  // change the body's background to yellow
  $('body').css("background", "yellow");

  // fade out all imgs over 3 seconds
  $('img').fadeOut(3000, function()
  {
    // remove imgs from page when fadeOut is done
    $(this).remove();
  });
});
