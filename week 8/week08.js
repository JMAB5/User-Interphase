// Host Server
//var host = 'http://149.28.182.129:3000';
var col = null;
var row = null;
var playerscore= 0;
var AIScore = 0;
var playername = "";

$("#user-save").click(function () {
    console.log("user save clicked");
    let id = $("#user-id").val();
    console.log("user id: " + id);
    let name = $("#user-name").val();
    console.log("user name: " + name);
    let Nukes = $("#user-Nukes").val();
    console.log("user Nukes: " + Nukes);
    let  icon  = $("#user-icon").val();
    console.log("user  icon: " +  icon);
    let color =$("#user-color").val();
    console.log("user color: " + color);

    let user = {
        id: id,
        name: name,
        Nukes: Nukes,
        icon: icon,
        color: color,
    }
    console.log(user);

    $.ajax({
        //Used for server
        //url: host + "/users/",
        url: "http://localhost:3000/users",
        data: user,
        method: "POST",
        success: function (result) {
            console.log("SUCCESS");
            console.log(result);
        }
    });
});

$('#build10x10Board').click(function () {
    generateGameBoard(10, 10);
    
});

function generateGameBoard(cells, rows) {
    playername = $("#user-name").val();
    let html = "";
    for (y = 0; y < rows; y++) //this loop creates a new number each row
    {
        html += "<tr>";
        for (x = 0; x < cells; x++) //this loop creates a new number each cell
        {
            html += "<td>";
            html += "<i class='fa fa-square' id='" + y + "-" + x + "' data-player='-1'></i>"
            html += "</td>";
        }
        html += "</tr>";
    }
    $("#myBoard").html(html);

}

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
})
    
$("#myBoard").on("click", ".fa", function () {
    //$('.fa').click( function() {
    if ($(this).hasClass( 'fa-square')) {
        
        $(this).removeClass('fa-square').addClass('fa-fighter-jet');

            $(this).css('color', '#e89e3e');
        
    }
});
//var randomID = null;
//var randomId = "x" + randString(8);
//document.write('<div id="' + randomId + '">This text will be replaced</div>');

/*$("#user-delete").click(function () {
    console.log("user update clicked");
    let id = $("#user   -id").val();
    console.log("user id: " + id);
    let name = $("#user-name").val();
    console.log("user name: " + name);
    let email = $("#user-email").val();
    console.log("user email: " + email);
    let phone = $("#user-phone").val();
    console.log("user phone: " + phone);
    

    let user = {
        id: id,
        name: name,
        email: email,
        phone: phone
    }
    console.log(user);

    $.ajax({
        //used for host server
        //url: host + "/users/",
        url: "http://localhost:3000/users/5",
        data: user,
        method: "DELETE",
        success: function (result) {
            console.log("SUCCESS");
            console.log(result);
        }

    });

});
$("#myTable").on("click", ".showUserDetails", function () {
    let id = $(this).data('userid');
    console.log(id);
    $.ajax({
        //used for host server
        //url: host + "/users/" + id,
        url: "http://localhost:3000/users/" + id,
        success: function (result) {
            console.log(result);
            $("#user-id").val(result.id);
            $("#user-name").val(result.name);
            $("#user-email").val(result.email);
            $("#user-phone").val(result.phone);
            $("#user-color").val(result.color);
        }
    });
});*/



/*$("#getUsers").click(function () {
    $("#myTable").html("");

    $.ajax({
        //used for host server
        //url: host + "/users/",
        url: "http://localhost:3000/users",
        success: function (result) {

            let header = "";
            for (i = 0; i < result.length; i++) {
                let html = "<tr>";
                html += "<td>";
                html += "<button type='button' class='showUserDetails' data-userid='" + result[i].id + "'> Show Details </button>";
                html += "</td>";

                for (var key in result[i]) {
                    if (result[i].hasOwnProperty(key)) {

                        if (i === 0) {
                            header += "<th>";
                            header += key;
                            header += "</th>";
                        }

                        html += "<td>";
                        html += result[i][key];
                        html += "</td>";

                    }
                }
                html += "</tr>";
                $("#myTable").append(html);
            }
            $("#myTable").prepend("<thead><tr><th></th>" + header + "</tr></thead>");
        }
    })
});

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
checkusers();/*






//a check on icon click, to make sure it isn't already owned
/*var selectedicon;
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

});*/