
var cart = $('#side-cart');
var totalDisplay = $("#totalDisplay");

var items = [{ id: 1, title: 'Loza Tibs', price: '$14.99', description: 'Tender thin sliced beef stir fried with onions, green pepper and tomatoes and special house seasonings.', picture: 'images/tibs.jpg', quantity: 1 },
{ id: 2, title: 'Awaze Tibs', price: '$15.99', description: 'Tender beef slices cooked in spicy berbere sauce with onion, jalapeno pepper and Clarified spiced butter.', picture: 'images/awaze_tibs.jpg', quantity: 1 },
{ id: 3, title: 'Kitfo', price: '$15.99', description: 'Freshly raw minced extra lean beef mixed with seasoned clarified butter and mitmita', picture: 'images/kitfo.jpg', quantity: 1 },
{ id: 4, title: 'Gomen Be-siga', price: '$15.99', description: 'Chunks of beef and collard greens slow cooked and seasoned with clarified butter.', picture: 'images/Gomen-Besiga.jpg', quantity: 1 },
{ id: 5, title: 'Tibs-Firfir', price: '$16.99', description: 'Injera mixed into spicy berber base sauce sautéed in with beef tibs and clarified spiced butter.', picture: 'images/tibs_firfir.jpg', quantity: 1 },
{ id: 6, title: 'Quanta Firfir', price: '$15.99', description: 'Injera tossed in dried beef that is cooked with tomatoes, berbere stew, spiced clarified butter', picture: 'images/quantafirfir.jpg', quantity: 1 },
{ id: 7, title: 'Veggie Combo', price: '$14.99', description: 'Vegan select spicy lentil,split pea stew, cabbage and carrots,collard greens,greenbeans and carrot', picture: 'images/veggie.jpg', quantity: 1 },
{ id: 8, title: 'Special Vegan Pasta', price: '$12.99', description: 'Pasta made with special house fresh tomato sauce and fresh spices. ', picture: 'images/pasta.jpg', quantity: 1 },
{ id: 9, title: 'Sambusa', price: '$1.99', description: 'famous crispy sambusa made with thin flaky dough, and stuffed with lentils, onion, jalapeño & Ethiopian Spices.. ', picture: 'images/sambusas.jpg', quantity: 1 }
];





var lozaTibs = $.grep(items, function (item) {
    return item.title == 'Loza Tibs';


})


/// console.log(lozaTibs[0].price);

$(document).ready(function () {

    function appendCards(items) {
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            $('#menu').append(
                '<div class="card cards  col-3 col-sm-1 mx-3 my-3 h-100">' +
                '<img src="' + item.picture + '" class="card-img-top imgfit img-fluid" alt="...">' +
                '<div class="card-body text-center">' +
                '<h5 class="card-title food-item">' + item.title + '</h5>' +
                '<span class="cart-price fst-italic">' + item.price + '</span>' +
                '<p class="card-text">' + item.description + '</p>' +
                //<button onClick=additem(item)></button>
                //<button id="1232"
                // '<p><button type="button" class="btn btn-dark add-to-cart ">ADD TO CART</button></p>' +
                '<p><button type="button" class="btn btn-dark add-to-cart addMenuItem" id="menu-item-' + item.id + '">ADD TO CART</button></p>' +
                '</div>' +
                '</div>'
            );

            if (i == 5) {
                $('#menu').append(
                    '<h1 class="d-flex justify-content-center textFont mt-3 mb-5">Vegan</h1>'
                )
            }
        }

    }
    ///// maybe if condition to fix picutre repeating in same row need to strart new col
    /// while quantity increases need to increase increment not item replication


    function calculateTotal(item) {
        var price = parseFloat(item.price.replace("$", ""));
        total += (price * item.quantity);
        $("#total-amount").html(total);

    }
    function incrimentDecrimentQuantity(item) {
        $("#plus-btn").click(() => {
              
            //var quantityValBtn = $(".cart-input").val();
        });
    }


    appendCards(items);
    //add listener to each button
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var selector = '#menu-item-' + item.id;
        var total = 0;

        
        (function (item) {
            $(selector).click(() => {
                var foodItemInfToCart = function (item) {
                    $('#cart-img-div').append('<div id="cart-item-'+item.id+'" class="col">' + '<img src="' + item.picture +
                        '"class = "cart-img img-fluid imgSize"> <span id="cart-item-title">' + item.title + '</span>' +
                        '<span id ="quantity-btns"> <button id="minus-btn">-</button> <input type="text" class="cart-input text-center" value="1">' +
                        ' <button id="plus-btn">+</button></span>' + '<span id="food-tem-price">+' + item.price + '<button class="cls-bttn w-bolder ">X</button></span>')
                };

                var removeItem = function (item) {
                    $('.cls-bttn').click(() => {
                        $('#cart-img-div').remove();
                    });
                    
                }
                incrimentDecrimentQuantity(item);

                removeItem(item);
                foodItemInfToCart(item);
                calculateTotal(item);



            });
        })(item);

    }


});



