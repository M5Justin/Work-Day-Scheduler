$(function wrap() {

 
  var saveButton = $('.saveBtn');
  var currentTime = dayjs().hour();
  var currDate = $('#today');
  currDate.text(new Date());
  
  // when the user types then saves, data is saved in local storage
  $(saveButton).click(function() {
    var textInput = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, textInput);
  })
  
  
  // changes the background colors

  $('.description').each(function(){
    var hourBlock = parseInt($(this).parent().attr('id').replace('hour-', ''));
    if (hourBlock < currentTime){
    $(this).parent().addClass('past')
  } else if(hourBlock === currentTime) {
    $(this).parent().addClass('present')
  } else {
    $(this).addClass('future');
  }
  
  // this calls back the value saved into local storage and keeps it in the text area, even after
  // the page is refreshed
  var text = localStorage.getItem($(this).parent().attr('id'));
  $(this).val(text);
});
})