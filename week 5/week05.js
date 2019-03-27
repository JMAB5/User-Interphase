$("#getToDos").click(function () {
    $("#myTable").html("");

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        success: function (result) {

            $("#myTable").append("<thead><tr><th>ID</th><th>Completed</th><th>Title</th><th>User Id</th></tr></thead>");

            for(i = 0; i < result.length; i++)
            {
                let html = "<tr>";
                html += "<td>" + result[i].id + "</td>";
                html += "<td>" + result[i].completed + "</td>";
                html += "<td>" + result[i].title + "</td>";
                html += "<td>" + result[i].userId + "</td>";
                html += "</tr>";

                $("#myTable").append(html);
            }
        }
    })
});

$("#myTable").on("click", ".showUserTodo", function(){
    let id = $(this).data('userid');
    console.log(id);
    $("#myTable").html("");

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        success: function (result) {

            $("#myTable").append("<thead><tr><th>ID</th><th>Completed</th><th>Title</th><th>User Id</th></tr></thead>");

            for(i = 0; i < result.length; i++)
            {
                if ( result[i].userId === id ){ //IF OUR USER ID MATCHES THE ID CLICKED ON
                    let html = "<tr>";
                    html += "<td>" + result[i].id + "</td>";
                    html += "<td>" + result[i].completed + "</td>";
                    html += "<td>" + result[i].title + "</td>";
                    html += "<td>" + result[i].userId + "</td>";
                    html += "</tr>";

                    $("#myTable").append(html);
                }
            }
        }
    })
});

$("#getUsers").click(function () {
    $("#myTable").html("");

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (result) {

            let header = "";
            for(i = 0; i < result.length; i++)
            {
                let html = "<tr>";
                html += "<td>";
                html += "<button type='button' class='showUserTodo' data-userid='" + result[i].id + "'> ToDos </button>";
                html += "</td>";

                for (var key in result[i]) {
                    if (result[i].hasOwnProperty(key)) {

                        if (i === 0){
                            header += "<th>";
                            header += key;
                            header += "</th>";
                        }

                        if (key === "address"){
                            html += "<td>";
                            html += result[i][key].street;
                            html += "</td>";
                        } else if (key === "company"){
                            html += "<td>";
                            html += result[i][key]['name'];
                            html += "</td>";
                        } else {
                            html += "<td>";
                            html += result[i][key];
                            html += "</td>";
                        }
                    }
                }
                html += "</tr>";
                $("#myTable").append(html);
            }
            $("#myTable").prepend("<thead><tr><th></th>" + header + "</tr></thead>");
        }
    })
});
