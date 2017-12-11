'use strict';

$('#text-input').on('change', function(){
  $('#text-input').hide();
  $('#text-input-validation').show();
})

$('.sprite-down-arrow').on('click', function(){
  $('.sprite-down-arrow').hide();
  $('.sprite-up-arrow').show();
  $('#selections').show();
})

$('.sprite-up-arrow').on('click', function(){
  $('.sprite-up-arrow').hide();
  $('.sprite-down-arrow').show();
  $('#selections').hide();
})

$('.sprite-unchecked').on('click', function(){
  $('.sprite-unchecked').hide();
  $('.sprite-checked').show();
})

$('.sprite-checked').on('click', function(){
  $('.sprite-checked').hide();
  $('.sprite-unchecked').show();
})

$('.sprite-radio-unselected').on('click', function(){
  $('.sprite-radio-unselected').hide();
  $('.sprite-radio-selected').show();
})

$('.sprite-radio-selected').on('click', function(){
  $('.sprite-radio-selected').hide();
  $('.sprite-radio-unselected').show();
})

$('#grey').on('click', function(){
  $('#grey').hide();
  $('#black').show();
})

$('#black').on('click', function(){
  $('#black').hide();
  $('#grey').show();
})

$(document).ready(function() {
  $('#text-input-validation').hide();
  $('#selections').hide();
  $('.sprite-up-arrow').hide();
  $('.sprite-checked').hide();
  $('.sprite-radio-selected').hide();
  $('#black').hide();
});
