$(document).ready(function () {
    prepareHeader();

    changeSite('leftMenuFridge.html', 'leftMenuFridge');

    $('#leftMenuFridge').click(function () {
        changeSite('leftMenuFridge.html', 'leftMenuFridge');
    });
    $('#leftMenuCalories').click(function () {
        changeSite('leftMenuCalories.html', 'leftMenuCalories');
    });
    $('#leftMenuNourishment').click(function () {
        changeSite('leftMenuNourishment.html', 'leftMenuNourishment');
    });
    $('#leftMenuTrip').click(function () {
        changeSite('leftMenuTrip.html', 'leftMenuTrip');
    });
    $('#leftMenuSocial').click(function () {
        changeSite('leftMenuSocial.html', 'leftMenuSocial');
    });
    $('#leftMenuAdmin').click(function () {
        changeSite('leftMenuAdmin.html', 'leftMenuAdmin');
    });
    $('#leftMenuReports').click(function () {
        changeSite('', 'leftMenuReports');
    });
    $('#leftMenuReportsRep1').click(function () {
       changeSite('leftMenuReports/report1.html', 'leftMenuReportsRep1')
	   return false;
    });
    $('#leftMenuReportsRep2').click(function () {
        changeSite('leftMenuReports/report2.html', 'leftMenuReportsRep2')
		return false;
    });
    $('#leftMenuCalendar').click(function () {
        changeSite('leftMenuCalendar.html', 'leftMenuCalendar')
    });
    $('#leftMenuRecipes').click(function () {
        changeSite('leftMenuRecipes.html', 'leftMenuRecipes')
    });
});

function prepareHeader() {
    var imlocation = 'http://www.obrus-w-kratke.pl/hp/';
    var images = ['pap1.png', 'egg.png', 'pap2.png', 'bakla.png', 'hpman.png'];
    var alttext = ['Ognia, więcej ognia...', 'A co to? Jajco!', 'Pikatnie programujesz... Cmok!', 'Oberżyny nigdy za mało!', 'HP for the win!!'];

    var jajonumer1 = Math.floor(Math.random() * 5);

    var image = createImageHTML(imlocation + images[jajonumer1], alttext[jajonumer1], 'position: absolute; top: 10px; right: 10px;');
    var html = image;

    if (jajonumer1 != 4) {
        var jajonumer2 = Math.floor(Math.random() * 4);
        image += createImageHTML(imlocation + images[jajonumer2], alttext[jajonumer2], 'position: absolute; top: 10px; right: 110px;');

        var jajonumer3 = Math.floor(Math.random() * 4);
        image += createImageHTML(imlocation + images[jajonumer3], alttext[jajonumer3], 'position: absolute; top: 10px; right: 200px;');
    }
    $('#images').html(image);
}

function createImageHTML(image, alttext, style) {
    return "<img style='" + style + "' src='" + image + "' alt='" + alttext + "' title='" + alttext + "' />";
}

function changeSite(subMenuPageName, leftMenuName) {
    if (subMenuPageName) {
        $('#content').load('subpages/' + subMenuPageName);
    }
    if (leftMenuName) {
        if (!$('#' + leftMenuName).parent().hasClass('in')) {
            $('#leftMenu').children().children().removeClass('in');
        }
        $('li').removeClass('active');
        $('#' + leftMenuName).addClass('active');
    }
}
