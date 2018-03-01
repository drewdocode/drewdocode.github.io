define(['jquery', 'moment', 'noget'], function ($, moment, noget) {

    $('#date').text(moment().format('M.D.YYYY'));
    $('#time').text(moment().format('H:mm:ss,SSS'));

    $('#todaysmath').hide().fadeIn(300);
    $('#hour').hide().fadeIn(1000);
    $('#minute').hide().fadeIn(2000);
    $('#second').hide().fadeIn(3000);

    var clock = function () {

        $('#date').text(moment().format('M.D.YYYY'));
        $('#time').text(moment().format('H:mm:ss,SSS'));
        var time = moment($('#time').text(), "H:mm:ss,SSS");
        var unit = 0;

        unit = moment().format('D')
        $('#todaysmath').html(noget.translate(unit)).attr('title', unit);

        unit = time.format("H");
        $('#hour').html(noget.translate(unit)).attr('title', unit);

        unit = time.format("m");
        $('#minute').html(noget.translate(unit)).attr('title', unit);

        unit = time.format("s");
        $('#second').html(noget.translate(unit)).attr('title', unit);

    }

    clock();
    
//    setInterval(clock, 1000);
    setInterval(clock, 1);
    
});

