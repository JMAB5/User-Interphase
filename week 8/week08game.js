//only for server
//var host = 'http://149.28.182.129:3000';

$(document).ready(function () {
    console.log("ready!");

    $.ajax({
        url:"http://localhost:3000/users",
        //only for server
        //url: host + "/users/",
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                console.log(result[i]);
                let html = "<option value=" + result[i].id + ">" + result[i].id + ":" + result[i].name + "</option>";
                $("#user-select").append(html);
            }
        }
    })
    let icons = [
        'fa fa-snowflake-o',
        'fa fa-superpowers',
        'fa fa-binoculars',
        'fa fa-diamond',
        'fa fa-hourglass',
        'fa fa-globe',
        'fa fa-rocket',
        'fa fa-android',
        'fa fa-slack',
        'fa fa-btc',
    ]

    for (i = 0; i < icons.length; i++) {
        let html = "";
        html += "<div class= 'icon-box'>";
        html += "<i class='" + icons[i] + "'>";
        html += "</div>";
        "<i class'" + icons[i] + "'>";
        $("#icons").append(html);
    }
})
//A function to:
// loop through all the users
// color the icons according to the user (bonus: add missing icons)
// add the userid as a data attribute

var timeschecked = 0;

function checkusers() {
    console.log("checked for users: " + timeschecked);
    $.ajax({
        //only for server
        //url: host + "/users/",
        url:"http://localhost:3000/users",
        success: function (result) {
            for (i = 0; i < result.length; i++) {
                console.log(result[i].class);
                if (typeof result[i].class != 'undefined') {


                    let userclasses = "." + result[i].class.split("")[1];
                    $(userclasses).css("color", result[i].color);
                    $(userclasses).data("userid", result[i].id);
                }

            }
        }
    })
    setTimeout(function () {
        checkusers();
    }, 2000);
}
checkusers();









//a check on icon click, to make sure it isn't already owned
var selectedicon;
$("#icons").on("click", "i", function () {
    console.log(this);
    selectedicon = this;
    console.log($("#user-select").val());
    let id = $("#user-select").val();


    if (id > 0) {
        //getting and showing the colour on our icon
        $.ajax({
            url: host + "/users/" + id,
            success: function (result) {
                console.log(result.color);
                $(selectedicon).css("color", result.color);
                $(selectedicon).data("userid", result.color);
            }
        });

        // update our user with the icon class
        let iconclass = $(this).attr('class');
        let user = {
            class: iconclass,
            id: id,
        }
        console.log(user);
        $.ajax({
            url: host + "/users/" + id,
            data: user,
            method: "PATCH",
            success: function (result) {
                console.log("SUCCESS");
                console.log(result);
            }


        })
    }

});