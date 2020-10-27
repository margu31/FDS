var section = $('.board section');
// $대신 jQuery() 라고 쓸수 있음 
var tab = $('.board .tab a');
var item = $('.board li');

item.addClass('icon-dot-circled');

tab.click(function (e) {
  e.preventDefault();
  section.removeClass('is-active');
  $(this).parent().parent().addClass('is-active');
});