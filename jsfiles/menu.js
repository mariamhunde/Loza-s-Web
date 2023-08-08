////// FOOD ITEMS

var items = [{ id: 1, title: 'Loza Tibs', price: '$14.99', description: 'Tender thin sliced beef stir fried with onions, green pepper and tomatoes and seasonings.', picture: 'images/tibs.jpg', quantity: 1 },
{ id: 2, title: 'Awaze Tibs', price: '$15.99', description: 'Tender beef slices cooked in spicy berbere sauce with onion, jalapeno pepper and Clarified spiced butter.', picture: 'images/awaze_tibs.jpg', quantity: 1 },
{ id: 3, title: 'Kitfo', price: '$15.99', description: 'Freshly raw minced extra lean beef mixed with seasoned clarified butter and mitmita', picture: 'images/kitfo.jpg', quantity: 1 },
{ id: 4, title: 'Gomen Be-siga', price: '$15.99', description: 'Chunks of beef and collard greens slow cooked and seasoned with clarified butter.', picture: 'images/Gomen-Besiga.jpg', quantity: 1 },
{ id: 5, title: 'Tibs-Firfir', price: '$16.99', description: 'Injera mixed into spicy berber base sauce sautéed in with beef tibs and clarified spiced butter.', picture: 'images/tibs_firfir.jpg', quantity: 1 },
{ id: 6, title: 'Quanta Firfir', price: '$15.99', description: 'Injera tossed in dried beef that is cooked with tomatoes, berbere stew, spiced clarified butter', picture: 'images/quantafirfir.jpg', quantity: 1 },
{ id: 7, title: 'Veggie Combo', price: '$14.99', description: 'Vegan select spicy lentil,split pea stew, cabbage and carrots,collard greens,greenbeans and carrot', picture: 'images/veggie.jpg', quantity: 1 },
{ id: 8, title: 'Vegan Pasta', price: '$12.99', description: 'Pasta made with special house fresh tomato sauce and fresh spices. ', picture: 'images/pasta.jpg', quantity: 1 },
{ id: 9, title: 'Sambusa', price: '$1.99', description: 'Crispy sambusa made with thin flaky dough,stuffed with lentils, onion, jalapeño & Ethiopian Spices. ', picture: 'images/sambusas.jpg', quantity: 1 }
];



