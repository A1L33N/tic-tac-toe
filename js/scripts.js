function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {

  var playerType = "";
  var square = $('.square');
  var player = 'O';
  var currentPlayer = $('#player');
  var val = square.attr('val');
  var win = 0;
  var turns = 0;
  currentPlayer.html(player);

  $("form#opponent-form").submit(function(){
    playerType = $('select').val();
    $('.play-game').show();
    $('.reset').show();
    $('.new-opponent').show();
    $('.select-opponent').hide();
    if (playerType == "Human") {

      square.click(function() {

        if($(this).html() === '' && win != 'O' && win != 'X'){
          $(this).html(player);

          if (player === 'O') {
            player = 'X';
            currentPlayer.html(player);
          } else {
            player = 'O';
            currentPlayer.html(player);
          }
        } $('#now').text(player);
      });

    } else {
      square.click(function(){
        turns++;
        if($(this).html() === '' && win != 'O' && win != 'X'){
          $(this).html(player);
          var computerMove = "";
          var move = " ";

          while ((move !== "") && (turns < 8)) {
            computerMove = getRandomIntInclusive(0,8);
            computerMove = computerMove.toString();
            console.log(computerMove);
            move = document.getElementById(computerMove).innerHTML;

            if (move === "") {
              $('#' + computerMove).text("X");
              turns++;

            }
          }
        }
      })
    };

    event.preventDefault();
  });

  $('#now').text(player);


  setInterval(function(){
    if(win === 0){
      var value0 = $('#0').html();
      var value1 = $('#1').html();
      var value2 = $('#2').html();
      var value3 = $('#3').html();
      var value4 = $('#4').html();
      var value5 = $('#5').html();
      var value6 = $('#6').html();
      var value7 = $('#7').html();
      var value8 = $('#8').html();

      if(value0 === 'O' && value1 ==='O' && value2 ==='O' || value0 === 'X' && value1 ==='X' && value2 ==='X'){
        win = value0;
      } else if(value3 === 'O' && value4 === 'O' && value5 === 'O' || value3 === 'X' && value4 === 'X' && value5 === 'X' ){
        win = value3;
      } else if(value6 === 'O' && value7 === 'O' && value8 === 'O' || value6 === 'X' && value7 === 'X' && value8 === 'X' ){
        win = value6;
      } else if(value0 === 'O' && value4 === 'O' && value8 === 'O' || value0 === 'X' && value4 === 'X' && value8 === 'X'){
        win = value0;
      } else if(value2 === 'O' && value4 === 'O' && value6 === 'O' || value2 === 'X' && value4 === 'X' && value6 === 'X' ){
        win = value2;
      } else if(value2 === 'O' && value5 === 'O' && value8 === 'O' || value2 === 'X' && value5 === 'X' && value8 === 'X' ){
        win = value2;
      } else if(value0 === 'O' && value3 === 'O' && value6 === 'O' || value0 === 'X' && value3 === 'X' && value6 === 'X' ){
        win = value0;
      } else if(value1 === 'O' && value4 === 'O' && value7 === 'O' || value1 === 'X' && value4 === 'X' && value7 === 'X' ){
        win = value1;
      } else if( value1 != '' && value2 != '' && value3 != '' && value4 != '' && value5 != '' && value6 != '' && value7 != '' && value8 != ''){
        win = 'nothing';
      }

    } else {
      if(win != 'nothing'){
        $('#hd').html('Congratulations to player: <b class="win">'+win+ '<b/>');
      } else {
        $('#hd').html('<b class="win">Neither player won the game.<b/>');
      }
    }
  },100);

  $(".reset").click(function(){
    $('.square').text("");
    $('#hd').html('')
    turns = 0;
    win = 0;
    // playerType = "";
    // $('.select-opponent').show();
    // $('.play-game').hide();

  });

  $('.new-opponent').click(function() {
    location.reload();
  });
});






















//
//
//
// var Game = (function() {
//
//   var togglePlayer = function(message){
//     $('.message').html(message);
//   };
// })
//
//
//
// var gameOver = function() {
//   var winCases =  [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]];
//   tableIndex = -1;
//
//   $.each(winCases, function(index, winCases) {
//     if (allEqual(winCase)) {
//      tableIndex = index;
//      return false;
//     }
//   });
//   if (tableIndex !== -1) {
//     return winCases[ tableIndex];
//   }else if (moves === 9) {
//     return true;
//   }
//     else {
//     return false;
//   }
// };
//
//
//
// $(document).ready(function() {
//
//   $("#1").click(function() {
//     $("#1").append('<img src="img/playerX.jpg">');
//   });

// });
// var array1= [19, 18, 11];
// undefined
// var array2= [19, 11, 18];
// undefined
// if(array1.sort().join(',')=== array2.sort().join(',')){
//     alert('same members');
// }
// else alert('not a match');
// var player1="" , player2="", turn = "";
// var grid =  [[0,0,0],[0,0,0],[0,0,0]];
// var hasWinner = 0, moveCount=0;

// function boardMsg(x){
//   return $("#board").text(x);
// }

// function init(){
//   turn = "";
//   grid =  [[0,0,0],[0,0,0],[0,0,0]];
//   boardMsg("");
//   $(".col").map(function() {
//     $(this).text("");
//   }).get();
//   hasWinner = 0;
//   moveCount=0;
// }
// function setTurn(){
//   var r = Math.floor((Math.random() * 2) + 1);
//   hasWinner=0;
//   if(r==1){
//     turn = player1Name;
//     boardMsg(player1Name+"'s turn now!");
//   }
//   else{
//     turn = player2Name;
//     boardMsg(player2Name+"'s turn now!");
//   }
// }
// $("#playButton").click(function (){

//   if(hasWinner==1){
//     init();
//   }

//   player1Name = $("#player1").val();
//   player2Name = $("#player2").val();

//   if(player1Name=="" || player2Name==""){
//     alert("Please set player all the names.");
//     return;
//   }

//   setTurn();
// });
// $(".col").click(function (){

//   if(player1Name=="" || player2Name==""){
//     alert("Please set player all the names.");
//     return;
//   }

//   var row = $(this).parent().index();
//   var col = $(this).index();

//   if(grid[row][col]!==0){
//     alert("This position is taken. Please try other position.");
//     return;
//   }
//   if(hasWinner==1){
//     alert("Please click play again");
//     return;
//   }

//   if(turn==player1Name){
//     moveCount++;
//     $(this).text("O");
//     grid[row][col] = 1;
//     var ifWon = winnerCheck(1,player1Name);
//     if(!ifWon){
//       if(moveCount>=9){
//         boardMsg("Match Drawn!");
//         moveCount=0;
//         $("#playButton").text("Play again");
//         hasWinner=1;
//         return;
//       }else{
//         turn = player2Name;
//         boardMsg(player2Name+"'s turn now!");
//       }
//       return;
//     }
//     else{
//       return;
//     }
//   }
//   else if(turn==player2Name){
//     moveCount++;
//     $(this).text("X");
//     grid[row][col] = 2;
//     var ifWon = winnerCheck(2,player2Name);
//     if(!ifWon){
//       if(moveCount>=9){
//         boardMsg("Match Drawn!");
//         moveCount=0;
//         $("#playButton").text("Play again");
//         hasWinner=1;
//         return;
//       }else{
//         turn = player1Name;
//         boardMsg(player1Name+"'s turn now!");
//       }
//       return;
//     }
//     else{
//       return;
//     }
//   }
// });



//
//
