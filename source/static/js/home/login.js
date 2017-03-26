'use strict';

$(document).on('submit', '#login-form', function(event) {
    event.preventDefault(); // dont reload the page
    let creds = JSON.stringify({
        uname: $("input[name=uname]").val(),
        psswd: $("input[name=psswd]").val()
        // csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
    });
    $.ajax({
        type: 'POST',
        url: '/home/login/',
        contentType: 'application/json',
        data: creds,
        success: function() {
            window.location.href = "/home/";
        },
        error: function() {
            $('#login-failed-modal').css('display', 'block');
        }
    });
});

