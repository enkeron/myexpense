/**
 * Created by enkeron on 30.12.14.
 */

var rootUrl = "rest/expense/list";

getExpensePage = function () {
    var allProducts = [];

    $('#addPopup').click(function (e) {
        //$('#popup').load('/pages/addExpense.html', function () {
        console.log('test');
        $('#addExpensePopup').modal('toggle');
        //});
        //hideSpinner('#todayProduct-loader');
    });

    $('#add').click(function (e) {
        console.log('test');

        $('#addProductPopup').modal('toggle');
        //showSpinner('#todayProduct-loader');
    });

    //showSpinner('#todayProduct-loader');
    hideSpinner('#todayProduct-loader');
    console.log('in getExpenseMethod');
    //loadProducts();

    //findAll();
    //
    //getAllExpense(renderList(list));
    getAllExpense(function(list) {
        showSpinner('#todayProduct-loader');
        console.log('In getAllExpense');
        renderList(list);

        hideSpinner('#todayProduct-loader');
    });









};

function renderList(data) {
// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
    console.log('in renderList');
    var list = data == null ? [] : (data instanceof Array ? data : [data]);
    $('#products > tbody > tr').remove();
    $.each(list, function(index, expense) {
        //console.log(expense.amount);
        var row = $('<tr>'+
        '<td>' + expense.expDate + '</td>' +
        '<td> '+ expense.amount + '</td>' +
        '<td>' + expense.expCatId +'</td>' +
        '<td>' + expense.expNote +'</td>' +
            //'<td><span class="glyphicon glyphicon-minus" onclick="deleteProduct(' + expense.expId + ')"></span></td>' +
        '<td><div class="hover-btn"> ' +
        '<button type="button" class="close" data-dismiss="alert" onclick="deleteProduct(' + expense.expId + ')"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
        '</div></td>' +
        '</tr>');
        $('#products > tbody').append(row);

    });
}

//function showAlert() {
//    $("#glyphicons1").addClass('invisible');
//}
//
//window.setTimeout(function () {
//    showAlert();
//}, 3000);

function findAll() {
    showSpinner('#todayProduct-loader');
    $.ajax({
        type: 'GET',
        url: rootUrl,
        dataType: "json", // data type of response
        success: renderList
    });
}

function showSpinner(selector) {
    $(selector).removeClass('invisible');
}

function hideSpinner(selector) {
    $(selector).addClass('invisible');
}

var fridgeProducts = [];

loadProducts = function () {
    showSpinner('#todayProduct-loader');
    getAllExpense(function (products) {
        console.log('before render');
        renderList(products);
        //populateProductTable(products);
        //fridgeProducts = products;
        hideSpinner('#todayProduct-loader');
    }, function (error) {
        hideSpinner('#todayProduct-loader');
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
        '<td>' + products[index].expId + '</td>' +
        '<td>' + products[index].amount + '</td>' +

        '<td><span class="glyphicon glyphicon-minus" onclick="deleteProduct(' + products[index].expId + ')"></span></td>' +
        '</tr>');
        $('#products > tbody').append(row);
    });
};

