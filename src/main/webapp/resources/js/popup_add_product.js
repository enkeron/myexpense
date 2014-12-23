getPopupPage = function (products) {
    var productId;

    initPopup = function (product) {
        $('#addProduct').on('click', function (e) {
            addProduct();
        });

        $('#expiryDate').datepicker({
            format: 'yyyy-mm-dd'
        });

        initAutocomplete(products);

        $('#alert').children().remove();
        $('#addProductPopup').modal('toggle');
    };

    addProduct = function () {
        var product = createProduct(null,
            productId,
            $('#expiryDate').val(),
            $('#volume').val()
        );

        addProductToFridge(product, function () {
            $('#addProductPopup').modal('hide');
            refreshProducts();
        }, function (error) {
            $('#alert').append('<div class="alert alert-danger alert-dismissible fade in" role="alert" id="alert">' +
                '<strong>Błąd!</strong> ' + error + '</div>');
        });
    };

    updateProduct = function (product) {
        var updatedProduct = createProduct(product.elementId,
            product.product.productId,
            $('#expiryDate').val(),
            $('#volume').val()
        );

        updateProductInFridge(updatedProduct, function () {
            $('#addProductPopup').modal('hide');
            refreshProducts();
        }, function (error) {
            $('#alert').append('<div class="alert alert-danger alert-dismissible fade in" role="alert" id="alert">' +
                '<strong>Błąd!</strong> ' + error + '</div>');
        });
    };

    refreshProducts = function () {
        loadProducts();
    };

    initAutocomplete = function (products) {
        $('#product').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'products',
            displayKey: 'name',
            source: function (query, process) {
                var results = $.grep(products, function (product) {
                    return (product.name.toLowerCase().indexOf(query) >= 0);
                });
                process(results);
            }
        }).on('typeahead:selected', function (e, product) {
            productId = product.productId;
        });
    };

    createProduct = function (elementId, productId, expiryDate, volume) {
        return {
            product: {
                productId: productId
            },
            volume: parseInt(volume, 10),
            expiryDate: expiryDate,
            elementId : elementId
        };
    };

    initPopup();
};
