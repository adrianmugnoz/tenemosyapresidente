// record start time
var startTime;
var seconds;
var minutes;
var hours;
var days;
var texto;

function display() {
    // later record end time
    var endTime = new Date();

    // time difference in ms
    var timeDiff = endTime - startTime;

    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    days = timeDiff;

    $(".time").text(days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos");
    setTimeout(display, 1000);
}

function share_fb() {
    texto = "Ya llevamos "+days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos #SinPresidente";
    window.open(
        'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent("http://tenemosyapresidente.com"),
        'facebook-share-dialog',
        'width=626,height=436');
    return false;
}

function share_tw() {
    texto = "Ya llevamos "+days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos #SinPresidente";
    window.open(
        'https://twitter.com/intent/tweet?url='+encodeURIComponent("http://tenemosyapresidente.com")+'&text='+encodeURIComponent(texto),
        'twitter-share-dialog',
        'width=550,height=420');
    return false;
}

$('document').ready(function(){
    startTime = new Date(1450655940000);
    setTimeout(display, 1000);
});