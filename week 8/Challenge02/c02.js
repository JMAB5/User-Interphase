// save new player
$("#localSave").click(function() {

  let randID = Math.floor((Math.random() * 10000) + 1);
  let userName = $("#playerName").val();
  let nukes = 3;
  let playerIcon = $("#playerIcon").val();
  let playerColor = $("#playerColor").val();

  console.log(randID);
  console.log(userName);
  console.log(nukes);
  console.log(playerIcon);
  console.log(playerColor);

  let createPlayer = $("#createPlayer").serialize();
  console.log(createPlayer);

  $.ajax({
    url: "http://localhost:3000/players",
    data: {
      id: randID,
      name: userName,
      nukes: nukes,
      icon: playerIcon,
      color: playerColor
    },
    method: 'POST',
    success: function(result) {
      console.log(result);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
      console.log(errorthrown);
    }
  });
});

//get players

function playerSelect() {
  $.ajax({
    url: "http://localhost:3000/players",

    success: function(result) {
      let html = "<select id = 'userSelect'><option value='-1'>Select Player</option>";
      for (i = 0; i < result.length; i++) {
        html += "<option value=" + result[i].id + "> " + result[i].name + "</option>";
      }
      html += "</select><br><input type='button' value='Save' onclick='getPlayerInfo()' >"
      $("#playerList").html(html);
    }
  });
}
//If no player has been selected, the turn will not start.
playerTrue = 0;
var playerTurn = false;

function getPlayerInfo() {

  playerOne = $('#userSelect').val();
  $.ajax({
    url: "http://localhost:3000/players/" + playerOne,
    success: function(result) {
      pName = result.name;
      pIcon = result.icon;
      pColor = result.color;
      playerTrue = 1;
      console.log(pName + pIcon + pColor)
      // display players details on screen
      let html = "<div id='playerOneName'> Player: " + pName + "<br> Icon: " + pIcon + "<br> Colour: " + pColor + "</div>"

      $("#playerInfo").html(html);
    }
  })
}

function generateGameBoard(x, y) {
 //A Player must be selected to begin
  if (playerTrue === 0) {
    alert("Player must be selected")
  } else {
    console.log("build a board " + x + " by " + y);
    $("#gameBoard").html("");

    let html = "";
    let blank = "fa fa-circle"
    //THe GameBoard is built at the stage
    for (i = 0; i < y; i++) {
      html += "<tr>";
      for (z = 0; z < x; z++) {
        //console.log(i + " " + z);
        html += "<td>";
        html += "<i class='" + blank + "' id='" + i + "-" + z + "' data-player='-1'></i>"
        html += "</td>";
      }
      html += "</tr>";
    }

    $("#gameBoard").html(html);

    function updateBoard() {
      playerTurn = true;
      $.ajax({
        url: "http://localhost:3000/tiles",
        success: function(result) {
          let tCoord = "";
          let selectedIcon = "";
          let selectedColor = "";
          for (i = 0; i < result.length; i++) {
            tCoord = result[i].X + "-" + result[i].Y;
            console.log(tCoord + " - is owned by - " + result[i].player)
            $.ajax({
              ntCoord: tCoord,
              url: "http://localhost:3000/players/" + result[i].player,
              success: function(resultPlayers) {
                let ntCoord = this.ntCoord;
                selectedIcon = resultPlayers.icon;
                selectedColor = resultPlayers.color;
                $("#" + ntCoord).removeClass();
                $("#" + ntCoord).addClass("fa " + selectedIcon);
                $("#" + ntCoord).css({
                  color: selectedColor
                })
              }
            })
          }
        }
      });
    }
    // Running updateBoard every 2 seconds
    setInterval(updateBoard, 2000);

    //Clicking on game board, reaction
    $("#gameBoard").on("click", ".fa", function(event) {
      console.log($(event.target))
      if (playerTurn === true) {

        //Replace empty space
        if ($(event.target).hasClass("fa fa-circle")) {
          let x = $(event.target).attr("id").split("-")[0];
          let y = $(event.target).attr("id").split("-")[1];
          let tilePlayer = playerOne;
          let tileId = y.toString() + x.toString();
          console.log(tileId)

          let tile = {
            id: tileId,
            X: x,
            Y: y,
            player: tilePlayer
          }
          $.ajax({
            url: "http://localhost:3000/tiles",
            data: tile,
            method: "POST",
            success: function(result) {
              console.log(result)
            }
          })
        } else {
          // if already an enemy tile
          rand = Math.floor((Math.random() * 10) + 1);
          console.log(rand)
          if (rand < 5) {
            let x = $(event.target).attr("id").split("-")[0];
            let y = $(event.target).attr("id").split("-")[1];
            let tilePlayer = playerOne;
            let tileId = y.toString() + x.toString();

            let tile = {
              id: tileId,
              X: x,
              Y: y,
              player: tilePlayer
            }

            console.log(tile)

            $.ajax({
              url: "http://localhost:3000/tiles/" + tileId,
              data: tile,
              method: "PATCH",
              success: function(result) {
                console.log(result)
              }
            })
          }
        }
        playerTurn = false;
      }
    });
  }
}
