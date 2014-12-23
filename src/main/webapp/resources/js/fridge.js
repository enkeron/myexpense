getFridgePage = function () {
    var allProducts = [];

    showSpinner('#todayProduct-loader');
    getTodayProduct(function (todayProduct) {
        hideSpinner('#todayProduct-loader');
        $('#todayProductValue').text(todayProduct.product.name);
    }, function (error) {
        hideSpinner('#todayProduct-loader');
    });

    showSpinner('#nextDepartureDate-loader');
    getNextDepartureDate(function (nextDepartureDate) {
        hideSpinner('#nextDepartureDate-loader');
        $('#nextDepartureDateValue').text(nextDepartureDate.date);
    }, function (error) {
        hideSpinner('#nextDepartureDate-loader');
    });

    $('#add').prop('disabled', true);
    $('#add').click(function (e) {
        $('#popup').load('pages/popupAddProduct.html', function () {
            getPopupPage(allProducts);
        });
    });

    $('#add_ean').prop('disabled', true);
    $('#add_ean').click(function (e) {
        $('#popup').load('subpages/popupAddProductEan13.html', function () {
            getPopupPageEan13(allProducts);
        });
    });

    $('#clear').click(function (e) {
        showSpinner('#products-loader');
        emptyFridge(function (products) {
            populateProductTable(products);
            hideSpinner('#products-loader');
        }, function (error) {
            hideSpinner('#products-loader');
        });
    });

    loadProducts();

    getAllProducts(function (data) {
        allProducts = data;
        $('#add').prop('disabled', false);
        $('#add_ean').prop('disabled', false);
    }, function (error) {
    });
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
