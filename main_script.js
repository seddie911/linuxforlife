$(document).ready(function() {
    $.glue({
        layer: '#beforeyougo',
    });

    var recentPur = [
        ['George - New York City', '5', '5 minutes ago'],
        ['Steve - Dallas', '7', '15 minutes ago'],
        ['Laura - Los Angeles', '3', '22 minutes ago'],
        ['Phil - Dallas', '7', '23 minutes ago'],
        ['Juan - New York City', '5', '24 minutes ago'],
        ['Smith - Dallas', '7', '27 minutes ago'],
        ['Harris - Dallas', '7', '30 minutes ago'],
        ['Wilson - San Diego', '7', '31 minutes ago'],
        ['Garcia - Los Angeles', '7', '33 minutes ago'],
        ['Elliott - San Diego', '7', '36 minutes ago'],
        ['Tessa - San Diego', '7', '45 minutes ago'],
        ['Ashleigh -    Philadelphia', '7', '1 hour ago'],
        ['Devin -   Philadelphia', '7', '1 hour ago'],
        ['Ariana - San Antonio', '7', '1 hour ago'],
        ['Elin -    Philadelphia', '7', '1 hour ago'],
        ['Aleksandra -  Philadelphia', '7', '1 hour ago'],
        ['Peyton -  Philadelphia', '7', '1 hour ago'],
        ['Lucille - San Antonio', '3', '1 hour ago'],
        ['Gina - Phoenix', '5', '1 hour ago'],
        ['Katharine - Phoenix', '5', '1 hour ago'],
        ['Sumaya - Phoenix', '7', '1 hour ago'],
        ['Leanne - San Antonio', '5', '1 hour ago'],
        ['Nettie - Chicago', '7', '1 hour ago'],
        ['Jeanne - Chicago', '5', '1 hour ago'],
        ['Diane - Chicago', '7', '1 hour ago']
    ];
    var randPur = Math.floor(Math.random() * recentPur.length);
    var timeRand = Math.round(Math.random() * 29) + 1;
    $('#notify-1').html(recentPur[randPur][0]);
    $('#notify-2').html(recentPur[randPur][1]);
    $('#notify-3').html(timeRand + " seconds ago");

    setInterval(function() {
        $(".custom-social-proof").stop().slideToggle('slow', function() {
            if ($('.custom-social-proof').css('display') == 'none') {
                var randPur = Math.floor(Math.random() * recentPur.length);
                $('#notify-1').html(recentPur[randPur][0]);
                $('#notify-2').html(recentPur[randPur][1]);
                $('#notify-3').html(timeRand + " seconds ago");
            }
        });
    }, 8000);
    $(".custom-close").click(function() {
        $(".custom-social-proof").stop().slideToggle('slow');
    });
    setTimeout(function() {
        window.addEventListener("popstate", function(event) {
            if (event.state && event.state.wisepops === "exit-intent") {
                showCliamLayer();
            }
        });
    }, 100);
    if (!window.history.state || window.history.state.wisepops !== "normal-intent") {
        window.history.replaceState({
            wisepops: "exit-intent"
        }, "");
        window.history.pushState({
            wisepops: "normal-intent"
        }, "");
    }
});


$(document).bind("click", function(e) {
    if ($(e.target).closest("#beforeyougo").length == 0) {
        $.glue_close();
        hideCliamLayer();
    }
})

function showCliamLayer() {
    $("#beforeyougo").show();
}

function hideCliamLayer() {
    $("#beforeyougo").hide();
}

function hideFooter() {
    $(".wisepops-root").hide();
}