$(document).ready(function(){
  $('button').click(function(){
    $('#output').html("");
    $('#output').append("<p>Your name is " + $('#name_box').val() + "</p>");
    
    for (var i = 0; i < $('#name_box').val().length; i++){
      var letter = $('#name_box').val().slice(i, i+1).toLowerCase();
      if (letter === "a" || letter === "e" || letter === "f" || letter === "h" || letter === "i" || letter === "l" || letter === "m" || letter === "n" || letter === "o" || letter === "r" || letter === "s" || letter === "x"){
        $('#output').append("<p>Give me an... " + $('#name_box').val().slice(i, i+1).toUpperCase() + "</p>");
      } else {
          $('#output').append("<p>Give me a... " + $('#name_box').val().slice(i, i+1).toUpperCase() + "</p>");
      }                 
    }
    $('#output').append("<p>" + $('#name_box').val() + " is great!</p>");
  });
});
