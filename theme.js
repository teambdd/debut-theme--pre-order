$(".single-option-selector").change(function () {
  var teks = "";
  $(".single-option-selector option:selected").each(function() {
    teks += $(this).attr('id');
  });
  $('.pre-order-teks').text(teks);
  $('.product-form__cart-submit').text(teks);
}).change();
