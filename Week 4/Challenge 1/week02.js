
var col = null;
var row = null;
var playerscore= 0;
var AIScore = 0;
var playername = "";

$('#build10x10Board').click(function () {
    generateGameBoard(10, 10);
    
});

function generateGameBoard(cells, rows) {
    playername = $("#playername").val();
    let html = "";
    for (y = 0; y < rows; y++) //this loop creates a new number each row
    {
        html += "<tr>";
        for (x = 0; x < cells; x++) //this loop creates a new number each cell
        {
            html += "<td>";
            html += "<i class='fa fa-bullseye board' id='" + y + "-" + x + "' data-player='-1'></i>"
            html += "</td>";
        }
        html += "</tr>";
    }
    $("#myBoard").html(html);
}

function randomNumber() {
    var col = Math.floor((Math.random() * 10) + 1);
    var row = Math.floor((Math.random() * 10) + 1);

    console.log(col + "-" + row);
    
    if($("#" + row + "-" + col).hasClass('fa-fighter-jet'))
        {
        $("#" + row + "-" + col).removeClass('fa-fighter-jet').addClass('fa-times');
        AIScore += 10;
        console.log(AIScore)
        $("#AIScore").html("AIScore:"+ AIScore)
        }
    else
    {
        playerscore += 1;
        console.log(playerscore)
        $("#PlayerScore").html(playername + " Score:" + playerscore)
    }
    

    
}





$("#myBoard").on("click", ".fa", function () {
    //$('.fa').click( function() {
    if ($(this).hasClass('fa-bullseye')) {
        
        $(this).removeClass('fa-bullseye').addClass('fa-fighter-jet');

            $(this).css('color', '#e89e3e');

          
           

         

        
    }
});


