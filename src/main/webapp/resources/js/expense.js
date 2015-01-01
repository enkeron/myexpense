
getExpensePage = function () {
    var allProducts = [];

    getAllProducts(function (data) {
       allProducts = data;

    }, function (error) {
    });


    loadProducts();


};

function showSpinner(selector) {
    $(selector).removeClass('invisible');
}

function hideSpinner(selector) {
    $(selector).addClass('invisible');
}

var fridgeProducts = [];

loadProducts = function () {
    showSpinner('#products-loader');
    getFridgeProducts(function (products) {
        populateProductTable(products);
        fridgeProducts = products;
        hideSpinner('#products-loader');
    }, function (error) {
        hideSpinner('#products-loader');
    });
};

deleteProduct = function (elementId) {
    showSpinner('#products-loader');
    deleteProductFromFridge(elementId, function (data) {
        loadProducts();
        hideSpinner('#products-loader');
    }, function (error) {
        hideSpinner('#products-loader');
    })
};

populateProductTable = function (products) {
    $('#products > tbody > tr').remove();
    $(products).each(function (index) {
        var row = $('<tr>' +
        '<td>' + products[index].product.category.name + '</td>' +
        '<td>' + products[index].product.name + '</td>' +
        '<td>' + products[index].volume + '</td>' +
        '<td>' + products[index].product.energyValue + '</td>' +
        '<td>' + products[index].expiryDate + '</td>' +
        '<td><span class="glyphicon glyphicon-minus" onclick="deleteProduct(' + products[index].elementId + ')"></span></td>' +
        '</tr>');
        $('#products > tbody').append(row);
    });
};

