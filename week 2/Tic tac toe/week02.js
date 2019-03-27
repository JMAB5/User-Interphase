// JavaScript source code
var player = 1;

$('.fa').click(function () {
    console.log('you clicked me!');
    console.log(this);
    //$(this).hide('slow').delay(600).show('fast');
    if ($(this).hasClass('fa-square')) {
        if (player === 1) {
            $(this).removeClass('fa-square').addClass('fa-times');
            $(this).css('color', '#e89e3e');
            player = 2;
            $("#message").html('Turn: Player Two');
            $(this).data('player', 1);
        } else if (player === 2) {
            $(this).removeClass('fa-square').addClass('fa-circle-o');
            $(this).css('color', '#d11dc8');
            player = 1;
            $("#message").html('Turn: Player One');
            $(this).data('player', 2);
        }
    }
    checkWinners();
});

function checkWinners() {
    if ($('#1-1').data('player') === 1 &&
        $('#1-2').data('player') === 1 &&
        $('#1-3').data('player') === 1) {

        $("#message").html('Player One, Won!');

    }
}