$(document).ready(function () {
    /// ADD MENU CARDS
    $('#container').animate({ opacity: 1 }, 500); // need page load transitoin

    function appendCards(items) {
        console.log('appendCards function is called');

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
               //  $('#menu').delay("slow").fadeIn();    

            $('#menu').append(

                '<div class="card cards  col-3 col-sm-1 mx-3 my-3 h-100">' +
                '<img src="' + item.picture + '" class="card-img-top imgfit img-fluid" alt="...">' +
                '<div class="card-body text-center">' +
                '<h5 class="card-title food-item">' + item.title + '</h5>' +
                '<span class="cart-price fst-italic">' + item.price + '</span>' +
                '<p class="card-text">' + item.description + '</p>' +
                '<div class="pb-0"><button type="button" class="btn btn-dark btn-outline-light add-to-cart pb-1 addMenuItem" id="menu-item-' + item.id + '">ADD TO CART</button></div>' +
                '</div>' +
                '</div>'
            );

            if (i == 5) {
                $('#menu').append(
                    '<h1 class="d-flex justify-content-center textFont mt-3 mb-5">Vegan</h1>'
                )
            }
        }

    };


    

    appendCards(items);
    //add listener to each button ---------------------------
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var menuButtonCart = '#menu-item-' + item.id;
        var total = 0;

        // Adding Cart Items-----------------------------

             // pop effect on mouse over card menu items

        $('.cards').mouseover(function() {
            $(this).css({
              'transform': 'scale(1.1)',
              'transition': 'transform 0.2s ease-in-out'
            });
          });
          
          $('.cards').mouseout(function() {
            $(this).css({
              'transform': 'scale(1)',
              'transition': 'transform 0.2s ease-in-out'
            });
          });
          
         
          /// hide cart

          $('.bottom-cart').hide();
        (function (item) {
            $(menuButtonCart).click(() => {
                var itemCartRow = '#checkout-cart-item-row-' + item.id;
                var closeButtonSelector = '#cls-bttn' + item.id;
                var quantityPlusButton = '#plus-quantity-btn' + item.id;
                var quantityInputTextBox = '#cart-input-textbox' + item.id;
                var quantityMinusButton = '#minus-btn' + item.id;
                var quantityBoxValue = 1;
                var previousVal = $(quantityInputTextBox).val();

             /// Bottom card appear
               // $('.bottom-cart').show();
                $('.bottom-cart').delay("slow").fadeIn();    

                function foodItemInfToCart(item) {
                    var itemAlreadyInCart = false;
                    var cartItem = '.cart-item';

                    $(cartItem).each(function () {
                        if ($(this).attr('id') === 'checkout-cart-item-row-' + item.id) {
                            itemAlreadyInCart = true;
                            alert("Item has already been added to cart");

                            return false; /// exit loop if item found
                        }
                    });
                    /// increases item quantity value 
                    if (itemAlreadyInCart) {
                        var quantityInputTextBox = '#cart-input-textbox' + item.id;
                         quantityBoxValue = $(quantityInputTextBox).val();
                    } else {

                        $('#cart-rows-div').append('<div id="checkout-cart-item-row-' + item.id + '" class="col cart-item ' + '">' + '<img src="' + item.picture +
                            '"class = "cart-img img-fluid imgSize"> <span id="cart-item-title" >' + item.title + '</span>' +
                            '<span id ="quantity-btns"> <button id="minus-btn' + item.id +'" class ="minus-btn">-</button> <input type="number" class="cart-input text-center" id="cart-input-textbox' + item.id + '" value="1" min="1" max ="100" readonly>' +
                            ' <button class="plus-btn" id="plus-quantity-btn' + item.id + '">+</button></span>' + '<span id="food-item-price">'
                            + item.price + '</span> <span id ="row-total"></span><span><button id="cls-bttn' + item.id + '" class = cls-bttn  w-bolder  ">X</button></span> <hr>');
                        
                    };
                    calculateSubtotal(item);

                    updateTotal();
                };
                foodItemInfToCart(item);






                //////////////// Remove CART ITEMS(NEED TO ADJUST SO THAT TOTAL RECALCULATES WHEN REMOVED)--------------------------------------------------------------------------------------------
                $(closeButtonSelector).click(() => {
                    $(itemCartRow).remove();
                    updateTotal(item);
                });
                //// PLUS BUTTON INCRIMENT LISTENER-----------------
                $(quantityPlusButton).click(() => {
                    $(quantityInputTextBox).val(++quantityBoxValue);
                    //  changeInputValue(quantityBoxValue);
                    calculateSubtotal(item);
                    updateTotal();
                });

                /// MINUS BUTTON DECRIMENT LISTNER------------------
                $(quantityMinusButton).click(() => {
                    if (quantityBoxValue > 1) {
                        $(quantityInputTextBox).val(--quantityBoxValue);
                        calculateSubtotal(item);
                        updateTotal();
                       /// updateTotal() --- this cal caused every cart item to channge instead of individualy
                       ;
                    }
                });

                calculateSubtotal(item);

                /// CALC SUBTOTAL------------------------------- 
                function calculateSubtotal(item) {
                    var subTotal = 0;
                    //var cartRowTotal ; 
                    var quantityAmt = parseInt(quantityBoxValue);
                    var price = parseFloat(item.price.replace("$", ""));
                    subTotal = (price * quantityAmt);
                    $(itemCartRow).find('#row-total').html('$' + subTotal.toFixed(2));
                    return subTotal.toFixed(2);
                    //  $("#total-amount").html(finalTotal);

                };
                /// UPDATE TOTAL----------------------------- this should update quantity and change total
                function updateItemQuantityAndSubtotal(item) {
                    var quantityInputTextBox = '#cart-input-textbox' + item.id;
                    var quantityBoxValue = $(quantityInputTextBox).val();
                    var subtotal = calculateSubtotal(item);
                    $('#cart-subtotal-' + item.id).text('$' + subtotal);
                };

                ///// this should update the grand total have a counter for grand total
                function updateTotal() {
                    var total = 0;
                    var totalsArray = [];
                    var rowTotalsArray = [];
                    var grandTotal = 0;
               
                    $('.cart-item').each(function () {
                         var rowTotal = parseFloat($(this).find('#row-total').text().replace("$",""));
                        // var quantityVal = parseInt($(quantityInputTextBox).val());
                           
                       
                       totalsArray.push(rowTotal);
                     grandTotal  = totalsArray.reduce(function(a, b) { return a + b; }, 0);
                       
                      

                    })
                   
                 
                    //// need to create if statement so that when cart item is removed TOTAL will stop displaying NaN
                 //   var grandTotal = totalsArray.reduce(function(a, b) { return a + b; }, 0);
                    $('#total-amount').html(grandTotal.toFixed(2));
                    console.log(grandTotal.toFixed(2));
                };

                $(quantityInputTextBox).change(function () {
                    var currentVal = parseInt($(this).val());


                    if ((currentVal) === parseInt(previousVal) + 1) {
                        $(quantityInputTextBox).val(currentVal + 1);
                        
                        // (updateTotal(item, quantityBoxValue));
                        updateItemQuantityAndSubtotal(item);
                        updateTotal();

                    } else if  ((currentVal) === parseInt(previousVal) - 1){
                        $(quantityInputTextBox).val(currentVal - 1);
                        //(updateTotal(item, quantityBoxValue));
                        updateItemQuantityAndSubtotal(item);
                        updateTotal();
                    }
                    previousVal = currentVal;
                });

            });
        })(item);
    }
});



