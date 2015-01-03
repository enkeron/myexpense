/**
 * Created by enkeron on 23.12.14.
 */

test = function (success, error) {
    console.log('test function');
    ajaxCall('GET', 'rest/test/simple', null, success, error);
};

getAllExpense = function (success, error) {
    ajaxCall('GET', 'rest/expense/list', null, success, error);
};

getFridgeProducts = function (success, error) {

};

ajaxCall = function (type, url, data, success, error) {
    $.ajax({
        type: type,
        url: url,
        data: data,
        contentType: 'application/json',
        success: function (jsonData) {
            //console.log(jsonData);
            success(jsonData);
        },
        error: function (request, textStatus, errorThrown) {
            console.log(request.responseText);
            console.log(textStatus);
            console.log(errorThrown);
            error(errorThrown);
        }
    });
};
