
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

          
           

            
           // player = 2;
           // $("#message").html('Turn: Player Two');

        //} else if (player === 2) {
         //   $(this).removeClass('fa-bullseye').addClass('fa-fighter-jet');
          //  $(this).css('color', '#d11dc8');

           // $(this).data('player', 2);
           // newCheckWinners(this);

           // player = 1;
           // $("#message").html('Turn: Player One');

        
    }
});


/*function newCheckWinners(tile) {
    let id = $(tile).attr("id");
    let loc = id.split("-");
    let y = parseInt(loc[0]);
    let x = parseInt(loc[1]);
    //count left to right
    let inarow = 1;
    inarow += countInARow(1, 0, x, y);
    inarow += countInARow(-1, 0, x, y);
    if (inarow > 2) {
        console.log("you won horizontal!");
    }
    //count top to bot
    inarow = 1;
    inarow += countInARow(0, 1, x, y);
    inarow += countInARow(0, -1, x, y);
    if (inarow > 2) {
        console.log("you won vertical!");
    }
    //count diagonal top left to bottom right (and reverse)
    inarow = 1;
    inarow += countInARow(1, 1, x, y);
    inarow += countInARow(-1, -1, x, y);
    if (inarow > 2) {
        console.log("you won diag!");
    }
    //count diagonal top right to bottom left (and reverse)
    inarow = 1;
    inarow += countInARow(1, -1, x, y);
    inarow += countInARow(-1, 1, x, y);
    if (inarow > 2) {
        console.log("you won diag (the other one)!");
    }
}

function countInARow(xstep, ystep, x, y) {
    let inarow = 0;
    let startingX = xstep;
    let startingY = ystep;
    let next = "#" + (y + ystep) + "-" + (x + xstep);
    let id = "#" + y + "-" + x;
    while ($(id).data("player") === $(next).data("player")) {
        xstep += startingX;
        ystep += startingY;
        inarow++;
        next = "#" + (y + ystep) + "-" + (x + xstep);
    }
    return inarow;
}*/


