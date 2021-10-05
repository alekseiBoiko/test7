// CART FUNCTIONS

function keyPress() {
    var count = $('.input__quantity');
    count.keypress(function () {
      this.value = this.value.replace(/\D/g, '');
      basketTotal();
    });
    count.keyup(function () {
      this.value = this.value.replace(/\D/g, '');
      basketTotal();
    });
  }

  function basketTotal() {
    cart = $('.table_cart tbody');
    (total = $('.table_calculation .cart__subtotal')), (total_value = 0);
    (grandTotal = $('.table_calculation .cart__total')), (grandTotal_value = 0);
    cart.find('tr').each(function () {
      var cur = $(this),
        price = parseFloat(cur.find('.table-cell_price-per-unit').text()), // цена
        count = cur.find('.input__quantity').val(), // количество
        // packing = $('.packing'),
        // packege = count * 5 + ' уп.',
        sum = cur.find('.table-row__total-price'), // стоимость
        sum_value = price * count;
        sum.text('$'+sum_value);
        total_value += sum_value;
        // console.log(total_value);
        //   packing.html(packege);
    });
    total.html('$'+total_value);
    grandTotal.html('$'+(total_value-50));
  }

  function deleteRow(e) {
    // cart = $('.table_cart tbody');
    del = $('.btn-product-item_del'); // .table_cart tbody 
    // удаляем строку в корзине
    del.on('click', function (e) {
      e.preventDefault();
      var cur = $(this);
      cur.parents('tr').fadeOut();
      setTimeout(function () {
        cur.parents('tr').remove();
        basketTotal();
      }, 400);
    });
  }


$(function(){
    basketTotal();
    keyPress();
    deleteRow();
})
//   END CART
